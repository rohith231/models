import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';


import { FiledFlightPlan, Alerting, Acceptance, RadioCommunicationFailure, 
  RequestFlightPlan, Arrival, Cancellation, Coordination, CurrentFlightPlan,
  Delay, Departure, Estimate, LogicalAcknowledgement, Modification,
  SupplementaryFlightPlan, RequestSupplementaryFlight } from '../pages';


const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        







            <PrivateRoute exact path="/alerting"><Alerting /></PrivateRoute>
            <PrivateRoute path="/radio_communication_failure"><RadioCommunicationFailure /></PrivateRoute>
            <PrivateRoute path="/filed_flight_plan"><FiledFlightPlan /></PrivateRoute>
            <PrivateRoute path="/modification"><Modification /></PrivateRoute>
            <PrivateRoute path="/cancellation"><Cancellation /></PrivateRoute>
            <PrivateRoute path="/delay"><Delay /></PrivateRoute>
            <PrivateRoute path="/departure"><Departure /></PrivateRoute>
            <PrivateRoute path="/arrival"><Arrival /></PrivateRoute>
            <PrivateRoute path="/current_flight_plan"><CurrentFlightPlan /></PrivateRoute>
            <PrivateRoute path="/estimate"><Estimate /></PrivateRoute>
            <PrivateRoute path="/coordination"><Coordination /></PrivateRoute>
            <PrivateRoute path="/acceptance"><Acceptance /></PrivateRoute>
            <PrivateRoute path="/logical_acknowledgement"><LogicalAcknowledgement  /></PrivateRoute>
            <PrivateRoute path="/request_flight_plan"><RequestFlightPlan /></PrivateRoute>
            <PrivateRoute path="/request_supplementary_flight_plan"><RequestSupplementaryFlight /></PrivateRoute>
            <PrivateRoute path="/supplementary_flight_plan"><SupplementaryFlightPlan /></PrivateRoute>






        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
