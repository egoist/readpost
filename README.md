# Readpost [![Build Status](https://img.shields.io/circleci/project/egoist/readpost/master.svg)](https://circleci.com/gh/egoist/readpost/tree/master)

Parse posts that are formated with Yaml and Markdown.

## Installation

```bash
npm install --save readpost
```

## Example

Meta is Yaml, Content is Markdown:

```markdown
title: Hello World
categories:
  - life
  - random
---
Tomorrow is another **day**, oh uptown funk you up. 
```

Usage:

```javascript
const readpost = require('readpost');
readpost('./post.md')
  .then(data => console.log(data);
// output:
{
  meta: Object,
  content: String
}
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)