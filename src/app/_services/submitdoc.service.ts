import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { AppConfig } from '../app.config';
import { AppSetting } from './appsetting.service'



@Injectable()
export class SubmitDocService {

constructor(
        private http: Http,
         private config: AppConfig
        ) {}


    saveDocument(document){
      let apiUrl = this.config.apiUrl_docFiling;
      return this.http.post(apiUrl, document , '')
      .map(res => res.json())
      .catch(this.handleError);
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
