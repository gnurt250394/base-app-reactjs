import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RootView from 'containers/RootView';


function App() {
  return (
    <BrowserRouter>
      <RootView />
    </BrowserRouter>
  );
}

export default App;
