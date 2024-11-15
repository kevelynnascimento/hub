import { PasswordService } from "../password.service";
import { ValidationOne } from "../validation-one";

describe('PasswordService', () => {
    let passwordService: PasswordService;

    beforeEach(() => {
        const validation = new ValidationOne();
        passwordService = new PasswordService(validation);
    })

    //     Validation 2:

    // Have more than 6 characters
    // Contains a capital letter
    // Contains a lowercase
    // Contains a number
    // Validation 3:

    // Have more than 16 characters
    // Contains a capital letter
    // Contains a lowercase
    // Contains an underscore

    describe('validatePassword', () => {
        it('shold be return false when I pass a password less than 9', () => {
            const password = '12_';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(false);
        })

        it('shold be return false when I do not pass a capital letter', () => {
            const password = 'b123456_78';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(false);
        })

        it('shold be return false when I do not pass a capital letter', () => {
            const password = 'b123456_78';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(false);
        })

        it('shold be return false when I do not pass a lower case', () => {
            const password = 'A1234567_89';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(false);
        })

        it('shold be return false when I do not pass a number', () => {
            const password = 'AAAAAAAAAAbb_b';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(false);
        })

        it('shold be return false when I do not pass any underscore', () => {
            const password = 'AA88655bb';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(false);
        })


        it('shold be return true when I pass everthing alright', () => {
            const password = 'AA886_55bb';

            const output = passwordService.validatePassword(password);

            expect(output).toEqual(true);
        })
    })

})