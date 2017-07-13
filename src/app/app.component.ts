import { Component } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent  {

   newTodo: string;
   name: string;
   lists: List[];
   newList: List;

   constructor() {
     this.name = 'TO-DO App1';
     this.newTodo = '';
     this.lists = [];

   }

   addList() {

    let temp = { content : '',
                isFlag: false};
    temp.content = this.newTodo;

    this.lists.push(temp);
    this.newTodo = '';
   }

   deleteList(index: number) {

     this.lists.splice(index, 1);

   }

   updateList(index: number , value: string) {

    this.lists[index].content = value;
    this.lists[index].isFlag = !this.lists[index].isFlag;
   }
}
