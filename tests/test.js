import test from 'ava';
import readPost from '../index';

test('title', async t => {
  const data = await readPost('test.md');
  t.same(data.meta.title, 'wow');
});

test('content', async t => {
  const data = await readPost('test.md');
  t.same(data.content, '\r\n**he**\r\n---\r\n---\r\nhaha');
});