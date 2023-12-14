console.log('Please click on the `Copy Preview URL` at the top right corner in order to Copy the preview URL and view your changes. You can also use the preview URL in the console below.');

const spawn = require('child_process').spawn;
const startProcess = spawn('react-scripts', ['start'], { stdio: 'pipe' });

let buffer = ''

startProcess.stdout.setEncoding('utf8');
startProcess.stdout.on('data', (data) => {
  const output = buffer + data.toString();

  // Split the output into lines
  const lines = output.split('\n');

  // The last element of the array is incomplete, store it in the buffer
  buffer = lines.pop();

  // Remove everything from "Local:" to the end of the line
  const modifiedLines = lines.map(line => {
    if (line.includes('Local:')) {
      return line.replace(/Local:.*$/, `Preview URL: http://localhost:8000`)
    } else if (line.includes('On Your Network:')) {
      return line.replace(/On Your Network:.*$/, '');
    } else {
      return line;
    }
  });

  // Log the modified lines
  console.log(modifiedLines.join('\n'));
})

startProcess.on('error', (err) => {
  console.error('Error starting the development server:', err.message);
  process.exit(1);
});
