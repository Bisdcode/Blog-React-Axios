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

			console.log(data);
			// console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	// executando
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getPosts();
	}, []);

	return <div>Home</div>;
};

export default Home;
