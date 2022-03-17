import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';
  nombtn=""

  list: string[] = []
  testo1:string="button1";
  testo2:string="button2";
  testo3:string="button3";
  testo4:string="button4";

  onClick1(){
    this.nombtn = "Button1"
    this.list.push(this.testo1)
  }

  onClick2(){
    this.nombtn = "Button2"
    this.list.push(this.testo2)
  }

  onClick3(){
    this.nombtn = "Button3"
    this.list.push(this.testo3)
  }

  onClick4(){
    this.nombtn = "Button4"
    this.list.push(this.testo4)
  }

}
