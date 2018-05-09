import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    console.log("EXPORT HTTPSERVICE HIT!!!")
    this.getTasks();
  }

  getTasks(){
    //our http response is observable, strore it in variable
    let tempObservable = this._http.get('/tasks');
    console.log(this._http.get("/tasks"))
    console.log("TEMP OBSERVABLE",tempObservable);
    //subscribe to our observable and provide the code we would like to do with our data from the
    tempObservable.subscribe(data => {
      console.log("Got our tasks!", data)
    });
  }
}
