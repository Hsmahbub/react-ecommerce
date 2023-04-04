import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Items from './Item';
import { useGlobalContext } from '../../../context';

jest.mock('../../../context');

describe('Items', () => {
  const item = {
    _id: '1',
    productId: '1',
    img: 'image_url',
    title: 'Test Item',
    total_price: 10,
    quantity: 1,
    size: 'S',
    color: 'red',
  };
  const handleSelect = jest.fn();
  const setCartData = jest.fn();
  const cartData = [item];
  useGlobalContext.mockReturnValue({ cartData, setCartData });

  it('renders the item details', () => {
    render(
      <MemoryRouter>
        <Items item={item} handleSelect={handleSelect} />
      </MemoryRouter>
    );

    const itemImage = screen.getByAltText('img');
    expect(itemImage).toHaveAttribute('src', item.img);

    const itemTitle = screen.getByText(item.title);
    expect(itemTitle).toBeInTheDocument();

    const itemPrice = screen.getByText(`price:$${item.total_price}`);
    expect(itemPrice).toBeInTheDocument();

    const itemQuantity = screen.getByText(`quantity:${item.quantity}`);
    expect(itemQuantity).toBeInTheDocument();

    const itemSize = screen.getByText(`size:${item.size}`);
    expect(itemSize).toBeInTheDocument();

    const itemColor = screen.getByText(`color:${item.color}`);
    expect(itemColor).toBeInTheDocument();
  });

  it('calls handleSelect function when checkbox is clicked', () => {
    render(
      <MemoryRouter>
        <Items item={item} handleSelect={handleSelect} />
      </MemoryRouter>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  it('calls setCartData function with filtered items when delete button is clicked', () => {
    render(
      <MemoryRouter>
        <Items item={item} handleSelect={handleSelect} />
      </MemoryRouter>
    );

    const deleteButton = screen.getByText('delete');
    fireEvent.click(deleteButton);

    expect(setCartData).toHaveBeenCalledTimes(1);
    expect(setCartData).toHaveBeenCalledWith([]);
  });
});