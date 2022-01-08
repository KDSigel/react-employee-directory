import { render } from '@testing-library/react';
import EmailPasswordForm from './EmailPasswordForm';

it('should render the Home component', () => {
    const { container } = render(<EmailPasswordForm />
      );
      expect(container).toMatchSnapshot();
    });