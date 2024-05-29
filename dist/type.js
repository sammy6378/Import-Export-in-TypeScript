"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.unionIntersection = void 0;
const unionIntersection = () => {
    // Union Types in TypeScript : Union types are used when we want to work with multiple types of values.
    let unionType;
    unionType = 10;
    unionType = "Hello";
    unionType = true;
    let abc = {
        a: 10,
        b: 20,
        c: 30
    };
    console.log(abc);
    let xyz = {
        x: 10,
        y: 20,
        z: 30
    };
    console.log(xyz);
};
exports.unionIntersection = unionIntersection;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
