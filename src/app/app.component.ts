import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  on : boolean = false;
  on1 : boolean = false;
  on2 : boolean = false;
  on3 : boolean = false;
  on4 : boolean = false;
  on5 : boolean = false;
  

  turnOn(){
    this.on = !this.on;
    console.log(this.on)
  }
  turnOn1(){
    this.on1 = !this.on1;
    console.log(this.on)
  }
  turnOn2(){
    this.on2 = !this.on2;
    console.log(this.on)
  }
  turnOn3(){
    this.on3 = !this.on3;
    console.log(this.on)
  }
  turnOn4(){
    this.on4 = !this.on4;
    console.log(this.on)
  }
  turnOn5(){
    this.on5 = !this.on5;
    console.log(this.on)
  }
}
