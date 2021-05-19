import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/resources/RoundButton/RoundButton';
import { withAuth } from '../../context/auth.context';
import './SignUp.css';

const EMAIL_PATTERN = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 

const validators = {
  username: (value) => {
    let message;
    if(!value){
      message = 'Username is required';
    }

    return message;
  },
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

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        username: "",
        email: "",
        password: ""
      },
      errors: {
        username: null,
        email: null,
        password: null
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields);
    this.props.signup(this.state.fields);
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
     <section className="signin-block">
       <div className="container">
         <div className="row">
           <div className="col-md-4 login-sec">
             <h2 className="text-center">Sigin Now</h2>
            <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>           

            <div className="form-group">
                    <label htmlFor="username" className="text-uppercase">Username: </label>
                    <div className="control has-icons-right"></div>
                    <input type="text" className="form-control" name="username" value={fields.username} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                    <div className="control has-icons-right"></div>
                    <input type="text" className="form-control" name="email" value={fields.email} onChange={(e) => this.handleChange(e)} />
                  </div>            
                  <div className="form-group">
                    <label htmlFor="password" className="text-uppercase">Password</label>
                    <div className="control has-icons-right"></div>
                    <input type="password" className="form-control" name="password" value={fields.password} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-check">
              <RoundButton type="submit">
                Create user
              </RoundButton>
             </div>

             </form>
             <div className="has-text-centered">
             <Link to="/login">
               <span> Already have an account? Log in now ! </span>
               </Link>
               </div>
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

export default withAuth(Signup);