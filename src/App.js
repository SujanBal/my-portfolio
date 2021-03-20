import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Hero />
						<About />
					</Route>
					<Router path="*"></Router>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
