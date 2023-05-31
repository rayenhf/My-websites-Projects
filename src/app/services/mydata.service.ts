import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restoredata } from "../model/restoredata";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  constructor(private http: HttpClient) { }
  isLoggedIn: boolean = false;
  getanime(){
    return this.http.get<restoredata[]>('http://localhost:3000/animedb')
  }
  getmovie(){
    return this.http.get<restoredata[]>('http://localhost:3000/seriedb')
  }
  logo(){
    return this.isLoggedIn =true ;
  }
  private userData = new BehaviorSubject<any>(null);
  userData$ = this.userData.asObservable();

  setUserData(data: any) {
    this.userData.next(data);
  }
}
