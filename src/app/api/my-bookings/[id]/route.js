import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

// get single booking data
export const GET = async (request, { params }) => {

    const { id } = await params;
    const bookingCollection = dbConnect(collectionNames.bookingCollection);
    const query = { _id: new ObjectId(id) };

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const currentBookingData = await bookingCollection.findOne(query);

    const isOwnerOk = email === currentBookingData?.email;

    if (isOwnerOk) {
        const singleBooking = await bookingCollection.findOne(query);

        return NextResponse.json(singleBooking);
    }
    else {
        return NextResponse.json({ message: 'forbidden data access' }, { status: 403 });
    }
}

// update single booking data
export const PATCH = async (request, { params }) => {
    const { id } = await params;
    console.log('update id: ', id);
    const bookingCollection = dbConnect(collectionNames.bookingCollection);
    const query = { service_id: id };
    const body = await request.json();

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const currentBookingData = await bookingCollection.findOne(query);
    const isOwnerOk = email === currentBookingData?.email;

    if (isOwnerOk) {
        const filter = {
            $set: { ...body }
        }
        const option = {
            upsert: true
        }
        const updateResponse = await bookingCollection.updateOne(query, filter, option);
        revalidatePath('/my-bookings');
        return NextResponse.json(updateResponse);
    }
    else {
        return NextResponse.json({ message: 'forbidden update action' }, { status: 403 });
    }
}