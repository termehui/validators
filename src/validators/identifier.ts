import { addMethod, number } from "yup";
import { Maybe } from "yup";

/**
 * Register identifier to yup
 *
 * @param defaultMessage default error message
 */
export function registerIdentifierValidator(defaultMessage = "identifier") {
    addMethod(number, "identifier", (message = defaultMessage) =>
        number().test({
            message,
            name: "identifier",
            exclusive: true,
            test: (v: Maybe<number>) => !v || v > 0,
        })
    );
}

declare module "yup" {
    interface NumberSchema {
        identifier(message?: string): NumberSchema;
    }
}
