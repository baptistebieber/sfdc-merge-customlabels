# sfdc-merge-customlabels

CustomLabels.labels merger

## Getting Started

Works in Unix like system.
Windows is not tested.

### Installing

```
npm install -g sfdc-merge-customlabels
```

or

```
yarn globally add sfdc-merge-customlabels
```

## Usage

### Command Line

```
$ smp -h

  Usage: smp [options]

  Merge CustomLabels.labels

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -p, --packages               path to the CustomLabels.labels
    -o, --output                 path where to output the merged CustomLabels.labels
```

### Module

```
  var smp = require('sfdc-merge-package');

  smp({
    'packages':'./src/labels/CustomLabels.labels' // path to the CustomLabels.labels
  }, console.log);
```


## Built With

* [commander](https://github.com/tj/commander.js/) - The complete solution for node.js command-line interfaces, inspired by Ruby's commander.
* [extendify](https://github.com/bigShai/extendify) - Deep extend with customizable behavior.
* [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML to JavaScript object converter.

## Versioning

[SemVer](http://semver.org/) is used for versioning.

## Authors

* **Baptiste BIEBER** - *Initial work* - [baptistebieber](https://github.com/baptistebieber)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details