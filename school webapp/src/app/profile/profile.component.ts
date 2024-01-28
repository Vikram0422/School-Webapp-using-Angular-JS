import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }
  user = {localId:"someid",displayName:"somename"};
  userDetail:any;
  ngOnInit(): void {
    // this.auth.canAccess();
    // if (this.auth.isAuthenticated()) {
    //     //call user details service
    //     this.auth.detail().subscribe({
    //       next:data=>{
    //           this.user.localId = data.users[0].localId;
    //           this.user.displayName = data.users[0].displayName;
    //       }
    //     })
    // }
   // this.route.params.subscribe((params: Params) => {
   let user:any =  localStorage.getItem('userdetail')
      if(!user){
        this.router.navigate(['/login']);
      }
      this.userDetail = JSON.parse(user)[0];
   // });
  }


}
