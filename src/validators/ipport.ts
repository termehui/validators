import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register ip validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerIPPortValidation(defaultMessage = "ipport") {
    addMethod(string, "ipPort", (message = defaultMessage) =>
        string().test({
            message,
            name: "ipPort",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/.test(
                    s(v)
                ),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        ipPort(message?: string): StringSchema;
    }
}
