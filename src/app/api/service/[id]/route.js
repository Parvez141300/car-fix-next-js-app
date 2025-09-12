import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
// import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// get single service
export const GET = async (request, { params }) => {
    const { id } = await params;
    const serviceCollection = dbConnect(collectionNames.serviceCollection);
    const singleService = await serviceCollection.findOne({
        _id: new ObjectId(id),
    });
    return NextResponse.json(singleService);
}

// delete single user specific booking
export const DELETE = async (request, { params }) => {
    const { id } = params;
    const bookingCollection = dbConnect(collectionNames.bookingCollection);
    const query = { _id: new ObjectId(id) };

    // validation
    const session = await getServerSession(authOptions);
    const currentBooking = await bookingCollection.findOne(query);

    const isOwnerOk = session?.user?.email == currentBooking.email;

    if (isOwnerOk) {
        const result = await bookingCollection.deleteOne(query);
        // revalidatePath('/my-bookings');
        return NextResponse.json(result);
    }
    else{
        return NextResponse.json({success: false, message: 'forbidden action'}, {status: 401});
    }
}