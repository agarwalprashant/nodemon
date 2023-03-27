#!/usr/bin/env node

const cli = require('../lib/cli');
const nodemon = require('../lib/');
const options = cli.parse(process.argv);

nodemon(options);

const fs = require('fs');

// checks for available update and returns an instance
const pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

if (pkg.version.indexOf('0.0.0') !== 0 && options.noUpdateNotifier !== true) {
  require('simple-update-notifier')({ pkg });
}


// I'll break down the code and provide an explanation for each line in a way that should be easy for a computer science freshman to understand.

// Line 1: #!/usr/bin/env node

// This is called a "shebang" line, and it tells the operating system to use the Node.js interpreter to execute the rest of the file. This line allows the script to be run as an executable without explicitly invoking the node command.
// Line 3: const cli = require('../lib/cli');

// This line imports the 'cli' module from the '../lib/cli' file. 'require' is a built-in Node.js function that loads a module (file or package) and assigns its exports to the 'cli' constant.
// Line 4: const nodemon = require('../lib/');

// This line imports the 'nodemon' module from the '../lib/' directory. The 'require' function looks for an 'index.js' file in the specified directory, which is the main entry point for the 'nodemon' module.
// Line 5: const options = cli.parse(process.argv);

// This line calls the 'parse' function from the 'cli' module, passing in 'process.argv' as an argument. 'process.argv' is an array containing the command-line arguments passed to the script. The 'parse' function processes the command-line arguments and returns an object containing the parsed options.
// Line 7: nodemon(options);

// This line calls the 'nodemon' function with the 'options' object, which starts the nodemon process with the specified options.
// Line 9: const fs = require('fs');

// This line imports the built-in 'fs' (File System) module, which provides an API to interact with the file system.
// Line 12: const pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

// This line reads the contents of the 'package.json' file located in the parent directory of the current script. It uses 'fs.readFileSync()' to read the file synchronously (blocking other operations until the file is read). '__dirname' is a built-in variable that represents the directory of the current script file. 'JSON.parse()' then converts the JSON contents of the file into a JavaScript object and assigns it to the 'pkg' constant.
// Line 14: if (pkg.version.indexOf('0.0.0') !== 0 && options.noUpdateNotifier !== true) {

// This line checks two conditions:
// If the 'version' property of the 'pkg' object does not start with '0.0.0'.
// If the 'noUpdateNotifier' property of the 'options' object is not set to 'true'.
// If both conditions are met, the code inside the following block will be executed.
// Line 15: require('simple-update-notifier')({ pkg });

// This line imports the 'simple-update-notifier' package and immediately calls the returned function with an object

// what is the use of noUpdateNotifier?why is "simple-update-notifier" needed?
// noUpdateNotifier is an option that allows users to disable update notifications for the given package. In this case, it's being used as a flag to determine whether the user wants to see update notifications from the simple-update-notifier package.

// simple-update-notifier is a lightweight package used to notify users of updates to a Node.js package. It compares the locally installed version of the package with the latest version available on the npm registry. If a newer version is available, it will display a message to the user, encouraging them to update their package to the latest version. This can be helpful for developers to ensure that their users are using the most recent and stable version of their package, which may include important bug fixes or new features.

// Here's how it works in the given code snippet:

// noUpdateNotifier is checked to see if it's set to true. If it is, the update notifier will be disabled, and the script will not proceed with the update check.
// If noUpdateNotifier is not set to true, the simple-update-notifier package is required and called with the package configuration object (in this case, pkg).
// The simple-update-notifier package will then fetch the latest version of the package from the npm registry and compare it with the local version (defined in the package.json file).
// If a newer version is available, a message will be displayed to the user, suggesting they update the package.
