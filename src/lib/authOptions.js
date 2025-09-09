import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { loginUser } from "@/app/actions/auth/loginUser";
import dbConnect, { collectionNames } from "./dbConnect";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "User Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password", placeholder: "......" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = await loginUser(credentials)
                // console.log("user data login", user);

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log({ user, account, profile, email, credentials });
            // {
            //     user: {
            //       _id: new ObjectId('68c0584072a24c2925355dc9'),
            //       name: 'parvez hossain',
            //       email: 'parvezhossain744471@gmail.com',
            //       password: '$2b$10$BOLVVvL05VDShS.kwiMBq.RWC6V2p67g6QH0puH91mc/BFEcvHZMi',
            //       createdAt: '2025-09-09T16:39:25.120Z'
            //     },
            //     account: {
            //       providerAccountId: undefined,
            //       type: 'credentials',
            //       provider: 'credentials'
            //     },
            //     profile: undefined,
            //     email: undefined,
            //     credentials: {
            //       email: 'parvezhossain744471@gmail.com',
            //       password: 'parvez',
            //       callbackUrl: '/',
            //       redirect: 'false',
            //       csrfToken: '9a6db47e9c62f1eb81f8e18f8b209e87a7006abc881dd618583c0d3d5089e743',
            //       json: 'true'
            //     }
            //   }
            if (account) {
                const { provider, providerAccountId } = account;
                const { email: user_email, name, image } = user;
                const userCollection = dbConnect(collectionNames.userCollection);
                const isExistedUser = await userCollection.findOne({ providerAccountId });

                if (!isExistedUser) {
                    const payload = { providerAccountId, name, image, email: user_email, provider }
                    await userCollection.insertOne(payload);
                }
            }
            return true
        },
    }
}