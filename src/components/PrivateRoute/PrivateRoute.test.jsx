import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import PrivateRoute from './PrivateRoute';

jest.mock('../../context/UserContext')
jest.mock('../../services/users')

it('should render the PrivateRoute component', () => {
    const { container } = render(
        <UserProvider>
        <MemoryRouter> 
          <PrivateRoute location="/"/>
        </MemoryRouter>
        </UserProvider>
      );

      expect(container).toMatchSnapshot();
    });