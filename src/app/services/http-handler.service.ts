import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) {
  }

  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  get images(): any {
    return this.http.get<any>('https://randomuser.me/api/?&results=20', this.httpheaders);
  }
}
