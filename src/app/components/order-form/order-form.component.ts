import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
  ],
  providers: [MessageService],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit, OnDestroy {
  /**
   * Форма
   */
  public orderForm: FormGroup;
  /**
   * Флаг состояния отправки формы завки
   */
  public isMessageSent: boolean =  false;
  private destroy$ = new ReplaySubject(1);

  constructor(
    private tgService: TelegramService,
    private messageService: MessageService,
  ) { }

  public ngOnInit(): void {
    this.orderForm = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      text: new FormControl(''),
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public submitOrder(): void {
    this.tgService.sendMessage(this.orderForm.value).pipe(
      takeUntil(this.destroy$),
    ).subscribe(
      () => {
        this.isMessageSent = true;
      },
      () => this.messageService.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Ошибка отправки данных' }
      ),
    ) ;
  }
}
