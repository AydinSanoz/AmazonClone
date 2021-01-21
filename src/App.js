import './App.css';
import 'dotenv'
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebaseUtils/firebase';
import { useStateValue } from './context/StateProvider';


function App() {
	const [{user, basket},dispatch] = useStateValue()
	useEffect(() => {
		// will only run once when the app component loads...
	
		auth.onAuthStateChanged((authUser) => {
		  console.log("THE USER IS >>> ", authUser);
	
		  if (authUser) {
			// the user just logged in / the user was logged in
	
			dispatch({
			  type: "SET_USER",
			  user: authUser,
			});
		  } else {
			// the user is logged out
			dispatch({
			  type: "SET_USER",
			  user: null,
			});
		  }
		});
	  }, []);

	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/about" component={About} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
