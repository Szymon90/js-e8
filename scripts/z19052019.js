const template = `
    <div id="arkanoid" class="game" role="application" tabindex="-1">
        <div class="panel">
            <div class="lifes">
                Lifes:
                <span ref="lifes">3</span>
            </div>
            <div class="score">
                Score:
                <span ref="score">0</span>
            </div>
        </div>
        <div class="arena" ref="arena">
            <div class="bricks" ref="bricks"></div>
            <div class="paddle" ref="paddle"></div>
            <div class="ball" ref="ball"></div>
        </div>
    </div>
`;

/* string
number
null
undefined
boolean

Object
Function
Array
String */

console.log('s' === new String('s'));
console.log(typeof 's');
console.log(typeof new String('s'));

/*
'string'.split('');
(6) ["s", "t", "r", "i", "n", "g"]
'st ri ng'.split(' ');
(3) ["st", "ri", "ng"]
'string'.length
6
Array.prototype.slice('string')
[]
Array.prototype.slice.call('string')
(6) ["s", "t", "r", "i", "n", "g"]

Array.from('string')
(6) ["s", "t", "r", "i", "n", "g"]
[...'string']
(6) ["s", "t", "r", "i", "n", "g"]

function sum() {
	const args = arguments;

	console.log(args)
}
undefined
sum(1, 'ddd')
VM1245:4 Arguments(2) [1, "ddd", callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 11: "ddd"callee: ƒ sum()length: 2Symbol(Symbol.iterator): ƒ values()__proto__: Object
undefined
function (...args) {
	console.log(args)
}
VM1400:1 Uncaught SyntaxError: Unexpected token (
function sum(...args) {
	console.log(args)
}
undefined
sum(1, 4, 6)
VM1431:2 (3) [1, 4, 6]0: 11: 42: 6length: 3__proto__: Array(0)
undefined
A bad HTTP response code (404) was received when fetching the script.
function sum(param1, ...rest) {
	console.log(param1, rest);
}
undefined
sum(1, 4, 5, 'fsdf')
VM1658:2 1 (3) [4, 5, "fsdf"]

const arr = ['a', 'b', 'c'];

const arr1 = [
	...arr,
	'd',
	'e',
	'a'
];
undefined
arr1
(6) ["a", "b", "c", "d", "e", "a"]

const obj = {
	color: 'red',
	border: '1px solid #333'
}

const obj1 = {
	...obj,
	padding: '0 2px',
	color: 'blue'
};
undefined
obj1
{color: "blue", border: "1px solid #333", padding: "0 2px"}
*/

const obj = {};
/*
    const obj = new Object();

    const obj = Object.create(Object.prototype);
*/
let stateProp1 = 1;

function action(value) {
    console.log(value);
}


Object.defineProperty(obj, 'prop1', {
    get: function () {
        return stateProp1;
    },
    set: function (value) {
        const oldValue = stateProp1;
        stateProp1 += value;
    },
    enumerable: true,
    configurable: false
});

Object.defineProperties(obj, {
    prop2: {
        value: 100,
        writable: false,
        enumerable: true
    },
    prop3: {
        value: function () {
            return this.prop2 + this.prop1;
        }
    }
});

const obj1 = Object.create(obj, {
    prop4: {
        value: 'OBJ1',
        writable: true
    }
});
console.log(obj)
