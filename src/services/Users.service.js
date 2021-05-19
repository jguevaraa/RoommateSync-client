import axios from 'axios';

export default class UserService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true
    })
  }


  get = () => this.instance.get("/");
  getOne = id => this.instance.get(`/${id}`);

}