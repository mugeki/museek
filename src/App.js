import { BrowserRouter, Routes, Route } from "react-router-dom";
import client from "./apollo-client";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import ErrorNotFound from "./components/ErrorNotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="d-flex flex-column min-vh-100">
				<div className="flex-fill">
					<BrowserRouter>
						<Routes>
							<Route path="/" exact element={<Home />} />
							<Route path="/explore" exact element={<Explore />} />
							<Route path="/musician/:id" exact element={<Detail />} />
							<Route path="/profile" exact element={<Profile />} />
							<Route path="*" element={<ErrorNotFound />} />
						</Routes>
					</BrowserRouter>
				</div>
				<Footer />
			</div>
		</ApolloProvider>
	);
}

export default App;
