import { Component, OnInit,/* OnDestroy*/ } from "@angular/core";
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent /*implements OnInit, OnDestroy*/ {
  isLoading = false;
  /*private authStatusSub: Subscription;*/

  constructor(public authService: AuthService, private _formBuilder: FormBuilder) {}
  /*private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}*/
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = true;
  hide = true;



  ngOnInit() {/*
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });*/
  }


    /*this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );*/


  onSignup(form: NgForm) {
    form.value.role = '60c4ce5961d0fc21a85c9206';
    if (form.invalid) {
      console.log(form);
      return;
    }

    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password, form.value.name, form.value.role);
  }
/*
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }*/
}
