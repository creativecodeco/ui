/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';

(global as any).CSS = {
  supports: (_k: any, _v: any) => false
};
