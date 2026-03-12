import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import { getServerSession } from "next-auth/next";
import { authOptions} from "@/app/api/auth/[...nextauth]/route";
import { NextResponse, NextRequest } from "next/server";


export async function PUT(req: NextRequest){
    try {
        const session = await getServerSession(authOptions);

        //1. verifions si l'utilisateur est bien connecté
        if (!session || !session.user){
            return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
        }

        const {name, image} = await req.json();
        await connectDB();

        // 2. Mettre à jour l'utilisateur via son email (stocké dans la session)
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { name, image },
      { new: true } // Pour renvoyer le document modifié
    );

    return NextResponse.json({
      message: "Profil mis à jour !",
      user: { name: updatedUser.name, image: updatedUser.image }
    });

    } catch (error) {
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
    }

    await connectDB();

    // 1. Supprimer l'utilisateur de la base de données
    await User.findOneAndDelete({ email: session.user.email });

    // 2. Optionnel : Supprimer aussi ses commandes ou son panier ici
    // await Order.deleteMany({ userEmail: session.user.email });

    return NextResponse.json({ message: "Compte supprimé" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}