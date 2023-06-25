import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

const roles = [
  {
    Id: 1,
    Name: 'System Administrator',
    Parent: 0,
  },
  {
    Id: 2,
    Name: 'Location Manager',
    Parent: 1,
  },
  {
    Id: 3,
    Name: 'Supervisor',
    Parent: 2,
  },
  {
    Id: 4,
    Name: 'Employee',
    Parent: 3,
  },
  {
    Id: 5,
    Name: 'Trainer',
    Parent: 3,
  },
];
const users = [
  {
    Id: 1,
    Name: 'Adam Admin',
    Role: 1,
  },
  {
    Id: 2,
    Name: 'Emily Employee',
    Role: 4,
  },
  {
    Id: 3,
    Name: 'Sam Supervisor',
    Role: 3,
  },
  {
    Id: 4,
    Name: 'Mary Manager',
    Role: 2,
  },
  {
    Id: 5,
    Name: 'Steve Trainer',
    Role: 5,
  },
];

jest.mock('./hooks/useAppState', () => ({
  useAppState: () => ({
    roles,
    users,
  }),
}));

const setup = () => {
  const utils = render(<App />);
  const input = screen.getByLabelText('user-id-input') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe(`Testing Users Hierarchy Component`, () => {
  test('renders header text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Users Hierarchy/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders user input user id as 1', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '1' } });
    expect(input.value).toBe('1');
  });

  test('renders for user id 1 sub ordinates as 4', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '1' } });
    const subOrdinates = screen.getByLabelText('sub-ordinates');
    expect(subOrdinates.children.length).toBe(4);
  });

  test('renders for user id 3 sub ordinates as 2', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '3' } });
    const subOrdinates = screen.getByLabelText('sub-ordinates');
    expect(subOrdinates.children.length).toBe(2);
  });

  test('renders user id 2 no sub ordinates', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '2' } });
    const subOrdinates = screen.getByLabelText('sub-ordinates');
    expect(subOrdinates.children.length).toBe(0);
  });

  test('renders unknown user id 10 sub ordinates', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '10' } });
    const subOrdinates = screen.getByLabelText('sub-ordinates');
    expect(subOrdinates.children.length).toBe(0);
  });
});
