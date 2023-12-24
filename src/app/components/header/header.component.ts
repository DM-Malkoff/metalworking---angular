import { Component } from '@angular/core';
import { EMAIL, PRHONE } from '../../constants/contacts';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public email: string = EMAIL;
  public phone: string = PRHONE;

  public orderButtonClick(caption: string): void {

  }
}
