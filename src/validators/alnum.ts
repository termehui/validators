import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register alnum validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerAlnumValidator(defaultMessage = "alnum") {
    addMethod(string, "alnum", (contains: string, message = defaultMessage) =>
        string().test({
            message,
            name: "alnum",
            params: { contains },
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v || !new RegExp(`[^a-z0-9${contains}]`, "gi").test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        alnum(contains: string, message?: string): StringSchema;
    }
}
