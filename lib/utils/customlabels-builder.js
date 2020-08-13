'use strict';
const xmlbuilder = require('xmlbuilder');

const customlabelsBuilder = (cl) => {
  const xml = xmlbuilder.create('CustomLabels')
  .att('xmlns', 'http://soap.sforce.com/2006/04/metadata')
  .dec('1.0', 'UTF-8');

  Object.keys(cl).sort().forEach(i=>{
    let labels = xml.ele('labels');
    Object.entries(cl[i]).forEach((e) => labels.ele(e[0],e[1][0]))
  });
  return xml.end({ pretty: true, indent: '    ', newline: '\n' }) + '\n';
};
module.exports = customlabelsBuilder;