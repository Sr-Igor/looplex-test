import NextAuth from 'next-auth';
import { DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      async authorize(credentials: { name?: string }): Promise<DefaultUser> {
        const name = credentials?.name;

        const user = {
          id: '1',
          image: '',
          email: `${name}@${name}.com`,
          name: name || 'User'
        };

        return user;
      }
    })
  ],
  pages: {
    signIn: '/home'
  },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
