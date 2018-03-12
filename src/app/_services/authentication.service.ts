import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(
        private http: Http,
         private config: AppConfig
        ) {
        // set token if saved in local storage
      //  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // this.token = currentUser && currentUser.token;

    }

    login(username: string, password: string): Observable<any> {

       let postData =   {username: username, password: password};
       let headers = new Headers();

       headers.append('Content-Type', 'application/json');
       headers.append('username', username);
       headers.append('password', password);

      return this.http.get(this.config.apiUrl_docFiling + '/logged', {headers: headers})
            .map((response: Response) => {
               //  let token = response.json() && response.json().token;
                   if (response.status === 200) {
                        let xUser= response.json();

                        localStorage.setItem('currentUser', JSON.stringify({id: xUser.id, username:xUser.username, company:xUser.company, role: xUser.role, password:password }));

                       return true;
                  }
                  else {
                       return response.json();
                    //  return false;
                  }
            })
          .catch(this.handleError);
   }

    logout(): void {
        // clear token remove user from local storage to log user out
         localStorage.removeItem('currentUser');

    }


       private handleError (error: Response | any) {
           let errMsg: string;
           if (error instanceof Response) {
             const body = error.json() || '';
             const err = body.error || JSON.stringify(body);
             errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
           } else {
             errMsg = error.message ? error.message : error.toString();
           }
           console.error(errMsg);
           return Observable.throw(errMsg);
         }
}
