import React from "react";
import {connect} from "react-redux";
import * as actions from "./action.js";
import {bindActionCreators} from "redux";

class App extends React.Component{
	plusnumber(){
		var number = Number(this.refs.numberTxt.value);
		this.props.actions.plusnumber(number);

	}

	render(){
		return(
			<div>
				<h1>{this.props.v}</h1>
				<button onClick={this.props.actions.plus}>+</button>
				&nbsp;
				<button onClick={this.props.actions.minus}>-</button>
			
			<p>
				<input type="text" ref="numberTxt"/>

				<input type="button" value="press me" onClick={(this.plusnumber).bind(this)}/>

			</p>



			</div>		
			);
	}

}

export default connect(
	(state)=>{
		return{
			v: state.v
		}
	},
	(dispatch)=>{
		return{
			actions : bindActionCreators(actions, dispatch)
		}

	}

)(App);