import React from 'react';

const portData = OrigComp => {
	class GetDataHOC extends React.Component {
		async getData(endpoint, params){
			params = params || {};
			params["per_page"] = 100;
			let url = new URL(("http://cms.davidmassimbo.com/wp-json/wp/v2/" + endpoint));
			url.search = new URLSearchParams(params).toString();
			return  await fetch(url).then(resp => resp.json());
		}
		sortProjs(projs){
			let allProjs = projs;
			let arr = [];
			projs.forEach(p=>{
				if(p.parent === 0){
					p.children = allProjs.filter(proj=>proj.parent === p.id);
					arr.push(p);
				}
			})
			return arr;
		}
		render(){
			return <OrigComp {...this.props} getData={this.getData} sortProjs={this.sortProjs}/>
		}
	}
	return GetDataHOC;
};

export default portData;