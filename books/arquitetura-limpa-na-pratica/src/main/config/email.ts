import { EmailOptions } from '@/usecases/send-email/ports/email-service';

export const getEmailOptions = (): EmailOptions => {
  const emailOption: EmailOptions = {
    from: 'Marcus Balbi <balbimarcus@gmail.com>',
    to: '',
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    subject: 'Mensagem de teste',
    text: 'texto da mensagem',
    html: '<b>Teste</b>',
    attachments: [
      {
        filename: '../../resources/text.txt',
        contentType: 'plain/text',
      },
    ],
  };

  return emailOption;
};
