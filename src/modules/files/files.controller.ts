import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { request } from 'http';
import { diskStorage } from 'multer';
import { extname } from 'path' ;
import { multerOptions } from './config';
import { FilesService } from './files.service';



@Controller('upload')

export class FilesController {  constructor(private readonly filesService:FilesService,){ }
    

@Post()
    @UseInterceptors(
        FileInterceptor('file', {
        storage :diskStorage({
            destination:'./uploads',
            filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${extname(file.originalname)}`)
            },
        })
        }),
        )
        

public async uploadedFile(request, res , @UploadedFile() file , req:any): Promise<void> {
  console.log(file)
  try {
    const response = {
        originalname: file.originalname,
        filename: file.filename,
    };

    return await this.filesService.processExclusionXlsFIle(file, res, request);

} catch (error) {
    return res
        .status(500)
        .json(`Failed to upload file: ${error.message}`);
}
}}
