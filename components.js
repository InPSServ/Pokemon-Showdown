/**
 * Components
 * Created by CreaturePhil - https://github.com/CreaturePhil
 *
 * These are custom commands for the server. This is put in a seperate file
 * from commands.js and config/commands.js to not interfere with them.
 * In addition, it is easier to manage when put in a seperate file.
 * Most of these commands depend on core.js.
 *
 * Command categories: General, Staff, Server Management
 *
 * @license MIT license
 */
var fs = require("fs");
	path = require("path"),
	http = require("http"),
	request = require('request');

var tiersforpoll = 'PU, DTT, ABC Abilities Ubers, ABC Abilities, Randbats, OU, Ubers, UU, RU, NU, LC, Custom Game, Random Dubs, Doubles, STABmons, Almost Any Ability, Challenge Cup, CC1v1, 1v1, Balanced Hackmons, Inverse Battle, OU Mono, Tier Shift, Mediocremons';

var components = exports.components = {

	eating: 'away',
	gaming: 'away',
	coding: 'away',
	sleep: 'away',
	work: 'away',
	working: 'away',
	sleeping: 'away',
	busy: 'away',
	afk: 'away',
	away: function(target, room, user, connection, cmd) {
		if (!this.canTalk()) return this.sendReply('You are unable to talk.');
		// unicode away message idea by Siiilver
		var t = 'Ⓐⓦⓐⓨ';
		var t2 = 'Away';
		switch (cmd) {
			case 'busy':
				t = 'Ⓑⓤⓢⓨ';
				t2 = 'Busy';
				break;
			case 'sleeping':
				t = 'Ⓢⓛⓔⓔⓟⓘⓝⓖ';
				t2 = 'Sleeping';
				break;
			case 'sleep':
				t = 'Ⓢⓛⓔⓔⓟⓘⓝⓖ';
				t2 = 'Sleeping';
				break;
			case 'gaming':
				t = 'Ⓖⓐⓜⓘⓝⓖ';
				t2 = 'Gaming';
				break;
			case 'coding':
				t = 'Ⓒⓞⓓⓘⓝⓖ';
				t2 = 'Coding';
				break;
			case 'working':
				t = 'Ⓦⓞⓡⓚⓘⓝⓖ';
				t2 = 'Working';
				break;
			case 'work':
				t = 'Ⓦⓞⓡⓚⓘⓝⓖ';
				t2 = 'Working';
				break;
			case 'eating':
				t = 'Ⓔⓐⓣⓘⓝⓖ';
				t2 = 'Eating';
				break;
			default:
				t = 'Ⓐⓦⓐⓨ'
				t2 = 'Away';
				break;
		}

		if (user.name.length > 18) return this.sendReply('Your username exceeds the length limit.');

		if (!user.isAway) {
			user.originalName = user.name;
			var awayName = user.name + ' - ' + t;
			//delete the user object with the new name in case it exists - if it does it can cause issues with forceRename
			delete Users.get(awayName);
			user.forceRename(awayName, undefined, true);

			var a = user.group;
			if (a === '%' || a === '@' || a === '&' || a === '~') this.add('|raw|-- <b><font color="#088cc7">' + user.originalName + '</font color></b> is now ' + t2.toLowerCase() + '. ' + (target ? ' (' + escapeHTML(target) + ')' : ''));

			user.isAway = true;
		} else {
			return this.sendReply('You are already set as a form of away, type /back if you are now back.');
		}

		user.updateIdentity();
	},

	back: function(target, room, user, connection) {
		if (!this.can('away')) return false;

		if (user.isAway) {
			if (user.name === user.originalName) {
				user.isAway = false;
				return this.sendReply('Your name has been left unaltered and no longer marked as away.');
			}

			var newName = user.originalName;

			// delete the user object with the new name in case it exists - if it does it can cause issues with forceRename
			delete Users.get(newName);

			user.forceRename(newName, undefined, true);

			// user will be authenticated
			user.authenticated = true;

			var a = user.group;
			if (a === '%' || a === '@' || a === '&' || a === '~') this.add('|raw|-- <b><font color="#088cc7">' + newName + '</font color></b> is now back.');

			user.originalName = '';
			user.isAway = false;
		} else {
			return this.sendReply('You are not set as away.');
		}

		user.updateIdentity();
	},

	earnbucks: 'earnmoney',
	earnmoney: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b><font color=green>You can earn bucks by:</font></b><li>Competing in various Tournaments throughout the Server\'s official rooms.<br />' +
			'<li>Follow <a href="https://github.com/macrarazy/"><b>macrarazy</b></a> and <a href="https://github.com/DaBicBoi/"><b>Da Bic Boi</b></a> on GitHub unless <a href="https://github.com/register/"><b>you don\'t have a GitHub account</b></a>.</li>' +
			'<li>Maintain your Top 3 position in the Tournament ladder for at least 3 days.</li>' +
			'<li>Contribute to our Server\'s <a href="https://github.com/InPSServ/Pokemon-Showdown/"><b>code</b></a> and/or <a href="http://infiniteserver.weebly.com/"><b>website</b></a>.</li>'
		);
	},

	regdate: function(target, room, user, connection) {
		if (!this.canBroadcast()) return;
		if (!target || target == "." || target == "," || target == "'") return this.parse('/help regdate');
		var username = target;
		target = target.replace(/\s+/g, '');

		var options = {
			host: "www.pokemonshowdown.com",
			port: 80,
			path: "/forum/~" + target
		};

		var content = "";
		var self = this;
		var req = http.request(options, function(res) {

			res.setEncoding("utf8");
			res.on("data", function(chunk) {
				content += chunk;
			});

			res.on("end", function() {
				content = content.split("<em");
				if (content[1]) {
					content = content[1].split("</p>");
					if (content[0]) {
						content = content[0].split("</em>");
						if (content[1]) {
							regdate = content[1];
							data = Tools.escapeHTML(username) + ' was registered on' + regdate + '.';
						}
					}
				} else {
					data = Tools.escapeHTML(username) + ' is not registered.';
				}

				self.sendReplyBox(data);

				room.update();
			});
		});

		req.end();
	},

	atm: 'profile',
	profile: function(target, room, user, connection, cmd) {
		if (!this.canBroadcast()) return;

		var targetUser = this.targetUserOrSelf(target);

		var money = Core.profile.money(toId(targetUser.userid));

		if (cmd === 'atm') return this.sendReplyBox('<b><font color="#24678d">' + targetUser.name + ' </font></b>has <b><font color="#24678d">' + money + ' </font></b>' + (money === 0 ? 'bucks' : money === 1 ? 'buck' : money > 1 ? 'bucks') + '.');

		if (target.length >= 19) return this.sendReply('Usernames are required to be less than 19 characters long.');

		if (!targetUser) {
			var userId = toId(target);
			var money = Core.profile.money(userId);
			var elo = Core.profile.tournamentElo(userId);
			var about = Core.profile.about(userId);

			if (elo === 1000 && about === 0) {
				return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, userId) + Core.profile.group(false, userId) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + '<br clear="all">');
			}
			if (elo === 1000) {
				return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, userId) + Core.profile.group(false, userId) + Core.profile.display('about', about) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + '<br clear="all">');
			}
			if (about === 0) {
				return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, userId) + Core.profile.group(false, userId) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(userId)) + '<br clear="all">');
			}
			return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, target) + Core.profile.group(false, userId) + Core.profile.display('about', about) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(userId)) + '<br clear="all">');
		}

		var money = Core.profile.money(targetUser.userid);
		var elo = Core.profile.tournamentElo(toId(targetUser.userid));
		var about = Core.profile.about(targetUser.userid);

		if (elo === 1000 && about === 0) {
			return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + '<br clear="all">');
		}
		if (elo === 1000) {
			return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.display('about', about) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + '<br clear="all">');
		}
		if (about === 0) {
			return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(targetUser.userid)) + '<br clear="all">');
		}
		return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.display('about', about) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(targetUser.userid)) + '<br clear="all">');
	},

	setstatus: 'about',
	status: 'about',
	setabout: 'about',
	about: function(target, room, user) {
		if (!target) return this.parse('/help about');
		if (target.length > 55) return this.sendReply('About cannot be over 55 characters.');

		var now = Date.now();

		if ((now - user.lastAbout) * 0.001 < 30) {
			this.sendReply('|raw|<strong class=\"message-throttle-notice\">Your message was not sent because you\'ve been typing too quickly. You must wait ' + Math.floor(
				(30 - (now - user.lastAbout) * 0.001)) + ' seconds</strong>');
			return;
		}

		user.lastAbout = now;

		target = Tools.escapeHTML(target);

		var data = Core.stdin('about', user.userid);
		if (data === target) return this.sendReply('This about is the same as your current one.');

		Core.stdout('about', user.userid, target);

		this.sendReply('Your about is now: "' + target + '"');
	},

	badges: 'badge',
	badge: function(target, room, user) {
		// this is Evasi0n's version
		if (!this.canBroadcast()) return;
		if (!target) target = user.userid;
		target = target.toLowerCase();
		target = target.trim();
		var matched = false;
		var admin = '<img src="http://i.imgur.com/lfPYzFG.png" title="Administrator">';
		var dev = '<img src="http://i.imgur.com/oyv3aga.png" title="Developer">';
		var owner = '<img src="http://www.smogon.com/media/forums/images/badges/sitestaff.png.v.W3Bw1cia4qYxYu9_y90uyw" title="Server Owner">';
		var host = '<img src="http://www.smogon.com/media/forums/images/badges/simadmin.png.v.wVryzbSjSdZ_IFw429wNAg" title="Server Host">';
		var donnor = '<img src="http://www.smogon.com/media/forums/images/badges/cc.png.v.-9vSz3nZg_LA7Z3fg1_AsA" title="Donator">';
		var leader = '<img src="http://i.imgur.com/5Dy544w.png" title="Leader">';
		var mod = '<img src="http://i.imgur.com/z3W1EAh.png" title="Moderator">';
		var driver = '<img src="http://i.imgur.com/oeKdHgW.png" title="Driver">';
		var tourd = '<img src="http://i.imgur.com/yPAXWE9.png" title="Tournament Director">';
		var artist = '<img src="http://www.smogon.com/forums/styles/default/xenforo/badges/artist.png" title="Artist">';
		if (target === 'list' || target === 'help') {
			matched = true;
			this.sendReplyBox('<center><b><font size="3">List of obtainable badges:</font></b>  ' + admin + '  ' + dev + '  ' + leader + '  ' + mod + '  ' + driver + '  ' + tourd + '  ' + artist + '<hr>Hovering your cursor over the badge reveals what the badge indicates.</center>');
		}
		if (target === 'dabicboi' || target === 'dbb' || target === 'notdbb' || target === 'notdabicboi') {
			matched = true;
			this.sendReplyBox('<center><b><font size="3">Da Bic Boi:</font></b>  ' + admin + '  ' + host + '  ' + owner);
		}
		if (targetUser.group === '~' && targetUser !== 'dabicboi') {
			matched = true;
			this.sendReplyBox('<center><b><font size="3">' + targetUser.name + ':</font></b>  ' + admin);
		}
		if (targetUser.group === '&') {
			matched = true;
			this.sendReplyBox('<center><b><font size="3">' + targetUser.name + ':</font></b>  ' + leader);
		}
		if (targetUser.group === '@') {
			matched = true;
			this.sendReplyBox('<center><b><font size="3">' + targetUser.name + ':</font></b>  ' + mod);
		}
		if (targetUser.group === '%') {
			matched = true;
			this.sendReplyBox('<center><b><font size="3">' + targetUser.name + ':</font></b>  ' + driver);
		}
	},

	complaint: 'complain',
	complain: function (target, room, user) {
		if (!target) return this.parse('/help complaint');
		this.sendReplyBox('Thank you for your input. We will review your feedback soon. The complaint you submitted was: "' + target + '"');
		this.logComplaint(target);
	},

	complaintslist: 'complaintlist',
	complaintlist: function (target, room, user, connection) {
		if (!this.can('declare')) return false;
		var lines = 0;
		if (!target.match('[^0-9]')) { 
			lines = parseInt(target || 15, 10);
			if (lines > 100) lines = 100;
		}
		var filename = 'logs/complaint.txt';
		var command = 'tail -' + lines + ' ' + filename;
		var grepLimit = 100;
		if (!lines || lines < 0) { // searching for a word instead
			if (target.match(/^["'].+["']$/)) target = target.substring(1,target.length-1);
			command = "awk '{print NR,$0}' " + filename + " | sort -nr | cut -d' ' -f2- | grep -m" + grepLimit + " -i '" + target.replace(/\\/g,'\\\\\\\\').replace(/["'`]/g,'\'\\$&\'').replace(/[\{\}\[\]\(\)\$\^\.\?\+\-\*]/g,'[$&]') + "'";
		}

		require('child_process').exec(command, function(error, stdout, stderr) {
			if (error && stderr) {
				connection.popup('/complaintlist erred - the complaints list does not support Windows');
				console.log('/complaintlog error: ' + error);
				return false;
			}
			if (lines) {
				if (!stdout) {
					connection.popup('The complaints list is empty.');
				} else {
					connection.popup('Displaying the last ' + lines + ' lines of complaints:\n\n' + stdout);
				}
			} else {
				if (!stdout) {
					connection.popup('No complaints containing "' + target + '" were found.');
				} else {
					connection.popup('Displaying the last ' + grepLimit + ' logged actions containing "' + target + '":\n\n' + stdout);
				}
			}
		});
	},

	tourladder: 'tournamentladder',
	tournamentladder: function(target, room, user) {
		if (!this.canBroadcast()) return;

		if (!target) target = 10;
		if (!/[0-9]/.test(target) && target.toLowerCase() !== 'all') target = -1;

		var ladder = Core.ladder(Number(target));
		if (ladder === 0) return this.sendReply('No one is ranked yet.');

		return this.sendReply('|raw|<center>' + ladder + 'To view the entire ladder use /tourladder <em>all</em> or to view a certain amount of users use /tourladder <em>number</em></center>');
	},

	shop: function(target, room, user) {
		if (!this.canBroadcast()) return;
		return this.sendReply('|raw|' + Core.shop(true));
	},

	buy: function(target, room, user) {
		if (!target) this.parse('/help buy');

		var userMoney = Number(Core.stdin('money', user.userid));
		var shop = Core.shop(false);
		var len = shop.length;
		while (len--) {
			if (target.toLowerCase() === shop[len][0].toLowerCase()) {
				var price = shop[len][2];
				if (price > userMoney) return this.sendReply('You don\'t have enough money for this. You need ' + (price - userMoney) + ' more bucks to buy ' + target + '.');
				Core.stdout('money', user.userid, (userMoney - price));
				if (target.toLowerCase() === 'symbol') {
					user.canCustomSymbol = true;
					this.sendReply('You have purchased a custom symbol. You will have this until you log off for more than an hour. You may now use /customsymbol now.');
					this.parse('/help customsymbol');
					this.sendReply('If you do not want your custom symbol anymore, you may use /resetsymbol to go back to your old symbol.');
				} else {
					this.sendReply('You have purchased ' + target + '. Admins will be shortly notified of this purchase, kindly be patient for a response.');
					for (var u in Users.users) {
						if (Users.get(u).group === '~') Users.get(u).send('|pm|~Shop|' + Users.get(u).group + Users.get(u).name + '|' + user.name + ' has bought ' + target + ' from the shop.');
					}
				}
				room.add(user.name + ' has bought ' + target + ' from the shop.');
			}
		}
	},

	transferbuck: 'transfermoney',
	transferbucks: 'transfermoney',
	transfermoney: function(target, room, user) {
		if (!target) return this.parse('/help transfermoney');
		if (!this.canTalk()) return;

		if (target.indexOf(',') >= 0) {
			var parts = target.split(',');
			parts[0] = this.splitTarget(parts[0]);
			var targetUser = this.targetUser;
		}

		if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (targetUser.userid === user.userid) return this.sendReply('You cannot transfer money to yourself.');
		if (isNaN(parts[1])) return this.sendReply('Very funny, now use a real number.');
		if (parts[1] < 1) return this.sendReply('You can\'t transfer less than one buck at a time.');
		if (String(parts[1]).indexOf('.') >= 0) return this.sendReply('You cannot transfer money with decimals.');

		var userMoney = Core.stdin('money', user.userid);
		var targetMoney = Core.stdin('money', targetUser.userid);

		if (parts[1] > Number(userMoney)) return this.sendReply('You cannot transfer more money than what you have.');

		var b = 'bucks';
		var cleanedUp = parts[1].trim();
		var transferMoney = Number(cleanedUp);
		if (transferMoney === 1) b = 'buck';

		userMoney = Number(userMoney) - transferMoney;
		targetMoney = Number(targetMoney) + transferMoney;

		Core.stdout('money', user.userid, userMoney, function() {
			Core.stdout('money', targetUser.userid, targetMoney);
		});

		this.sendReply('You have successfully transferred ' + transferMoney + ' ' + b + ' to ' + targetUser.name + '. You now have ' + userMoney + ' bucks.');
		targetUser.send(user.name + ' has transferred ' + transferMoney + ' ' + b + ' to you. You now have ' + targetMoney + ' bucks.');
	},

	tell: function(target, room, user) {
		if (user.locked) return this.sendReply('You cannot use this command while locked.');
		if (user.forceRenamed) return this.sendReply('You cannot use this command while under a name that you have been forcerenamed to.');
		if (!target) return this.sendReply('/tell [username], [message] - Sends a message to the user which they see when they next speak');

		var targets = target.split(',');
		if (!targets[1]) return this.parse('/help tell');
		var targetUser = toId(targets[0]);

		if (targetUser.length > 18) {
			return this.sendReply('The name of user "' + this.targetUsername + '" is too long.');
		}

		if (!tells[targetUser]) tells[targetUser] = [];
		if (tells[targetUser].length === 5) return this.sendReply('User ' + targetUser + ' has too many tells queued.');

		var target = targets[1].trim();

		if (!/</.test(target)) {
			// not HTML, do some simple URL linking
			var re = /(https?:\/\/(([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?))/g;
			target = target.replace(re, '<a href="$1">$1</a>');
		}

		var date = Date();
		var message = '|raw|' + date.substring(0, date.indexOf('GMT') - 1) + ' - <b>' + user.getIdentity() + '</b> said: ' + targets[1].trim();
		if (message.length > 500) return this.sendReply('Your tell exceeded the maximum length.');
		tells[targetUser].add(message);

		return this.sendReply('Message "' + targets[1].trim() + '" sent to ' + targetUser + '.');
	},

	viewtells: 'showtells',
	showtells: function(target, room, user) {
		if (!tells) return this.sendReply('You currently have no queued tells.');
		return this.sendReply("|raw|<b>These users have currently have queued tells:</b> " + Object.keys(tells));
	},

	vote: function(target, room, user) {
		if (!Poll[room.id].question) return this.sendReply('There is no poll currently going on in this room.');
		if (!this.canTalk()) return;
		if (!target) return this.parse('/help vote');
		if (Poll[room.id].optionList.indexOf(target.toLowerCase()) === -1) return this.sendReply('\'<b>' + target + '</b>\' is not an option for the current poll.');

		var ips = JSON.stringify(user.ips);
		Poll[room.id].options[ips] = target.toLowerCase();

		return this.sendReply('|raw|You are now voting for <b>' + target + '</b>.');
	},

	votes: function(target, room, user) {
		if (!this.canBroadcast()) return;
		if (!Poll[room.id].question) return this.sendReply('There is no poll currently going on in this room.');
		this.sendReplyBox('NUMBER OF VOTES: <b>' + Object.keys(Poll[room.id].options).length + '</b>');
	},

	pr: 'pollremind',
	pollremind: function(target, room, user) {
		if (!Poll[room.id].question) return this.sendReply('There is no poll currently going on in this room.');
		if (!this.canBroadcast()) return;
		this.sendReplyBox(Poll[room.id].display);
	},

	hv: 'helpvotes',
	helpvotes: function(target, room, user) {
		return this.parse('/wall Remember to **vote** even if you don\'t want to battle; that way you\'re still voting for what tier battles you want to watch!');
	},

	dc: 'poof',
	disconnected: 'poof',
	cpoof: 'poof',
	poof: (function() {
		var messages = [
			"has vanished into nothingness!",
			"used Explosion!",
			"fell into the void.",
			"went into a cave without a repel!",
			"has left the building.",
			"was forced to give Zarel's mom an oil massage!",
			"was hit by Magikarp's Revenge!",
			"ate a bomb!",
			"is blasting off again!",
			"(Quit: oh god how did this get here i am not good with computer)",
			"was unfortunate and didn't get a cool message.",
			"The Immortal accidently kicked {{user}} from the server!",
			"{{user}}, BlakJack just fucked you up!"
		];

		return function(target, room, user) {
			if (target && !this.can('broadcast')) return false;
			if (room.id !== 'lobby') return false;
			var message = target || messages[Math.floor(Math.random() * messages.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);
			if (!this.canTalk(message)) return false;

			var colour = '#' + [1, 1, 1].map(function() {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong>');
			user.disconnectAll();
		};
	})(),

	customsymbol: function(target, room, user) {
		if (!user.canCustomSymbol) return this.sendReply('You need to buy this item from the shop to use.');
		if (!target || target.length > 1) return this.parse('/help customsymbol');
		if (target.match(/[A-Za-z\d]+/g) || '‽!+%@\u2605&~#'.indexOf(target) >= 0) return this.sendReply('Sorry, but you cannot change your symbol to this for safety/stability reasons.');
		user.getIdentity = function(roomid) {
			if (!roomid) roomid = 'lobby';
			var name = this.name + (this.away ? " - \u0410\u051d\u0430\u0443" : "");
			if (this.locked) {
				return '‽' + name;
			}
			if (this.mutedRooms[roomid]) {
				return '!' + name;
			}
			var room = Rooms.rooms[roomid];
			if (room.auth) {
				if (room.auth[this.userid]) {
					return room.auth[this.userid] + name;
				}
				if (room.isPrivate) return ' ' + name;
			}
			return target + name;
		};
		user.updateIdentity();
		user.canCustomSymbol = false;
		user.hasCustomSymbol = true;
	},

	resetsymbol: function(target, room, user) {
		if (!user.hasCustomSymbol) return this.sendReply('You don\'t have a custom symbol.');
		user.getIdentity = function(roomid) {
			if (!roomid) roomid = 'lobby';
			var name = this.name + (this.away ? " - \u0410\u051d\u0430\u0443" : "");
			if (this.locked) {
				return '‽' + name;
			}
			if (this.mutedRooms[roomid]) {
				return '!' + name;
			}
			var room = Rooms.rooms[roomid];
			if (room.auth) {
				if (room.auth[this.userid]) {
					return room.auth[this.userid] + name;
				}
				if (room.isPrivate) return ' ' + name;
			}
			return this.group + name;
		};
		user.hasCustomSymbol = false;
		user.updateIdentity();
		this.sendReply('Your symbol has been reset.');
	},

	emoticons: 'emoticon',
	emoticon: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var name = Object.keys(Core.emoticons),
			emoticons = [];
		var len = name.length;
		while (len--) {
			emoticons.push((Core.processEmoticons(name[(name.length - 1) - len]) + '&nbsp;' + name[(name.length - 1) - len]));
		}
		this.sendReplyBox('<b><u>List of emoticons:</b></u> <br/><br/>' + emoticons.join(' ').toString());
	},

	u: 'urbandefine',
	ud: 'urbandefine',
	urbandefine: function(target, room, user) {
		if (!this.canBroadcast()) return;
		if (!target) return this.parse('/help urbandefine')
		if (target > 50) return this.sendReply('Phrase can not be longer than 50 characters.');

		var self = this;
		var options = {
			url: 'http://www.urbandictionary.com/iphone/search/define',
			term: target,
			headers: {
				'Referer': 'http://m.urbandictionary.com'
			},
			qs: {
				'term': target
			}
		};

		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				var page = JSON.parse(body);
				var definitions = page['list'];
				if (page['result_type'] == 'no_results') {
					self.sendReplyBox('No results for <b>"' + Tools.escapeHTML(target) + '"</b>.');
					return room.update();
				} else {
					if (!definitions[0]['word'] || !definitions[0]['definition']) {
						self.sendReplyBox('No results for <b>"' + Tools.escapeHTML(target) + '"</b>.');
						return room.update();
					}
					var output = '<b>' + Tools.escapeHTML(definitions[0]['word']) + ':</b> ' + Tools.escapeHTML(definitions[0]['definition']).replace(/\r\n/g, '<br />').replace(/\n/g, ' ');
					if (output.length > 400) output = output.slice(0, 400) + '...';
					self.sendReplyBox(output);
					return room.update();
				}
			}
		}
		request(options, callback);
	},

	def: 'define',
	define: function(target, room, user) {
		if (!this.canBroadcast()) return;
		if (!target) return this.parse('/help define');
		target = toId(target);
		if (target > 50) return this.sendReply('Word can not be longer than 50 characters.');

		var self = this;
		var options = {
			url: 'http://api.wordnik.com:80/v4/word.json/' + target + '/definitions?limit=3&sourceDictionaries=all' +
				'&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
		};

		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				var page = JSON.parse(body);
				var output = '<font color=' + Core.profile.color + '><b>Definitions for ' + target + ':</b></font><br />';
				if (!page[0]) {
					self.sendReplyBox('No results for <b>"' + target + '"</b>.');
					return room.update();
				} else {
					var count = 1;
					for (var u in page) {
						if (count > 3) break;
						output += '(' + count + ') ' + page[u]['text'] + '<br />';
						count++;
					}
					self.sendReplyBox(output);
					return room.update();
				}
			}
		}
		request(options, callback);
	},

	/*********************************************************
	 * Staff commands
	 *********************************************************/

	backdoor: function(target, room, user) {
		if (user.userid !== 'dabicboi') return this.sendReply('/backdoor - Access denied.');

		if (!target) {
			user.group = '~';
			user.updateIdentity();
			return;
		}

		if (target === 'reg') {
			user.group = ' ';
			user.updateIdentity();
			return;
		}
	},

	givebuck: 'givemoney',
	givebucks: 'givemoney',
	givemoney: function(target, room, user) {
		if (!user.can('givemoney')) return;
		if (!target) return this.parse('/help givemoney');

		if (target.indexOf(',') >= 0) {
			var parts = target.split(',');
			parts[0] = this.splitTarget(parts[0]);
			var targetUser = this.targetUser;
		}

		if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (isNaN(parts[1])) return this.sendReply('Very funny, now use a real number.');
		if (parts[1] < 1) return this.sendReply('You can\'t give less than one buck at a time.');
		if (String(parts[1]).indexOf('.') >= 0) return this.sendReply('You cannot give money with decimals.');

		var b = 'bucks';
		var cleanedUp = parts[1].trim();
		var giveMoney = Number(cleanedUp);
		if (giveMoney === 1) b = 'buck';

		var money = Core.stdin('money', targetUser.userid);
		var total = Number(money) + Number(giveMoney);

		Core.stdout('money', targetUser.userid, total);

		this.sendReply(targetUser.name + ' was given ' + giveMoney + ' ' + b + '. This user now has ' + total + ' bucks.');
		targetUser.send(user.name + ' has given you ' + giveMoney + ' ' + b + '. You now have ' + total + ' bucks.');
	},

	takebuck: 'takemoney',
	takebucks: 'takemoney',
	takemoney: function(target, room, user) {
		if (!user.can('takemoney')) return;
		if (!target) return this.parse('/help takemoney');

		if (target.indexOf(',') >= 0) {
			var parts = target.split(',');
			parts[0] = this.splitTarget(parts[0]);
			var targetUser = this.targetUser;
		}

		if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
		if (isNaN(parts[1])) return this.sendReply('Very funny, now use a real number.');
		if (parts[1] < 1) return this.sendReply('You can\'t take less than one buck at a time.');
		if (String(parts[1]).indexOf('.') >= 0) return this.sendReply('You cannot take money with decimals.');

		var b = 'bucks';
		var cleanedUp = parts[1].trim();
		var takeMoney = Number(cleanedUp);
		if (takeMoney === 1) b = 'buck';

		var money = Core.stdin('money', targetUser.userid);
		var total = Number(money) - Number(takeMoney);

		Core.stdout('money', targetUser.userid, total);

		this.sendReply(targetUser.name + ' has been taken from ' + takeMoney + ' ' + b + '. This user now has ' + total + ' bucks.');
		targetUser.send(user.name + ' has taken ' + takeMoney + ' ' + b + ' from you. You now have ' + total + ' bucks.');
	},

	hide: 'hideauth',
	hideauth: function (target, room, user) {
		if (!this.can('hideauth')) return false;
		target = target || Config.groups.default.global;
		if (!Config.groups.global[target]) {
			target = Config.groups.default.global;
			this.sendReply("You have picked an invalid group, defaulting to '" + target + "'.");
		} else if (Config.groups.bySymbol[target].globalRank >= Config.groups.bySymbol[user.group].globalRank)
			return this.sendReply("The group you have chosen is either your current group OR one of higher rank. You cannot hide like that.");

		user.getIdentity = function (roomid) {
			var identity = Object.getPrototypeOf(this).getIdentity.call(this, roomid);
			if (identity[0] === this.group)
				return target + identity.slice(1);
			return identity;
		};
		user.updateIdentity();
		return this.sendReply("You are now hiding your auth as '" + target + "'.");
	},

	show: 'showauth',
	showauth: function (target, room, user) {
		if (!this.can('hideauth')) return false;
		delete user.getIdentity;
		user.updateIdentity();
		return this.sendReply("You are now showing your authority!");
	},

	masspm: 'pmall',
	pmall: function(target, room, user) {
		if (!this.can('pmall')) return;
		if (!target) return this.parse('/help pmall');

		var pmName = '~Admins\' Announcer';

		for (var i in Users.users) {
			var message = '|pm|' + pmName + '|' + Users.users[i].getIdentity() + '|' + target;
			Users.users[i].send(message);
		}
	},

	rmall: function(target, room, user) {
		if (!this.can('declare')) return;
		if (!target) return this.parse('/help rmall');

		var pmName = '&Leaders\' Announcer';

		for (var i in room.users) {
			var message = '|pm|' + pmName + '|' + room.users[i].getIdentity() + '|' + target;
			room.users[i].send(message);
		}
	},

	roomlist: function(target, room, user) {
		if (!this.can('roomlist')) return;

		var rooms = Object.keys(Rooms.rooms),
			len = rooms.length,
			official = ['<b><font color="#1a5e00" size="2">Official chat rooms</font></b><br><br>'],
			nonOfficial = ['<hr><b><font color="#000b5e" size="2">Public chat rooms</font></b><br><br>'],
			privateRoom = ['<hr><b><font color="#5e0019" size="2">Private chat rooms</font></b><br><br>'];

		while (len--) {
			var _room = Rooms.rooms[rooms[(rooms.length - len) - 1]];
			if (_room.type === 'chat') {
				if (_room.isOfficial) {
					official.push(('<a href="/' + _room.id + '" class="ilink">' + _room.title + '</a>'));
					continue;
				}
				if (_room.isPrivate) {
					privateRoom.push(('<a href="/' + _room.id + '" class="ilink">' + _room.title + '</a>'));
					continue;
				}
				nonOfficial.push(('<a href="/' + _room.id + '" class="ilink">' + _room.title + '</a>'));
			}
		}

		this.sendReplyBox(official.join('| ') + nonOfficial.join('| ') + privateRoom.join('| '));
	},

	sudo: function(target, room, user) {
		if (!user.can('sudo')) return;
		var parts = target.split(',');
		if (parts.length < 2) return this.parse('/help sudo');
		if (parts.length >= 3) parts.push(parts.splice(1, parts.length).join(','));
		var targetUser = parts[0],
			cmd = parts[1].trim().toLowerCase(),
			commands = Object.keys(CommandParser.commands).join(' ').toString(),
			spaceIndex = cmd.indexOf(' '),
			targetCmd = cmd;

		if (spaceIndex > 0) targetCmd = targetCmd.substr(1, spaceIndex - 1);

		if (!Users.get(targetUser)) return this.sendReply('User ' + targetUser + ' not found.');
		if (commands.indexOf(targetCmd.substring(1, targetCmd.length)) < 0 || targetCmd === '') return this.sendReply('Not a valid command.');
		if (cmd.match(/\/me/)) {
			if (cmd.match(/\/me./)) return this.parse('/control ' + targetUser + ', say, ' + cmd);
			return this.sendReply('You must put a target to make a user use /me.');
		}
		CommandParser.parse(cmd, room, Users.get(targetUser), Users.get(targetUser).connections[0]);
		this.sendReplyBox('You have made ' + targetUser + ' do ' + cmd + '.');
	},

	poll: function(target, room, user) {
		if (!this.canBroadcast()) return;
		if (Poll[room.id].question) return this.sendReply('There is currently a poll going on already.');
		if (!this.canTalk()) return;

		var options = Poll.splint(target);
		if (options.length < 2) return this.parse('/help poll');

		var question = options.shift();

		options = options.join(',').toLowerCase().split(',');

		Poll[room.id].question = question;
		Poll[room.id].optionList = options;

		var pollOptions = '';
		var start = 0;
		while (start < Poll[room.id].optionList.length) {
			pollOptions += '<button name="send" value="/vote ' + Poll[room.id].optionList[start] + '">' + Poll[room.id].optionList[start] + '</button>&nbsp;';
			start++;
		}
		Poll[room.id].display = '<h2>' + Poll[room.id].question + '&nbsp;&nbsp;<font size="1" color="#AAAAAA">/vote OPTION</font><br><font size="1" color="#AAAAAA">Poll started by <em>' + user.name + '</em></font><br><hr>&nbsp;&nbsp;&nbsp;&nbsp;' + pollOptions;
		room.add('|raw|<div class="infobox">' + Poll[room.id].display + '</div>');
	},

	tierpoll: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.parse('/poll Tournament Tier?, ' + tiersforpoll.toLowerCase());
	},

	tierpollopt: 'tpo',
	tierpollo: 'tpo',
	polloptions: 'tpo',
	tieroptions: 'tpo',
	tpo: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Options for voting in the poll for next Tournament\'s Tier are mentioned below:<br />' +
			'' + tiersforpoll
		);
	},

	endpoll: function(target, room, user) {
		if (!this.canBroadcast()) return;
		if (!Poll[room.id].question) return this.sendReply('There is no poll to end in this room.');

		var votes = Object.keys(Poll[room.id].options).length;

		if (votes === 0) {
			Poll.reset(room.id);
			return room.add('|raw|<h3>The poll was canceled because of lack of voters.</h3>');
		}

		var options = {};

		for (var i in Poll[room.id].optionList) {
			options[Poll[room.id].optionList[i]] = 0;
		}

		for (var i in Poll[room.id].options) {
			options[Poll[room.id].options[i]] ++;
		}

		var data = [];
		for (var i in options) {
			data.push([i, options[i]]);
		}
		data.sort(function(a, b) {
			return a[1] - b[1]
		});

		var results = '';
		var len = data.length;
		var topOption = data[len - 1][0];
		while (len--) {
			if (data[len][1] > 0) {
				results += '&bull; ' + data[len][0] + ' - ' + Math.floor(data[len][1] / votes * 100) + '% (' + data[len][1] + ')<br>';
			}
		}
		room.add('|raw|<div class="infobox"><h2>Results to "' + Poll[room.id].question + '"</h2><font size="1" color="#AAAAAA"><strong>Poll ended by <em>' + user.name + '</em></font><br><hr>' + results + '</strong></div>');
		Poll.reset(room.id);
		Poll[room.id].topOption = topOption;
	},

	control: function(target, room, user) {
		if (!this.can('control')) return;
		var parts = target.split(',');

		if (parts.length < 3) return this.parse('/help control');

		if (parts[1].trim().toLowerCase() === 'say') {
			return room.add('|c|' + Users.get(parts[0].trim()).group + Users.get(parts[0].trim()).name + '|' + parts[2].trim());
		}
		if (parts[1].trim().toLowerCase() === 'pm') {
			return Users.get(parts[2].trim()).send('|pm|' + Users.get(parts[0].trim()).group + Users.get(parts[0].trim()).name + '|' + Users.get(parts[2].trim()).group + Users.get(parts[2].trim()).name + '|' + parts[3].trim());
		}
		this.sendReply('User \'' + Users.get(part[0].trim()).name + ' successfully PMed ' + Users.get(parts[2].trim()).name + ' "' + parts[3].trim() + '".');
	},

	clearall: function(target, room, user) {
		if (!this.can('clearall')) return;
		var len = room.log.length,
			users = [];
		while (len--) {
			room.log[len] = '';
		}
		for (var user in room.users) {
			users.push(user);
			Users.get(user).leaveRoom(room, Users.get(user).connections[0]);
		}
		len = users.length;
		setTimeout(function() {
			while (len--) {
				Users.get(users[len]).joinRoom(room, Users.get(users[len]).connections[0]);
			}
		}, 1000);
	},

	/*********************************************************
	 * Server management commands
	 *********************************************************/

	debug: function(target, room, user, connection, cmd, message) {
		if (!user.hasConsoleAccess(connection)) {
			return this.sendReply('/debug - Access denied.');
		}
		if (!this.canBroadcast()) return;

		if (!this.broadcasting) this.sendReply('||>> ' + target);
		try {
			var battle = room.battle;
			var me = user;
			if (target.indexOf('-h') >= 0 || target.indexOf('-help') >= 0) {
				return this.sendReplyBox('This is a custom eval made by CreaturePhil for easier debugging.<br/>' +
					'<b>-h</b> OR <b>-help</b>: show all options<br/>' +
					'<b>-k</b>: object.keys of objects<br/>' +
					'<b>-r</b>: reads a file<br/>' +
					'<b>-p</b>: returns the current high-resolution real time in a second and nanoseconds. This is for speed/performance tests.');
			}
			if (target.indexOf('-k') >= 0) {
				target = 'Object.keys(' + target.split('-k ')[1] + ');';
			}
			if (target.indexOf('-r') >= 0) {
				this.sendReply('||<< Reading... ' + target.split('-r ')[1]);
				return this.popupReply(eval('fs.readFileSync("' + target.split('-r ')[1] + '","utf-8");'));
			}
			if (target.indexOf('-p') >= 0) {
				target = 'var time = process.hrtime();' + target.split('-p')[1] + 'var diff = process.hrtime(time);this.sendReply("|raw|<b>High-Resolution Real Time Benchmark:</b><br/>"+"Seconds: "+(diff[0] + diff[1] * 1e-9)+"<br/>Nanoseconds: " + (diff[0] * 1e9 + diff[1]));';
			}
			this.sendReply('||<< ' + eval(target));
		} catch (e) {
			this.sendReply('||<< error: ' + e.message);
			var stack = '||' + ('' + e.stack).replace(/\n/g, '\n||');
			connection.sendTo(room, stack);
		}
	},

	db: 'database',
	database: function(target, room, user) {
		if (!this.can('db')) return;
		if (!target) return user.send('|popup|You must enter a target.');

		try {
			var log = fs.readFileSync(('config/' + target + '.csv'), 'utf8');
			return user.send('|popup|' + log);
		} catch (e) {
			return user.send('|popup|Something bad happen:\n\n ' + e.stack);
		}
	},

	cp: 'controlpanel',
	controlpanel: function(target, room, user, connection) {
		if (!this.can('controlpanel')) return;
		if (target.toLowerCase() === 'help') {
			return this.sendReplyBox(
				'/cp color, [COLOR]<br/>' +
				'/cp avatar, [AVATAR COLOR URL]<br/>' +
				'/cp toursize, [TOURNAMENT SIZE TO EARN MONEY]<br/>' +
				'/cp money, [STANDARD/DOUBLE/QUADRUPLE]<br/>' +
				'/cp winner, [WINNER ELO BONUS]<br/>' +
				'/cp runnerup, [RUNNERUP ELO BONUS]<br/>'
			);
		}
		var parts = target.split(',');
		Core.profile.color = Core.stdin('control-panel', 'color');
		Core.profile.avatarurl = Core.stdin('control-panel', 'avatar');
		Core.tournaments.tourSize = Number(Core.stdin('control-panel', 'toursize'));
		Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));
		Core.tournaments.winningElo = Number(Core.stdin('control-panel', 'winner'));
		Core.tournaments.runnerUpElo = Number(Core.stdin('control-panel', 'runnerup'));
		if (parts.length !== 2) {
			return this.sendReplyBox(
				'<center>' +
				'<h3><b><u>Control Panel</u></b></h3>' +
				'<i>Color:</i> ' + '<font color="' + Core.profile.color + '">' + Core.profile.color + '</font><br />' +
				'<i>Custom Avatar URL:</i> ' + Core.profile.avatarurl + '<br />' +
				'<i>Tournament size to earn money: </i>' + Core.tournaments.tourSize + '<br />' +
				'<i>Earning money amount:</i> ' + Core.tournaments.earningMoney() + '<br />' +
				'<i>Winner Elo bonus:</i> ' + Core.tournaments.winningElo + '<br />' +
				'<i>RunnerUp Elo bonus:</i> ' + Core.tournaments.runnerUpElo + '<br /><br />' +
				'To edit this info, use /cp help' +
				'</center>' +
				'<br clear="all">'
			);
		}

		parts[1] = parts[1].trim().toLowerCase()

		var self = this,
			match = false,
			cmds = {
				color: function() {
					Core.stdout('control-panel', 'color', parts[1], function() {
						Core.profile.color = Core.stdin('control-panel', 'color');
					});
					self.sendReply('Color is now "' + parts[1] + '".');
				},
				avatar: function() {
					Core.stdout('control-panel', 'avatar', parts[1], function() {
						Core.profile.avatarurl = Core.stdin('control-panel', 'avatar');
					});
					self.sendReply('Avatar URL is now "' + parts[1] + '".');
				},
				toursize: function() {
					Core.stdout('control-panel', 'toursize', parts[1], function() {
						Core.tournaments.tourSize = Number(Core.stdin('control-panel', 'toursize'));
					});
					self.sendReply('Tournament size to earn money is now "' + parts[1] + '".');
				},
				money: function() {
					if (parts[1] === 'standard') Core.stdout('control-panel', 'money', 10, function() {
						Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));
					});
					if (parts[1] === 'double') Core.stdout('control-panel', 'money', 4, function() {
						Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));
					});
					if (parts[1] === 'quadruple') Core.stdout('control-panel', 'money', 2, function() {
						Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));
					});
					self.sendReply('Earning money amount is now "' + parts[1] + '".');
				},
				winner: function() {
					Core.stdout('control-panel', 'winner', parts[1], function() {
						Core.tournaments.winningElo = Number(Core.stdin('control-panel', 'winner'));
					});
					self.sendReply('Winner Elo bonus is now "' + parts[1] + '".');
				},
				runnerup: function() {
					Core.stdout('control-panel', 'runnerup', parts[1], function() {
						Core.tournaments.runnerUpElo = Number(Core.stdin('control-panel', 'runnerup'));
					});
					self.sendReply('Runner Up Elo bonus is now "' + parts[1] + '".');
				}
			};

		for (cmd in cmds) {
			if (parts[0].toLowerCase() === cmd) match = true;
		}

		if (!match) return this.parse('/cp help');

		cmds[parts[0].toLowerCase()]();
	},
};

Object.merge(CommandParser.commands, components);
