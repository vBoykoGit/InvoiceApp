import React from 'react';
import Header from './Header';
import { Customers } from './containers/Customers';
import { Products } from './containers/Products';
import { Invoices } from './containers/Invoices';

const PageTemplate = ({ children }) =>
    <div>
        <Header />
        {children}
    </div>

export const InvoicesPage = () =>
    <PageTemplate>
        <Invoices />
    </PageTemplate>

export const CustomersPage = () =>
    <PageTemplate>
        <Customers />
    </PageTemplate>

export const ProductsPage = () =>
    <PageTemplate>
        <Products />
    </PageTemplate>