import { n } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register iran iban validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerIBANValidator(defaultMessage = "iban") {
    addMethod(string, "iban", (message = defaultMessage) =>
        string().test({
            message,
            name: "iban",
            params: {},
            exclusive: true,
            test: (v: Maybe<string>) => !v || /^\d{24}$/.test(n(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        iban(message?: string): StringSchema;
    }
}
