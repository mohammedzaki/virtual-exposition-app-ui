import { AfterViewChecked, Component, Input } from '@angular/core';
import { Message } from '../../model/Message';

@Component({
  selector: 'message-com',
  templateUrl: 'message.component.html'
})
export class MessageComponent implements AfterViewChecked{
  @Input() message: Message;

  constructor(){

  }

  ngAfterViewChecked() {
    /*if(this.message){
      setTimeout(() => {
        this.message = new Message();
      }, 5000)
    }*/
  }
}