import { pathToFileURL } from 'node:url';
import { EmailAdapter } from './adapters/email-adapter.js';
import { TelegramAdapter } from './adapters/telegram-adapter.js';
import { EmailClient } from './client/email-client.js';
import { TelegramClient } from './client/telegram-client.js';
import { NotificationManager } from './manager/notification-manager.js';
import { SmsNotificationService } from './services/sms-notification-service.js';
import { NotificationService } from './services/notification-service.interface.js';

export function runEmailAdapterDemo(): void {
  console.log('=== Notification Adapter Pattern Demo ===');
  const message = 'Hello, this is a notification message.';
  const emailClient = new EmailClient();
  const telegramClient = new TelegramClient();

  const services: Array<{ service: NotificationService; recipient: string }> = [
    { service: new SmsNotificationService(), recipient: '+998901234567' },
    { service: new TelegramAdapter(telegramClient), recipient: 'chat-4521' },
    { service: new EmailAdapter(emailClient), recipient: 'player@example.com' },
  ];

  for (const { service, recipient } of services) {
    new NotificationManager(service).sendNotification(recipient, message);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runEmailAdapterDemo();
}
