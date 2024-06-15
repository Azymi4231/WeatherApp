'use client';

import '../theme/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`flex h-screen w-full flex-grow overflow-hidden`}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
