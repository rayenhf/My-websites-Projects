import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MydataService } from '../services/mydata.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {
  data: User = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };
  msg: string = '';
  a:boolean=false;
  constructor(private http: HttpClient, private router: Router,private MydataService: MydataService) {}


    signup() {
      const url = 'http://localhost:4000/users';
      this.http.get<any[]>(url).pipe(
        map(users => {
          const matchedUser = users.find(user => user.email === this.data.email);
          if (matchedUser) {
            alert('This email is already taken. Please try another one.');
          } else {
            this.http.post(url, this.data).subscribe(
              () => {
                this.msg = 'Sign Up Successfully!';
                this.a = true;
                setTimeout(() => {
                  this.MydataService.isLoggedIn = true;
                  this.router.navigate(['/anime']);
                }, 2000);
              },
            );
          }
        }),
             ).subscribe();
    }  


    saveUserData() {
    

      const url = 'http://localhost:4000/users';
      this.http.get<any[]>(url).pipe(
        map(users => {
          const matchedUser = users.find(user => user.email === this.data.email);
          if (matchedUser) {
            this.data.name=matchedUser.name;
            this.data.lastname=matchedUser.lastname;
            this.data.email=matchedUser.email;
          }
        })
      ).subscribe();
      this.MydataService.setUserData( this.data);
    }












  }


interface User {
  id?: number;
  name: string | String;
  lastname: string | String;
  email: string;
  password: string;
}




