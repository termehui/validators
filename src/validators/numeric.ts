import { n } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register numeric validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerNumericValidator(defaultMessage = "numeric") {
    addMethod(string, "numeric", (message = defaultMessage) =>
        string().test({
            message,
            name: "numeric",
            params: {},
            exclusive: true,
            test: (v: Maybe<string>) => !v || /^\d+$/.test(n(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        numeric(message?: string): StringSchema;
    }
}
