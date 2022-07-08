import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path' ;
import { multerOptions } from './config';



@Controller('upload')

export class FilesController {
    

@Post()
    @UseInterceptors(FileInterceptor('file',  multerOptions))

async upload( @UploadedFile() file) {
    console.log("*&^&^&&^***^*");
  console.log(file)
}}
