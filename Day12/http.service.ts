import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    private baseUrl:string='http://localhost:8080/api/';

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

}
