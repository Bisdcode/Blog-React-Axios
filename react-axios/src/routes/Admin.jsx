import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Admin.css";

const Admin = () => {
	const [posts, setPosts] = useState([]);

	// resgate dos dados da api
	const getPosts = async () => {
		try {
			// const response = await axios.get(
			// 	"https://jsonplaceholder.typicode.com/posts",
			// );
			const response = await blogFetch.get("/posts");

			const data = response.data;

			// console.log(data);
			// console.log(response);
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="amdin">
			<h1>Gerenciar Posts</h1>
			{posts.length === 0 ? (
				<p>Carregando...</p>
			) : (
				posts.map((post) => (
					<div className="post" key={post.id}>
						<h2>{post.title}</h2>
						<div className="actions">
							<Link className="btn edit-btn">Editar</Link>
							<button className="btn delete-btn">Excluir</button>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Admin;
