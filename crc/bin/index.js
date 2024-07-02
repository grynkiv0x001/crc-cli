#!/usr/bin/env node
import arg from 'arg';
import colors from '@colors/colors';

import args, { ARGS_NAMES } from './args.js';
import createDir from './helpers/createDir.js';
import createFile from './helpers/createFile.js';
import usageTable from './usageTable.js';
import { jsBase, scssBase } from '../templates/base.js';
import toKebabCase from './helpers/toKebabCase.js';
import runComponentCreator from './componentCreator.js';

const main = async () => {
  try {
    const toolArgs = arg({
      ...args,
    });

    console.log(colors.black.bgGreen(' Starting... '));

    const isInteractive = toolArgs[ARGS_NAMES.INTERACTIVE];
    const componentPath = toolArgs[ARGS_NAMES.NAME];

    if (isInteractive) {
      runComponentCreator();
      return;
    }

    const componentName =
      toolArgs[ARGS_NAMES.NAME]?.split('/')?.pop() || toolArgs[ARGS_NAMES.NAME];

    if (!componentName) {
      throw new Error(`Missing required argument: [${ARGS_NAMES.NAME}]`);
    }

    const componentExtension = toolArgs[ARGS_NAMES.EXTENSION] || 'js';
    const defaultStylesFile =
      componentName.charAt(0).toLowerCase() + componentName.slice(1);

    const dirName = toKebabCase(componentPath);

    await createDir(dirName);

    const componentFilename = `${dirName}/${componentName}.${componentExtension}`;
    const componentStyleFilename = `${dirName}/${defaultStylesFile}.module.scss`;

    await createFile(componentFilename, jsBase(componentName));
    await createFile(componentStyleFilename, scssBase(componentName));
  } catch (e) {
    console.error('❌', e?.message);

    usageTable();
  }
};

main();
