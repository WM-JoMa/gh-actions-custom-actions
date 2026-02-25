import require$$0 from '@actions/core';
import '@actions/github';
import '@actions/exec';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var main$1 = {};

var hasRequiredMain;

function requireMain () {
	if (hasRequiredMain) return main$1;
	hasRequiredMain = 1;
	const core = require$$0;

	function run(){
	  core.notice("Hello form the js custom job");
	}

	run();
	return main$1;
}

var mainExports = requireMain();
var main = /*@__PURE__*/getDefaultExportFromCjs(mainExports);

export { main as default };
//# sourceMappingURL=main.js.map
