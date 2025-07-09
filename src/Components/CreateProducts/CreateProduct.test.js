import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateProducts from './CreateProducts';

// Mock the child components
jest.mock('./ProductForm', () => ({ createproduct, onCancel }) => (
    <div data-testid="product-form">
        <button onClick={() => createproduct({ name: 'Test Product' })}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
    </div>
));

jest.mock('../ProductList/Button', () => ({ eventHandler, children }) => (
    <button onClick={eventHandler}>{children}</button>
));

describe('CreateProducts', () => {
    it('renders Create Product button initially', () => {
        render(<CreateProducts createProduct={jest.fn()} />);
        expect(screen.getByText('Create Product')).toBeInTheDocument();
        expect(screen.queryByTestId('product-form')).not.toBeInTheDocument();
    });

    it('shows form when button is clicked', () => {
        render(<CreateProducts createProduct={jest.fn()} />);
        fireEvent.click(screen.getByText('Create Product'));
        expect(screen.getByTestId('product-form')).toBeInTheDocument();
        expect(screen.queryByText('Create Product')).not.toBeInTheDocument();
    });

    it('hides form when cancel is clicked', () => {
        render(<CreateProducts createProduct={jest.fn()} />);
        fireEvent.click(screen.getByText('Create Product'));
        fireEvent.click(screen.getByText('Cancel'));
        expect(screen.getByText('Create Product')).toBeInTheDocument();
        expect(screen.queryByTestId('product-form')).not.toBeInTheDocument();
    });

    it('calls createProduct prop when form is submitted', () => {
        const mockCreateProduct = jest.fn();
        render(<CreateProducts createProduct={mockCreateProduct} />);
        fireEvent.click(screen.getByText('Create Product'));
        fireEvent.click(screen.getByText('Submit'));
        expect(mockCreateProduct).toHaveBeenCalledWith({ name: 'Test Product' });
    });
});