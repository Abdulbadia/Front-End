import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customers } from '../Standers/customers';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      console.log(error.message);
      console.error('An error occurred:', error.error);
    }
    else if (error.status === 404) {
      console.log(error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  get_AllUSers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(`${environment.URL}/users/GetUsers`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  Delete_USers(email: string): Observable<Customers> {
    return this.http.delete<Customers>(`${environment.URL}/users/${email}`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  Edit_User(email: string, body: Customers): Observable<Customers> {
    return this.http.post<Customers>(`${environment.URL}/users/${email}`, body, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }
  get_USerbyemail(email: string): Observable<Customers> {
    return this.http.get<Customers>(`${environment.URL}/users/${email}`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }
}
