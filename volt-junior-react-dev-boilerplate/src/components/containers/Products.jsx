import React, { Component } from 'react';
import { connect } from "react-redux"
import {
    getProducts,
    createProduct,
    editProduct,
    deleteProduct
} from '../../store/actions/productsActions';
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import DeleteModal from '../Modals/DeleteModal.jsx';
import EditProduct from '../Modals/EditProduct';

class Products extends Component {
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
        this.props.dispatch(deleteProduct(this.state.showingItem))
        this.handleClose()
    }

    handleEdit = (product) => {
        this.props.dispatch(editProduct({
            ...this.state.showingItem,
            ...product
        }))
        this.handleClose()
    }

    handleCreate = (product) => {
        this.props.dispatch(createProduct(product))
        this.handleClose()
    }

    componentDidMount() {
        document.title = "Products";
        this.props.dispatch(getProducts())
    }

    render() {
        return (
            <Container>
                <DeleteModal show={this.state.showDeleteModal} object={this.state.showingItem} handleDelete={this.handleDelete} handleClose={this.handleClose} />
                <EditProduct show={this.state.showEditModal} product={this.state.showingItem} handleEdit={this.handleEdit} handleClose={this.handleClose} />
                <EditProduct show={this.state.showCreateModal} handleEdit={this.handleCreate} handleClose={this.handleClose} />
                <Row>
                    <h1>Product list</h1>
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
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products && this.props.products.map((item, index) =>
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
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

const mapStateToProps = ({ products = {} }) => ({
    products: products.products
})

const mapDispatchToProps = dispatch =>
    ({
        dispatch
    })

const connectedProducts = connect(mapStateToProps, mapDispatchToProps)(Products)
export { connectedProducts as Products }