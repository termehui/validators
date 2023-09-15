import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup";

/**
 * Register alnumfa validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerAlnumFaValidator(defaultMessage = "alnumfa") {
    addMethod(string, "alnumfa", (contains: string, message = defaultMessage) =>
        string().test({
            message,
            name: "alnumfa",
            params: { contains },
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                !new RegExp(
                    `[^\u0600-\u06FF\uFB8A\u067E\u0686\u06AFa-z0-9${contains}]`,
                    "gi"
                ).test(s(v)),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        alnumfa(contains: string, message?: string): StringSchema;
    }
}
