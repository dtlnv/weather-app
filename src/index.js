import React from 'react';
import App from './system/App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
