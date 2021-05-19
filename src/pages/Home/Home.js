import React from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/resources/RoundButton/RoundButton'
import './Home.css';



export default function Home() {
  return (
    <div className="Home">
         <img src="https://www.pngjoy.com/pngl/11/339214_house-icon-icono-casa-amarillo-png-png-download.png" className="App-logo" alt="logo" />
      <span className="text-center my-2 mx-5">
      <small className="color--green">Welcome to</small>
      <h3 className="pb-4">RoomSYNC</h3>
      <strong>RoomSYNC</strong> offers you an option to serch.....
      </span>
      <>

      
      <div className="row">
          <Link to="/signup" className="App-link mt-3 mx-2">
          <RoundButton>
          signup
            </RoundButton>
            </Link>
          <Link to="/login" className="App-link mt-3 mx-2">
          <RoundButton>
          Login
          </RoundButton>
          </Link>
        </div>
        {/* <div className="row">
          <Link to="/demo" className="App-link mt-3 mx-2">
          <RoundButton>
          Demo
          </RoundButton>
          </Link>
      </div> */}
      </>
   
  </div>


  )
}
