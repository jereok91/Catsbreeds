import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespontCatsI } from '../interface/respontCatsInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private http: HttpClient
  ) {}
   
  httpOptions = new HttpHeaders ({'API-KEY': 'bda53789-d59e-46cd-9bc4-2936630fde39'});

  getCats() :Observable<RespontCatsI[]>  {
    return this.http.get<RespontCatsI[]>('https://api.thecatapi.com/v1/breeds', {headers: this.httpOptions});
  }

}


