const { spawn } = require('child_process')
const logOutput = (name) => (data) => console.log(`[${name}] ${data}`)


function runRubyAsChild(timezones) {
  return new Promise((resolve, reject) => {
    const process = spawn('irb', ['./script.rb', JSON.stringify(timezones), '2020-09-01 11:23:18.727+05:30']);
    const out = [], err = []

    process.stdout.on(
      'data',
      (data) => {
        out.push(data.toString());
      }
    );

    process.stderr.on(
      'data',
      (data) => {
        err.push(data.toString());
        logOutput('stderr')(data);
      }
    );

    process.on('exit', (code, signal) => {
      logOutput('exit')(`${code} (${signal})`)
      if (code === 0) {
        resolve(out);
      } else {
        reject(new Error(err.join('\n')))
      }
    });

  });
}
const getJsSpecificTimezone = async () => {

  const obj = {
    '249683': { timezone: 'Pacific Time (US & Canada)' },
    '250055': { timezone: 'America/Denver' },
    '251216': { timezone: 'Central Time (US & Canada)' },
    '251714': { timezone: 'Central Time (US & Canada)' },
    '251720': { timezone: 'Central Time (US & Canada)' },
    '251723': { timezone: 'Central Time (US & Canada)' },
    '251726': { timezone: 'Central Time (US & Canada)' },
    '251753': { timezone: 'Central Time (US & Canada)' },
    '251780': { timezone: 'Central Time (US & Canada)' },
    '251786': { timezone: 'Central Time (US & Canada)' },
    '252017': { timezone: 'Central Time (US & Canada)' },
    '252023': { timezone: 'Central Time (US & Canada)' },
    '252044': { timezone: 'Central Time (US & Canada)' },
    '252047': { timezone: 'Central Time (US & Canada)' },
    '252050': { timezone: 'Central Time (US & Canada)' },
    '252053': { timezone: 'Central Time (US & Canada)' },
    '252062': { timezone: 'Central Time (US & Canada)' },
    '252068': { timezone: 'Central Time (US & Canada)' },
    '252083': { timezone: 'Central Time (US & Canada)' },
    '252710': { timezone: 'Eastern Time (US & Canada)' },
    '252713': { timezone: 'Eastern Time (US & Canada)' },
    '252716': { timezone: 'Eastern Time (US & Canada)' },
    '252719': { timezone: 'Eastern Time (US & Canada)' },
    '252722': { timezone: 'Eastern Time (US & Canada)' },
    '252725': { timezone: 'Eastern Time (US & Canada)' },
    '252728': { timezone: 'Eastern Time (US & Canada)' },
    '252731': { timezone: 'Eastern Time (US & Canada)' },
    '252734': { timezone: 'Eastern Time (US & Canada)' },
    '252737': { timezone: 'Eastern Time (US & Canada)' },
    '252740': { timezone: 'Eastern Time (US & Canada)' },
    '252743': { timezone: 'Eastern Time (US & Canada)' },
    '252746': { timezone: 'Eastern Time (US & Canada)' },
    '252749': { timezone: 'Eastern Time (US & Canada)' },
    '252752': { timezone: 'Eastern Time (US & Canada)' },
    '252758': { timezone: 'Eastern Time (US & Canada)' },
    '252776': { timezone: 'Eastern Time (US & Canada)' },
    '252779': { timezone: 'Eastern Time (US & Canada)' },
    '252782': { timezone: 'Eastern Time (US & Canada)' },
    '252785': { timezone: 'Eastern Time (US & Canada)' },
    '252788': { timezone: 'Eastern Time (US & Canada)' },
    '252791': { timezone: 'Eastern Time (US & Canada)' },
    '252794': { timezone: 'Eastern Time (US & Canada)' },
    '252797': { timezone: 'Eastern Time (US & Canada)' },
    '252800': { timezone: 'Eastern Time (US & Canada)' },
    '252803': { timezone: 'Eastern Time (US & Canada)' },
    '252806': { timezone: 'Eastern Time (US & Canada)' },
    '252830': { timezone: 'Eastern Time (US & Canada)' },
    '252842': { timezone: 'Eastern Time (US & Canada)' },
    '252845': { timezone: 'Eastern Time (US & Canada)' },
    '252848': { timezone: 'Eastern Time (US & Canada)' },
    '252872': { timezone: 'Eastern Time (US & Canada)' },
    '252875': { timezone: 'Eastern Time (US & Canada)' },
    '252878': { timezone: 'Eastern Time (US & Canada)' },
    '252881': { timezone: 'Eastern Time (US & Canada)' },
    '252908': { timezone: 'Central Time (US & Canada)' },
    '259484': { timezone: 'Eastern Time (US & Canada)' },
    '259487': { timezone: 'Eastern Time (US & Canada)' },
    '259490': { timezone: 'Eastern Time (US & Canada)' },
    '259493': { timezone: 'Eastern Time (US & Canada)' },
    '273020': { timezone: 'Eastern Time (US & Canada)' }
  }
  
  try {
    const output = await runRubyAsChild(obj)
    logOutput('main')(output[output.length-1])
    // logOutput('main')(output)
    // console.log(new Date(output[output.length-1]))
    process.exit(0)
  } catch (e) {
    console.error('Error during script execution ', e.stack);
    process.exit(1);
  }
}

getJsSpecificTimezone()