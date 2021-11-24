import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<div className="flex-fill">
				<BrowserRouter>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/explore" exact element={<Explore />} />
						<Route path="/detail" exact element={<Detail />} />
						<Route path="/profile" exact element={<Profile />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	);
}

export default App;
