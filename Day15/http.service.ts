import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    // private baseUrl:string='http://localhost:8080/api/';

    private baseUrl:string=environment.baseurl;


  constructor(private http:HttpClient) { }


  login(obj:any){
     return (this.http.post(`${this.baseUrl}login`,obj));
  }

  getAllEmp(){
   return  (this.http.get(`${this.baseUrl}getallemployee`))
  }

  getParticularEmp(id:any){
    return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`))
  }

  getAllCountry(){
       return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  AddRecord(obj:any){
     return (this.http.post(`${this.baseUrl}addemployee`,obj,{
        responseType:'text'
      }));
  }

  UpdateEmp(obj:any){
     return (this.http.put(`${this.baseUrl}updateemployee`,obj,{
        responseType:"text"
      }));
  }

  DeleteEmp(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{
        responseType:'text'
    }));
  }


}
