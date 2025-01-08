import { envLength } from "npm:@magurotuna/env-length-esm@1.0.0";

const ITERATIONS = 10_000;

let sum = 0;

for (let i = 0; i < ITERATIONS; i++) {
  sum += envLength();
}

console.log(sum);
