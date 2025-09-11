import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// get checkout bookings
export const GET = async (request) => {
    const session = await getServerSession(authOptions);
    if (session) {
        console.log('from server session', session);
        const email = session?.user?.email;
        const bookingCollection = dbConnect(collectionNames.bookingCollection);
        const result = await bookingCollection.find({email}).toArray();

        return NextResponse.json(result);
    }
    return NextResponse.json({});
}

// post a checkout booking
export const POST = async (request) => {
    const body = await request.json();
    console.log('check out form post body api: ', body);
    const bookingCollection = dbConnect(collectionNames.bookingCollection);
    const result = await bookingCollection.insertOne(body);
    return NextResponse.json(result);
}