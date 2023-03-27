// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import { MemoryRouter } from 'react-router-dom';
// import App from '../routes/App';

// // mock the antd library
// jest.mock('antd', () => ({
//   // mock the Typography component and its children
//   Typography: ({ children }) => <div>{children}</div>,
//   // mock the Button component
//   Button: ({ children, ...props }) => <button {...props}>{children}</button>,
//   // mock the Input component
//   Input: ({ ...props }) => <input {...props} />,
// }));
// test('renders the HomePage component by default', () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
// });

// test('renders the IDCardPage component on the /login route', () => {
//   render(
//     <MemoryRouter initialEntries={['/login']}>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/Submit SJSU ID/i)).toBeInTheDocument();
// });

// test('renders the LoginSuccess component on the /login/success route', () => {
//   render(
//     <MemoryRouter initialEntries={['/login/success']}>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/Login Successful/i)).toBeInTheDocument();
// });

// test('renders the IDCardPage component on the /upload route', () => {
//   render(
//     <MemoryRouter initialEntries={['/upload']}>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/Submit SJSU ID/i)).toBeInTheDocument();
// });

// test('renders the Dashboard component on the /dashboard route', () => {
//   render(
//     <MemoryRouter initialEntries={['/dashboard']}>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
// });

// test('renders the Pass component on the /id route', () => {
//   render(
//     <MemoryRouter initialEntries={['/id']}>
//       <App />
//     </MemoryRouter>
//   );

//   expect(screen.getByText(/Your Pseudo Pass/i)).toBeInTheDocument();
// });
