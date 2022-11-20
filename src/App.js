import './App.css';
import routes from './routes';
import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense>
        <RouterProvider router={routes} />
      </Suspense>
    </div>
  );
}

export default App;
