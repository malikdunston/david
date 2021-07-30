import { Component } from "react";
	// import "./assets/webfonts/webfonts.css";
	import "./assets/css/index.min.css";
	import { Route, Link, withRouter } from "react-router-dom";
	// import Navigation from "./components/Navigation.js";
	// import Footer from "./components/Footer.js";
	import Home from "./pages/Home.js";

class App extends Component {
	render() {return <div className={"App " + (this.props.location.pathname.split("/")[1] || "home")}>
		{/* <Navigation/> */}
		<Route exact path="/"
			render={()=>{
				return <Home/>
			}}/>
		{/* <Route exact path="/projects/:articleId?"
			render={(params)=>{
				return <Article {...params}/>
			}}/> */}
		{/* <Footer/> */}
	</div>};
}; 

export default withRouter(App);