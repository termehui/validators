import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register ip validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerIPValidation(defaultMessage = "ip") {
    addMethod(string, "ip", (message = defaultMessage) =>
        string().test({
            message,
            name: "ip",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                /^(([0–9]|[1–9][0–9]|1[0–9]{2}|2[0–4][0–9]|25[0–5])\.){3}([0–9]|[1–9][0–9]|1[0–9]{2}|2[0–4][0–9]|25[0–5])$/.test(
                    s(v)
                ),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        ip(message?: string): StringSchema;
    }
}
