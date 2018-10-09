import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'

import Home from './containers/Home'

import Film from './containers/film/List'
import Detail from './containers/film/Detail'

import './style/reset.css'
import './style/icon.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/film' component={Film} />
                    <Route path='/Detail/:id' exact component={Detail} />
                </Switch>
            </div>
        )
    }
}


