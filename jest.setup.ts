import '@testing-library/jest-dom';

(
  global as unknown as {
    CSS: { supports: (k: unknown, v: unknown) => boolean };
  }
).CSS = {
  supports: (_k: unknown, _v: unknown) => false
};
