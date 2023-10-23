//Una de las funciones de los servicios es hacer las peticiones http
//pero tambien se puede usar para reutilizacion de codigo
//o comunicacion entre componentes

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) { 
    //this.myAppUrl = environment.endpoint;
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/productos/'
  }

  //En vez de usar postman se usa el cliente de angular:
  getListProducts(): Observable<Product[]>{
     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  

  deleteProduct(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveProduct(product: Product): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product );
 }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateProduct(id: number, product: Product): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }

  
}
