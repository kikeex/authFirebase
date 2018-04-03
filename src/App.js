import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/reusable';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCgfctxsDS-p0J8BgGCLZuj5qWSrvS1ZNI',
    authDomain: 'authreact-2c67c.firebaseapp.com',
    databaseURL: 'https://authreact-2c67c.firebaseio.com',
    projectId: 'authreact-2c67c',
    storageBucket: 'authreact-2c67c.appspot.com',
    messagingSenderId: '394936485864'
  });
  }

  render() {
    return (
      <View>
       <Header HeaderText='Authentication' />
      </View>
    );
  }

}

export default App;
