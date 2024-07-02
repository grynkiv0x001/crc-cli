import fs from 'fs/promises';

const createFile = async (fileName, content = '') => {
  try {
    await fs.access(fileName);
    console.error('🚫 File already exists!');
  } catch (err) {
    try {
      await fs.writeFile(fileName, content);

      console.log('✅ File created successfully!');
      console.log('Name: ', fileName);
    } catch (writeErr) {
      console.error(`❌ Error writing file: ${writeErr.message}`);
    }
  }
};

export default createFile;
