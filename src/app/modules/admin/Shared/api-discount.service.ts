import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDiscountService {

  constructor(private http: HttpClient) { }

  // getAllDiscounts(): Observable<discount[]> {
  //   return this.http.get<discount[]>(`${environment.URL}/)
  // }

}
