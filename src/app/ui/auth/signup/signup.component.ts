import { Component, OnInit,/* OnDestroy*/ } from "@angular/core";
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent /*implements OnInit, OnDestroy*/ {
  isLoading = false;
  /*private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}*/
  /*private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}*/
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = true;
  hide = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

    /*this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );*/


  /*onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }*/

