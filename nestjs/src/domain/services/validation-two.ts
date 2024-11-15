import { Validation } from "./validation";

export class ValidationTwo extends Validation {
    //     Have more than 6 characters
    // Contains a capital letter
    // Contains a lowercase
    // Contains a number
    public validatePassword(password: string): boolean {
        const lengthIsValid = this.validateMinLength(password, 7);

        if (!lengthIsValid) {
            return false;
        }

        const hasCapitalLetter = this.validateHasCapitalLetter(password);

        if (!hasCapitalLetter) {
            return false;
        }

        const hasLowerLetter = this.validateHasLowerLetter(password);

        if (!hasLowerLetter) {
            return false;
        }

        const hasNumber = this.validateHasNumber(password);

        if (!hasNumber) {
            return false;
        }

        const hasUnderscore = this.validateHasUnderscore(password);

        if (!hasUnderscore) {
            return false;
        }

        return true;
    }
}