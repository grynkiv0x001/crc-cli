import Table from 'cli-table3';

// TODO: Use data from args.js to fill the table
import args from './args.js';

const table = new Table({
  head: ['Name', 'Type', 'Usage'],
});

const usageTable = () => {
  table.push(
    ['--name, -n', 'String', 'crc --name TestComponent'],
    ['--interactive, -i', 'Boolean'],
    ['--ext', 'String', 'crc -n Test --ext tsx'],
  );

  console.log('\nUsage: ');
  console.log(table.toString());
};

export default usageTable;
