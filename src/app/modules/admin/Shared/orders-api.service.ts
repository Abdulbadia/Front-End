import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Orders } from '../Standers/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(private http: HttpClient) { }

  getAllorders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${environment.URL}/Order`,
      { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  Delete_Order(id: number): Observable<Orders> {
    return this.http.delete<Orders>(`${environment.URL}/order/${id}`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  get_ordersByID(id: number): Observable<Orders> {
    return this.http.get<Orders>(`${environment.URL}/order/${id}`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log(error.message);
      console.error('An error occurred:', error.error);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
