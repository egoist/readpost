import test from 'ava';
import readPost from './index';

test('main', async t => {
  const data = await readPost('test.md');
  console.log(data)
  t.pass();
});