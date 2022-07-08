import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class FilesService {
    async processExclusionXlsFIle(file: any, draw_id: number, res: any, request: any) {

        var workbook = XLSX.readFile(file.path);
        var sheet_name_list = workbook.SheetNames;
        let exclusion = 0;
        const data: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).map(row =>
            Object.keys(row).reduce((obj, key) => {

                // obj[key.trim()] = row[key];
                obj[key.trim().toLowerCase()] = row[key];
                return obj;
            }, {})
        );

        // let total_exclusions = await this.Sequelize.query(
        //     ` select count(*) as no_of_exclusions from nbb_raffle.draw_exclusion_list del where del.draw_id =:draw_id`
        //     , {
        //         replacements: {
        //             draw_id: Number(draw_id)
        //         },
        //         type: QueryTypes.SELECT
        //     });
        // let no_of_exclusions = (total_exclusions && total_exclusions[0]['no_of_exclusions'] != null) ? total_exclusions[0]['no_of_exclusions'] : 0;


    }}
