import React, { Component } from 'react';
import { connect } from "react-redux"
import { getCustomers } from '../../store/actions/customersActions.js';
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import CreateCustomer from '../CreateCustomer';
import { Switch, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router'

class Customers extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false,
        };
    }

    handleClose = () => {
        this.setState({ showModal: false });
        document.title = "Customers";
        this.props.history.push('/customers')
    }

    handleShow = () => {
        this.setState({ showModal: true });
        document.title = "Create Customers";
        this.props.history.push('/customers/create')
    }

    componentDidMount() {
        document.title = "Customers";
        this.props.dispatch(getCustomers())
        if (location.pathname === '/customers/create') this.setState({ showModal: true })
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Customers</h1>
                    <Col>
                        <Button variant="outline-dark" onClick={this.handleShow}>Create</Button>
                    </Col>
                    <CreateCustomer show={this.state.showModal} handleClose={this.handleClose} />
                </Row>
                <Row>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.customers && this.props.customers.map((item, index) =>
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ customers = {} }, { history, location }) => ({
    customers: customers.customers,
    location, history
})

const mapDispatchToProps = dispatch =>
    ({
        dispatch
    })

const connectedCustomers = withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers))
export { connectedCustomers as Customers }