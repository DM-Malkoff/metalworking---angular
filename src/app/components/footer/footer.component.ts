import { Component } from '@angular/core';
import { EMAIL } from '../../constants/contacts';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public email: string = EMAIL;
}
