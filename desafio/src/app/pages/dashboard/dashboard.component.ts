import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
