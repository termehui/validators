import { setLocale } from "yup";
import { object } from "yup";

/**
 * Error Map
 */
export interface ErrorMap {
    [field: string]: string[];
}

/**
 * Error Field
 *
 * Single error for field
 */
export interface ErrorField {
    [field: string]: string;
}

/**
 * Get error rules from keyed error
 *
 * @param err error response
 * @returns error rules
 */
export function getErrorRules(err: any): ErrorMap {
    let res: ErrorMap = {};
    if (typeof err === "object" && err) {
        for (const [field, errors] of Object.entries(err)) {
            if (typeof errors == "object" && errors) {
                res[field] = Object.keys(errors as object);
            }
        }
    }
    return res;
}

/**
 * Get error messages from keyed error
 *
 * @param err error response
 * @returns error messages
 */
export function getErrorMessages(err: any): ErrorMap {
    let res: ErrorMap = {};
    if (typeof err === "object" && err) {
        for (const [field, errors] of Object.entries(err)) {
            if (typeof errors == "object" && errors) {
                res[field] = Object.values(errors as object);
            }
        }
    }
    return res;
}

/**
 * Get first error rule from errors list
 *
 * @param err error response
 * @returns first error rule
 */
export function getFirstRule(err: any): ErrorField {
    let res: ErrorField = {};
    if (typeof err === "object" && err) {
        for (const [field, errors] of Object.entries(err)) {
            if (Array.isArray(errors)) {
                res[field] = errors[0];
            } else if (typeof errors === "object") {
                if (Object.keys(errors as object).length) {
                    res[field] = Object.keys(errors as object)[0];
                }
            } else {
                res[field] = `${object}`;
            }
        }
    }
    return res;
}

/**
 * Get first error message from errors list
 *
 * @param err error response
 * @returns first error message
 */
export function getFirstMessage(err: any): ErrorField {
    let res: ErrorField = {};
    if (typeof err === "object" && err) {
        for (const [field, errors] of Object.entries(err)) {
            if (Array.isArray(errors)) {
                res[field] = errors[0];
            } else if (typeof errors === "object") {
                if (Object.values(errors as object).length) {
                    res[field] = Object.values(errors as object)[0];
                }
            } else {
                res[field] = `${object}`;
            }
        }
    }
    return res;
}

/**
 * make yup message keyed mode
 *
 * when call this function yup return error key as error message instead of message
 */
export function makeYupKeyedErrors() {
    setLocale({
        mixed: {
            required: "required",
            oneOf: "oneOf",
            notOneOf: "notOneOf",
            notType: "notType",
            defined: "defined",
        },

        string: {
            length: "length",
            min: "min",
            max: "max",
            matches: "matches",
            email: "email",
            url: "url",
            uuid: "uuid",
            trim: "trim",
            lowercase: "lowercase",
            uppercase: "uppercase",
        },

        number: {
            min: "min",
            max: "max",
            lessThan: "lessThan",
            moreThan: "moreThan",
            positive: "positive",
            negative: "negative",
            integer: "integer",
        },

        date: {
            min: "min",
            max: "max",
        },

        object: {
            noUnknown: "noUnknown",
        },

        array: {
            length: "length",
            min: "min",
            max: "max",
        },
        boolean: {
            isValue: "isValue",
        },
    });
}

// s convert nullable string to string
export function s(v: any): string {
    return v ? `${v}` : "";
}

// n extract numbers from nullable string
export function n(v: any): string {
    return s(v).match(/\d+/g)?.join("") || "";
}
