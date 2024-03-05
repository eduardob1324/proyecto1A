import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-populares',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './populares.component.html',
  styleUrl: './populares.component.css'
})
export class PopularesComponent {

}
