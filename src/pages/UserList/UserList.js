import React, { Component } from 'react'
import uSerService from '../../services/Users.service'
import { Link } from 'react-router-dom';

export default class userList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users: []
    }
    this.uSerService = new uSerService();
  
  }

  refreshState() {
    this.uSerService.get()
      .then(response => {
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
  }

  displayUsers(){
    return this.state.users.map(users => {
  return (
          <div class="container" key={users._id}>
            <div className="section">
            <div id="app" className="row columns is-multiline">
            <div v-for="card in cardData" key="card.id" className="column is-4">
            <div className="card large">
            <div className="card-image">
              <figure className="image is-16by9">
              <img src="card.image" alt="Image" ></img>

 
              </figure>
             
              </div>
              <div className="media-content">
              <p class="title is-4 no-padding">{users.name}</p>

              <span class="title is-6">
              <p> {users.email} </p> 
      
              <p>{users.city}</p>
              <p>{users.about}</p>
              </span> 
              </div>
              <Link to={"userList/" + users._id}>
              go to profile
              </Link>
              </div>
              </div>
              </div>
              </div>
          </div>
          
       )
    })
  }

  render() {
    return (
     
        <div>
        <p>hola</p>
          {
            this.displayUsers()
          }
          
         
        </div>
     
    )
  }
}
