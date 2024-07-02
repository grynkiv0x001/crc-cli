import fs from 'fs/promises';

const createDir = async (dirPath) => {
  try {
    await fs.access(dirPath);
    console.error('🚫 Directory already exists!');
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (mkdirError) {
        console.error('❌ Error creating directory:', mkdirError.message);
      }
    }
  }
};

export default createDir;
