import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  image:any=["/image*"];
  allfiles:any=[0];
  freshness=["Male","Female","Other"]
 
 securityForm!:FormGroup;
 signin: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.email, Validators.required ]),
  password: new FormControl('', [Validators.required, Validators.min(3) ])
});s: any
hide = true;
get emailInput() { return this.signin.get('email'); }
get passwordInput() { return this.signin.get('password'); }  
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.securityForm=this.formbuilder.group({
     currentpwd:['',Validators.required],
      newpwd:['',Validators.required],
      confirmpwd:['',Validators.required],
    })
  }
  

  addproduct(){
    console.log(this.securityForm.value);
    
    if(this.securityForm.valid){
      this.api. postservicedata(this.securityForm.value)
      .subscribe({
        next:(res)=>{
          alert("Password changed successfully!");
        },
        error:()=>{
          alert("Your email is not confirmed.Please check your inbox.");
          alert("Resend confirmation");
        
        }
      })
    }
  }
  log(){
    alert("you have been logged out!");
    // this.userForm.log();
    location.reload();

  }
 


}







