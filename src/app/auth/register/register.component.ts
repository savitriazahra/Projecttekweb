import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    public api: ApiService,
    public router: Router
  ) { }
  
  ngOnInit(): void {
  }
  user:any={};
  hide:boolean=true;
  loading!: boolean;
  register()
  {
    this.loading=true;
    this.api.register(this.user.email, this.user.password).subscribe(res=>{
      console.log(res);
      this.loading=false;
      //this.router.navigate(['auth/login']);
    },error =>{
      this.loading=false;
      alert('Tidak dapat mendaftar');
    })
  }
}