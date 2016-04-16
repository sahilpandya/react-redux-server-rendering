import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';


export default class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation-menu">
    	<div className="ui large secondary menu pointing">
    		<div className="ui container">
				<a className="toc item">
					<i className="sidebar icon"></i>
				</a>
    			<a className="active item">Home</a>
    			<a className="item">Work</a>
    			<a className="item">Company</a>
    			<a className="item">Career</a>
				<div className="right menu">
					<div className="item">
						<a className="ui button">Log in</a>
					</div>
					<div className="item">
						<a className="ui primary button">Sign Up</a>
					</div>
				</div>
    		</div>
    	</div>
      </div>
    );
  }
}