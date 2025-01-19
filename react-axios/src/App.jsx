import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="App">
				<div className="container">
					<Outlet />
					<h1>React Axios</h1>
				</div>
			</div>
		</>
	);
}

export default App;
