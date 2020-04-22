import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core'
import DashBoard from './components/dashboard/DashBoard'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h5' align='left'>MQI Admin</Typography>
      </header>
      <DashBoard />
    </div>
  );
}

export default App;
