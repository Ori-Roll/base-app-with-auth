## About this readme

This project followed an next auth course to create all of it's authentication parts.</br>
The learning process is accompanied by a documentation of the main auth functionality for learning purposes. <br/>
_This means that this readme might be more thorough in detailing it's components and sometimes the code itself_.

## prisma

The project uses [prisma](https://www.prisma.io/) ORM. The schemas are all inside schema.prisma

### About schema modules

The schemas are based on the auth.js recommended schemas but with added items for things like user roles and such.

## Register/login Verification flow (non Oauth)

1. The user registers.
2. We create a user and a verification token </br>
   (The user email is part of the verification token schema)
3. The token is sent to the users email
4. Email links to the new-verification (auth/new-verification) page with the token in it's search params
5. The new-verification page uses the new verification action. The action checks that a verificationToken with that token exists, and a user with the verificationToken user's email exists, and add a new date to the user's emailValidated
6. The user logs in - userVerified date is checked

- If the user tries to login without validating via email, a new verification email is sent
- If the user tries to login after the the validation token is expired a new verification email is sent
- An error appears if a user tries to go to the new verification page without a token
- The new verification action also updates the users email with the verification token email, this is done so that if a user changes his email a new verification email can be sent and the email will only change if it is verified using the new verification action.

## email confirmation

This project uses [resend](https://resend.com/) to send a verification token via email.</br>

<br/>
<br/>

# Next initial Setup info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
