import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages : any[];
  messageSubscription : Subscription;
  constructor( private contactService : ContactService) {
    this.contactService.getAllMessage();
   }

  ngOnInit() {
    this.messageSubscription = this.contactService.commentSubject.subscribe((messages : any[]) =>{
      this.messages = messages;
    });
    this.contactService.emitComments();
  }

  ngOnDestroy(){
    this.contactService.commentSubject.unsubscribe();
  }

}
