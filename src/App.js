import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<div className="flex-fill">
				<BrowserRouter>
					<Routes>
						<Route path="/" exact element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
