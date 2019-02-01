import React from 'react';
import Header from './Header';

const PageTemplate = ({ children }) =>
    <div>
        <Header />
        {children}
    </div>

export const InvoicesPage = () =>
    <PageTemplate>
    </PageTemplate>

export const CustomersPage = () =>
    <PageTemplate>
    </PageTemplate>

export const ProductsPage = () =>
    <PageTemplate>
    </PageTemplate>