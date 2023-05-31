import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MydataService } from '../services/mydata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  name: string ='';
  lastname: string ='';
  email: string = '';
  password: string = '';
  msg: string = '';
  a:boolean=false;
  constructor(private http: HttpClient, private router: Router,public MydataService: MydataService) {}

  login() {
    const url = 'http://localhost:4000/users';
    this.http.get<any[]>(url).pipe(
      map(users => {
        const matchedUser = users.find(user => user.email === this.email && user.password === this.password);

        if (matchedUser) {
          this.name=matchedUser.name;
          this.lastname=matchedUser.lastname;
          this.msg=('Welcome back '+this.name+' '+this.lastname+' again ! ');
          this.a=true;
          setTimeout(() => {
            this.MydataService.isLoggedIn = true;
            this.router.navigate(['/anime']);

          }, 500);
        } else {
          alert('Invalid email or password.');
        }
      })
    ).subscribe();
  }

  saveUserData() {
    
    const userData = {
      name:String,
      lastname:String,
      email:String,
    };
    const url = 'http://localhost:4000/users';
    this.http.get<any[]>(url).pipe(
      map(users => {
        const matchedUser = users.find(user => user.email === this.email && user.password === this.password);

        if (matchedUser) {
          userData.name=matchedUser.name;
          userData.lastname=matchedUser.lastname;
          userData.email=matchedUser.email;
         
        }
      })
    ).subscribe();
    this.MydataService.setUserData(userData);
  }

  
}
