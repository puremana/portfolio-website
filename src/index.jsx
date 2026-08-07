import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { unregister } from './registerServiceWorker';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// CRA 5 no longer emits a service worker, but earlier CRA 3 builds registered
// one that precached the old bundle. Unregister it so returning visitors are
// not served stale content. Swap back to the default `register` export (and add
// a src/service-worker.js) if offline support is wanted again.
unregister();
