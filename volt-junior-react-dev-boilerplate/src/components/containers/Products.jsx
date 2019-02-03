import React, { Component } from 'react';
import { connect } from "react-redux"
import { getProducts } from '../../store/actions/productsActions';
import { Table, Button, Container, Row, Col } from 'react-bootstrap'

class Products extends Component {
    componentDidMount() {
        document.title = "Products";
        this.props.dispatch(getProducts())
    }
    render() {
        return (
            <Container>
                <Row>
                    <h1>Product list</h1>
                    <Col><Button variant="outline-dark">Create</Button></Col>
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