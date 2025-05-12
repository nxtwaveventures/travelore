import NextAuth, { DefaultSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/db/mongodb'
import { logger } from '@/lib/utils/logger'

// Extend the built-in session types
declare module 'next-auth' {
    interface Session {
        user: {
            id: string
        } & DefaultSession['user']
    }
}

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            logger.info('User signing in', { user, account })
            return true
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.sub as string
            }
            return session
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
    },
    events: {
        async signIn(message) {
            logger.info('User signed in', message)
        },
        async signOut(message) {
            logger.info('User signed out', message)
        },
        async error(message) {
            logger.error('Auth error', message)
        },
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
})

export { handler as GET, handler as POST } 