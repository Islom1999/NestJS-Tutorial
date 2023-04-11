import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

// Schemani typelarini oladi
export type BlogDocument = HydratedDocument<Blog>

@Schema()
export class Blog {
    @Prop({required: true, type: 'string'})
    title:string

    @Prop({required: true, type: 'string'})
    expert:string

    @Prop({required: true, type: 'string'})
    description:string

    @Prop({required: true})
    slug:string
}

export const BlogSchema = SchemaFactory.createForClass(Blog)
