import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register postal code validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerPostalCodeValidator(defaultMessage = "postalcode") {
    addMethod(string, "postalCode", (message = defaultMessage) =>
        string().test({
            message,
            name: "postalCode",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v || /^(\d{5}-\d{5})|(\d{10})$/.test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        postalCode(message?: string): StringSchema;
    }
}
