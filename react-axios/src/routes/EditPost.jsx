import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [title, setTitle] = useState();
	const [body, setBody] = useState();

	return (
		<div className="new-post">
			<h2>Editando: {title}</h2>
			<form onSubmit={(e) => editPost(e)}>
				<div className="form-control">
					<label htmlFor="title">Título:</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Digite o título"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="body">Conteúdo:</label>
					<textarea
						name="body"
						id="body"
						placeholder="Digite o conteúdo"
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>
				<input type="submit" value="Editar Post" className="btn" />
			</form>
		</div>
	);
};

export default EditPost;
