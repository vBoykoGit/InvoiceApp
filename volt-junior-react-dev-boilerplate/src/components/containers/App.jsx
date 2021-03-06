import React, { Component } from 'react';
import { connect } from "react-redux"
import { Router, Route, Switch } from 'react-router-dom'
import { InvoicesPage, CustomersPage, ProductsPage, EditInvoicePage } from '../Pages';
import { history } from '../../historyHelper.js';
import '../../css/app.css';
import '../../css/common.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }
  render() {
    return (
      <div className='app'>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={InvoicesPage} />
            <Route path="/invoices/:id/edit" component={EditInvoicePage} />
            <Route path="/customers" component={CustomersPage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </Router>
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