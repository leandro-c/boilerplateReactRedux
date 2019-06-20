import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import Restaurants from './containers/Restaurants'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err)) ;
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/api/shops');
    //const response = await fetch('/exchange');
    const body = await response.json();
    //console.log('object',body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header"/>
          <Restaurants />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;



