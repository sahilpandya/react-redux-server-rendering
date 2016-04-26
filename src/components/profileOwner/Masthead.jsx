import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';


export default class Masthead extends React.Component {
  render() {
  	let mastHeadStyle = {
  		background: `linear-gradient(0deg, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),
			  		url(https://dkzstslcvgwbc.cloudfront.net/sites/default/files/styles/cdin_responsive_cover_image_full__style1024/public/projects/online.jpg)
			  		center center repeat`,
		height: '500px'
  	};
    return (
      <div id="profile-masthead">
		<div className="ui">
			<div className="ui vertical masthead center aligned segment" style={mastHeadStyle}>
			</div>
		</div>
      </div>
    );
  }
}