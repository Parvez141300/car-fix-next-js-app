"use server";
import bcrypt from 'bcrypt';
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNames.userCollection);

    // validate user
    if(!payload.email || !payload.password){
        return null;
    }
    
    const user = await userCollection.findOne({email: payload.email});

    if(!user){
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPassword;
        const users = await userCollection.insertOne(payload);
        return users;
    }
    else{
        return null;
    }
}