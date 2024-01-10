import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkBlockComponent } from './components/work-block/work-block.component';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { OrderBlockComponent } from './components/order-block/order-block.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DynamicDialogModule,
    HeaderComponent,
    FooterComponent,
    WorkBlockComponent,
    OrderBlockComponent,
    OrderFormComponent,
    ToastModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DialogService, MessageService],
})
export class AppComponent {
  /**
   * Ссылка на модальное окно
   */
  public dialogRef: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
  ) { }

  /**
   * Метод открытия модального окна
   * @param caption - заголовок, в зависимости от того какой кнопкой было открыто окно
   */
  public openModal(caption: string): void {
    this.dialogRef = this.dialogService.open(OrderFormComponent, {
      dismissableMask: true,
      header: caption,
      modal:true,
      width: '30%',
      height: 'auto',
      styleClass: 'dialog-ref',
      // style: {
      //   'font-size': '20px',
      // },
    });
  }
}
