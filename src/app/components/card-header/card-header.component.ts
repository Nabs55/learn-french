import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.sass'
})
export class CardHeaderComponent {
  @Input() title = "";
  @Input() subtitle = "";
}
