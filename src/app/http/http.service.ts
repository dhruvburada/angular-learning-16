import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators'; // ✅ Correct


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'https://angular-test-b92d0-default-rtdb.firebaseio.com/posts'
  // getData(): OperatorFunction<any> {
  //   return this.httpClient.get('https://angular-test-b92d0-default-rtdb.firebaseio.com/posts.json').pipe(map(data) => { ...data })
  // }

  sendData(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + ".json", data)

  }


  getData(): Observable<any[]> {
    return this.httpClient.get<{ [key: string]: { name: string, email: string } }>(
      this.baseUrl + ".json"
    ).pipe(
      map(data => {
        let postsArray: { id: string, name: string, email: string }[] = [];
        if (data) {
          for (const key in data) {
            if (data.hasOwnProperty(key)) {

              postsArray.push({ id: key, ...data[key] });
            }
          }
        }
        return postsArray;
      })
    );
  }

  clearData() {
    return this.httpClient.delete(this.baseUrl + ".json")
  }

  deleteUser(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id + '.json')
  }

}



