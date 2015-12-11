import test from 'ava';
import readPost from '../index';

test('title', async t => {
  const data = await readPost('test.md');
  t.same(data.meta.title, 'wow');
});

test('content', async t => {
  const data = await readPost('test.md');
  t.same(data.content, '\n**he**\n---\n---\nhaha');
});