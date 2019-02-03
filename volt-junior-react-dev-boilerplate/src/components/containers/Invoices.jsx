import React, { Component } from 'react';
import { connect } from "react-redux"
import { getProducts } from '../../store/actions/productsActions';
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import CreateInvoice from '../CreateInvoice.jsx';

class Invoices extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    componentDidMount() {
        document.title = "Invoices";
        this.props.dispatch(getProducts())
    }
    render() {
        return (
            <Container>
                <Row>
                    <h1>Invoice list</h1>
                    <Col><Button variant="outline-dark" onClick={this.handleShow}>Create</Button></Col>
                    <CreateInvoice show={this.state.show} handleClose={this.handleClose}/>
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

const mapStateToProps = ({ invoices = {} }) => ({
    invoices: invoices.invoices
})

const mapDispatchToProps = dispatch =>
    ({
        dispatch
    })

const connectedInvoices = connect(mapStateToProps, mapDispatchToProps)(Invoices)
export { connectedInvoices as Invoices }