import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = await params;
    const serviceCollection = dbConnect(collectionNames.serviceCollection);
    const singleService = await serviceCollection.findOne({
        _id: new ObjectId(id),
    });
    return NextResponse.json(singleService);
}