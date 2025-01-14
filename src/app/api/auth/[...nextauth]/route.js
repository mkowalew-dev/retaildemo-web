import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 1 * 60 * 60, //  days
  },
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add your own authentication logic here
        if (credentials.username === 'presales' && credentials.password === 'demo123') {
          // Return user object if credentials are valid
          return Promise.resolve({ id: 1, name: 'Presales', email: 'presales@retaildemo.net' });
        } else {
          // Return null if credentials are invalid
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
export { handler as GET , handler as POST };
