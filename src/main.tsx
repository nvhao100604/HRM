import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { UIProvider } from './store/UIContext/index.ts';
import { AccountProvider } from './store/Account context/index.ts';
import { ToastifyProvider } from './store/ToastifyContext/index.ts';

createRoot(document.getElementById('root')!).render(

  <UIProvider>
    <AccountProvider>
      <ToastifyProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ToastifyProvider>
    </AccountProvider>
  </UIProvider>,
)
