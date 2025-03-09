const fs = require('fs');
const readline = require('node:readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  let a, b, c;
  const file = process.argv.slice(2)[0];

  try {
    if (file) {
      if (file.split('.').slice(-1)[0] !== 'txt') {
        throw new Error('File type should be .txt');
      }

      const content = await fs.promises.readFile(file, 'utf8').catch(() => {
        throw new Error('Such file does not exist');
      });

      const coefficients = content.split(' ');
      if (coefficients.length !== 3) {
        throw new Error('Three coefficients should be separated with spaces');
      }
      if (coefficients[0] === '0') {
        throw new Error('First coefficient can not be 0');
      }

      a = coefficients[0];
      b = coefficients[1];
      c = coefficients[2].trim();
    } else {
      try {
        a = await rl.question('a = ');
        if (isNaN(Number(a)) || '0') {
          throw new Error(
            `Expected a valid real number unequal to zero, got ${a} instead`
          );
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
      rl.write('There is 1 root:\n');
      rl.write(`x = ${result[0]}`);
    } else {
      rl.write('There are 2 roots:\n');
      rl.write(`x1 = ${result[0]}\n`);
      rl.write(`x2 = ${result[1]}`);
    }
    rl.close();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const solveEquation = (a, b, c) => {
  const discriminator = b * b - 4 * a * c;
  if (discriminator < 0) {
    return -1;
  }
  if (discriminator === 0) return [-b / (2 * a)];
  const x1 = (-b + Math.sqrt(discriminator)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminator)) / (2 * a);
  return [x1, x2];
};

main();
