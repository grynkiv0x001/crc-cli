import prompts from 'prompts';

import toKebabCase from './helpers/toKebabCase.js';

import createDir from './helpers/createDir.js';
import createFile from './helpers/createFile.js';

import { jsBase, scssBase } from '../templates/base.js';

const questions = [
  {
    type: 'text',
    name: 'componentName',
    message: 'Enter component name: ',
  },
  {
    type: 'text',
    name: 'componentPath',
    message: 'Enter component path: ',
  },
  {
    type: 'select',
    name: 'extension',
    message: 'Choose component file extension: ',
    choices: [
      {
        title: '.js',
        value: 'js',
      },
      {
        title: '.ts',
        value: 'ts',
      },
      {
        title: '.jsx',
        value: 'jsx',
      },
      {
        title: '.tsx',
        value: 'jsx',
      },
    ],
  },
  {
    type: 'select',
    name: 'styles',
    message: 'Choose style system: ',
    choices: [
      {
        title: 'SCSS',
        value: '.module.scss',
      },
      {
        title: 'CSS',
        value: '.css',
      },
      {
        title: 'None',
        value: undefined,
      },
    ],
  },
];

const runComponentCreator = async () => {
  try {
    const response = await prompts(questions);

    if (response) {
      const { componentName, componentPath, extension, styles } =
        response || {};

      const dirName = toKebabCase(componentName);
      await createDir(`${componentPath}/${dirName}`);

      const componentFilename = `${componentPath}/${dirName}/${componentName}.${extension}`;

      await createFile(componentFilename, jsBase(componentName));

      if (styles) {
        const filePath = `${componentPath}/${dirName}/`;
        const stylesFilename =
          filePath +
          componentName.charAt(0).toLowerCase() +
          componentName.slice(1) +
          styles;

        await createFile(stylesFilename, scssBase(componentName));
      }
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

export default runComponentCreator;
