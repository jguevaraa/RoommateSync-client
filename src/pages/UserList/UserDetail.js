import React from 'react';

import { Link } from 'react-router-dom';
import Private from '../../services/Private.service';
import { withAuth } from '../../context/auth.context';
import { withRouter } from 'react-router';
import UsersService from '../../services/Users.service';

class UserDetail extends React.Component {

    state={ userdata:{}}

    usersService = new UsersService();

    componentDidMount(){
        const id= this.props.match.params.id
        this.usersService.getOne(id)
        .then((user) => {
            this.setState({
                userdata:user.data
            })

        })
        .catch(error=> console.log(error))
    
    }
  
   Private = new Private();

   addOne(){
    const id= this.props.match.params.id
       this.Private.updateOne(id)
       .then((user) => {
        console.log(user)

    })
    .catch(error=> console.log(error))
   }

  render() {
      const{ _id, name,email, city, img}= this.state.userdata
    return(
        <div >
        <div className="img-container">
       
            <img className="imgage"src={img} alt={img} />
     
        </div>
            <p >{name }</p>
            <p >{email}</p>
            <p >{city }</p>
    
          <div>
    
            <button className="corner-right" onClick={() => this.addOne()}>add one</button>
          </div>
        </div>
    
      )

  }

  
}

export default withAuth(withRouter(UserDetail));