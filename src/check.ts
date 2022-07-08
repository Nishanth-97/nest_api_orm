
//services
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

    let total_exclusions = await this.sequelize.query(
        ` select count(*) as no_of_exclusions from nbb_raffle.draw_exclusion_list del where del.draw_id =:draw_id`
        , {
            replacements: {
                draw_id: Number(draw_id)
            },
            type: QueryTypes.SELECT
        });
    let no_of_exclusions = (total_exclusions && total_exclusions[0]['no_of_exclusions'] != null) ? total_exclusions[0]['no_of_exclusions'] : 0

    //controllere

    @UseGuards(AuthGuard('jwt'))
    @Post('/exclusionListUpload')
    @UseInterceptors(
        // FileInterceptor('file'))
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                // filename: editFileName,
                filename: (req, file, cb) => {
                    // Generating a 32 random chars long string
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    //Calling the callback passing the random name generated with the original extension name
                    cb(null, `${randomName}${extname(file.originalname)}`)
                }
            }),
            // filesFilter: imageFileFilter,
        }),
    )
    //async uploadedFile(@UploadedFile() file) {

    public async ExclusionListUpload(@Request() request, @Response() res, @UploadedFile() file, @Body() req: any) {

        console.log('file', file, req.id);
        try {
            const response = {
                originalname: file.originalname,
                filename: file.filename,
            };

            return await this.drawService.processExclusionXlsFIle(file, req.id, res, request);

        } catch (error) {
            return res
                .status(500)
                .json(`Failed to upload file: ${error.message}`);
        }

    }