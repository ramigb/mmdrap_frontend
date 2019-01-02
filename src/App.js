import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import client from './GraphQL/Client'
import { store } from './Store'

import Home from './Components/Home/Home'
import Header from './Components/Common/Header/Header';
import {SongContainer} from './Containers/Songs';
import {ArtistsContainer, ArtistContainer} from './Containers/Artists';

import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'; //Global styles and overrides



class App extends Component {
  state = {
    visible: false
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div className="container">
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/artists" component={ArtistsContainer} />
              <Route exact path="/s/:id" component={SongContainer} />
              <Route exact path="/a/:id" component={ArtistContainer} />
            </div>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}


export default App;