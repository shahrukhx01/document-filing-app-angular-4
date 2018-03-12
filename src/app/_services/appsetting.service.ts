import { Injectable } from '@angular/core';
import {Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppSetting {
private _password: string;
 constructor(){}


    getCompany() {
       let x_user=this.checkSession();
       if(x_user) return x_user.company;
    }

    getUser() {
       let x_user=this.checkSession();
       if(x_user) return x_user.username;
    }

    checkSession (){
         if (localStorage.getItem('currentUser')) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this._password = currentUser.password;
           return currentUser;
         } else return null;
    }

    
    setHeader() {
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('username', this.getUser());
      headers.append('password', this._password);
      return new RequestOptions({ headers: headers });

   }

}