import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  title = 'davebrothers';
  image:any=["/image*"];
  allfiles:any=[0];
  freshness=["Male","Female","Other"]
 
 informationForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.informationForm=this.formbuilder.group({
      bio:['',Validators.required],
      birthdate:['',Validators.required],
      phone:['',Validators.required],
      website:['',Validators.required],
      country:['',Validators.required],
      languages:['',Validators.required],
      category:['',Validators.required]
    })
  }
 

  addproduct(){
    console.log(this.informationForm.value);
    
    if(this.informationForm.valid){
      this.api.postdata(this.informationForm.value)
      .subscribe({
        next:(res)=>{
          alert("Details Saved Successully!");
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




