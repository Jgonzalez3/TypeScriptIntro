import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  constructor(private _httpService: HttpService){
    console.log("Export APP COMPONENT HIT!!")
    this._httpService.getTasks();
  }
  getTasksFromService(){
    this._httpService.getTasks();
  }
}
