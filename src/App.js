import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import VerifyOtp from './components/Auth/VerifyOtp'
import SignIn from './components/Auth/SignIn'
import Merchants from './components/Merchants/Merchants';
import SignUp from './components/Auth/SignUp';
import Organization from './components/Organization/Organization';
import MerchantInfo from './components/Merchants/MerchantInfo';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/verifyotp" component={VerifyOtp} />
      <Route path="/merchants" component={Merchants} />
      <Route path="/merchantinfo" component={MerchantInfo} />
      <Route path="/organization" component={Organization} />

    </Switch>
  );
}

export default App;
