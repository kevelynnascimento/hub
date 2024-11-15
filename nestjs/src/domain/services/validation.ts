export abstract class Validation {

    public validateMinLength(password: string, minLength: number): boolean {
        const lengthIsValid = password.length >= minLength;

        if (!lengthIsValid) {
            return false;
        }

        return true;
    }

    public validateHasCapitalLetter(password: string): boolean {
        const hasCapitalLetter = /[A-Z]/.test(password);

        if (!hasCapitalLetter) {
            return false;
        }

        return true;
    }

    public validateHasLowerLetter(password: string): boolean {
        const hasLowerLetter = /[a-z]/.test(password);

        if (!hasLowerLetter) {
            return false;
        }

        return true;
    }

    public validateHasNumber(password: string): boolean {
        const hasNumber = /\d/.test(password);

        if (!hasNumber) {
            return false;
        }

        return true;
    }

    public validateHasUnderscore(password: string): boolean {
        const hasUnderscore = password.includes('_');

        if (!hasUnderscore) {
            return false;
        }

        return true;
    }

    abstract validatePassword(password: string): boolean;
}