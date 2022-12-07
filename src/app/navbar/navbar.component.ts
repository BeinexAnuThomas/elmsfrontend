import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private service:AuthService,private route:Router){}


ngOnInit():void{
}

logout(){
  this.service.logout();
  this.route.navigate(['/'])
}
}
