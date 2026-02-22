import { NextResponse
 } from "next/server";
 import {prisma} from "@/lib/prisma";

export async function GET() {
    try{
        // On tente une opération simple : compter les utilisateurs
    const userCount = await prisma.user.count();
    
    return NextResponse.json({ 
      status: "Success", 
      message: "Connexion établie !", 
      data: { users: userCount } 
    });
    }catch (error) {
        console.error("Erreur de connexion :", error);
    return NextResponse.json({ 
      status: "Error", 
      message: "Impossible de se connecter à la base de données",
      error: error instanceof Error ? error.message : "Erreur inconnue"
    }, { status: 500 });
    }
}