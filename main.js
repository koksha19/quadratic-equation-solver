const fs = require('fs');
const readline = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  let a, b, c;
  const file = process.argv.slice(2)[0];

  if (file) {
    const content = fs.readFileSync(file, 'utf8');
    const args = content.split(' ');
    a = args[0];
    b = args[1];
    c = args[2].trim();
  } else {
    try {
      a = await rl.question('a = ');
      if (isNaN(Number(a))) {
        throw new Error(`Expected a valid real number, got ${a} instead`);
      }

      b = await rl.question('b = ');
      if (isNaN(Number(b))) {
        throw new Error(`Expected a valid real number, got ${b} instead`);
      }

      c = await rl.question('c = ');
      if (isNaN(Number(c))) {
        throw new Error(`Expected a valid real number, got ${c} instead`);
      }
    } catch (error) {
      console.error(error);
      await main();
    }
  }

  rl.write(`Equation is: (${a})x^2 + (${b})x + (${c})\n`);
  const result = solveEquation(a, b, c);
  if (result === -1) {
    rl.write('There are no roots');
  } else if (result.length === 1) {
    rl.write('There is 1 root:');
    rl.write(`x = ${result[0]}`);
  } else {
    rl.write('There are 2 roots:\n');
    rl.write(`x1 = ${result[0]}\n`);
    rl.write(`x2 = ${result[1]}`);
  }
  rl.close();
};

const solveEquation = (a, b, c) => {
  const discriminator = b * b - 4 * a * c;
  if (discriminator < 0) {
    return -1;
  }
  const x1 = (-b + Math.sqrt(discriminator)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminator)) / (2 * a);
  return [x1, x2];
};

main();
