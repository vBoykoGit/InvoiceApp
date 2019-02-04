import React, { Component } from 'react';
import { connect } from "react-redux"
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import CreateInvoice from '../Modals/CreateInvoice.jsx';
import { withRouter } from 'react-router'


class Invoices extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false,
        };
    }

    handleClose = () => {
        this.setState({ showModal: false });
        document.title = "Invoices";
        this.props.history.push('/')
    }

    handleShow = () => {
        this.setState({ showModal: true });
        document.title = "Create Invoice";
        this.props.history.push('/c/ccc')
    }

    componentDidMount() {
        document.title = "Invoices";
        if (this.props.location.pathname === '/c/ccc') this.setState({ showModal: true })
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