import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categories } from '../Standers/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http: HttpClient) { }


  get_AllCata(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${environment.URL}/Category`).pipe(
      retry(2),
      catchError(err => { throw new Error(err) }))
  }

  add_Categories(body: Categories): Observable<Categories> {
    return this.http.post<Categories>(`${environment.URL}/Category`, body, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }

  Delete_Categories(id): Observable<Categories> {
    return this.http.delete<Categories>(`${environment.URL}/Category/${id}`, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
  }
  UpdateCategory(id, body: Categories): Observable<Categories> {
    return this.http.put<Categories>(`${environment.URL}/Category/${id}`, body, { headers: { 'Content-Type': 'application/json' } }).pipe(retry(2), catchError(this.handleError))
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
