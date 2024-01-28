import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata = {username:"",password:""};
  submit=false;
  loading=false;
  errorMessage="";
  user = 
  [

    // p class="mb-0"><strong class="pr-1">Student Mother:</strong>{{userDetail.details.mother}}</p>
    //         <p class="mb-0"><strong class="pr-1">Student Father:</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1">Student Email:</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1">Father number :</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1">Mother number:</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1"> Address:</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1">Blood group:</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1">Religion:</strong>{{userDetail.details.father}}</p>
    //         <p class="mb-0"><strong class="pr-1">Caste:</strong>{{userDetail.details.father}}</p>
      {
      "id": 20220725,
      "name": "Kishore",
      "details":
        {
          "mother":"malar",
          "father":"lenin",
          "email":"kishorepa64@gmail.com",
          "fathernumber":"8825515017",
          "mothernumber":"9876543298",
          "address":"asvk street",
          "bloodgroup":"A+",
          "religion":"christian",
          "caste":"illathu pillaimaar"
          

        }
      ,
      isStudent: true,
      },
      {
      "id": 20220726,
      "name": "samuel M",
      "details":
        {
          "mother":"Vijaya M",
          "father":"Muneeswaran G",
          "email":"kishorepa64@gmail.com",
          "fathernumber":"8825515017",
          "mothernumber":"9876543298",
          "address":"asvk street",
          "bloodgroup":"A+",
          "religion":"christian",
          "caste":"illathu pillaimaar"
          
        }
      ,
      isStudent: true,
      
      },
      {
      "id": 20220727,
      "name": "vikram",
      "details":
        {
          "experience":5,
          "specialization":"java",
          "designation":"staff"
        }
      ,
      isStudent: false,
      }
     ];

  constructor(private auth:AuthService,private router:Router,public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  onSubmit(mail:any){
    // this.loading=true;
    // //call login service
    // this.auth.login(this.formdata.email,this.formdata.password)
    // .subscribe({
    //     next:data=>{
    //         //store token
          
    //         console.log('logged user token is '+data.idToken);
    //         this.auth.canAuthenticate();
    //     },
    //     error:data=>{
    //         if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {
    //             this.errorMessage = "Invalid Credentials!";
    //         } else{
    //             this.errorMessage = "Unknown error when logging into this account!";
    //         }
    //     }
    // }).add(()=>{
    //     this.loading =false;
    //     console.log('login process completed!');

    // })
   const isUser =  this.user.filter((value,idx) =>{
      return value.id === mail;
    })

    if(isUser.length === 0){
      alert("invalid crendential");
    } else {
      const user = JSON.stringify(isUser);
      localStorage.removeItem("userdetail");
      localStorage.setItem("userdetail", user);
      this.router.navigate(['/menu']);
    }

  }
  

}
