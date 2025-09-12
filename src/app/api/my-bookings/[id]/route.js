import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {

    const {id} = await params;
    const bookingCollection = dbConnect(collectionNames.bookingCollection);
    const query = {_id: new ObjectId(id)};
    const singleBooking = await bookingCollection.findOne(query);

    return NextResponse.json(singleBooking);
}