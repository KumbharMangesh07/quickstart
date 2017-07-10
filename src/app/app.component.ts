import { Component } from '@angular/core';
import { List } from './list';

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
   
   //lists : string[] ;
   lists : List[];
   newList : List;


   constructor(){
     
     this.name = "TO-DO App1";
     this.newTodo ="";
     this.lists=[];

   }

   addList(){
    var temp ={ content : ""};
    temp.content = this.newTodo;

    this.lists.push(temp);

    this.newTodo = "";
   }

   deleteList(index : number){

     this.lists.splice(index,1);
   }
}
