import React, { Component } from 'react';
import { connect } from "react-redux"
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import CreateInvoice from '../Modals/CreateInvoice.jsx';
import { withRouter } from 'react-router'
import { getInvoices } from '../../store/actions/invoicesActions';

class Invoices extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showDeleteModal: false,
            showingItem: null,
        };
    }

    handleClose = () => {
        this.setState({
            showDeleteModal: false,
            showingItem: null,
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

    componentDidMount() {
        this.props.dispatch(getInvoices())
        document.title = "Invoices";
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Invoice list</h1>
                    <Col>
                        <Button variant="outline-dark" onClick={this.handleShow}>Create</Button>
                    </Col>
                    <CreateInvoice show={this.state.showModal} handleClose={this.handleClose} />
                </Row>
                <Row>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Discount</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.invoices && this.props.invoices.map((item, index) =>
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price}</td>
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

const mapStateToProps = ({ invoices = {} }, { history, location }) => ({
    invoices: invoices.invoices,
    location,
    history
})

const mapDispatchToProps = dispatch =>
    ({
        dispatch
    })

const connectedInvoices = withRouter(connect(mapStateToProps, mapDispatchToProps)(Invoices))
export { connectedInvoices as Invoices }