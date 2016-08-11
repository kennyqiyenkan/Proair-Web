import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { GoogleRecaptchaDirective } from './recaptcha.component';
@Component({
  selector: 'contact-sheet',
  template:
  `
  <div class="contactUsSheet" [ngClass]="{ 'inactive' : !toShow }">
    <div class="contactUsSheet div" [ngClass]="{ 'inactive' : !toShow }">
      <h2>Leave Us A Message</h2>
      <p>We will get back to you as soon as possible. Please note that solicitors and third parties will not be entertained.</p>
      <form>
        <div class="inputField">
          <input id="nameField" [(ngClass)]="name" class="inputField oneLineField" type="text" required>
          <label for="nameField" class="inputField placeholder">Name</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <input id="emailField" [(ngClass)]="email" class="inputField oneLineField" type="email" required>
          <label for="emailField" class="inputField placeholder">Email</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <input id="titleField" [(ngClass)]="title" class="inputField oneLineField" type="text" required>
          <label for="titleField" class="inputField placeholder">Subject</label>
          <span class="inputField underline"></span>
          <span class="inputField bar"></span>
        </div>
        <div class="inputField">
          <textarea id="messageField" [(ngClass)]="message" class="inputField multiLineField" type="text" required></textarea>
          <label for="messageField" class="inputField placeholder">Message</label>
        </div>
        <div style="padding:0;" googlerecaptcha
    (resolve)="resolved($event)" [site-key]="siteKey"></div>

      </form>
      <ul>
        <li>
          <button class="roundedButton cancel" (click)="close()">Cancel</button>
        </li>
        <li>
          <button class="roundedButton default" (click)="close('send')">Send</button>
        </li>
      </ul>
    </div>
  </div>
  `
  ,
  styles: [
    require('./assets/stylesheets/css/contactUsSheet.css'),
    require('./assets/stylesheets/css/inputField.css'),
    require('./assets/stylesheets/css/roundedButton.css'),
  ]
  ,
  directives: [GoogleRecaptchaDirective]
  ,
  providers: [EmailService]
})
export class ContactSheetComponent implements OnInit{
  @Input() toShow:boolean;
  @Output() change:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private emailService:EmailService) {}

  private siteKey = "6LfZuiYTAAAAAMRzu7e-qsNfljAvyQkSvKpmSa4S";

  private name:string;
  private email:string;
  private title:string;
  private message:string;

  ngOnInit() { }

  close(command = "cancel")
  {
    if(command === "cancel")
    {
      this.dismissSheet();
    }else{
      this.validify();
    }
  }

  resolved(response)
  {

  }

  validify()
  {//check fields and google reCAPTCHA
    this.sendEmail();
  }

  sendEmail()
  {
    //only once send succeeds
    this.emailService.sendEmail(this.name, this.email, this.title, this.message);
    this.toShow = false;
    this.change.emit(this.toShow);
  }

  dismissSheet()
  {
    this.name = "";
    this.email = "";
    this.title = "";
    this.message = "";
    this.toShow = false;
    this.change.emit(this.toShow);
  }
}