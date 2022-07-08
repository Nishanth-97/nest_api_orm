import { HttpStatus, Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class FilesService {
    async processExclusionXlsFIle(file: any, res: any, request: any) {

        var workbook = XLSX.readFile(file.path);
        var sheet_name_list = workbook.SheetNames;
       // let exclusion = 0;
        // const data: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).map(row =>
        //     Object.keys(row).reduce((obj, key) => {

        //         // obj[key.trim()] = row[key];
        //         obj[key.trim().toLowerCase()] = row[key];

                
        //         return obj;
        //     }, {})
            
        // );
        const ws = workbook.Sheets[sheet_name_list[0]];
        //   let exclusion = 0;
           const list=XLSX.utils.sheet_to_json(ws);
           var result=[];
           var all=[];
   
           let data =[];
           
        for(let i =0; i < list.length; i++){
           let obj =list[i];
         //  data= da.map((data, index)=>{
               result.push({
                   address:list[i]["Address"],
                   name:list[i]["Customer Name"],
             });
            // all.push(result);
       
            //     result = await this.sequelize.query(
            //          ` Insert into nbb_raffle.excelupload (id,address,customer_name,date_of_birth,nationality,mobile_no,branch_name)  
            //  values (:id,:address,:customer_name,:date_of_birth,:nationality,:mobile_no,:branch_name)`
            //          , { replacements:replacement,type: QueryTypes.INSERT })
         
                  //})
              //   result.push(da[i]["Customer Name"]);
                 // console.log(da[i]["Customer Name"]);
              }
              console.log(result);
              console.log("check");
              //console.log(all);
              return  res.status(HttpStatus.OK).json(result);

}



}
