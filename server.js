import {ApolloServer} from "apollo-server";
import './Models/Quotes.js'
import './Models/User.js'
import {resolvers} from "./resolver.js";
import { typeDefs } from "./schemaGQL.js";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",(err)=>{
    console.log("error connecting",err)
})

const context = ({req})=>{
    const { authorization } = req.headers;
    if(authorization){
     const {userId} = jwt.verify(authorization,process.env.JWT_SECRET)
     return {userId}
    }
}




const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})


server.listen().then(({url}) =>{
    console.log(`server ready at ${url}`);
})

