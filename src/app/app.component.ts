import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

// class List{

//   content : string;
//   highlight : boolean
// }
export class AppComponent  {
   

   newTodo : string;
   name :string ; 
   lists : string[] ;

   constructor(){
     
     this.name = "TO-DO App";
     this.lists = [];
     this.newTodo =""
   }
   addList(){

    this.lists.push(this.newTodo);
    this.newTodo = ""; 

   }

   deleteList(index : number){

     this.lists.splice(index,1);
   }
}
