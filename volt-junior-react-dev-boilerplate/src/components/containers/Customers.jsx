import React, { Component } from 'react';
import { connect } from "react-redux"
import { getCustomers } from '../../store/actions/customersActions.js';
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import CreateCustomer from '../Modals/CreateCustomer.jsx';
import { withRouter, matchPath } from 'react-router'
import DeleteModal from '../Modals/DeleteModal.jsx';

class Customers extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showCreateModal: false,
            showEditModal: false,
            showDeleteModal: false,
            showingItem: null,
        };
    }

    handleClose = () => {
        this.setState({
            showCreateModal: false,
            showEditModal: false,
            showDeleteModal: false,
            showingItem: null,
        });
        document.title = "Customers";
        this.props.history.push('/customers')
    }

    handleShowCreate = () => {
        this.setState({ showCreateModal: true });
        document.title = "Create Customer";
    }

    handleShowEdit = (showingItem) => {
        this.setState({
            showEditModal: true,
            showingItem
        });
        document.title = "Edit Customer";
    }

    handleShowDelete = (showingItem) => {
        this.setState({
            showDeleteModal: true,
            showingItem
        });
        document.title = "Delete Customer";
    }

    componentDidMount() {
        this.props.dispatch(getCustomers())
        document.title = "Customers";
        const id = matchObject.params.id
        const user = this.props.customers && this.props.customers.filter((item) => {
            console.log(item);

            return `${item.id}` === id
        })
        console.log(matchObject);
        console.log(id);
        console.log(user);

        user ? this.handleShowDelete(user) : null
    }


    render() {
        return (
            <Container>
                <DeleteModal show={this.state.showDeleteModal} name={this.state.showingItem} handleClose={this.handleClose} />
                <Row>
                    <h1>Customers</h1>
                    <Col>
                        <Button variant="outline-dark" onClick={this.handleShowCreate}>Create</Button>
                    </Col>
                    <CreateCustomer show={this.state.showCreateModal} handleClose={this.handleClose} />
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
                                    <td>
                                        <Button variant="outline-dark" onClick={() => { this.handleShowEdit(item) }}>edit</Button>
                                    </td>
                                    <td>
                                        <Button variant="outline-dark" onClick={() => { this.handleShowDelete(item) }}>delete</Button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ customers = {} }, { history, location, match }) => ({
    customers: customers.customers,
    location,
    history,
    match
})

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const connectedCustomers = withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers))
export { connectedCustomers as Customers }