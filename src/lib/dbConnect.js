import { MongoClient, ServerApiVersion } from 'mongodb';
// user name: car_fix_next_js_app
// pass: 3zx0blqgpCIloMAc

export const collectionNames = {
    "serviceCollection" : "services",
    "userCollection" : "users",
    "bookingCollection" : "bookings"
}

const dbConnect = (collectionName) => {
    const uri = process.env.MONGODB_URI;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName);
}

export default dbConnect;
