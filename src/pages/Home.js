import React, { Component } from "react";
import { Link } from "react-router-dom";
import portData from "../components/getData";

class Home extends Component { 
constructor(props){
	super(props);
	this.state = {
		projects: [],
	}
}
async componentDidMount(){
	let projects = await this.props.getData("projects");
	projects = this.props.sortProjs(projects);
	this.setState({
		projects: projects
	})
}
render(){ return (
	!this.state.projects ? "" : <div>
		<section id="Hero">
			<h1><span>
				David Massimbo
			</span></h1>
			{/* <video 
				muted = "muted"
				autoplay = "autoplay"
				loop = "loop"
				playsinline = "playsinline"
				webkit-playsinline = "webkit-playsinline">
				<source 
					src={HomeVideo} 
					type="video/mp4"/>
				<source 
					src={HomeVideoWEBM} 
					type="video/webm"/>
			</video> */}
		</section>
		<section id="latest-projects" className="container px-3">
			{!this.state.projects ? "" :  this.state.projects.map(f=>{
				return <Link to={"/projects/"+f.slug} className="card">
				 	{/* <img src={f.image.url} alt={f.altText}/> */}
				 	<div className="card-body">
				 		<h5 className="card-title">{f.title.rendered}</h5>
				 	</div>
				</Link>
			})}
		</section>
		<section id="about" className="container py-4 px-3">
			<div>
				<h1>About Me</h1>
			</div>
			<div>
				<img src="" alt="David Massimbo" />
			</div>
		</section>
	</div>
) }
} export default  portData(Home);