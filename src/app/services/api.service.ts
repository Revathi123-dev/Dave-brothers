import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/Company",data);
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/Company");
  }

  postdata(data:any){
    return this.http.post<any>("http://localhost:3000/profile",data);

  }

  getProducts(){
    return this.http.get<any>("http://localhost:3000/profile");
  }
  postservicedata(data:any){
    return this.http.post<any>("http://localhost:3000/security",data);

  }

  getservicedata(){
    return this.http.get<any>("http://localhost:3000/security");
  }

  
}
