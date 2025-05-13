import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { BoasVindasComponent } from '../../components/boas-vindas/boas-vindas.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, BoasVindasComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
