import test from 'ava';
import readPost from '../index';
import fs from 'fs';
const data = fs.readFileSync(__dirname + '/test.md', 'utf8');

test('title',  t => {
  const post = readPost(data);
  t.same(post.meta.title, 'wow');
});

test('content', t => {
  const post = readPost(data);
  t.same(post.content, '\n**he**\n---\n---\nhaha');
});