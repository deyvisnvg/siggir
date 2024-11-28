import { StrictMode } from 'react';
import { ToastWrapper } from 'keep-react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastWrapper
      visibleToasts={2}
      richColors={true}
      toastOptions={{
        classNames: {
          title: 'text-body-5 font-medium text-red-100',
          toast: 'rounded-xl shadow-large ',
          description: 'text-body-4 font-normal',
        },
      }}
    />
  </StrictMode>,
)
