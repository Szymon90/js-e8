const obj = {
    wlasnosc: 100
};
Object.defineProperty(obj, 'wlasnosc1', {
    value: 'wartosc',
    enumerable: true,
    configurable: true,
    writable: true
});

Object.defineProperty(obj, 'metoda', {
    value: function () {
        return this.wlasnosc + this.wlasnosc1;
    },
    enumerable: true,
    configurable: true,
    writable: true
});

(function () {
    let stan = 10;

    Object.defineProperty(obj, 'wlasnosc2', {
        get: function () {
            return stan;
        },
        set: function (value) {
            const newValue = parseInt(value, 10);
            if (typeof newValue === 'number') {
                stan = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
}());

Object.defineProperties(obj, {
    wlasnosc1: {
        value: 'wartosc',
        enumerable: true,
        configurable: true,
        writable: true
    },
    metoda: {
        value: function () {
            return this.wlasnosc + this.wlasnosc1;
        },
        enumerable: true,
        configurable: true,
        writable: true
    }
});

console.log(obj);

/**
 * 1. nie ma params - tworzy "pusty" obiekt, z wlasnoscia length = 0
 * 2. jeden param -
 *      a) sprawdz typ parametru
 *      b) jezeli typ jest liczba to
 *          - jezeli liczba calkowita to punkt 1
 *          - jezeli liczba zmiennoprzecinkowa to:
 *                  przerwij dzialanie i wyswietl komunikat błędu
 *      c) jezeli typ nie jest number to wstaw parametr
 *         jako element listy i powieksz wlasnosc length
 * 3. wiecej niz jeden parametr - (2c) wstaw elementy do obiektu
 *    i zwieksz length
 */
function MyArray() {
    const args = arguments;
    const length = args.length;
    this.length = length;
    if (length > 0) {
        if (length === 1) {
            if (typeof args[0] === 'number') {
                if (parseInt(args[0]) === args[0]) {
                    this.length = args[0];
                } else {
                    throw new RangeError('Invalid array length');
                }
            } else {
                this[0] = args[0];
            }
        } else {
            for (let index = 0; index < length; index += 1) {
                this[index] = args[index];
            }
        }
    }
}

Object.assign(MyArray.prototype, {
    push: function () {
        const args = arguments;
        const startLength = this.length;
        const endLength = startLength + args.length;

        /* for (let index = startLength; index < endLength; index += 1) {
            this[index] =
        } */

        for (let i = 0; i < args.length; i += 1) {
            this[startLength + i] = args[i];
        }

        this.length = endLength;
        return endLength;
    },
    forEach: function (callback) {
        const list = this;
        const length = list.length;

        for (let i = 0; i < length; i += 1) {
            callback(list[i], i);
        }
    },
    map: function (callback) {
        const arr = new MyArray();
        const list = this;
        const length = list.length;

        for (let i = 0; i < length; i += 1) {
            const ret = callback(list[i], i);
            arr.push(ret);
        }
        return arr;
    }
});

