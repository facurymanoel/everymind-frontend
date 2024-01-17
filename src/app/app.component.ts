import { Router } from '@angular/router';
import { LoginServiceService } from './service/login-service.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'projeto-everymind';

  constructor (private router : Router){
        
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
   
}
