import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    email:string='';
    text='text!'
    
    test='abcdefghijklmnopqrstuvwxyz';

    constructor(){
    // let i=0;        
    //   setInterval(()=>{
    //     if(i===26) return;
    //     this.email+=this.test.charAt(i)
    //     i++;

    //   },500)
    }

    onSubmit(){
      console.log('Form has been submitted using email: ',this.email);
      
    }
}
