import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'; //imports
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  employeeForm: FormGroup;
  fullNameLength = 0;  
  pageTitle: string;

  validationMessages = {
    'fullName': {
      'required' : 'Username is required',
      'minlength' : 'Full Name must be greater than 10 charecters',
      'maxlength' : 'Full Name must be less than 29 charecters'
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
    },
    'password': {
      'required' : 'Password is required'
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
    'proficiency':'',
    'password':''
    
  };

  ngOnInit(): void {

     // Building reactive form using formBuilder class
     this.employeeForm = this.fb.group({
      // All validator functions are sttaic functions, they dont need an instance.
      fullName:['',[Validators.required, Validators.minLength(10), Validators.maxLength(29)]],
      password:['',[Validators.required]],
      
    });

    this.employeeForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.employeeForm);
      }
    );
  }

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
