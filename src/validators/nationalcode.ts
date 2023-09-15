import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register national code validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerNationalCodeValidator(defaultMessage = "nationalcode") {
    addMethod(string, "nationalCode", (message = defaultMessage) =>
        string().test({
            message,
            name: "nationalCode",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v || /^(\d{3}-\d{6}-\d{1})|(\d{10})$/.test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        nationalCode(message?: string): StringSchema;
    }
}
