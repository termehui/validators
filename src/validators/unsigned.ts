import { addMethod, number } from "yup";
import { Maybe } from "yup";

/**
 * Register unsigned to yup
 *
 * @param defaultMessage default error message
 */
export function registerUnsignedValidator(defaultMessage = "unsigned") {
    addMethod(number, "unsigned", (message = defaultMessage) =>
        number().test({
            message,
            name: "unsigned",
            exclusive: true,
            test: (v: Maybe<number>) => !v || v >= 0,
        })
    );
}

declare module "yup" {
    interface NumberSchema {
        unsigned(message?: string): NumberSchema;
    }
}
