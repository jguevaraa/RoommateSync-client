import React from 'react';
import AuthService from '../services/Auth.service';

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component{
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null
  }

  authService = new AuthService();

  async componentDidMount(){
    try {
      const result = await this.authService.isLoggedIn();
      if(result){
        console.log(result);
        this.setState({ isLoggedIn: true, isLoading: false, user: result.data });
      }
    } catch(err){
      this.setState({ isLoggedIn: false, isLoading: false, user: null });
    }
  }

  signup = async (data) => {
    try {
      const response = await this.authService.signup(data);
      if(response){
        this.setState({ isLoggedIn: true, user: response.data })
      }
    } catch(err){
      this.setState({ isLoggedIn: false, user: null })
    }
  }

  login = (data) => {
    console.log(data)
    this.authService.login(data)
    .then(response => this.setState({ isLoggedIn: true, user: response.data }))
    .catch(() => this.setState({ isLoggedIn: false, user: null }))
  }

  logout = () => {
    this.authService.logout()
    .then(() => this.setState({ isLoggedIn: false, user: null }))
    .catch(error => console.error(error))
  }

  edit = (data) => {
    this.authService.edit(data)
    .then(response => this.setState({ ...this.state, user: response.data }))
    .catch(error => console.error(error))
  }

  render(){
    const { isLoggedIn, isLoading, user } = this.state;

    if(isLoading) return <p>Loading...</p>;

    return (
      <Provider value={{ isLoading, isLoggedIn, user, signup: this.signup, login: this.login, logout: this.logout, edit: this.edit }}>
        {this.props.children}
      </Provider>
    )
  }
}

const withAuth = (WrappedComponent) => {

  return function(props){
    return (
      <Consumer>
        {
          (value) => {
            const { isLoading, isLoggedIn, user, signup, login, logout, edit } = value;

            return (
              <WrappedComponent
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                user={user}
                signup={signup}
                login={login}
                logout={logout}
                edit={edit}
                {...props}

              />
            )
          }
        }
      </Consumer>
    )
  }
}

export { AuthProvider, withAuth };