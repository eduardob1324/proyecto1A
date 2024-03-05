// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../componets/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
  ){}


 

}
