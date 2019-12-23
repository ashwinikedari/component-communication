import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageToSendC:string = "this is input from parent to child.";
  title = "parent works!";
 
  receivedChildMessage: string;
  constructor() { }

  ngOnInit() {
  }
  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
}
