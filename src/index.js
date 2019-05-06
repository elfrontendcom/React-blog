import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

ReactDOM.render(
<BrowserRouter>
    <div>
        {/* Header */}
        <Navbar />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/articles/create" component={CreateArticle} />
        <Route path="/article/:slug" component={SingleArticle} />
        <Route path="/signup" component={SignUp} />
        <Footer />
    </div>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
