import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            //console.log("...... djdjdjdj")
            return await super.transform(value, metadata);
        } catch (e) {
           console.log("*****************************");
           console.log("Error is ");
            if (e instanceof BadRequestException) {
                throw new UnprocessableEntityException(this.handleError(e.message));
            }
        }
    }

    private handleError(errors) {
        console.log(".......")
       
        return errors.map(error => error.constraints);
    }
}
