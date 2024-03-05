import { Component } from '@angular/core';
import { RouterLink,  RouterOutlet, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(
    private router : Router,
  ){
    
  }

  salir(){
    this.router.navigate(['/login']);
  }



}
