import React, { Component } from 'react';
import '../../css/app.css';
import '../../css/common.css';
import { connect } from "react-redux"
import { HashRouter, Route, Switch } from 'react-router-dom'
import { InvoicesPage, CustomersPage, ProductsPage } from '../Pages';
import Header from '../Header';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(getAmount())
  }
  render() {
    return (
      <div className='app'>
        <HashRouter history={history}>
          <Switch>
            <Route exact path="/" component={InvoicesPage} />
            <Route path="/customers" component={CustomersPage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </HashRouter>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch =>
  ({
    dispatch
  })

const connectedApp = connect(null, mapDispatchToProps)(App)
export { connectedApp as App }
