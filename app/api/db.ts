import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null= null;
let cachedDb: Db | null = null;


export async function connectToDb(){
    if(cachedClient && cachedDb){
        return { client: cachedClient, db: cachedDb };
    }
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.u5crp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

    // await client.close();

    cachedClient = client;
    cachedDb = client.db('NextJS-Ecommerce');

    return { client, db: client.db('NextJS-Ecommerce') }
}

