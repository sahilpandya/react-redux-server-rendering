import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Masthead               from 'components/profileOwner/Masthead';
import OwnerDetails           from 'components/profileOwner/OwnerDetails';
import Navigation             from 'components/profileOwner/Navigation';
import Card             from 'components/profileOwner/Card';


export default class ProfileOwner extends React.Component {
  render() {
    return (
      <div id="profile-owner">
          <Masthead/>
          <OwnerDetails/>
          <Navigation/>
          <Card/>        
      </div>
    );
  }
}