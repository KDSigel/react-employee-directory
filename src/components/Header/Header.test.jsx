import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Header from './Header';

jest.mock('../../context/UserContext')
jest.mock('../../services/users')

it('should render the Header component', () => {
    const { container } = render(
        <UserProvider>
        <MemoryRouter> 
          <Header />
        </MemoryRouter>
        </UserProvider>
      );

      expect(container).toMatchSnapshot();
    });