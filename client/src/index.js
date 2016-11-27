import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Main} from './app/main.jsx';
import {Partners} from './app/components/partners/partners.jsx';
import {Partner} from './app/components/partners/partner.jsx';
import {Pending} from './app/components/partners/pending.jsx';
import {Home} from './app/components/home/home.jsx';
import {Register} from './app/components/partners/register.jsx';
import {NoMatch} from './app/components/nomatch/nomatch.jsx';
import './index.styl';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="socios" component={Partners}/>
      <Route path="pendentes" component={Pending}/>
      <Route path="/socio/:socioId" component={Partner}/>
      <Route path="cadastrar" component={Register}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);