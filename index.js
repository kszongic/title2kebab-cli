#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function run(input) {
  input.split(/\r?\n/).forEach(line => {
    if (line) process.stdout.write(toKebab(line) + '\n');
  });
}

if (args.length > 0) {
  run(args.join(' '));
} else if (!process.stdin.isTTY) {
  let buf = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', d => (buf += d));
  process.stdin.on('end', () => run(buf));
} else {
  console.log('Usage: title2kebab <string>');
  console.log('       echo "Hello World" | title2kebab');
  process.exit(1);
}
