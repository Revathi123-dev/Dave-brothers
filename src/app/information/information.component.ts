import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  title = 'davebrothers';
  image:any=["/image*"];
  allfiles:any=[0];
 
 userForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }//must inject api service to getting values

  ngOnInit(): void {
    
    this.userForm=this.formbuilder.group({ //giving validators for user input
      username:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      role:['',Validators.required],
      status:['',Validators.required],
      company:['',Validators.required]
    })
  }
  fileuploads(event:any){
    const files=event.target.files;
    // console.log(files);//getting files or not checking with inspecting in console
    if(files){
      for(let i=0;i<=0;++i){//running for loop for images
        const image={
          name:'',
          type:'',
          url:''
          

        };
        console.log(0)
        this.allfiles.push(files[0]);
        image.name=files[0].name;
        // console.log(image.name) checking image name is getting into array or not
        image.type=files[0].type;
        console.log(image.type)
        // console.log(image.size)//checking  image type is getting array or not
      const reader=new FileReader();
      reader.onload=(filedata)=>{
        image.url=reader.result+'';
        this.image =[];//accepting arrays of images but after taking one image its getting resetted
       this.image.push(image);
    

      //  console.log(image)//checking each and every property with value is getting or not.
      // console.log(image.url)//check
      // console.log(image)//check

      };
      reader.readAsDataURL(files[0]);
      console.log(files[0])
      
      }

    }
    // event.srcElement.value=null;
    // console.log(event)//checking event is getting invoked or not by using right-click console

  }
  deleteimage(image:any){
    const index = this.image.indexOf(image);
    this.image.splice(index,0);
    this.allfiles.splice(index,0);

  }

  addproduct(){
    // console.log(this.userForm.value);//for checking userform is taking values in an array or not!
    
    if(this.userForm.valid){
      this.api.postProduct(this.userForm.value)
      .subscribe({
        next:(res)=>{
          alert("Registration Success!");
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



