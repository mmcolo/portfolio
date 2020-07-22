import { Comment } from '../models/commentModels';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ContactService {

  constructor (private http: HttpClient){}

  private  comments: Comment[] = []; //= [{email: '', content: ''}];
  public commentSubject = new Subject<Comment[]>();

  emitComments(){
    this.commentSubject.next(this.comments.slice());
  }

  sendComment(comment : Comment){
    return new Promise((resolve, reject) => {
      this.http.post('http://127.0.0.1:3000/api/message', comment).subscribe(
        (response) =>{
          resolve(response);
        },
        (error) =>{
          reject(error);
        }
      );
    });
    //this.comments.push(comment);
    //this.emitComments()
  }

  //Get All message
  getAllMessage(){
    this.http.get('http://127.0.0.1:3000/api/message').subscribe(
      (comment : Comment[]) => {
        if(comment){
          this.comments = comment;
          this.emitComments();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
