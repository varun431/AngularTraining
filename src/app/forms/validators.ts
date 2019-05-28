import { FormControl } from '@angular/forms';

export function zipCodeValidator(ctrl: FormControl) {
    const pinCodes = [12323, 1243423, 124213423, 12345];

    // tslint:disable-next-line: radix
    if (pinCodes.includes(parseInt(ctrl.value))) {
        return null;
    }

    return {
        zipCode: {
            enteredCode: ctrl.value,
            allowed: pinCodes.toString()
        }
    };
}
