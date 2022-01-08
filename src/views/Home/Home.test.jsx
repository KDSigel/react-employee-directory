import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Home from './Home';

it('should render the Home component', () => {
    const { container } = render(
        <MemoryRouter>
            <UserProvider>
          <Home />
          </UserProvider>
        </MemoryRouter>
      );

      expect(container).toMatchSnapshot();
    });