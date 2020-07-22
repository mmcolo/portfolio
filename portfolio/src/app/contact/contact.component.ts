import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Comment } from '../models/commentModels';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  commentForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService : ContactService,
    private router : Router) { }

  ngOnInit() {
    this.initForm();
  }
  
  initForm(){
    this.commentForm = this.formBuilder.group({
      email : '',
      content: ''
    });
  }

  onSubmitForm(){
    const formValue = this.commentForm.value;
    const newComment = new Comment(
      formValue['email'],
      formValue['content']
    );
    this.contactService.sendComment(newComment);
    this.router.navigate(['/home']);
  }
}
