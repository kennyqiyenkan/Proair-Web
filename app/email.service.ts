import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import './rxjs-operators';

@Injectable()
export class EmailService
{
  constructor(private http: Http) { }

  sendEmail(name,email,title,content)
  {
    var message:string =
    `
      From    : ${name}
      Email   : ${email}
      Title   : ${title}
      Message :
      ${content}
    `;
  }
  
  handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
