import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
