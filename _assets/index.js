// Bootstrap.
require('bootstrap');

require('./scss/bootstrap.scss');
require('./scss/font-awesome.scss');

// Prism.
var Prism = require('prismjs');

// Prism languages.
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-perl');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-javascript');
require('./js/prism-tt2');

// Prism plug-ins.
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/autolinker/prism-autolinker');
require('prismjs/plugins/command-line/prism-command-line');
require('prismjs/plugins/custom-class/prism-custom-class');
require('./scss/prism.scss');
Prism.plugins.customClass.map(require('./scss/prism.scss.json'));

require('./scss/styles.scss');
require('./scss/toc.scss');
