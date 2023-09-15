import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register uuid validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerUUIDValidator(defaultMessage = "uuid") {
    addMethod(string, "uuid", (message = defaultMessage) =>
        string().test({
            message,
            name: "uuid",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
                    s(v)
                ),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        uuid(message?: string): StringSchema;
    }
}
