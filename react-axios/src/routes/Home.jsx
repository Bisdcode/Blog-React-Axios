import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import "./Home.css";

const Home = () => {
	const [posts, setPosts] = useState([]);

	// resgate dos dados da api
	const getPosts = async () => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/posts",
			);

			const data = response.data;

			// console.log(data);
			// console.log(response);
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	// executando
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="home">
			<h1>Últimos posts</h1>
			{posts.length === 0 ? (
				<p>Careegando...</p>
			) : (
				posts.map((post) => (
					<div className="post" key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
						<Link to={`/posts/${post.id}`} className="btn">
							Ler mais
						</Link>
					</div>
				))
			)}
		</div>
	);
};

export default Home;
