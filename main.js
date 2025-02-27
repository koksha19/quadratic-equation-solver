const readline = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectData = async () => {
  const a = await rl.question('a = ');
  const b = await rl.question('b = ');
  const c = await rl.question('c = ');
  rl.write(`Equation is: (${a})x^2 + (${b})x + (${c})`);
  const result = solveEquation(a, b, c);
  console.log(result);
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
  console.log(a, b, c);
  const discriminator = b * b - 4 * a * c;
  console.log(discriminator);
  if (discriminator < 0) {
    return -1;
  }
  const x1 = (-b + Math.sqrt(discriminator)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminator)) / (2 * a);
  console.log(x1, x2);
  return [x1, x2];
};

collectData();
