#!/usr/bin/env node
import arg from 'arg';
import colors from '@colors/colors';

import args, { ARGS_NAMES } from './args.js';
import createFile from './helpers/createFile.js';
import usageTable from './usageTable.js';

try {
  const toolArgs = arg({
    ...args,
  });

  const isInteractive = toolArgs[ARGS_NAMES.INTERACTIVE];
  const componentName = toolArgs[ARGS_NAMES.NAME];

  if (!componentName && !isInteractive) {
    throw new Error(`Missing required argument: [${ARGS_NAMES.NAME}]`);
  } else {
    const componentExtension = toolArgs[ARGS_NAMES.EXTENSION] || 'js';

    createFile(`${componentName}.${componentExtension}`);
  }

  console.log(colors.black.bgGreen(' Starting... '));
} catch (e) {
  console.error('❌', e?.message);

  usageTable();
}
