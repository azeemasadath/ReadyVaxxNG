import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray} from '@angular/forms'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  employeeForm: FormGroup;
  pageTitle: string = "Please Enter Your Details"

  ngOnInit(): void {

    this.employeeForm = this.fb.group({
      // All validator functions are sttaic functions, they dont need an instance.
      fullName:['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference:['email'],
      emailGroup : this.fb.group({
        email:['', [Validators.required]],
        confirmEmail:['', Validators.required],
      }, {validator : matchEmail}),
      phone:['']
    });
  }

  onSubmit(): void {
    
  }

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

  logValidationErrors(group: FormGroup = this.employeeForm) : void {
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
function matchEmail(group: AbstractControl): { [key: string]: any } | null {

  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');

  if (emailControl.value === confirmEmailControl.value || (confirmEmailControl.pristine && confirmEmailControl.value ==='')) {
    return null
  } else {
    return { 'missMatch': true }
  }
} 