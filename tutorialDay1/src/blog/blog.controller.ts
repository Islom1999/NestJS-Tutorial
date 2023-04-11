import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

    constructor( private readonly blogService: BlogService){
       
    }
    
    @HttpCode(200)
    @Get()             // route => /api/blog
    async getAll(){
        return this.blogService.getAllBlog()
    }

    @HttpCode(201)
    @Post("create")    // route => /api/blog/create 
    @UsePipes( ValidationPipe )             //validatsiyaga qarab res jo'natadi 
    async create(@Body() dto: BlogDto ){
        return this.blogService.create(dto)
    }

    @HttpCode(200)
    @Get(':id')
    async getById(@Param('id') id:string){
        return this.blogService.getById(id)
    }

    @HttpCode(200)
    @Patch(':id')
    async update(@Param('id') id:string, @Body() dto: BlogDto){
        return this.blogService.update(id, dto)  
    }

    @HttpCode(200)
    @Delete(':id')
    async delete(@Param('id') id:string,){
        return this.blogService.delete(id)  
    }
}
