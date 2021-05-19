import React from "react";
import Private from '../../services/Private.service';
import { withAuth } from '../../context/auth.context';
import RoundButton from '../../components/resources/RoundButton/RoundButton';
import { Link } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

class Profile extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            user: {
                fav: [],
            },
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;
        new Private().get()
        .then((response) => {
            console.log(response)
            this.setState({ 
                user : response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
         return this.state.users.message.map(users => {
        return(
            <div className="container mt-5 text-center">
            <Card className="profile--card mx-3">
            <Card.Body>

            <p className="list-group-flush">
            <h1>{this.props.user.name} says {this.props.user.messageSend}!!!</h1>
            <h1>{this.props.user.name} says {this.props.user.messageRecive}!!!</h1>
            <p>mail: { this.props.user.email }</p>
            <p>{ this.props.city }</p>
            <p>{ this.props.email } </p>
            </p>
            </Card.Body>
            <div className="form-check">
            <Link to="/profile/edit">
              <RoundButton>
                edit
              </RoundButton>
              </Link>
             </div>
             </Card>
</div>
        )
       }
         )
    } 
}

export default withAuth(Profile);