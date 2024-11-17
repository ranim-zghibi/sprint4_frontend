import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parfum } from '../model/parfum.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})


export class ParfumsService {

 

  apiURL: string = 'http://localhost:8070/parfums/api/all';


  parfums! : Parfum[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeParfum(): Observable<Parfum[]>{
    return this.http.get<Parfum[]>(this.apiURL);
    }

}
