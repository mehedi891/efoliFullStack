// app/utils/contactEmailTemplate.server.js

export function ContactEmailTemplate({ name, company, email, service, message }) {
  return `
  <!DOCTYPE html>
  <html lang="en" style="margin:0;padding:0;">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Submission</title>
      <style>
        body {
          background-color: #f7f9fb;
          font-family: 'Inter', Arial, sans-serif;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .header {
          background-color: #0D99FF;
          color: #ffffff;
          text-align: center;
          padding: 24px 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 20px;
          letter-spacing: 0.5px;
        }
        .content {
          padding: 30px;
        }
        .content p {
          margin: 8px 0;
          line-height: 1.6;
        }
        .field-label {
          font-weight: 600;
          color: #0D99FF;
        }
        .message-box {
          margin-top: 16px;
          padding: 16px;
          background-color: #f2f6fa;
          border-left: 4px solid #0D99FF;
          border-radius: 6px;
          font-style: italic;
          color: #555;
        }
        .footer {
          background-color: #f0f3f6;
          text-align: center;
          padding: 16px;
          font-size: 13px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📩 New Contact Request</h1>
        </div>
        <div class="content">
          <p><span class="field-label">Name:</span> ${name}</p>
          <p><span class="field-label">Company:</span> ${company}</p>
          <p><span class="field-label">Email:</span> ${email}</p>
          <p><span class="field-label">Service:</span> ${service}</p>
          <div class="message-box">
            ${message}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from efoli website contact form.</p>
        </div>
      </div>
    </body>
  </html>
  `;
}
