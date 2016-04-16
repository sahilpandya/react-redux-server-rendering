import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';


export default class OwnerDetails extends React.Component {
  render() {
    return (
      <div id="profile-owner-detail" className="ui container grid">
      		<div className="four wide column">
        		<img className="ui small rounded image" src=''/>
        	</div>
        	<div className="ten wide column">
        		<h1>Rod Scheniderlin</h1>
        		<p>
        			<span> Naboo School of design </span>
        		</p>
        	</div>
        	<div className="two wide column">
        		<h1>14.2K</h1>
        		<p>connections</p>
        	</div>
      </div>
    );
  }
}