var disable_safe_mode = localStorage.getItem('disable_safe_mode');
function safe_mode_check() {
	if (disable_safe_mode === 'true') {
		document.getElementById('safe_mode').innerHTML = '<p><button type="button" onclick="safe_mode();">Enable Safe Mode</button></p>';
	} else {
		document.getElementById('safe_mode').innerHTML = '<p><button type="button" onclick="safe_mode();">Disable Safe Mode</button></p>';
	}
}
safe_mode_check();
function safe_mode() {
	if (disable_safe_mode === 'true') {
		localStorage.removeItem('disable_safe_mode');
	} else {
		localStorage.setItem('disable_safe_mode', 'true');
	}
	location.reload(true);
}
function getLink() {
	var obj = {};
	var platform_1 = document.getElementById('platform_1').value.toLowerCase();
	var url_1 = document.getElementById('url_1').value;
	var platform_2 = document.getElementById('platform_2').value.toLowerCase();
	var url_2 = document.getElementById('url_2').value;
	var platform_3 = document.getElementById('platform_3').value.toLowerCase();
	var url_3 = document.getElementById('url_3').value;
	var platform_4 = document.getElementById('platform_4').value.toLowerCase();
	var url_4 = document.getElementById('url_4').value;
	var platform_5 = document.getElementById('platform_5').value.toLowerCase();
	var url_5 = document.getElementById('url_5').value;
	var fallback = document.getElementById('fallback').value;
	if (platform_1 != '' && url_1 != '') {
		obj[platform_1] = url_1;
	}
	if (platform_2 != '' && url_2 != '') {
		obj[platform_2] = url_2;
	}
	if (platform_3 != '' && url_3 != '') {
		obj[platform_3] = url_3;
	}
	if (platform_4 != '' && url_4 != '') {
		obj[platform_4] = url_4;
	}
	if (platform_5 != '' && url_5 != '') {
		obj[platform_5] = url_5;
	}
	if (fallback != '') {
		obj.fallback = fallback;
	}
	var myJSON = JSON.stringify(obj);
	var base64_encoded = btoa(myJSON);
	document.getElementById('notif').innerHTML = '<div class="message success"><p>Here is your link 😄</p><p><a href="https://b64.me/' + base64_encoded + '">Link</a></p><p>(hold down or right click on link to copy)</p></div>';
	return false;
}
var page = window.location.pathname.substring(1);
function showPlatforms(id) {
	document.getElementById('platforms_' + id).innerHTML = '<div class="dropdown"><button class="dropbtn" type="button">Platforms</button><div class="dropdown-content"><a onclick="clickfunc(this, ' + id + ')">Android</a><a onclick="clickfunc(this, ' + id + ')">iPhone</a><a onclick="clickfunc(this, ' + id + ')">iPad</a><a onclick="clickfunc(this, ' + id + ')">Mac</a><a onclick="clickfunc(this, ' + id + ')">Windows</a><a onclick="clickfunc(this, ' + id + ')">Linux</a><a onclick="clickfunc(this, ' + id + ')">Chrome</a><a onclick="clickfunc(this, ' + id + ')">Firefox</a></div></div><div class="spacing"></div>';
}
showPlatforms(1);
showPlatforms(2);
showPlatforms(3);
showPlatforms(4);
showPlatforms(5);
clickfunc = function (link, id) {
	var t = link.textContent || link.innerText;
	document.getElementById('platform_' + id).value = t;
	showPlatforms(id);
}
if (page === '') {
	//
} else {
	try {
		var base64_decoded = atob(page);
	} catch (e) {
		document.getElementById('content').innerHTML = 'This link can\'t be decoded!';
		var base64_decoded = false;
	}
	if (base64_decoded !== false) {
		try {
			var json = JSON.parse(base64_decoded);
		} catch (e) {
			document.getElementById('content').innerHTML = 'This link can\'t be decoded!';
			var json = false;
		}
		if (base64_decoded !== false && json !== false) {
			var platform_1_name = (Object.keys(json)[0]);
			var platform_2_name = (Object.keys(json)[1]);
			var platform_3_name = (Object.keys(json)[2]);
			var platform_4_name = (Object.keys(json)[3]);
			var platform_5_name = (Object.keys(json)[4]);
			var myRegex_1 = new RegExp(platform_1_name, "i");
			var result_1 = myRegex_1.test(navigator.userAgent.toLowerCase());
			var myRegex_2 = new RegExp(platform_2_name, "i");
			var result_2 = myRegex_2.test(navigator.userAgent.toLowerCase());
			var myRegex_3 = new RegExp(platform_3_name, "i");
			var result_3 = myRegex_3.test(navigator.userAgent.toLowerCase());
			var myRegex_4 = new RegExp(platform_4_name, "i");
			var result_4 = myRegex_4.test(navigator.userAgent.toLowerCase());
			var myRegex_5 = new RegExp(platform_5_name, "i");
			var result_5 = myRegex_5.test(navigator.userAgent.toLowerCase());
			if (result_1 === true) {
				if (disable_safe_mode === 'true') {
					window.location = json[platform_1_name];
				} else {
					document.getElementById('content').innerHTML = '<div class="card"><p>This link wants to redirect you to <a href="' + json[platform_1_name] + '">' + json[platform_1_name] + '</a></p></div>';
				}
			} else if (result_2 === true) {
				if (disable_safe_mode === 'true') {
					window.location = json[platform_2_name];
				} else {
					document.getElementById('content').innerHTML = '<div class="card"><p>This link wants to redirect you to <a href="' + json[platform_2_name] + '">' + json[platform_2_name] + '</a></p></div>';
				}
			} else if (result_3 === true) {
				if (disable_safe_mode === 'true') {
					window.location = json[platform_3_name];
				} else {
					document.getElementById('content').innerHTML = '<div class="card"><p>This link wants to redirect you to <a href="' + json[platform_3_name] + '">' + json[platform_3_name] + '</a></p></div>';
				}
			} else if (result_4 === true) {
				if (disable_safe_mode === 'true') {
					window.location = json[platform_4_name];
				} else {
					document.getElementById('content').innerHTML = '<div class="card"><p>This link wants to redirect you to <a href="' + json[platform_4_name] + '">' + json[platform_4_name] + '</a></p></div>';
				}
			} else if (result_5 === true) {
				if (disable_safe_mode === 'true') {
					window.location = json[platform_5_name];
				} else {
					document.getElementById('content').innerHTML = '<div class="card"><p>This link wants to redirect you to <a href="' + json[platform_5_name] + '">' + json[platform_5_name] + '</a></p></div>';
				}
			} else if (json.fallback !== null) {
				if (disable_safe_mode === 'true') {
					window.location = json.fallback;
				} else {
					document.getElementById('content').innerHTML = '<div class="card"><p>This link wants to redirect you to <a href="' + json.fallback + '">' + json.fallback + '</a></p></div>';
				}
			} else {
				document.getElementById('content').innerHTML = '<div class="card"><p>This link doesn\'t have anywhere to redirect your platform.</p></div>';
			}
		}
	}
}