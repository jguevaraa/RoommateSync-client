import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/resources/RoundButton/RoundButton';
import { withAuth } from '../../context/auth.context';
import './Login.css';
import '../Signup/SignUp.css';

const EMAIL_PATTERN = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 

const validators = {
  email: (value) => {
    let message;
    if(!value){
      message = 'Email is required';
    } else if(!EMAIL_PATTERN.test(value)){
      message = 'Invalid email';
    }

    return message;
  },
  password: (value) => {
    let message;
    if(!value){
      message = 'Password is required';
    } else if(value.length < 3){
      message = 'Invalid password'
    }

    return message;
  },

}

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        email: "",
        password: ""
      },
      errors: {
        email: null,
        password: null
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields);
    this.props.login(this.state.fields);
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value)
      }
    })
  }



  render() {
    const { fields } = this.state;
    return (

     <div className="form-item">
         <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <section className="login-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">Login Now</h2>
                <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                    <div className="control has-icons-right"></div>
                    <input type="text" className="form-control" name="email" value={fields.email} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                    <input type="password" className="form-control" name="password" value={fields.password} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-check">
                  <RoundButton type="submit">
          Log in
        </RoundButton>
        <Link to="/signup">
              Don't you have an account? Sign up now!
              </Link>
                  </div>
                </form>
              </div>
              <div className="col-md-8 banner-sec">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                    <img className="imagefront" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-ch-abaton-a7b8436-1543916171.jpg"/>
                    </div>
                  </div>	   
                </div>
              </div>
            </div>
          </div></section>
     </div>

    )
  }
}

export default withAuth(Login);