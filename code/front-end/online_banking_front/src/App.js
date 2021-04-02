import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navigation1 from "./components/Navigation1";
import Navigation2 from "./components/Navigation2";
import Navigation3 from "./components/Navigation3";
import SigninScreen from "./screens/homeScreen/SigninScreen";
import SignupScreen from "./screens/homeScreen/SignupScreen";
import HomepageScreen from "./screens/homeScreen/HomepageScreen";
import AdminHomeScreen from "./screens/adminScreen/AdminHomeScreen";
import AppointmentsScreen from "./screens/adminScreen/AppointmentsScreen";
import UserAccountsScreen from "./screens/adminScreen/UserAccountsScreen";
import AboutScreen from "./screens/homeScreen/AboutScreen";
import ContactUsScreen from "./screens/homeScreen/ContactUsScreen";
import UserHomeScreen from "./screens/customerScreen/UserHomeScreen";
import PrimaryAccountScreen from "./screens/customerScreen/accounts/PrimaryAccountScreen";
import SavingsAccountScreen from "./screens/customerScreen/accounts/SavingsAccountScreen";
import ScheduleAppointmentScreen from "./screens/customerScreen/appointments/ScheduleAppointmentScreen";
import EditProfileScreen from "./screens/customerScreen/profile/EditProfileScreen";
import DepositScreen from "./screens/customerScreen/transactions/DepositScreen";
import WithdrawScreen from "./screens/customerScreen/transactions/WithdrawScreen";
import AddEditRecipientScreen from "./screens/customerScreen/transfers/AddEditRecipientScreen";
import BetweenAccountsScreen from "./screens/customerScreen/transfers/BetweenAccountsScreen";
import SomeoneElseAccountScreen from "./screens/customerScreen/transfers/SomeoneElseAccountScreen";
import ViewProfileScreen from "./screens/customerScreen/profile/ViewProfileScreen";
import Footer from "./components/Footer";
function App() {
  return (

    <div className="page-container">
      <div className="content-wrap">
     
      <Router>
      <Navigation1 />
      <Navigation2 />
      <Navigation3 />
        <div className="container">
          <Switch>
            <Route path="/signup" component={SignupScreen} />
            <Route path="/home" component={HomepageScreen} />
            <Route path="/userhome" component={UserHomeScreen} />
            <Route path="/adminhome" component={AdminHomeScreen} />
            <Route path="/appoinments" component={AppointmentsScreen} />
            <Route path="/adminuseraccount" component={UserAccountsScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/contactus" component={ContactUsScreen} />
            <Route path="/primaryaccount" component={PrimaryAccountScreen} />
            <Route path="/savingsaccount" component={SavingsAccountScreen} />
            <Route
              path="/scheduleappointment"
              component={ScheduleAppointmentScreen}
            />
            <Route path="/editprofile" component={EditProfileScreen} />
            <Route path="/deposit" component={DepositScreen} />
            <Route path="/withdraw" component={WithdrawScreen} />
            <Route
              path="/addeditrecipient"
              component={AddEditRecipientScreen}
            />
            <Route path="/betweenaccounts" component={BetweenAccountsScreen} />
            <Route path="/tosomeoneelse" component={SomeoneElseAccountScreen} />
            <Route path="/viewprofile" component={ViewProfileScreen} />
            <Route path="" component={SigninScreen} />
          </Switch>
        </div>
      </Router>
     
      </div>
      <Footer/>
    </div>
  );
}

export default App;
