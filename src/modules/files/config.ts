import { HttpException, HttpStatus } from "@nestjs/common";
import { existsSync, mkdirSync } from "fs";
import { extname } from "path";
import { any } from "sequelize/types/lib/operators";
import{v4 as uuid} from 'uuid';
import { createBrotliCompress } from "zlib";
import {diskStorage} from 'multer';


export const multerConfig={
    dest:"uploads"
}
function uuidRandom(file){
    const result=`${uuid()}${extname(file.originalname)}`;
  return  result;
}

export const multerOptions={
    // fileFilter:(req:any,file:any,cb:any)=>{
    //     if(file.mimetype.match(/\/(xlsx|jpg|jpeg|png|gif|xlxs)$/)){
    //         cb(null, true)
    //     }else{
    //         cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST),false);

    //     }

    // },

    filename: (req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        //Calling the callback passing the random name generated with the original extension name
        cb(null, `${randomName}${extname(file.originalname)}`)
    },
    Storage:diskStorage({
        destination:(req:any, file:any,cb:any)=>{
            const uploadPath=multerConfig.dest
            if(!existsSync(uploadPath)){
                mkdirSync(uploadPath)
            }cb(null, uploadPath)
      
            },
            filename:(req:any, file: any, cb:any)=>{
                cb(null, uuidRandom(file));
        }
    }),
}