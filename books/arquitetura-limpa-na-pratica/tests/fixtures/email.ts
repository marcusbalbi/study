import { EmailOptions } from '@/usecases/send-email/ports/email-service';

const attachmentFilePath = '../resources/text.txt';
const fromName = 'Test';
const fromEmail = 'from_email@mail.com';
const toName = 'To Test';
const toEmail = 'to_email@mail.com';
const subject = 'test e-mail';
const body = 'Hello world!';
const bodyHtml = '<b>Test</b>';
const attachment = [
  {
    filename: attachmentFilePath,
    contentType: 'text/plain',
  },
];

export const createEmailOptions = () => {
  const emailOptions: EmailOptions = {
    host: 'test',
    port: 867,
    username: 'test',
    password: 'test',
    from: `${fromName} ${fromEmail}`,
    to: `${toName} <${toEmail}>`,
    subject,
    text: body,
    html: bodyHtml,
    attachments: attachment,
  };

  return emailOptions;
};
