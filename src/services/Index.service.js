import axios from 'axios';

export default class IndexService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/`,
      withCredentials: true
    })
  }

  get = () => this.instance.get("/");

}