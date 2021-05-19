import { Route, Switch } from 'react-router-dom';
import Home from "../../pages/Home/Home";
// import Register from "./user/Register";

// import Edit from "./user/Edit";

import profileEdit from '../../pages/Profile/ProfileEdit';
import profileFav from '../../pages/Profile/ProfileFav';
import profile from '../../pages/Profile/Profile';
import login from '../../pages/Login/Login';
import userList from "../../pages/UserList/UserList";
import userDetail from "../../pages/UserList/UserDetail";
import signup from '../../pages/Signup/SignUp';
import errorPage from '../../pages/ErrorPage/ErrorPage';
import AnonRoute from '../AnonRoute/AnonRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import message from '../../pages/Message/Message';

const Routes = () => (
  <Switch>
        <Route exact path="/" component={Home} />

        <PrivateRoute path="/profile" exact component={profile} />
        <PrivateRoute path="/profile/edit" exact component={profileEdit} />
        <PrivateRoute path="/profile/favorites" exact component={profileFav} />


        <AnonRoute exact path="/signup" component={signup} redirectPath="/profile" />
        <AnonRoute exact path="/login" component={login} />

        <Route exact path="/userList" component={userList} />
        <Route exact path="/userList/:id" component={userDetail} />
        
        <Route exact path="/profile/message" component={message} />



 
      <Route path="*" component={errorPage} />
        
 </Switch>
);
export default Routes;
