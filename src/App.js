import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import { Typography, Button } from '@material-ui/core'
import DashBoard from './screens/dashboard/DashBoard'
import FeedsPosters from './screens/feeds/FeedsPosters';
import MemberShip from './screens/membership/MemberShip';






function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Typography variant='h5' align='left'><Link to='/' className='logo' > MQI Admin </Link></Typography>
          <Button><Typography className='logo'>Logout</Typography></Button>
        </header>


        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/feeds' component={FeedsPosters} />
          <Route exact path='/membership' component={MemberShip} />
          <Route path='*' component={() => <Typography>404 PAge Not Found</Typography>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
