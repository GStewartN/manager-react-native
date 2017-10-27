import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBNXwlWHzsQt71-4-rBO8YDkNvjtRchE1c',
    authDomain: 'manager-react-native-596a6.firebaseapp.com',
    databaseURL: 'https://manager-react-native-596a6.firebaseio.com',
    projectId: 'manager-react-native-596a6',
    storageBucket: 'manager-react-native-596a6.appspot.com',
    messagingSenderId: '190675736495'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
