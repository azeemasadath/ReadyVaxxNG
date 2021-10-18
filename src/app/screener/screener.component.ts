import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray} from '@angular/forms'

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.css']
})
export class ScreenerComponent implements OnInit {

  constructor() { }

  screenerForm: FormGroup;

  validationMessages = {
    'fullName': {
      'required' : 'Full Name is required',
      'minlength' : 'Full Name must be greater than 2 charecters',
      'maxlength' : 'Full Name must be less than 10 charecters'
    },
    'email': {
      'required' : 'Email is required',
      'emailDomain' : 'Domain should be pragimtech.com'
    },
    'confirmEmail': {
      'required' : 'Confrim Email is required',
    },
    'emailGroup': {
      'missMatch' : 'Confrim Email doesnt match with the email provided',
    },
    'phone': {
      'required' : 'Phone is required'
    }    
  };

  formErrors = {
    'fullName': '',
    'email' : '',
    'confirmEmail' : '',
    'emailGroup' : '',
    'phone' : '',
    'skillName': '',
    'experienceInYears':'',
    'proficiency':''
    
  };

  ngOnInit(): void {
  }

  logValidationErrors(group: FormGroup = this.screenerForm) : void {
    Object.keys(group.controls).forEach((key:string) => 
    {
      
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if(abstractControl && !abstractControl.valid && 
        (abstractControl.touched)|| (abstractControl.dirty)||(abstractControl.value != '')){
        const messages = this.validationMessages[key];  
        for (const errorKey in abstractControl.errors){
          if (errorKey){
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
      if(abstractControl instanceof FormGroup){
        this.logValidationErrors(abstractControl);
      }
     
    });
 }

}
