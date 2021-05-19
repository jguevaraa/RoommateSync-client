import axios from 'axios';

export default class PrivateService{
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/private`,
      withCredentials: true
    })
  }

  create = data => this.instance.post("/", data);

  get = () => this.instance.get("/profile");
  updateOne = (id, data) => this.instance.put("/profile/edit", data);
  get = () => this.instance.get("/profile/favorites");
 
  getOne = id => this.instance.get(`/profile/favorites/${id}`);
  updateOne = (id, data) => this.instance.put(`/profile/add/${id}`, data);
  deleteOne = (id, data) => this.instance.put(`/profile/add/${id}`, data);


 

}