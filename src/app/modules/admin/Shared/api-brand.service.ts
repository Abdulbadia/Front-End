import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBrand } from '../Standers/ibrand';

@Injectable({
  providedIn: 'root'
})
export class ApiBrandService {

  constructor(private http: HttpClient) { }

  get_AllBrandIds(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>(`${environment.URL}/Brands`, { headers: { 'Content-Type': 'application/json' } }).pipe(
      retry(2),
      catchError(this.handleError))
  }

  add_Brand(body: IBrand): Observable<IBrand> {
    return this.http.post<IBrand>(`${environment.URL}/Brands`, body, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  Delete_Brand(id: number): Observable<IBrand> {
    return this.http.delete<IBrand>(`${environment.URL}/Brands/${id}`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }
  update_Brand(id, body: IBrand): Observable<IBrand> {
    return this.http.put<IBrand>(`${environment.URL}/Brands/${id}`, body, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
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
