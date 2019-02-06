import React, { Component } from 'react';
import { connect } from "react-redux"
import { getCustomers } from '../../store/actions/customersActions.js';
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'
import DeleteModal from '../Modals/DeleteModal.jsx';
import EditCustomer from '../Modals/EditCustomer.jsx';
import { createCustomer, editCustomer, deleteCustomer } from '../../store/actions/customersActions';

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
    }

    handleShowCreate = () => {
        this.setState({ showCreateModal: true });
    }

    handleShowEdit = (showingItem) => {
        this.setState({
            showEditModal: true,
            showingItem
        });
    }

    handleShowDelete = (showingItem) => {
        this.setState({
            showDeleteModal: true,
            showingItem
        });
    }

    handleDelete = () => {
        this.props.dispatch(deleteCustomer(this.state.showingItem))
        this.handleClose()
    }

    handleEdit = (customer) => {
        this.props.dispatch(editCustomer({
            ...this.state.showingItem,
            ...customer
        }))
        this.handleClose()
    }

    handleCreate = (customer) => {
        this.props.dispatch(createCustomer(customer))
        this.handleClose()
    }

    componentDidMount() {
        this.props.dispatch(getCustomers())
        document.title = "Customers";
    }

    render() {
        return (
            <Container>
                <DeleteModal show={this.state.showDeleteModal} object={this.state.showingItem} handleDelete={this.handleDelete} handleClose={this.handleClose} />
                <EditCustomer show={this.state.showEditModal} customer={this.state.showingItem} handleEdit={this.handleEdit} handleClose={this.handleClose} />
                <EditCustomer show={this.state.showCreateModal} handleEdit={this.handleCreate} handleClose={this.handleClose} />
                <Row>
                    <h1>Customers</h1>
                    <Col>
                        <Button variant="outline-dark" onClick={this.handleShowCreate}>Create</Button>
                    </Col>
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
                                        <Button variant="outline-dark" onClick={() => this.handleShowEdit(item)}>edit</Button>
                                    </td>
                                    <td>
                                        <Button variant="outline-dark" onClick={() => this.handleShowDelete(item)}>delete</Button>
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
    customers: customers.customers
})

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const connectedCustomers = withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers))
export { connectedCustomers as Customers }