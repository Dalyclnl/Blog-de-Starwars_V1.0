import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { Character } from "./views/character";
import { Vehicle } from "./views/vehicles";
import { Starship } from "./views/starship";
import { Planet } from "./views/planet";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/"> <Home /></Route>
						<Route exact path="/character/:index" component={Character}><Character />
						</Route>
						<Route exact path="/planet/:index" component={Planet}><Planet />
						</Route>
						<Route exact path="/vehicle/:index" component={Vehicle}> <Vehicle />
						</Route>
						<Route exact path="/starship/:index" component={Starship}> <Starship />
						</Route>	
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
