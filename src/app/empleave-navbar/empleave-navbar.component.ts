import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleave-navbar',
  templateUrl: './empleave-navbar.component.html',
  styleUrls: ['./empleave-navbar.component.scss']
})
export class EmpleaveNavbarComponent {
  constructor(private service:AuthService,private route:Router){}


  ngOnInit():void{
  }
  
  logout(){
    this.service.logout();
    this.route.navigate(['/'])
  }
}
