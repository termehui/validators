import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register tel validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerTelValidator(defaultMessage = "tel") {
    addMethod(string, "tel", (prefixed: boolean, message = defaultMessage) =>
        string().test({
            message,
            name: "tel",
            params: { prefixed },
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                (prefixed
                    ? /(\(0\d{2}\) \d{4}-\d{4})|(0\d{10})/.test(s(v))
                    : /^(\d{4}-\d{4})|\d{8}$/.test(s(v))),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        tel(prefixed: boolean, message?: string): StringSchema;
    }
}
