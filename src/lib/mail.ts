import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  //TODO: change this localhost to something dynamic for the domain and stuff
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Base app email confirmation',
    html: `<div><h4>Hi!, Welcome aboard.</h4><p>Please confirm your email: </p><a href=${confirmLink}>Confirm email!</a></div>`,
  });
};
