// Bootstrap.
require('bootstrap');

require('./scss/bootstrap.scss');
require('./scss/font-awesome.scss');

// Prism.
var Prism = require('prismjs');
require('./scss/prism.scss');

// Prism languages.
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-perl');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-javascript');

// Prism theme.
require('prismjs/themes/prism.css');

// Prism plug-ins.
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/autolinker/prism-autolinker');
require('prismjs/plugins/command-line/prism-command-line');
require('prismjs/plugins/custom-class/prism-custom-class');
// You must also change _assets/scss/prism.scss in order to change the
// theme!
Prism.plugins.customClass.map(require('prismjs/themes/prism.css.json'));

require('./scss/qgoda-default.scss');
require('./scss/toc.scss');
