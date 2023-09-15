import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register credit card validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerCreditCardValidator(defaultMessage = "credit") {
    addMethod(string, "credit", (longNum: boolean, message = defaultMessage) =>
        string().test({
            message,
            name: "credit",
            params: { longNum },
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                (longNum
                    ? /^((\d{4}-\d{4}-\d{4}-\d{4}-\d{4}))|(\d{20})$/.test(s(v))
                    : /^((\d{4}-\d{4}-\d{4}-\d{4}))|(\d{16})$/.test(s(v))),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        credit(longNum: boolean, message?: string): StringSchema;
    }
}
