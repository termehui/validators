import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register mobile validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerMobileValidator(defaultMessage = "mobile") {
    addMethod(string, "mobile", (message = defaultMessage) =>
        string().test({
            message,
            name: "mobile",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v || /^(\(09\d{2}\) \d{3}-\d{4})|(09\d{9})$/.test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        mobile(message?: string): StringSchema;
    }
}
