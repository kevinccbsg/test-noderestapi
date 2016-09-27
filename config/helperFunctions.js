'use strict'
function _respond (res, next, status, data, http_code) {
	let response = {
		'status': status,
		'data': data
	}
	res.setHeader('content-type', 'application/json');
	res.writeHead(http_code);
	res.end(JSON.stringify(response));
	return next();
}

module.exports.success = (res, next, data, http_code) => {
	_respond(res, next, 'success', data, http_code);
}

module.exports.error = (res, next, data, http_code) => {
	_respond(res, next, 'failure', data, http_code);
}