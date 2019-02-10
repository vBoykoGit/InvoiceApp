import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const InvoiceCell = ({ index, invoice, customers = [], onDelete }) => {
    const [customerItem = {}] = customers.filter((item) => item.id === invoice.customer_id)
    const { name } = customerItem
    const { discount, total } = invoice

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{discount}</td>
            <td>{total}</td>
            <td>
                <Link to={`/invoices/${invoice.id}/edit`}>edit</Link>
            </td>
            <td>
                <Button variant="outline-dark" onClick={onDelete}>delete</Button>
            </td>
        </tr>
    )
}

export default InvoiceCell