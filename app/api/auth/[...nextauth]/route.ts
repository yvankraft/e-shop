import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcrypt";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    //authentification github
    providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    //Authentification MongoDB personnaliseê
    CredentialsProvider({
      name:"credentials",
      credentials:{},
     async authorize(credentials: any) {
        await connectDB();

        const user = await User.findOne({email: credentials.email});
       if (!user) throw new Error("Utilisateur non trouvé");

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) throw new Error("Mot de passe incorrect");

        return user;
      }
    })
],
callbacks:{
  // Optionnel : permet d'ajouter l'ID de l'utilisateur dans la session
  async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };