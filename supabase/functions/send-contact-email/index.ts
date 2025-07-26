
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Send confirmation email to user
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com', // Replace with your verified domain
        to: [email],
        subject: 'Thank you for contacting me!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Thank You for Your Message!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to me. I have received your message and will get back to you within 24 hours.</p>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Your Message:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            <p>Best regards,<br>Muhammad Hunain Riasat</p>
          </div>
        `,
      }),
    })

    // Send notification email to you
    const notificationEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com', // Replace with your verified domain
        to: ['hunainriasat@gmail.com'], // Your email
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">New Contact Form Submission</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">${message}</p>
            </div>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      }),
    })

    if (!userEmailResponse.ok || !notificationEmailResponse.ok) {
      throw new Error('Failed to send emails')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Emails sent successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('Error sending emails:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send emails' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
