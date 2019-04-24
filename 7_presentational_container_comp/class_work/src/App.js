import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import ReactDOM from "react-dom";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends Component {


	render() {
		return (
			<div className="App">
      			<FilterableProductTable />
    		</div>
		);
	}
}

export default withRouter(App);

/*function App() {
  return (
    <div className="App">
      <FilterableProductTable />
    </div>
  );
}*/