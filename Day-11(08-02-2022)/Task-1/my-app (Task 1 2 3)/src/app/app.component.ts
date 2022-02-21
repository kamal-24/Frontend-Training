import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  number:number=1;
  
  plus(){
    this.number+=1
  }
  minus(){
    if(this.number<=0){
      alert("Going negative")
    }
    else{this.number-=1}
    
  }
  num(){
    return this.number;
  }
}

