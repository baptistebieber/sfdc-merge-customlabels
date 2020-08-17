'use strict';
const xmlbuilder = require('xmlbuilder');

const cleanData = (e) => {
  var re = new RegExp('\'',"gi");
  e = e.replace(re, '&apos;');
  re = new RegExp('(<value>.*?)"(.*?</value>)',"gi");
  while(e.match(re) != null) {
    e = e.replace(re, '$1&quot;$2');
  }
  return e;
}

const customlabelsBuilder = (cl) => {
  const xml = xmlbuilder.create('CustomLabels')
  .att('xmlns', 'http://soap.sforce.com/2006/04/metadata')
  .dec('1.0', 'UTF-8');

  Object.keys(cl).sort().forEach(i=>{
    let labels = xml.ele('labels');
    Object.entries(cl[i]).forEach((e) => labels.ele(e[0],e[1][0]))
  });
  return cleanData(xml.end({ pretty: true, indent: '    ', newline: '\n' })) + '\n';
};
module.exports = customlabelsBuilder;