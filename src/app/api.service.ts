import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from './payment';
import { Article } from './article';
import { Balance } from './balance';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Define API
  // 404 not found, switching to Mock Server
  //apiURL = 'http://polls.apiblueprint.org';
  apiURL = 'http://private-0282d0-testtechniquefront.apiary-mock.com';

  constructor(private http: HttpClient) { }
  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  // HttpClient API get() method 
  getAllPayments(): Observable<Payment> {
    return this.http.get<Payment>(this.apiURL + '/payments', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method 
  createNewPayment(id): Observable<any> {
    return this.http.post<any>(this.apiURL + '/payments', id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method 
  getBalance(): Observable<Balance> {
    return this.http.get<Balance>(this.apiURL + '/balance', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method 
  getAllArticles(): Observable<Article> {
    return this.http.get<Article>(this.apiURL + '/articles', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}