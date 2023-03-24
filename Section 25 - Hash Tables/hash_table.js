/**
 * Implement a hash table
 */

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(k, v) {
        const hashedKey = this._hash(k);
        this.keyMap[hashedKey] = this.keyMap[hashedKey] || [];
        this.keyMap[hashedKey].push([k, v]);
    }

    get(k) {
        const hashedKey = this._hash(k);
        const content = this.keyMap[hashedKey] || [];
        const element = content.find(e => e[0] === k);
        return element ? element[1] : undefined;
    }

    keys() {
        const result = [];
        for (let e of this.keyMap) {
            for (let i of e || []) {
                result.push(i[0]);
            }
        }
        return result;
    }

    values() {
        const result = new Set();
        for (let e of this.keyMap) {
            for (let i of e || []) {
                result.add(i[1]);
            }
        }
        return Array.from(result);
    }
}