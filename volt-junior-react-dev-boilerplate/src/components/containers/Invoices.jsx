import React, { Component } from 'react';
import { connect } from "react-redux"
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { getInvoices, deleteInvoice, createInvoice } from '../../store/actions/invoicesActions';
import DeleteModal from '../Modals/DeleteModal';
import InvoiceCell from '../InvoiceCell';
import { getCustomers } from '../../store/actions/customersActions';

class Invoices extends Component {
    constructor(props) {
        super(props);

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
        this.props.onDelete(this.state.showingItem)
        this.handleClose()
    }

    componentDidMount() {
        this.props.onLoadData()
        document.title = "Invoices";
    }

    render() {
        const { onCreate, invoices, customers } = this.props

        return (
            <Container>
                <DeleteModal show={this.state.showDeleteModal} handleDelete={this.handleDelete} handleClose={this.handleClose} />
                <Row>
                    <h1>Invoice list</h1>
                    <Col>
                        <Button variant="outline-dark" onClick={onCreate}>Create</Button>
                    </Col>
                </Row>
                <Row>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Discount</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices && invoices.map((item, index) =>
                                <InvoiceCell key={item.id} index={index} invoice={item} customers={customers} onDelete={() => this.handleShowDelete(item)} />)}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ invoices = {}, customers }, { history, location }) => ({
    invoices: invoices.invoices,
    customers: customers.customers,
    location,
    history
})

const mapDispatchToProps = dispatch =>
    ({
        onLoadData() {
            dispatch(getCustomers())
            dispatch(getInvoices())
        },
        onCreate() {
            dispatch(createInvoice())
        },
        onDelete(invoice) {
            dispatch(deleteInvoice(invoice))
        }
    })

const connectedInvoices = withRouter(connect(mapStateToProps, mapDispatchToProps)(Invoices))
export { connectedInvoices as Invoices }