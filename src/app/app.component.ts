import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() parrentMessage: EventEmitter<any> = new EventEmitter();
  userItem: any;

  onUserMessage($event){
    this.userItem = $event;
    this.parrentMessage.emit($event);
  }
}
