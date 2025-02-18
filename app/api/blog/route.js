import { ConnectDB } from "@/lib/config/db";
import blogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
import {writeFile} from 'fs/promises'


const fs = require('fs')
const LoadDB = async ()=>{
    await ConnectDB()
}
LoadDB();

//api to get blogs
export async function GET (request){
    const blogId = request.nextUrl.searchParams.get("id")
    if(blogId){
        const blog = await blogModel.findById(blogId);
        return NextResponse.json(blog)
    }else{

        const blogs = await blogModel.find({})
        return NextResponse.json({blogs})
    }
}


//api to upload blog 
export async function POST (request){
    const formData = await request.formData();
    const timeStamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;
    const blogData = {
        title:`${formData.get('title')}`,
        description: `${formData.get('description')}`,
        fullDescription: `${formData.get('fullDescription')}`,
        category: `${formData.get('category')}`,
        projectLink: `${formData.get('projectLink')}`,
        image: `${imgUrl}`

    }

    await blogModel.create(blogData)
    console.log("blog saved",blogModel);
    
    return NextResponse.json({success:true , msg:"Blog Added"})
}


// api to delete blogs
export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await blogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await blogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"blog Deleted"})
}