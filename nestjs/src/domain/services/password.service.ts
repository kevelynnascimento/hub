import { Injectable } from '@nestjs/common';
import { Validation } from './validation';

@Injectable()
export class PasswordService {
    private readonly validation: Validation;

    constructor(validation: Validation) {
        this.validation = validation
    }

    // Have more than 8 characters
    // Contains a capital letter
    // Contains a lowercase
    // Contains a number
    // Contains an underscore

    public validatePassword(password: string): boolean {
        return this.validation.validatePassword(password);
    }
}
