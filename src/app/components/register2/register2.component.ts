import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._registerForm = this._form.group({
      firstName: new FormControl,
      lastName: new FormControl,
      lastFour: new FormControl,
      userName: new FormControl
    });
  }

  onSubmit(){
    console.log(this._registerForm.value);
    this._authService.register(this._registerForm.value).subscribe(data => {
      console.log("test",data);
    });
  }

}



