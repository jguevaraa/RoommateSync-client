import axios from 'axios';

export default class MessageService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/messages`,
      withCredentials: true
    })
  }

  create = data => this.instance.post(`/message/${id}`, data);

}