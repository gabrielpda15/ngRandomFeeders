export declare type EmailData = {
  to?: string,
  from?: string,
  subject: string,
  body: string,
  attachments?: EmailAttachment[]
};

export declare type EmailAttachment = {
  name: string,
  path: string
}
