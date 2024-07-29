export * from "./utils";
import { registerAlnumValidator } from "./validators/alnum";
import { registerAlnumFaValidator } from "./validators/alnumfa";
import { registerCreditCardValidator } from "./validators/credit";
import { registerIBANValidator } from "./validators/iban";
import { registerIDNumberValidator } from "./validators/id";
import { registerIdentifierValidator } from "./validators/identifier";
import { registerIPValidation } from "./validators/ip";
import { registerIPPortValidation } from "./validators/ipport";
import { registerJalaliDateValidator } from "./validators/jalali";
import { registerMobileValidator } from "./validators/mobile";
import { registerNationalCodeValidator } from "./validators/nationalcode";
import { registerPostalCodeValidator } from "./validators/postalcode";
import { registerTelValidator } from "./validators/tel";
import { registerUnsignedValidator } from "./validators/unsigned";
import { registerUsernameValidator } from "./validators/username";
import { registerUUIDValidator } from "./validators/uuid";

/**
 * register all validator
 */
export function registerAll() {
    registerAlnumValidator();
    registerAlnumFaValidator();
    registerCreditCardValidator();
    registerIBANValidator();
    registerIDNumberValidator();
    registerIdentifierValidator();
    registerIPValidation();
    registerIPPortValidation();
    registerJalaliDateValidator();
    registerMobileValidator();
    registerNationalCodeValidator();
    registerPostalCodeValidator();
    registerTelValidator();
    registerUnsignedValidator();
    registerUsernameValidator();
    registerUUIDValidator();
}

export {
    registerAlnumValidator,
    registerAlnumFaValidator,
    registerCreditCardValidator,
    registerIBANValidator,
    registerIDNumberValidator,
    registerIdentifierValidator,
    registerIPValidation,
    registerIPPortValidation,
    registerJalaliDateValidator,
    registerMobileValidator,
    registerNationalCodeValidator,
    registerPostalCodeValidator,
    registerTelValidator,
    registerUnsignedValidator,
    registerUsernameValidator,
    registerUUIDValidator,
};
