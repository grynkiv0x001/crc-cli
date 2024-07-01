export const ARGS_NAMES = {
  NAME: '--name',
  INTERACTIVE: '--interactive',
  EXTENSION: '--ext',
};

const { NAME, INTERACTIVE, EXTENSION } = ARGS_NAMES;

const args = {
  [NAME]: String,
  [INTERACTIVE]: Boolean,
  [EXTENSION]: String,

  // Aliases
  '-n': NAME,
  '-i': INTERACTIVE,
};

export default args;
