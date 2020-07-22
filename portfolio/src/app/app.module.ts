import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentComponent } from './present/present.component';
import { CommentComponent } from './comment/comment.component';

import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ServiceComponent } from './service/service.component';
import { RealiseComponent } from './realise/realise.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';
import { AdminComponent } from './admin/admin.component';

const routes : Routes = [
  { path : 'home', component: PresentComponent },
  { path : 'comment', component : MessageComponent},
  { path : 'message', component: MessageComponent},
  { path : '**', redirectTo : '/home', pathMatch: 'full' } //redirect to `home`
]

@NgModule({
  declarations: [
    AppComponent,
    PresentComponent,
    CommentComponent,
    NavComponent,
    ServiceComponent,
    RealiseComponent,
    ContactComponent,
    MessageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
