
import { useSelector } from 'react-redux';
import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';



import './App.css';


const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);


  const flight = useSelector((state) => state.flights);
 console.log("App: "+JSON.stringify(flight));
  return (
    <Provider store={store}>
      <Router>
    <Fragment>
      <Navbar />
      <div id="wrapper" className="toggled content" >
        <div className="col-lg-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="form-container">
            <div>
              <div className="row">
             
              </div>
              <Switch>
              <Route component={Routes} />
             
              </Switch>

              <Route exact path="/" component={Landing} />
              <div className="row">
                <div className="container output-section">
                  <div className="row">
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    </Router>
    </Provider>
  );
}



export default App;



