"use strict";

export class MIME {
    type: string;
    suffix: string;
    raw: string;
    charset: string;

    constructor(type: string, suffix: string, raw: string, charset: string) {
        this.type = type;
        this.suffix = suffix;
        this.raw = raw;
        this.charset = charset;
    }
}