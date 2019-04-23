import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private serverUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  login(userCredentials: any) {
    console.log('duhdihhdd', userCredentials);
    return this.http.post(this.serverUrl + 'login', userCredentials);
  }

  getAllOrders() {
    return this.http.get(this.serverUrl + 'getOrders');
  }

  addOrder(order) {
    return this.http.post(this.serverUrl + 'addNewOrder', order);
  }

  deleteOrder(orderNumber) {
    return this.http.post(this.serverUrl + 'deleteOrder', orderNumber);
  }

  updateOrder(orderNumber) {
    return this.http.post(this.serverUrl + 'updateOrder', orderNumber);
  }
}
