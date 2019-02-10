import React from 'react';
import { Button, Form } from 'react-bootstrap'

const ItemCell = ({ item, products = [], onChangeQty, onDelete }) => {
    const [productItem] = products.filter((productItem) => productItem.id === item.product_id)

    return (
        <tr>
            <td>{productItem.name}</td>
            <td>{productItem.price}</td>
            <td>
                <Form.Control required value={item.quantity ? item.quantity : ''} type="text" placeholder="Qty" onChange={onChangeQty} />
            </td>
            <td>
                <Button variant="outline-dark" onClick={onDelete}>delete</Button>
            </td>
        </tr>
    )
}

export default ItemCell