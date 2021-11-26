import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import client from "./apollo-client";
import { ApolloProvider } from "@apollo/client";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import ErrorNotFound from "./components/ErrorNotFound";
import Footer from "./components/Footer";
import { store, persistor } from "./store/store";
import "./App.css";

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="d-flex flex-column min-vh-100">
				<div className="flex-fill">
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<BrowserRouter>
								<Routes>
									<Route path="/" exact element={<Home />} />
									<Route path="/explore" exact element={<Explore />} />
									<Route path="/musician/:id" exact element={<Detail />} />
									<Route path="/profile/:id" exact element={<Profile />} />
									<Route path="*" element={<ErrorNotFound />} />
								</Routes>
							</BrowserRouter>
						</PersistGate>
					</Provider>
				</div>
				<Footer />
			</div>
		</ApolloProvider>
	);
}

export default App;
