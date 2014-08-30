var miscommands = exports.miscommands = {

	abuse: 'aboose',
	aboose: function (target, room, user) {
		return this.parse('/pm Chakra, http://www.todayifoundout.com/wp-content/uploads/2010/09/spam5.jpg');
	},

	crie: 'caboose',
	caboose: function (target, room, user) {
		return this.parse('/pm MadAsTheHatter, /me spanks MadAsTheHatter!');
	},

	crie2: 'caboose2',
	caboose2: function (target, room, user) {
		return this.parse('/pm MadAsTheHatter, /me spanks MadAsTheHatter!!');
	},

	spank: function (target, room, user) {
		if (!target) return this.sendReply('/spank needs a target.');
		return this.parse('/me spanks ' + target + '!');
	},

	evil: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center> <img src = "http://2.bp.blogspot.com/-xjCXTEfWUso/U3zBu2GTpfI/AAAAAAAAfcQ/5xthlz2Q_8M/s1600/Elmo+(Gif).gif"> <br> <font size="4"><b><i><font color="#9C0D0D">Evil-kun</i><br></font><b> <blink> Ace: Dis is an ivol zing </blink></b><br><b>Elmo sabe donde vives...</b></center>');
	},

	ac: 'armcannons',
	armcannons: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src = "http://i.imgur.com/rLcl2V6.gif"> <center><br> <font size="3"><b><i><font color="blue">Josh</i><br></font><b> <blink> Ace: Darmanitan </blink></b> <br><b>Stealing yo girl shofu style</b></center>');
	},

	plug: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://oi61.tinypic.com/10ofrb9.jpg" height="300" width="540"/> </a><br><font size="3"><b><i><font color="Black">Plug Crew</i><br></font><b><blink><a href="http://plug.dj/infinite-jam-session/">Plug Room</a></font></blink></b><br></center>');
	},

	mandy: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox(' <center> <img src="https://38.media.tumblr.com/6ebc0377922856d3a81a0d190ec59705/tumblr_n9g18dmLLR1rpn9eno1_500.gif"> <br> <font size="3"><b><i><font color="99FFFF">Mandy</i><br></font><b> <blink> Ace: I\'m kawaii bitch ^.~ </blink></b> <br><b>Cant handle my Cutness</b></center>');
	},

	ac2: 'armcannons2',
	armcannons2: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/NHfpSOz.jpg"><br />' +
			'<font size=4><i><font color=blue><b>Josh</b></font></i></font><br />' +
			'<blink><b><font color=gray>Ace: Shocking good looks</font></b></blink><br />' +
			'<b>First I eat my nutella then I eel yo girl</b>');
	},

	gg: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://s28.postimg.org/u3t9nqknd/OBAMA.jpg"><br />' +
			'<font size=3><i><font color=red><b>Da Bic Boi</b></font></i></font><br />' +
			'<b><blink>Ace: Bullet Punch</blink></b><br />' +
			'<b>#hardbody</b>');
	},

	donate: 'gg2',
	gg2: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/IEgAQ.jpg"><br />' +
			'Like this server and want to help out?<br />' +
			'<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MSLQFMFMNUMX4&lc=US&item_name=Infinite%20Server%20%28http%3a%2f%2finfinite%2epsim%2eus%2f%29&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif" /></a><br />' +
			'<b><blink>Ace: Gratitude</blink></b><br />' +
			'<b>#Message Da Bic Boi afterwards to make sure the donation went through!</b>');
	},

	scrub: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://th06.deviantart.net/fs71/PRE/i/2010/138/1/9/Sumo_Lucario_by_Kuzooma.jpg" height="247" width="173"><br />' +
			'<font size=3><i><font color=cyan><b>Scream Scrub</b></font></i></font><br />' +
			'<b><blink>Ace: Diabeetus</blink></b><br />' +
			'<b>#tryhard</b>');
	},

	max: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://www.bobstephens.com/Portals/270223/images/hello%20my%20name%20is%20swag.jpg"><br />' +
			'<font size=3><i><font color=green><b>Absolute Maximum</b></font></i></font><br />' +
			'<b><blink>Ace: First Derivative</blink></b><br />' +
			'<b>#scrublord9000+</b>');
	},

	alaskaa: 'weed',
	weed: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "https://i.imgur.com/EPoWU4B.gif"> <br> <font size="3"><b><i><font color="00FF00">Alaskaa</i><br></font><b> <blink> Weed </blink></b> <br><b>SMOKEsmOKEWEED EVERYDAY AYY</b></center>');
	},

	lasers: 'pewpewpew',
	pewpewpew: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "https://i.imgur.com/HAnRb2U.gif"> <br> <font size="3"><b><i><font color="8000FF">Lasurs</i><br></font><b> <blink> PEWPEWPEW WITH ME SENPAI ARHFRJGHJHJKDF </blink></b> <br><b>Ace: Godly Instrument</b></center>');
	},

	swagclear: 'manualclear',
	mc: 'manualclear',
	manualclear: function (target, room, user) {
		if (!user.can('ban')) return false;
		this.add('|html|<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>');
	},

	enzo: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = " https://i.imgur.com/qQwyukJ.gif"> <br> <font color=blue>  <font size="3"> <b><i>FranchescoEnzo</i><br></font> <font color=black> Quote: M8 I swer on me mam i\'ll rek u <br> <blink> <b> Ace: Reflexes </b>');
	},

	fatherj: 'davidj',
	davidj: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "http://a.gifb.in/2003839490.gif"> <br> <font size="3"><b><i><font color="00FF00">DavidJ</i><br></font><b> <blink>Ace: OP Spanish Boy</blink></b><br><b>420 Blaze It (Hur Hur)</b></center>');
	},

	silver: 'sexiness',
	sexiness: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "http://i.imgur.com/yacqCjw.gif"> <br> <font size="3"><b><i><font color="00FF00">SilverKill</i><br></font><b>Show them all you\'re not the ordinary type.</b> <br><b><font color=FFBF00>Deal with it. (⌐■_■)</b></center>');
	},

	kevkev: 'kevn',
	kevn: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><b><a href="http://imgur.com/dOwckG1"><img src="http://i.imgur.com/dOwckG1.gif"></a><br> <font size= 3> <i><font color = "red"> nonstopkevn</i></font><br><blink> <b> Unstoppable</blink> </b> <br>“It does not matter how slow you go so long as you do not stop.”<br>-Wisdom of Confucius.</center></b>');
	},

	pu: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('PU is a tier created by <a href="https://www.youtube.com/user/dundealshowdown">Dun Deal</a>.<br>It is a tier below NU, using only Pokemon from LC, NFE, and Pokemon who are barely ever used in NU.<br>A list of the tier\'s Pokemon can be found on the PU website <a href="http://www.partiallyused.weebly.com">here</a>. Please read it!<br>You can interact with the PU community in Dun Deal\'s Place. Happy battling!');
	},

	puban: 'pufix',
	pufix: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('The PU tier was coded in a way that basically every Pokemon that was not part of the PU tier had to manually be banned out.</a><br>By coding the tier this way, some Pokemon that are not PU are able to be used in PU battles.<br>You can submit the names of the Pokemon that we missed <a href="https://docs.google.com/forms/d/1IUFrec8w3bfcvymDGIe7XBBqN6giso_1wdruyymaYOo/viewform?usp=send_form"><b>here</b></a>!');
	},

	abcabilities: 'abcab',
	abcab: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('ABC Abilities is a tier created by <a href="https://www.youtube.com/user/dundealshowdown">Dun Deal</a>.<br>It is a tier in which every Pokemon can have any move or ability that starts with the same letter its name starts with.<br>A list of the tier\'s Pokemon can be found <a href="http://www.abcabilities.weebly.com">here</a>. Please read it!<br>You can interact with the ABC Abilities community in Dun Deal\'s Place. Happy Battling!');
	},

	infinitebot: 'death',
	bot: 'death',
	death: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center> <img src="http://img3.wikia.nocookie.net/__cb20130912191337/powerlisting/images/b/b6/Red_from_rwby_by_theblazingapple-d5vae6e.gif"><br><b><blink><FONT COLOR="red">Infinite Bot</FONT COLOR></blink><br>"For all you would-be spammers out there, I will find you, and I kill ban you."</b></center>');
	},

	frost: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><a href="http://a.tumblr.com/tumblr_l6dyfyOTqx1qab7jvo1.mp3"> <img src="http://i.imgur.com/CwCKNVD.gif"/> </a><br><font size="3"><b><i><font color="blue">Frost</i><br></font><b><blink>Willpower</font></blink></b><br><font color="585858"><i>I\'ll never fall by the likes of people such as you.</i></center>');
	},

	twerk: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://img3.wikia.nocookie.net/__cb20080726011931/uncyclopedia/images/1/17/Gandhi_first_blood_1.jpg" height="300" width="330"><br />' +
			'<b><blink>Sample Text</blink></b><br />' +
			'<b>#twerkteam</b>');
	},

	thirsty: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://us.123rf.com/400wm/400/400/cemark/cemark1004/cemark100400001/6766198-young-handsome-fitness-model-with-water-bottle-and-towel-after-a-workout-against-white-background.jpg"><br />' +
			'<b>#TheThirstIsReal</b>');
	},

	yallthirsty: 'quantavious',
	quantavious: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://www.smogon.com/media/smog/16/featureduu_victini.png" height="180" width="180"><br />' +
			'<img src="http://th01.deviantart.net/fs71/PRE/f/2013/275/7/d/mega_charizard_y_by_mblock-d6kzs5q.png" height="250" width="180"> <font size=3><b><i><font color=gold>YallThirsty</font></i></b></font> <img src="http://fc09.deviantart.net/fs70/f/2013/247/4/8/mega_charizard_by_yonaka_pinku-d6l1hrb.png" height="180" width="195"><br />' +
			'<b><blink>Ace: Charizard</blink></b><br />' +
			'<b>You All Are Thirsty!</b>');
	},

	macrarazy: 'mac',
	e4mac: 'mac',
	e6mac: 'mac',
	mac: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://media-cerulean.cursecdn.com/attachments/thumbnails/5/622/530/530/mega_lucario.png" height="180" width="150"><br />' +
			'<img src="http://th03.deviantart.net/fs70/PRE/i/2014/003/8/1/mega_aggron_by_theangryaron-d70p759.png" height="130" width="150"> <img src="http://i.imgur.com/91GZs2L.gif"> <img src="http://fc06.deviantart.net/fs70/f/2013/285/4/7/mega_aggron_tramplin__the_lawn_by_brandon_stuart-d6q5051.png" height="130" width="160"><br />' +
			'<b><blink>Ace: Mega Aggron</blink><br />' +
			'<font color=gray>Sometimes... Steel is too much for you!</font></b>');
	},

	poto: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/4fv3P.jpg" height="188" width="300"><br />' +
			'<font color=blue><b>#kammi</b></font>');
	},

	rekt: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="https://i.imgur.com/4PJvXqD.gif"><br />');
	},

	infusion: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://ionegiantmag.files.wordpress.com/2014/02/dontwanta.gif?w=340&h=206"><br />');
	},

	monopoly: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/C7ETl.jpg"><br />');
	},

	korps: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><b><img src="http://24.media.tumblr.com/4dea623d6844fab1ff1c9e3ddb53d06e/tumblr_n1goo3Z1J11rvr5jyo2_500.gif"></a><br> <font size= 3> <i><font color = "blue"> Korps</i></font><br><blink> <b> I will find you.</blink> </b><br>“No matter where you go, I\'ll follow you. Because I love you."');
	},

	jj: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="https://i.imgur.com/CwCveKQ.gif"><br />' +
			'<font size=3><i><font color=red><b>Not Da Bic Boi</b></font></i></font><br />' +
			'<b><blink>Ace: Credit Card</blink></b><br />');
	},

	tdfw: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><a href="http://audio.radiorecord.ru/superchart/DJ%20SNAKE%20&%20LIL%20JOHN%20-%20Turn%20Down%20For%20What.mp3"> <img src="http://icons.iconarchive.com/icons/creative-freedom/shimmer/48/Play-icon.png" /> </a><br><font size="3"><b><i><font color="FF0000">#TD4W</i><br></font><b><blink>Turn Up MothaFuckas</font></blink></b><br><font color="585858"><i>Swag</i></center>');
	},

	hue: 'BR',
	br: 'BR',
	BR: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox(' <center><a href="https://a.tumblr.com/tumblr_mujxyk4g1U1shttnco1.mp3"target="_blank"><img src=http://goo.gl/6tsGk3> </a><br> <font size="3"><b><i><font color="642EFE">BlackRabbit</i><br></font><b> <blink> Ace: Swimpuku </blink></b> <br><b>I am sorry, is my swag distracting you?<b><center>');
	},

	mad: 'math',
	math: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center> <img src = "http://i.imgur.com/33kIbEf.gif"> <br> <font size="4"><b><i><font color="#0033CC">MadAsTheHatter</i><br></font><b> <blink> Ace: Ralphonso </blink></b><br><b>Stay Frosty</b></center>');
	},

	shed: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><a href="http://a.tumblr.com/tumblr_maghncXqXg1qdm6eno1.mp3"> <img src="https://i.chzbgr.com/original/8103697920/AD42FCA1/1" /> </a><br><font size="3"><b><i><font color="FF0000">#733t gg</i><br></font><b><blink> **Gimmicks Ahoy!**</font></blink></b><br><font color="585858"><i>1v1 Me Scrub (Fuggin Click Da Photo)</i></center>');
	},

	pantsu: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.minus.com/inbFDGrgY8LE9.gif"><br />' +
			'<font color=blue><b>#AbsolutePervyium \(Credit:shinigami, Pantsu Man\)</b></font>');
	},

	rotom: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://fc01.deviantart.net/fs71/f/2013/323/6/0/pokemon___rotom_w_gif_by_immer-d6uug1w.gif" height="250" width="250"><br />');
	},

	taco: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/sFyBYyD.jpg" height="225" width="300"><br />' +
			'<font size=3><i><font color=purple><b>#TeamTacoBell</b></font></i></font><br />' +
			'<b><blink>Ace: Doritos Locos Tacos</blink></b><br />' +
			'<b>Happy Hour is best Hour!</b>');
	},

	jen: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://fc09.deviantart.net/fs48/f/2009/204/b/9/Chibi_Glaceon_and_Lucario_by_pichu90.png" height="188" width="300"><br />' +
			'<font color=blue><b>#2kawaii4u</b></font>');
	},

	air: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://cdn.gifbay.com/2013/09/dimitri_dance-87762.gif"><br />' +
			'<font color=black><b>"I get my own trainer card!?"</b></font>');
	},

	sys: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/zs4VL.jpg"><br />' +
			'<font size=3><font color=bllack><b>Eye Contact: Literally Impossible.</b></font><br />' +
			'<b><blink>Ace: Punishment.</blink></b><br />');
	},

	troll: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://www.adorablekidsdressup.com/Cloud%20Nine%20Images/Troll_Dolls/exercise-troll.jpg"><br />' +
			'<b>I will shit fury all over you and you will drown in it.</b><br />' +
			'<b>#swagmaster69</b>');
	},

	kfc: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/12xok.jpg" height="201" width="300"><br />' +
			'<font size=3><i><font color=purple><b>Omega Supreme</b></font></i></font><br />');
	},

	bd: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/ganNp.jpg"><br />' +
			'<font size=3><i><font color=purple><b>Backdoor Access: Félicette (Credit: JD x Félicette)</b></font></i></font><br />' +
			' People who have purchased this: nonstopkevn, DavidJ, Félicette, jd, retrofeather, Absolute Maximum, Feeboss, Giantsdms, xVeNoMiiZz, KafkaBlack, Quilavaa, Chakra, Connor the Goodra, and of course: Da Bic Boi. </center>');
	},

	jd: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/QWGOz.jpg"><br />' +
			'<font size=3><i><font color=blue><b>JD</b></font></i></font><br />' +
			'<b><blink>Ace: Sexual Tension</blink></b><br />');
	},

	toxic: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center> <img src = "http://imgur.com/uY78BN0.gif"> <br> ' +
			'<font size="3"><b><i><font color="Purple">Toxic</i><br></font></b>' +
			'<blink> Ace:Outernet</blink></b> <br>' +
			'<b>Stay indoors ;3</b></center>');
	},

	waffle: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.snag.gy/4EhXF.jpg"><br />' +
			'<font size=1><i><font color=gray><b>#LikeAWaffle (Credit: Chakra)</b></font></i></font><br />' +
			'<b><blink>Ace: Elite Hand-To-Waffle Combat</blink></b><br />');
	},

	paperangel: 'paper',
	angel: 'paper',
	paper: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center><img src ="http://www.reactiongifs.us/wp-content/uploads/2013/09/you_guys_are_weird_community.gif"/><br><font size="3"><b><i><font color="B40404">Paper Angel</i><br></font><b> <blink>Ace: What?</blink></b><br><b><i>Yall mothafuckas weird af tbh</i></b></center>');
	},

	peppa: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="https://i.chzbgr.com/maxW500/5106422528/hC0846F32/" height="251" width="375"><br />' +
			'<font size=3><i><font color=pink><b>Peppa </b></font></i></font><i><font color=pink><b>Mint </b></font></i></font><br />' +
			'<font size=3><i><font color=pink><b>List of things Peppamint has said IRL: </b></font></i><br />' +
			'</font><i><font color=purple><b>"I spread my asscheeks for Shrek" 8/16/2014 </b></font></i></font><br />' +
			'</font><i><font color=purple><b>"Where\'s Picopie? What!? He\'s jacking off!?" 8/16/2014 </b></font></i></font><br />');
	},

	giant: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/zDPw1xo.gif"><br />' +
			'<font size=4><i><font color=33FF33><b>Giantsdms</b></font></i></font><br />' +
			'<b><blink>Ace: Iron Giant</blink></b><br />' +
			'<b>I sweep girls off their feet like i do with your team m8; easily</b>');
	},

	kafka: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/bvCvPmd.gif"><br />' +
			'<font size=3><i><font color=33FF33><b>Kafka</b></font></i></font><br />' +
			'<b><blink>Ace: Shimmy</blink></b><br />' +
			'<b>Now stop, OH, then wiggle with it, YEAH!</b>');
	},

	fel: 'felicette',
	felicette: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "http://i.snag.gy/qfI9K.jpg"> <br> <font size="3"><b><i><font color="94CAE9">Félicette</i><br></font><b> <font color=pink> <blink> Ace: Cherry Blossoms </blink></b> <br><i>Eternal happiness will only bloom after the suffering of the past has been endured.</i></center>');
	},

	chakra: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/J6KKFpy.gif"><br />' +
			'<font size=3><i><font color=B40404><b>Chakra</b></font></i></font><br />' +
			'<b><blink>Ace: Kawaii</blink></b><br />' +
			'<br><marquee behavior=scroll direction="left" scrollamount="50">f(x)=e^o3o</marquee>');
	},

	sacrisis: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src="http://i.imgur.com/2P8spqI.gif"><br />' +
			'<font size=3><i><font color=7A770C><b>Sacrisis</b></font></i></font><br />' +
			'<b><blink>Ace: When you get those hax</blink></b>' +
			'<br><b>Make dat booty werk</b>')
	},

	quil: 'quilaava',
	quilaava: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><img src= "http://i.imgur.com/2gtjmIs.jpg"> <br> <font size="3"><b><i><font color="FF0000">Quil</i><br></font><b><font color="blue"> Quote: In the heat of the moment never quit, press on!</b><br><b><blink><font color="orange"> Ace: Mystery</blink></b></center>');
	},

	reigns: 'darkness',
	darkness: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center><img src ="http://i.imgur.com/qoZyc5i.gif"/><br><font size="3"><b><i><font color="8A0808">DarknessReigns</i><br></font><b> <blink><font color="0B0B61">Ace: Sasuke</font></blink></b><br><b><i>It gets darkest right before dawn.</i></b></center>');
	},

	prof: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "http://i.imgur.com/BgQ7CjK.png?1"> <br> <font size="3"><b><i><font color="FA58F4">Profpoodle</i><br></font><b> <blink><font color=00FFFF> Ace: Furfrou obv </blink></font></b> <br><b><font color=40FF00> EY BABY U WANT MEH EH? </font></b></center>');
	},

	ralph: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_lndbvcZnJx1qady2p.gif"> <br> <font size="3"><b><i><font color="B2C248">Ralphonso</i><br></font><b> <blink> Ace: I GOT DAT <i> Canadian </i> HARD BODY </blink></b> <br> #getripped </center>');
	},

	connor: 'goodra',
	goodra: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center> <img src = "http://static.fjcdn.com/gifs/Warm+and+comforting+bonfire.+Dark+Souls_831dce_4872510.gif"> <br> <font size="3"><b><i><font color="0404B4">Connor the Goodra</i><br></font><b> <font color="8A0886">  Ace: The comfort of the bonfire </b> <br><b> <font color="190707"> <blink> Lol you\'re a scrub </b></center>');
	},

	ninkay: 'inky',
	inky: function (target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReplyBox('<center><img src ="https://i.imgur.com/ZFaCmxp.gif"/><br><font size="3"><b><i><font color="FF0000">Inkyfeather</i><br></font><b><blink>st0icm4st3r280000</font></blink></b><br><font color="585858"><i>Ninkay out! .3.</i></center>');
	}

};

Object.merge(Commandparser.commands, miscommands);
