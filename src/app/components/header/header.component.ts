import { Component, EventEmitter, Output } from '@angular/core';
import { EMAIL, PRHONE } from '../../constants/contacts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public email: string = EMAIL;
  public phone: string = PRHONE;

  public menuVisibility: boolean = false;

  /**
   * Эмиттер заголовка формы "Обратный звонок"
   */
  @Output() public clickCallBack = new EventEmitter<string>();

  /**
   * Событие клика по кнопке "Обратный звонок"
   * @param caption
   */
  public orderButtonClick(caption: string): void {
    this.clickCallBack.emit(caption);
  }
}
