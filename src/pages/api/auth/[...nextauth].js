import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default function Handle(req, res) {
  return NextAuth(req, res, {
    providers: [
      Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      Providers.Email({
        server: {
          host: process.env.EMAIL_SERVER,
          port: process.env.EMAIL_PORT,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),
    ],
    pages: {},
    secret: "qwertyuiop;lkjhgfdxcbn",
  });
}
