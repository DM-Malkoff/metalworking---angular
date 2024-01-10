import { TestBed } from '@angular/core/testing';
import { TelegramService } from './telegram.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TelegramService', () => {
  let service: TelegramService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TelegramService],
    });
    service = TestBed.inject(TelegramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
