import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router : Router,
  ){

  }


  redirigirHome(){
    this.router.navigate(['/home'])
  }

  redirigirRegistro(){
    this.router.navigate(['/registro'])
  }

}
