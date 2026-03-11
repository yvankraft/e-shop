import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const {name, email, password} = await req.json();

        await connectDB();


        //1. verifions si l'utilisateur existe deja 
        const userExists = await User.findOne({email});
        if(userExists){
            return NextResponse.json({ message: "Cet email est déjà utilisé" }, { status: 400 });
        }

        //2. Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        //3. creer l'utilisateur
        const newUser = await User.create({
            name,
      email,
      password: hashedPassword,
      
        });
        return NextResponse.json({ message: "Utilisateur créé !" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Erreur lors de l'inscription" }, { status: 500 });
    }
}