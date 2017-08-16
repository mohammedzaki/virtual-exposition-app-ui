import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APIConstants } from '../../helpers/Constants/const-apis';
import { Message } from '../../model/Message';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public returnUrl: string;
  message: Message;

  constructor(fb:FormBuilder,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private router: Router,
              private apiConst: APIConstants) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit(values):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);

      let username = values.email;
      let password = values.password;
      this.loginService.getAccessToken(username, password).subscribe(data => {

        console.log(data);
        if(data.success && data.returnObject != null){
          // set local storage data
          localStorage.setItem(this.apiConst.LSTOKEN, data.returnObject.access_token.toString());
          localStorage.setItem(this.apiConst.LSUSEREMAIL, values.email);
          localStorage.setItem(this.apiConst.LSUSERID, data.returnObject.id);
          localStorage.setItem(this.apiConst.LSHOSPITALID, data.returnObject.hospitalId);
          localStorage.setItem(this.apiConst.LSHOSPITALName, data.returnObject.hospital.name);

          if(localStorage.getItem(this.apiConst.LSTOKEN) !== null && localStorage.getItem(this.apiConst.LSTOKEN) != 'undefined'){

            // login successful so redirect to return url
            this.router.navigateByUrl(this.returnUrl);
          }else {
            this.submitted = false;

            // message couldn't set the token
            this.message.type = 'danger';
            this.message.body = 'Token setting Error';
          }
        }else {
          this.submitted = false;

          // message couldn't set the token
          this.message.type = 'danger';
          this.message.body = data.message;

        }


      }, error => {
        console.log(error);
        this.submitted = false;
      });
    }
  }
}
