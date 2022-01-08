import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Home from './Home';

jest.mock('../../context/UserContext')
jest.mock('../../services/users')

it('should render the Home component', () => {
    const { container } = render(
      <UserProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
        </UserProvider>
      );

      expect(container).toMatchSnapshot();
    });