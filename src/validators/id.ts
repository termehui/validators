import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register id number (persian) validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerIDNumberValidator(defaultMessage = "idnumber") {
    addMethod(string, "idNumber", (message = defaultMessage) =>
        string().test({
            message,
            name: "idNumber",
            exclusive: true,
            test: (v: Maybe<string>) => !v || /^\d{1,10}$/.test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        idNumber(message?: string): StringSchema;
    }
}
