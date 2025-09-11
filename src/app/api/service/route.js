import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const body = await request.json();
    console.log('check out form post body api: ', body);
    const bookingCollection = dbConnect(collectionNames.bookingCollection);
    const result = await bookingCollection.insertOne(body);
    return NextResponse.json(result);
}