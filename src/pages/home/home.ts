import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myTodoList = [ 'Add your ToDo entries here!'];
  nextTodo = "";

  constructor(public navCtrl: NavController) {  
  }

  delItem(index) {
  	this.myTodoList.splice(index, 1);
  	//
  }

  addItem() {
  	if (this.nextTodo != "") {
  		this.myTodoList.push(this.nextTodo);
  		this.nextTodo = "";
  	}
  }

  isAddDisabled() {
    return this.nextTodo == "";
  }

}
