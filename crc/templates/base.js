import toKebabCase from '../bin/helpers/toKebabCase.js';

export const jsBase = (name) => `const ${name} = () => {
  return (
    <>Placeholder</>
  );
};

export default ${name};
`;

export const scssBase = (name) => `.${toKebabCase(name)} {

}`;
