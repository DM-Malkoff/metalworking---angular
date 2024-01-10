import {Component, EventEmitter, Output} from '@angular/core';
import {PRHONE} from "../../constants/contacts";

@Component({
  selector: 'app-order-block',
  standalone: true,
  imports: [],
  templateUrl: './order-block.component.html',
  styleUrl: './order-block.component.scss'
})
export class OrderBlockComponent {
  public phone: string = PRHONE;
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
