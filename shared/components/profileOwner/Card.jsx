import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';


export default class OwnerDetails extends React.Component {
  render() {
  	const loginStyle = {
  		maxWidth: '450px'
  	};
    return (
      <div id="profile-owner-card">
      	<div className="ui center aligned vertical segment">
			<div className="ui text container">
				<h1 className="ui header">
					Imagine-a-Company
				</h1>
				<h2>Do whatever you want when you want to.</h2>
				<div className="ui huge primary button">Get Started 
					<i className="right arrow icon"></i>
				</div>
			</div>
		</div>
		<div className="ui segment vertical stripe">
			<div className="ui middle aligned stackable grid container">
				<div className="row">
					<div className="eight wide column">
						<h1 className="ui header">Testing</h1>
						<p>gfdf ddfdser vxerd vd</p>
					</div>
					<div className="six wide right floated column">
						<img src="sfs" className="image large rounded bordered"/>
					</div>
				</div>
				<div className="row">
			        <div className="center aligned column">
			          <a className="ui huge button">Check Them Out</a>
			        </div>
			    </div>
			</div>
		</div>
		<h4 className="ui horizontal header divider">
        	<a href="#">Case Studies</a>
      </h4>
		<div className="ui middle aligned center aligned grid">
			<div className="column" style={loginStyle}>
				<h2 className="ui teal image header">
					<img src="assets/images/logo.png" className="image"/>
					<div className="content">
						Log-in to your account
					</div>
				</h2>
				<form className="ui large form">
					<div className="ui stacked segment">
					<div className="field">
					  <div className="ui left icon input">
					    <i className="user icon"></i>
					    <input type="text" name="email" placeholder="E-mail address"/>
					  </div>
					</div>
					<div className="field">
					  <div className="ui left icon input">
					    <i className="lock icon"></i>
					    <input type="password" name="password" placeholder="Password"/>
					  </div>
					</div>
					<div className="ui fluid large teal submit button">Login</div>
					</div>

					<div className="ui error message"></div>

				</form>

				<div className="ui message">
					New to us? <a href="#">Sign Up</a>
				</div>
			</div>
		</div>
     </div>
    );
  }
}