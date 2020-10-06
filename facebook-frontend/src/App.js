import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './context-api/StateProvider';

function App() {

  const [{user},dispatch] = useStateValue()

  return (
    <div className="app">
    {!user ? (<Login />) : (
      <>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
    )}
    </div>
  );
}

export default App;
