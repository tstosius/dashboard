import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Association } from '../interfaces/association';

@Injectable()
export class ApiService {

  private baseURL = 'http://localhost:3000/api/v1'

  constructor(private http: HttpClient) {}

  getAssociations() {
    return this.http.get<Association[]>(`${this.baseURL}/associations`)
  }
}
