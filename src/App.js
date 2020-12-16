import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/Login" component={Login} />
					<Route exact path="/About" component={About} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
