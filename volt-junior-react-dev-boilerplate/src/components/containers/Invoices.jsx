import React, { Component } from 'react';
import { connect } from "react-redux"
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { getInvoices, deleteInvoice, createInvoice } from '../../store/actions/invoicesActions';
import { Link } from 'react-router-dom'
import DeleteModal from '../Modals/DeleteModal';

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
        const { onCreate, invoices } = this.props

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
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/invoices/${item.id}/edit`}>edit</Link>
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

const mapStateToProps = ({ invoices = {} }, { history, location }) => ({
    invoices: invoices.invoices,
    location,
    history
})

const mapDispatchToProps = dispatch =>
    ({
        onLoadData() {
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