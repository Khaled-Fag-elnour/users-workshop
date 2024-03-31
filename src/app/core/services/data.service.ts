import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(pageNumber: number) {
    return this.http.get(`${environment.api_url_prefix}/users/?page=${pageNumber}`,
    { headers: new HttpHeaders({'Content-Type': 'application/json',}) });
  }

  getUserDetails(id: number) {
    return this.http.get(`${environment.api_url_prefix}/users/${id}`,
    { headers: new HttpHeaders({'Content-Type': 'application/json',}) });
  }
}
