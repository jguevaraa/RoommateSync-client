import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const validators = {
    username: (value) => {
        let message;
        if (!value) {
        message = "Username name is required";
        } else if (value.length < 5) {
        message = "Invalid username";
        }
        return message;
    },

    password: (value) => {
        let message;
        if (!value) {
        message = "Password is required";
        } else if (value.length < 5) {
        message = "Invalid password";
        }
        return message;
    },

    email: (value) => {
        let message;
        if (!value) {
        message = "email is required";
        } else if (value.length < 5) {
        message = "Invalid email";
        }
        return message;
    },
}

class EditUser extends Component {
    constructor(props){
    super(props);
        this.state = {
            fields: {
                username: "",
                password: "",
                email: "",
            },
            errors: {
                username: null,
                password: null,
                email: null,
            }
        }
    }
  
    handleSubmit(event){
        event.preventDefault();
        if(this.isValid()){
            const id = this.props.match.params.id
            const uploadData = this.state.fields
            this.props.updateOne(id, uploadData);
            
            // RecipesService.updateOne(id, uploadData)
            // .then(() => {
            //     this.props.updateOne(id, uploadData);
            //     console.log('updated')
            // })
            // .catch((err) => console.error(err))
        }
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

    isValid() {
        const { errors } = this.state;
        return !Object.keys(errors).some(key => errors[key]);
    }

    render() {
        const { fields, errors } = this.state;
        return (
        <form onSubmit={(event) => this.handleSubmit(event)} >
            <div className="form-item">
                <label htmlFor="username">Username: </label>
                <input className={`${errors.username ? "error-input" : ""}`} type="text" name="username" value={fields.username} onChange={(event) => this.handleChange(event)} />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div className="form-item">
                <label htmlFor="email">Email: </label>
                <input className={`${errors.email ? "error-input" : ""}`} type="text" name="email" value={fields.email} onChange={(event) => this.handleChange(event)} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="form-item">
                <label htmlFor="password">Password: </label>
                <input className={`${errors.password ? "error-input" : ""}`} type="text" name="password" value={fields.password} onChange={(event) => this.handleChange(event)} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button onClick={(data) => this.props.edit(data)} disabled={!this.isValid()} type="submit">Update Chef</button>
            <Link to="/recipes">Home</Link>
        </form>
      )
    }
  }
  
  export default withAuth(withRouter(EditUser));