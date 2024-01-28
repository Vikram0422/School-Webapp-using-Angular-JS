import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  mindate= new Date();
  maxdate= new Date(2030 ,3, 10);

  constructor(private http: HttpClient) { }

  admissionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mother_name: new FormControl(''),
    gender: new FormControl(''),
    mobile_number: new FormControl(''),
    alt_mobile_number: new FormControl(''),
    father_name: new FormControl(''),
    dob: new FormControl(''),
    email_id: new FormControl(''),
    whatsapp_number: new FormControl(''), 
    aadhar_number: new FormControl(''),
    address: new FormControl(''),
    landmark: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    community: new FormControl(''),
    mother_occupation: new FormControl(''),
    caste: new FormControl(''),
    father_occupation: new FormControl(''),
    family_income: new FormControl(''),
    religion: new FormControl(''),
    role: new FormControl(''),
  });

  roles = ['admin','student','teacher'];
  ngOnInit(): void {
  }

  saveAdminison(){
    const headers = {'Content-Type': 'application/json',"Accept": "application/json"     };
    const body = this.admissionForm.value ;
    this.http.post<any>('http://localhost:8090/api/saveAdmission', body, { headers }).subscribe(data => {
        //this.postId = data.id;
    });
    console.log(this.admissionForm.value)
  }

}
