import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // Agregado manualmente ya que no encuentro la forma de que sea automático con standalone
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
