// const sum = () => {};

const sum = (...args: number[]): number => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  for (const arg of args) {
    if (typeof arg !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
  }

  return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default sum;
