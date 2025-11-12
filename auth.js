import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Instagram from "next-auth/providers/instagram"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Facebook({
        clientId: process.env.AUTH_FACEBOOK_ID,
        clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
    Instagram({
        clientId: process.env.AUTH_INSTAGRAM_ID,
        clientSecret: process.env.AUTH_INSTAGRAM_SECRET,
    })

    ],
    pages: {
        signIn: "/auth/login",
        signOut: "/"
    },

    callbacks: {
        async session({ session }) {
            return session;
        },
    },
})

