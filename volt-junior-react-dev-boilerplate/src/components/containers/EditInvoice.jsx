import React from 'react';
import { Button, Form, Col, Container, Table } from 'react-bootstrap'
import Select from 'react-select';
import { connect } from "react-redux"
import { withRouter, matchPath } from 'react-router'
import { getProducts } from '../../store/actions/productsActions';
import { getCustomers } from '../../store/actions/customersActions';
import {
    getInvoice,
    addProductItem,
    getInvoiceItems,
    deleteInvoiceItem,
    editInvoice,
    changeItemQuantity
} from '../../store/actions/invoiceActions';
import DeleteModal from '../Modals/DeleteModal';
import ItemCell from '../ItemCell';

class EditInvoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDeleteModal: false,
            showingItem: null,
            product: null
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
        const { onDeleteProductItem } = this.props
        const { showingItem } = this.state

        onDeleteProductItem(showingItem)
        this.handleClose()
    }

    onEditInvoice = (newProps) => {
        this.props.onEditInvoice({
            ...this.props.invoice,
            ...newProps
        })
    }

    componentDidMount() {
        const { onLoadInvoiceData, location } = this.props;
        const matchObj = matchPath(
            location.pathname,
            '/invoices/:id/edit'
        );
        const id = matchObj.params.id
        onLoadInvoiceData(id)
        document.title = "Edit Invoice";
    }

    render() {
        const { customers, products, invoice = {}, items, onAddProduct } = this.props
        const { product } = this.state
        const { discount, customer_id, total } = invoice
        const customer = customers && customer_id ? customers.filter(item => item.id === customer_id) : null
        return (
            <Container>
                <DeleteModal show={this.state.showDeleteModal}
                    handleDelete={this.handleDelete}
                    handleClose={this.handleClose} />
                <Form id="invoiceForm" >
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Discount</Form.Label>
                            <Form.Control required
                                disabled={invoice ? false : true}
                                value={discount ? discount : ''}
                                type="text" placeholder="Discount"
                                onChange={(event) => this.onEditInvoice({ discount: Number(event.target.value) })} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Customer</Form.Label>
                            <Select isDisabled={invoice ? false : true}
                                value={customer}
                                options={customers}
                                getOptionLabel={customer => customer.name}
                                onChange={(customer) => this.props.onChangeCustomer(invoice, customer)} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Add product</Form.Label>
                            <Select isDisabled={invoice ? false : true}
                                value={product}
                                options={products}
                                getOptionLabel={product => product.name}
                                onChange={(product) => this.setState({ product })} />
                        </Form.Group>
                        <Form.Group as={Col} md="1">
                            <Button variant="outline-dark" disabled={invoice ? false : true}
                                onClick={() => {
                                    onAddProduct(invoice, product)
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
                                {items && items.map((item, index) =>
                                    <ItemCell key={index}
                                        item={item} products={products}
                                        onChangeQty={(event) => this.props.onChangeItemQty(item, event.target.value)}
                                        onDelete={() => this.handleShowDelete(item)} />)}
                            </tbody>
                        </Table>
                    </Form.Row>
                </Form>
                <h1>Total: {total ? total : 'n/a'}</h1>
            </Container>
        )
    }
}

const mapStateToProps = ({ customers = {}, products = {}, invoice = {} }, { history, location }) => ({
    customers: customers.customers,
    products: products.products,
    invoice: invoice.invoice,
    items: invoice.items,
    customer: invoice.customer,
    history,
    location
})

const mapDispatchToProps = dispatch => ({
    onLoadInvoiceData(id) {
        dispatch(getProducts())
        dispatch(getCustomers())
        dispatch(getInvoice(id))
        dispatch(getInvoiceItems(id))
    },
    onAddProduct(invoice, item) {
        dispatch(addProductItem(invoice, item))
        dispatch(getInvoice(invoice.id))
    },
    onEditInvoice(invoice) {
        dispatch(editInvoice(invoice))
    },
    onChangeItemQty(item, qty) {
        dispatch(changeItemQuantity({
            ...item,
            quantity: parseFloat(qty).toFixed(2)
        }))
        dispatch(getInvoice(item.invoice_id))
    },
    onChangeCustomer(invoice, customer) {
        const newInvoice = {
            ...invoice,
            customer_id: customer.id
        }
        dispatch(editInvoice(newInvoice))
    },
    onDeleteProductItem(item) {
        dispatch(deleteInvoiceItem(item))
        dispatch(getInvoice(item.invoice_id))
    }
})

const connectedEditInvoice = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditInvoice))
export { connectedEditInvoice as EditInvoice }