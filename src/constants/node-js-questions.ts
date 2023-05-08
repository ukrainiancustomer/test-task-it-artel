export const NODEJS_Q4_SOURCE_CODE = `
  import { EventEmitter } from 'events';

  const eventEmitter = new EventEmitter();

  eventEmitter.on('myEvent', (data) => {
    console.log(data, '- FIRST');
  });

  console.log('Statement A');

  eventEmitter.on("myEvent", data => {
    console.log(data, '- SECOND');
  });

  eventEmitter.emit('myEvent', 'Emitted Statement');

  console.log("Statement B");

`;

export const NODEJS_Q5_SOURCE_CODE = `
  import fs from 'fs-promise'

  async function printFiles () {
    const files = await getFilePaths() // Assume this works fine

    files.forEach(async (file) => {
      const contents = await fs.readFile(file, 'utf8')
      console.log(contents)
    })
  }

  printFiles()

`;

export const NODEJS_Q5_SOLUTION_CODE = `
  import fs from 'fs-promise'

  async function printFiles() {
    const files = await getFilePaths()

    for (const file of files) {
      const contents = await fs.readFile(file, 'utf8')
      console.log(contents)
    }
  }

  printFiles()

`;

export const NODEJS_Q6_CODE_EXAMPLE_EXPORT = `
  // math.util.ts

  function add(a: number, b: number): number {
    return a + b;
  }

  function multiply(a: number, b: number): number {
    return a * b;
  }

`;

export const NODEJS_Q6_CODE_EXAMPLE_REQUIRE = `
  // index.js

  const math = require('./math');

  console.log(math.add(1, 2)); // output: 3
  console.log(math.multiply(2, 2)); // output: 4

`;
