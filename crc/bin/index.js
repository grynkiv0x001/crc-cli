#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';

import args from './args.js';

try {
  const toolArgs = arg({
    ...args,
  });

  console.log(chalk.black.bgGreen(' Starting... '));
} catch (e) {
  console.error(e?.message);

  console.log('Usage: ');
  console.table(args);
}
