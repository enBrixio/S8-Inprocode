import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Header from './Header';

test('renders the Header component', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Header />
    </I18nextProvider>
  );

  expect(screen.getByAltText(/UK Flag/i)).toBeInTheDocument();
});
