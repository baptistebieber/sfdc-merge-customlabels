'use strict';
const fs = require('fs');
const path = require('path');
const customlabelsBuilder = require('./lib/utils/customlabels-builder');
const asyncReadFile = require('./lib/utils/async-read-file');
const asyncXmlParser = require('./lib/utils/async-xml-parser');

module.exports = (config,logger) => {

  // Check if we have enough config options
  if(typeof config.customlabels === 'undefined' || config.customlabels === null) {
    throw new Error('Not enough config options');
  }

  // The module return this promise
  // This is where the job is done
 return new Promise((resolve, reject) => {
    Promise.all(config.customlabels.map(x=>asyncReadFile(x).then(asyncXmlParser)))
    .then(cls => {
      const newcl = {};
      cls.forEach((cl) => cl.CustomLabels.labels.forEach((l) => newcl[l.fullName] = l));
      fs.mkdirSync(path.dirname(config.output), {recursive: true});
      fs.writeFileSync(config.output, customlabelsBuilder(newcl));
    })
    .catch(err =>
      reject(new Error(err))
    );
  });
};