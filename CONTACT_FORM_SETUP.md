# Contact Form Setup Guide

## Overview
The contact form now supports two methods of communication:
1. **Email** - Sends messages directly to satakshiroy101@gmail.com via email
2. **WhatsApp** - Opens WhatsApp with a pre-filled message to 7578913115

## Setup Instructions

### 1. Install Dependencies
First, install the required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

This will install `nodemailer` and `@types/nodemailer` which are required for email functionality.

### 2. Configure Gmail App Password

To send emails via Gmail, you need to generate an App Password:

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. After enabling 2FA, you'll see an **App passwords** option
5. Select **Mail** and **Windows Computer** (or your device)
6. Google will generate a 16-character password
7. Copy this password and save it

### 3. Create Environment Variables

Create a `.env.local` file in the root of your project (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Then update `.env.local` with your credentials:

```
EMAIL_USER=satakshiroy101@gmail.com
EMAIL_PASSWORD=your-16-character-app-password-here
```

**Important Security Notes:**
- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- The EMAIL_USER should be the Gmail account that sends emails
- EMAIL_PASSWORD is the 16-character App Password (NOT your regular Gmail password)

### 4. Test the Contact Form

1. Start the development server:
```bash
npm run dev
```

2. Navigate to the Contact section on your portfolio
3. Fill in the form with test data
4. Click "Send Email" to test email functionality
5. You should receive:
   - A confirmation email at the sender's email address
   - The message forwarded to satakshiroy101@gmail.com

### Features

#### Email Method
- Sends message to satakshiroy101@gmail.com
- Automatically sends confirmation email to the sender
- Professional HTML-formatted emails
- Error handling and user feedback
- Loading state while sending

#### WhatsApp Method
- Opens WhatsApp Web/App with pre-filled message
- Includes sender's name, message, and email
- No backend required
- Works on desktop and mobile
- Falls back gracefully if WhatsApp is not installed

### Troubleshooting

**"Failed to send message" error:**
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- Check that 2-Factor Authentication is enabled on Gmail
- Ensure the App Password was generated correctly (should be 16 characters)
- Verify `.env.local` file exists in the root directory

**WhatsApp button not working:**
- Ensure you have WhatsApp installed or WhatsApp Web available
- Check that your phone has internet connection
- The number is formatted as: +917578913115 (country code included)

**Form not submitting:**
- Check browser console for errors (F12 → Console tab)
- Verify all required fields are filled
- Ensure API route `/api/contact` is properly deployed
- Check network tab in browser DevTools for API response

### Production Deployment

When deploying to production:

1. Add environment variables to your hosting provider:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - Other platforms: Follow their documentation

2. Ensure the API route is properly deployed
3. Test the contact form with actual Gmail credentials
4. Monitor error logs for any issues

### API Endpoint

**POST** `/api/contact`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

Success response (200):
```json
{
  "success": true,
  "message": "Email sent successfully! Check your inbox for confirmation."
}
```

Error response (400/500):
```json
{
  "error": "Error message describing what went wrong"
}
```

### File Structure

- `src/app/api/contact/route.ts` - API endpoint for email sending
- `src/components/sections/Contact.tsx` - Contact form component
- `.env.local` - Local environment variables (not in version control)
- `.env.example` - Template for environment variables
- `package.json` - Dependencies including nodemailer

### Future Enhancements

Potential improvements:
- Rate limiting to prevent spam
- CAPTCHA verification
- Email templates with styled formatting
- Message queuing/retry logic
- Analytics and logging
- Multiple recipient support
- File attachment support
- Custom email domain (instead of Gmail)

### Support

For issues or questions:
- Check the troubleshooting section above
- Review browser console for specific error messages
- Verify all environment variables are set correctly
- Test with a simple message first before complex content
