import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : { type: String, required: true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    image:{type:String, default:""},
},{timestamps:true});

//éviter de recréer le modèle au rechargement instantanee de la page en mode develllopement
export default mongoose.models.User || mongoose.model("User", UserSchema);