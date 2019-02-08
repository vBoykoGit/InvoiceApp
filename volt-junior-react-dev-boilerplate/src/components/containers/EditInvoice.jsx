import React from 'react';
import { Button, Form, Col, Container, Table } from 'react-bootstrap'
import Select from 'react-select';
import { connect } from "react-redux"
import { withRouter, matchPath } from 'react-router'
import { getProducts } from '../../store/actions/productsActions';
import { getCustomers } from '../../store/actions/customersActions';
import { getInvoice } from '../../store/actions/invoicesActions';

class EditInvoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: null,
            product: null,
            discount: ''
        };
    }

    componentDidMount() {
        this.props.onLoadData()
        const { customers, products, invoices = [], history, location, match } = stateProps;
        const { onLoadData, onLoadInvoice } = dispatchProps;

        const matchObj = matchPath(
            location.pathname,
            '/invoices/:id/edit'
        );
        const id = matchObj.params.id
        const [invoice] = invoices.filter(item => item.id === id)

        if (invoice == null) {
            onLoadInvoice(id)
        }
    }

    render() {
        const { customer, product, discount } = this.state
        const { customers, products, invoice } = this.props
        console.log(this.state);
        console.log(this.props);

        return (
            <Container>
                <Form id="invoiceForm" >
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Discount</Form.Label>
                            <Form.Control required value={invoice ? invoice.discount : discount} type="text" placeholder="Discount" onChange={(event) => this.setState({ discount: Number(event.target.value) })} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Customer</Form.Label>
                            <Select value={invoice ? invoice.customer : customer} options={customers} getOptionLabel={customer => customer.name} onChange={(customer) => this.setState({ customer })} />
                        </Form.Group>
                    </Form.Row>s
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Add product</Form.Label>
                            <Select options={products} getOptionLabel={product => product.name} onChange={(product) => this.setState({ product })} />
                        </Form.Group>
                        <Form.Group as={Col} md="1">
                            <Button variant="outline-dark" onClick={() => {
                                onAddItem(product)
                            }}>Add</Button>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice && invoice.items.map((item, index) =>
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Form.Control required value={invoice ? invoice.discount : discount} type="text" placeholder="Qty" onChange={(event) => this.setState({ discount: event.target.value })} /></td>
                                        <td>
                                            <Button variant="outline-dark" onClick={() => this.handleShowDelete(item)}>delete</Button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </Table>
                    </Form.Row>
                </Form>
                <h1>Total: 99999</h1>
            </Container>
        )
    }
}

const mapStateToProps = ({ customers = {}, products = {}, invoices = {} }, { history, location, match }) => ({
    customers: customers.customers,
    products: products.products,
    invoices: invoices.invoices,
    history,
    location,
    match
})

const mapDispatchToProps = dispatch => ({
    onLoadData() {
        dispatch(getProducts())
        dispatch(getCustomers())
    },
    onLoadInvoice(id) {
        dispatch(getInvoice(id))
    },
    onAddItem(item) {

    },
    onEdit(invoice) {

    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { customers, products, invoices = [], history, location, match } = stateProps;
    const { onLoadData, onLoadInvoice } = dispatchProps;

    const matchObj = matchPath(
        location.pathname,
        '/invoices/:id/edit'
    );
    const id = matchObj.params.id
    const [invoice] = invoices.filter(item => item.id === id)

    if (invoice == null) {
        onLoadInvoice(id)
    }
    return {
        invoice,
        customers,
        products,
        onLoadData,
        history
    };
};
const connectedEditInvoice = withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditInvoice))
export { connectedEditInvoice as EditInvoice }