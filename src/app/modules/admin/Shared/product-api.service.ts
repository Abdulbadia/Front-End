import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from '../Standers/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPiService {
  constructor(private http: HttpClient) { }
  get_AllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.URL}/Product`, { headers: { 'Accept': 'application/json' } }).pipe(
      retry(3),
      catchError(error => {
        throw new Error(error.message)
      })
    )
  }

  get_productByID(pid: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.URL}/Product/${pid}`,
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(retry(3),
        catchError(this.handleError))
  }
  Create_product(body: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${environment.URL}/Product`, JSON.stringify(body),
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(retry(2),
        catchError(this.handleError),

      )

  }
  Edit_product_edit(pid: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${environment.URL}/Product/${pid}`, product,
      { headers: { 'Content-Type': 'application/json' } }).pipe(
        retry(2),
        catchError(this.handleError))
  }

  DeleteProduct(id): Observable<IProduct> {
    return this.http.delete<IProduct>(`${environment.URL}/Product/${id}`, { headers: { 'Content-Type': 'application/json' } }).
      pipe(retry(2),
        catchError(this.handleError))
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
