import { TelegramClient } from '../client/telegram-client.js';
import { NotificationService } from '../services/notification-service.interface.js';

export class TelegramAdapter implements NotificationService {
  constructor(private readonly telegramClient: TelegramClient) {}

  send(recipient: string, message: string): void {
    this.telegramClient.sendTelegramMessage(recipient, message);
  }
}
