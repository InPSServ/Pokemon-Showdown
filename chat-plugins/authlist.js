exports.commands = {
	stafflist: 'authlist',
	authlist: function (target, room, user, connection) {
		var rankLists = {};
		for (var u in Users.usergroups) {
			var rank = Users.usergroups[u][0];
			var name = Users.usergroups[u].slice(1);
			if (!rankLists[rank]) rankLists[rank] = [];
			rankLists[rank].push(name);
		}

		var buffer = [];
		Object.keys(rankLists).sort(function (a, b) {
			return Config.groups.bySymbol[b].rank - Config.groups.bySymbol[a].rank;
		}).forEach(function (r) {
			buffer.push("**" + Config.groups.bySymbol[r].name + "s (" + r + "):**" + rankLists[r].sort().join(", "));
		});

		if (!buffer.length) {
			buffer = "This server has no auth.";
		}
		connection.popup(buffer.join("\n\n"));
	}
};
