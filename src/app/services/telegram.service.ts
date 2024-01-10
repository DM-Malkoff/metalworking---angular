import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CHAT_ID, TOKEN } from '../constants/tg';
import { Observable } from 'rxjs';
import { OrderData } from "../types/orderData";
import moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class TelegramService {

  private apiUrl = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  constructor(private httpClient: HttpClient) { }

  public sendMessage(data: OrderData): Observable<any> {
    const currentDate = moment(new Date()).format('YYYY-MM-DD');
    let message = `<b>Дата</b>: ${currentDate}\n`;
    message += `<b>ФИО</b>: ${data.name}\n`;
    message += `<b>Телефон</b>: ${data.phone}\n`;
    message += `<b>Комментарий</b>: ${data.text}\n`;

    return this.httpClient.post<any>(this.apiUrl, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
  }
}
