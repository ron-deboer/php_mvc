class DataCipher {
    constructor() {
        this.b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }

    encode(e) {
        let t = "bey2wsUj9EC6xWToiGv7";
        const x1 = this.xor_encrypt(t, e);
        const x2 = this.b64_encode(x1);
        return x2;
    }
    decode(e) {
        let t = "bey2wsUj9EC6xWToiGv7";
        const x1 = this.b64_decode(e);
        const x2 = this.xor_decrypt(t, x1);
        return x2;
    }

    b64_encode(t) {
        let e = 0,
            r = "";
        if (!t) return t;
        do {
            let h = t[e++],
                n = t[e++],
                i = t[e++],
                a = (h << 16) | (n << 8) | i;
            (h = (a >> 18) & 63),
                (n = (a >> 12) & 63),
                (i = (a >> 6) & 63),
                (a &= 63),
                (r +=
                    this.b64_table.charAt(h) +
                    this.b64_table.charAt(n) +
                    this.b64_table.charAt(i) +
                    this.b64_table.charAt(a));
        } while (e < t.length);
        return ((t = t.length % 3) ? r.slice(0, t - 3) : r) + "===".slice(t || 3);
    }
    b64_decode(t) {
        let e = 0,
            r = [];
        if (!t) return t;
        t += "";
        do {
            let h = this.b64_table.indexOf(t.charAt(e++)),
                n = this.b64_table.indexOf(t.charAt(e++)),
                i = this.b64_table.indexOf(t.charAt(e++)),
                a = this.b64_table.indexOf(t.charAt(e++)),
                c = (h << 18) | (n << 12) | (i << 6) | a;
            (h = (c >> 16) & 255),
                (n = (c >> 8) & 255),
                (c &= 255),
                r.push(h),
                64 !== i && (r.push(n), 64 !== a && r.push(c));
        } while (e < t.length);
        return r;
    }
    keyCharAt(t, e) {
        return t.charCodeAt(Math.floor(e % t.length));
    }
    xor_encrypt(t, e) {
        let r = [];
        for (let h = 0; h < e.length; h++) {
            const ch = e[h].charCodeAt(0) ^ this.keyCharAt(t, h);
            r.push(ch);
        }
        return r;
    }
    xor_decrypt(t, e) {
        let r = [];
        for (let h = 0; h < e.length; h++) {
            const ch = String.fromCharCode(e[h] ^ this.keyCharAt(t, h));
            r.push(ch);
        }
        return r.join("");
    }
}
export default new DataCipher();