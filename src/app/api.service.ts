import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface IItemData {
  name: string
  description: string
  image_url: string
}

interface IUpdateItemData {
  id: string
  name: string
  description: string
  image_url: string
}

interface IContactData {
  name: string
  email: string
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems(){
    return this.httpClient.get("http://localhost:3333/api/public/items");
  }

  sendItemRequest(data: IItemData) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.post("http://localhost:3333/api/public/items", data, httpOptions);
  }

  sendItemUpdateRequest(data: IUpdateItemData) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.put("http://localhost:3333/api/public/items", data, httpOptions);
  }

  sendItemDeleteRequest(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.delete("http://localhost:3333/api/public/items", { id }, httpOptions);
  }
  sendContactRequest(data: IContactData) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.post("http://localhost:3333/api/public/contacts", data, httpOptions);
  }
}
