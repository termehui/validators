import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register username validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerUsernameValidator(defaultMessage = "username") {
    addMethod(string, "username", (message = defaultMessage) =>
        string().test({
            message,
            name: "username",
            exclusive: true,
            test: (v: Maybe<string>) => !v || /^[0-9a-zA-Z\-\._]+$/.test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        username(message?: string): StringSchema;
    }
}
