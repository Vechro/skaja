import { Path } from './index.js';

/**
 * @param {string} desc
 * @param {Function} fn
 */
function it(desc: string, fn: Function) {
  try {
    fn();
    console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
  } catch (error) {
    console.log('\n');
    console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
    console.error(error);
  }
}

function assert(isTrue: any) {
  if (!isTrue) {
    throw new Error();
  }
}

it('should be "M 10 30 L 0 1 l 50 13 Z "', () => {
  assert("M 10 30 L 0.125 1 l 50 13 Z " === new Path().M(10, 30).L(0.125, 1).l(50, 13).Z().toString)
})