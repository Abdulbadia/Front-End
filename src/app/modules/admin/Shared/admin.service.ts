import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customers } from '../Standers/customers';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  get_Alladmins(): Observable<Customers[]> {
    return this.http.get<Customers[]>(`${environment.URL}/users/Getadmin`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }
}
