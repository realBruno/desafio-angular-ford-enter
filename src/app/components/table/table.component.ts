import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() vin: string = ""
  @Input() odometro: number = 0
  @Input() nivelCombustivel: number = 0
  @Input() status: string = ""
  @Input() lat: number = 0
  @Input() long: number = 0
}
