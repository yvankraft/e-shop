import { withAuth } from "next-auth/middleware";

// On utilise withAuth qui est une fonction middleware déjà prête
export default withAuth({
  pages: {
    signIn: "/login", // Redirige ici si l'utilisateur n'est pas connecté
  },
});

export const config = {
  matcher: [
    "/api/user/:path*", 
    "/dashboard/:path*", 
    "/pages/account/:path*"
  ],
};