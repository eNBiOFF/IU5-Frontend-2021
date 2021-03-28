/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */

Object.defineProperty(Array.prototype, 'myMap', {
    value: function(fnc) {
        return this.reduce((a, b) => a.concat(fnc(b)), []);
    },
    configurable: true
});