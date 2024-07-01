import fs from 'fs-extra';

const createFile = (file, code) => {
  if (!fs.existsSync(file)) {
    fs.ensureFileSync(file);
    fs.writeFileSync(file, code);
  } else {
    console.error(`File ${file} is already exists!`);
  }
};

export default createFile;
