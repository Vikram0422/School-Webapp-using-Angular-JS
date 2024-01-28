import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      "id": "123",
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
      "id": "20220726",
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
      "id": "20220727",
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

  constructor(private router:Router,public http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(formdata:any){
    const headers = {'Content-Type': 'application/json',"Accept": "application/json"     };
    const body = formdata;
    this.http.post<any>('http://localhost:8090/api/login', body, { headers }).subscribe((isUser:any) => {
        if(isUser.data.length === 0){
          alert("invalid crendential");
        } else {
          const user = JSON.stringify(isUser.data);
          localStorage.removeItem("userdetail");
          localStorage.setItem("userdetail", user);
          this.router.navigate(['menu']);
        }
    });
    console.log("test");
  }
  

}
