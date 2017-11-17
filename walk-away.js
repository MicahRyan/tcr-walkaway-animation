(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"walk_away_atlas_", frames: [[502,3657,200,183],[502,2853,500,500],[502,3355,300,300],[0,1601,1000,1250],[0,3480,500,539],[0,0,1200,1599],[0,2853,500,625]]}
];


// symbols:



(lib.correct = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Hue_Saturation11 = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NoHands = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.RFE_OEMMaster = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.SWT01_straighton_grey = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TCR1S = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.TCX51EL_grey = function() {
	this.spriteSheet = ss["walk_away_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.correct();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.235,0.235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,47,43), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hue_Saturation11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,5.772,5.772);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,2886,2886), null);


(lib._6724T_007_5psd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hue_Saturation 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(2749,2037,1,1,0,0,0,1443,1442.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:1443,rotation:12.4},0).wait(1).to({rotation:24.8,x:2748.9},0).wait(1).to({rotation:37.2,x:2749},0).wait(1).to({rotation:49.6,x:2748.9,y:2037.1},0).wait(1).to({rotation:62,y:2037},0).wait(1).to({rotation:74.4},0).wait(1).to({rotation:86.8},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:111.7,y:2036.9},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:136.5},0).wait(1).to({rotation:148.9},0).wait(1).to({rotation:161.3},0).wait(1).to({rotation:173.7},0).wait(1).to({rotation:186.2,y:2036.8},0).wait(1).to({rotation:198.6,x:2749},0).wait(1).to({rotation:211},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:235.8},0).wait(1).to({rotation:248.2,y:2036.9},0).wait(1).to({rotation:260.6,x:2749.1},0).wait(1).to({rotation:273},0).wait(1).to({rotation:285.5,x:2749},0).wait(1).to({rotation:297.9,x:2749.1,y:2037},0).wait(1).to({rotation:310.3,x:2749,y:2036.9},0).wait(1).to({rotation:322.7,y:2037},0).wait(1).to({rotation:335.1},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:359.9,y:2037.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1305.7,593.8,2886.6,2886.6);


// stage content:
(lib.RECOVER_RECOVER_walkaway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check mark 4
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(1564,480,1,1,0,0,0,23.5,21.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(420).to({_off:false},0).wait(215));

	// check mark 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1425,478,1,1,0,0,0,23.5,21.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(380).to({_off:false},0).wait(255));

	// check mark 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1303,479,1,1,0,0,0,23.5,21.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(344).to({_off:false},0).wait(291));

	// check mark 1
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1183.5,477.5,1,1,0,0,0,23.5,21.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(310).to({_off:false},0).wait(325));

	// tire 1
	this.instance_4 = new lib._6724T_007_5psd("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275.2,72.6,0.02,0.02,0,0,0,2751.8,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:2748.9,regY:2036.9,x:283.7,startPosition:1},0).wait(1).to({x:292.3,startPosition:2},0).wait(1).to({x:300.8,startPosition:3},0).wait(1).to({x:309.4,startPosition:4},0).wait(1).to({x:318,startPosition:5},0).wait(1).to({x:326.5,startPosition:6},0).wait(1).to({x:335.1,startPosition:7},0).wait(1).to({x:343.7,startPosition:8},0).wait(1).to({x:352.2,startPosition:9},0).wait(1).to({x:360.8,startPosition:10},0).wait(1).to({x:369.4,startPosition:11},0).wait(1).to({x:377.9,startPosition:12},0).wait(1).to({x:386.5,startPosition:13},0).wait(1).to({x:395.1,startPosition:14},0).wait(1).to({x:403.6,startPosition:15},0).wait(1).to({y:84.8,startPosition:16},0).wait(1).to({y:97.1,startPosition:17},0).wait(1).to({y:109.3,startPosition:18},0).wait(1).to({y:121.5,startPosition:19},0).wait(1).to({y:133.8,startPosition:20},0).wait(1).to({y:146,startPosition:21},0).wait(1).to({y:158.2,startPosition:22},0).wait(1).to({y:170.5,startPosition:23},0).wait(1).to({y:182.7,startPosition:24},0).wait(1).to({y:194.9,startPosition:25},0).wait(1).to({y:207.2,startPosition:26},0).wait(1).to({y:219.4,startPosition:27},0).wait(1).to({y:231.6,startPosition:28},0).wait(1).to({y:243.9,startPosition:29},0).wait(1).to({y:256.1,startPosition:0},0).wait(1).to({y:268.3,startPosition:1},0).wait(1).to({x:424.1,y:268.2,startPosition:2},0).wait(1).to({x:444.6,y:268.1,startPosition:3},0).wait(1).to({x:465,y:268,startPosition:4},0).wait(1).to({x:485.5,y:267.9,startPosition:5},0).wait(1).to({x:505.9,y:267.8,startPosition:6},0).wait(1).to({x:526.4,y:267.7,startPosition:7},0).wait(1).to({x:546.8,y:267.6,startPosition:8},0).wait(1).to({x:567.3,y:267.5,startPosition:9},0).wait(1).to({x:587.7,y:267.4,startPosition:10},0).wait(1).to({x:608.2,y:267.3,startPosition:11},0).wait(1).to({x:628.7,y:267.2,startPosition:12},0).wait(1).to({x:649.1,y:267.1,startPosition:13},0).wait(1).to({x:669.6,y:267,startPosition:14},0).wait(1).to({x:690,y:266.9,startPosition:15},0).wait(1).to({x:710.5,y:266.8,startPosition:16},0).wait(1).to({x:730.9,y:266.7,startPosition:17},0).wait(1).to({x:751.4,y:266.6,startPosition:18},0).wait(1).to({x:771.8,y:266.5,startPosition:19},0).wait(1).to({x:792.3,y:266.4,startPosition:20},0).wait(1).to({x:812.7,y:266.3,startPosition:21},0).wait(1).to({x:833.2,y:266.2,startPosition:22},0).wait(1).to({x:853.7,y:266.1,startPosition:23},0).wait(1).to({x:874.1,y:266,startPosition:24},0).wait(1).to({x:894.6,y:265.9,startPosition:25},0).wait(1).to({x:915,y:265.8,startPosition:26},0).wait(1).to({x:935.5,y:265.7,startPosition:27},0).wait(1).to({x:955.9,y:265.6,startPosition:28},0).wait(1).to({x:976.4,y:265.5,startPosition:29},0).wait(1).to({x:996.8,y:265.4,startPosition:0},0).wait(1).to({x:1017.3,y:265.3,startPosition:1},0).wait(1).to({x:1037.7,y:265.2,startPosition:2},0).wait(1).to({x:1058.2,y:265,startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({x:1064.7,y:265.2,startPosition:6},0).wait(1).to({x:1071.2,y:265.3,startPosition:7},0).wait(1).to({x:1077.6,y:265.4,startPosition:8},0).wait(1).to({x:1084.1,y:265.5,startPosition:9},0).wait(1).to({x:1090.6,y:265.6,startPosition:10},0).wait(1).to({x:1097.1,y:265.7,startPosition:11},0).wait(1).to({x:1103.5,y:265.8,startPosition:12},0).wait(1).to({x:1110,y:265.9,startPosition:13},0).wait(1).to({x:1116.5,y:266,startPosition:14},0).wait(1).to({x:1123,y:266.1,startPosition:15},0).wait(1).to({x:1129.4,y:266.2,startPosition:16},0).wait(1).to({x:1135.9,y:266.3,startPosition:17},0).wait(1).to({x:1142.4,y:266.4,startPosition:18},0).wait(1).to({x:1148.9,y:266.5,startPosition:19},0).wait(1).to({x:1155.3,y:266.6,startPosition:20},0).wait(1).to({x:1161.8,y:266.7,startPosition:21},0).wait(1).to({x:1168.3,y:266.8,startPosition:22},0).wait(1).to({x:1174.8,y:266.9,startPosition:23},0).wait(1).to({x:1181.2,y:267,startPosition:24},0).wait(1).to({y:280.4,startPosition:25},0).wait(1).to({y:293.8,startPosition:26},0).wait(1).to({y:307.2,startPosition:27},0).wait(1).to({y:320.5,startPosition:28},0).wait(1).to({x:1181.1,y:333.9,startPosition:29},0).wait(1).to({y:347.3,startPosition:0},0).wait(1).to({y:360.6,startPosition:1},0).wait(1).to({y:374,startPosition:2},0).wait(1).to({y:387.4,startPosition:3},0).wait(1).to({x:1181,y:400.7,startPosition:4},0).wait(1).to({y:414.1,startPosition:5},0).wait(1).to({y:427.5,startPosition:6},0).wait(1).to({y:440.8,startPosition:7},0).wait(1).to({x:1180.9,y:454.2,startPosition:8},0).wait(1).to({y:467.6,startPosition:9},0).wait(1).to({y:480.9,startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

	// tire 2
	this.instance_5 = new lib._6724T_007_5psd("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(261.1,89.8,0.02,0.02,0,0,0,2751.8,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({x:261,y:89,startPosition:14},0).wait(1).to({regX:2748.9,regY:2036.9,x:260.9,y:88.9,startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({x:276.6,y:89.1,startPosition:19},0).wait(1).to({x:292.2,y:89.2,startPosition:20},0).wait(1).to({x:307.8,y:89.3,startPosition:21},0).wait(1).to({x:323.4,y:89.4,startPosition:22},0).wait(1).to({x:339,y:89.5,startPosition:23},0).wait(1).to({x:354.6,y:89.6,startPosition:24},0).wait(1).to({x:370.2,y:89.7,startPosition:25},0).wait(1).to({x:385.8,y:89.8,startPosition:26},0).wait(1).to({x:401.4,y:89.9,startPosition:27},0).wait(1).to({x:417,y:90,startPosition:28},0).wait(1).to({x:432.6,y:90.1,startPosition:29},0).wait(1).to({x:448.2,y:90.2,startPosition:0},0).wait(1).to({x:463.8,y:90.3,startPosition:1},0).wait(1).to({x:479.4,y:90.4,startPosition:2},0).wait(1).to({x:495,y:90.5,startPosition:3},0).wait(1).to({x:510.6,y:90.6,startPosition:4},0).wait(1).to({x:526.2,y:90.7,startPosition:5},0).wait(1).to({x:541.8,y:90.8,startPosition:6},0).wait(1).to({x:557.4,y:90.9,startPosition:7},0).wait(1).to({x:573,y:91,startPosition:8},0).wait(1).to({x:588.6,y:91.1,startPosition:9},0).wait(1).to({x:604.2,y:91.2,startPosition:10},0).wait(1).to({x:619.8,y:91.3,startPosition:11},0).wait(1).to({x:620,y:100.6,startPosition:12},0).wait(1).to({x:620.2,y:109.9,startPosition:13},0).wait(1).to({x:620.4,y:119.2,startPosition:14},0).wait(1).to({x:620.6,y:128.5,startPosition:15},0).wait(1).to({x:620.7,y:137.8,startPosition:16},0).wait(1).to({x:620.9,y:147.1,startPosition:17},0).wait(1).to({x:621.1,y:156.4,startPosition:18},0).wait(1).to({x:621.3,y:165.7,startPosition:19},0).wait(1).to({x:621.4,y:175.1,startPosition:20},0).wait(1).to({x:621.6,y:184.4,startPosition:21},0).wait(1).to({x:621.8,y:193.7,startPosition:22},0).wait(1).to({x:622,y:203,startPosition:23},0).wait(1).to({x:622.1,y:212.3,startPosition:24},0).wait(1).to({x:622.3,y:221.6,startPosition:25},0).wait(1).to({x:622.5,y:230.9,startPosition:26},0).wait(1).to({x:622.7,y:240.2,startPosition:27},0).wait(1).to({x:622.8,y:249.5,startPosition:28},0).wait(1).to({x:634.6,startPosition:29},0).wait(1).to({x:646.4,startPosition:0},0).wait(1).to({x:658.2,startPosition:1},0).wait(1).to({x:670,y:249.4,startPosition:2},0).wait(1).to({x:681.8,startPosition:3},0).wait(1).to({x:693.6,startPosition:4},0).wait(1).to({x:705.4,startPosition:5},0).wait(1).to({x:717.2,startPosition:6},0).wait(1).to({x:729,startPosition:7},0).wait(1).to({x:740.8,startPosition:8},0).wait(1).to({x:752.6,startPosition:9},0).wait(1).to({x:764.4,y:249.3,startPosition:10},0).wait(1).to({x:776.2,startPosition:11},0).wait(1).to({x:788,startPosition:12},0).wait(1).to({x:799.7,startPosition:13},0).wait(1).to({x:811.5,startPosition:14},0).wait(1).to({x:823.3,startPosition:15},0).wait(1).to({x:835.1,startPosition:16},0).wait(1).to({x:846.9,y:249.2,startPosition:17},0).wait(1).to({x:858.7,startPosition:18},0).wait(1).to({x:870.5,startPosition:19},0).wait(1).to({x:882.3,startPosition:20},0).wait(1).to({x:894.1,startPosition:21},0).wait(1).to({x:905.9,startPosition:22},0).wait(1).to({x:917.7,startPosition:23},0).wait(1).to({x:929.5,y:249.1,startPosition:24},0).wait(1).to({x:941.3,startPosition:25},0).wait(1).to({x:953.1,startPosition:26},0).wait(1).to({x:964.9,startPosition:27},0).wait(1).to({x:976.6,startPosition:28},0).wait(1).to({x:988.4,startPosition:29},0).wait(1).to({x:1000.2,startPosition:0},0).wait(1).to({x:1012,startPosition:1},0).wait(1).to({x:1023.8,y:249,startPosition:2},0).wait(1).to({x:1035.6,startPosition:3},0).wait(1).to({x:1047.4,startPosition:4},0).wait(1).to({x:1059.2,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({x:1071.2,startPosition:26},0).wait(1).to({x:1083.2,startPosition:27},0).wait(1).to({x:1095.2,startPosition:28},0).wait(1).to({x:1107.1,startPosition:29},0).wait(1).to({x:1119.1,startPosition:0},0).wait(1).to({x:1131.1,startPosition:1},0).wait(1).to({x:1143.1,startPosition:2},0).wait(1).to({x:1155.1,startPosition:3},0).wait(1).to({x:1167.1,startPosition:4},0).wait(1).to({x:1179,startPosition:5},0).wait(1).to({x:1191,startPosition:6},0).wait(1).to({x:1203,startPosition:7},0).wait(1).to({x:1215,startPosition:8},0).wait(1).to({x:1227,startPosition:9},0).wait(1).to({x:1239,startPosition:10},0).wait(1).to({x:1251,startPosition:11},0).wait(1).to({x:1262.9,startPosition:12},0).wait(1).to({x:1274.9,startPosition:13},0).wait(1).to({x:1286.9,startPosition:14},0).wait(1).to({x:1298.9,y:248.9,startPosition:15},0).wait(1).to({x:1299,y:266.8,startPosition:16},0).wait(1).to({x:1299.1,y:284.7,startPosition:17},0).wait(1).to({x:1299.2,y:302.5,startPosition:18},0).wait(1).to({x:1299.3,y:320.4,startPosition:19},0).wait(1).to({x:1299.4,y:338.2,startPosition:20},0).wait(1).to({x:1299.5,y:356.1,startPosition:21},0).wait(1).to({x:1299.6,y:373.9,startPosition:22},0).wait(1).to({x:1299.7,y:391.8,startPosition:23},0).wait(1).to({x:1299.8,y:409.7,startPosition:24},0).wait(1).to({x:1299.9,y:427.5,startPosition:25},0).wait(1).to({x:1300,y:445.4,startPosition:26},0).wait(1).to({x:1300.1,y:463.2,startPosition:27},0).wait(1).to({x:1300.2,y:481.1,startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1));

	// tire 3
	this.instance_6 = new lib._6724T_007_5psd("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(247.1,106.9,0.02,0.02,0,0,0,2751.8,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:2748.9,regY:2036.9,x:247,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({x:273.7,startPosition:21},0).wait(1).to({x:300.3,startPosition:22},0).wait(1).to({x:326.9,startPosition:23},0).wait(1).to({x:353.5,startPosition:24},0).wait(1).to({x:380.1,startPosition:25},0).wait(1).to({x:406.7,startPosition:26},0).wait(1).to({x:433.4,startPosition:27},0).wait(1).to({x:460,startPosition:28},0).wait(1).to({x:486.6,startPosition:29},0).wait(1).to({x:513.2,startPosition:0},0).wait(1).to({x:539.8,startPosition:1},0).wait(1).to({x:566.4,startPosition:2},0).wait(1).to({x:593.1,startPosition:3},0).wait(1).to({x:619.7,startPosition:4},0).wait(1).to({x:646.3,startPosition:5},0).wait(1).to({x:672.9,startPosition:6},0).wait(1).to({x:699.6,startPosition:7},0).wait(1).to({x:726.2,startPosition:8},0).wait(1).to({x:752.8,startPosition:9},0).wait(1).to({x:779.4,startPosition:10},0).wait(1).to({x:806,startPosition:11},0).wait(1).to({x:832.6,startPosition:12},0).wait(1).to({y:113.2,startPosition:13},0).wait(1).to({y:119.6,startPosition:14},0).wait(1).to({y:125.9,startPosition:15},0).wait(1).to({y:132.2,startPosition:16},0).wait(1).to({y:138.5,startPosition:17},0).wait(1).to({y:144.9,startPosition:18},0).wait(1).to({y:151.2,startPosition:19},0).wait(1).to({y:157.5,startPosition:20},0).wait(1).to({y:163.8,startPosition:21},0).wait(1).to({y:170.2,startPosition:22},0).wait(1).to({y:176.5,startPosition:23},0).wait(1).to({y:182.8,startPosition:24},0).wait(1).to({y:189.2,startPosition:25},0).wait(1).to({y:195.5,startPosition:26},0).wait(1).to({y:201.8,startPosition:27},0).wait(1).to({y:208.1,startPosition:28},0).wait(1).to({y:214.5,startPosition:29},0).wait(1).to({y:220.8,startPosition:0},0).wait(1).to({y:227.1,startPosition:1},0).wait(1).to({y:233.4,startPosition:2},0).wait(1).to({x:841,y:233.5,startPosition:3},0).wait(1).to({x:849.4,startPosition:4},0).wait(1).to({x:857.7,startPosition:5},0).wait(1).to({x:866.1,startPosition:6},0).wait(1).to({x:874.4,y:233.6,startPosition:7},0).wait(1).to({x:882.8,startPosition:8},0).wait(1).to({x:891.1,startPosition:9},0).wait(1).to({x:899.5,startPosition:10},0).wait(1).to({x:907.8,startPosition:11},0).wait(1).to({x:916.2,y:233.7,startPosition:12},0).wait(1).to({x:924.5,startPosition:13},0).wait(1).to({x:932.9,startPosition:14},0).wait(1).to({x:941.2,startPosition:15},0).wait(1).to({x:949.6,startPosition:16},0).wait(1).to({x:958,y:233.8,startPosition:17},0).wait(1).to({x:966.3,startPosition:18},0).wait(1).to({x:974.7,startPosition:19},0).wait(1).to({x:983,startPosition:20},0).wait(1).to({x:991.4,startPosition:21},0).wait(1).to({x:999.7,y:233.9,startPosition:22},0).wait(1).to({x:1008.1,startPosition:23},0).wait(1).to({x:1016.4,startPosition:24},0).wait(1).to({x:1024.8,startPosition:25},0).wait(1).to({x:1033.1,startPosition:26},0).wait(1).to({x:1041.5,y:234,startPosition:27},0).wait(1).to({x:1049.8,startPosition:28},0).wait(1).to({x:1058.2,startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({x:1076.3,startPosition:14},0).wait(1).to({x:1094.4,y:234.1,startPosition:15},0).wait(1).to({x:1112.5,startPosition:16},0).wait(1).to({x:1130.5,y:234.2,startPosition:17},0).wait(1).to({x:1148.6,startPosition:18},0).wait(1).to({x:1166.7,y:234.3,startPosition:19},0).wait(1).to({x:1184.8,startPosition:20},0).wait(1).to({x:1202.9,y:234.4,startPosition:21},0).wait(1).to({x:1221,startPosition:22},0).wait(1).to({x:1239,startPosition:23},0).wait(1).to({x:1257.1,y:234.5,startPosition:24},0).wait(1).to({x:1275.2,startPosition:25},0).wait(1).to({x:1293.3,y:234.6,startPosition:26},0).wait(1).to({x:1311.4,startPosition:27},0).wait(1).to({x:1329.5,y:234.7,startPosition:28},0).wait(1).to({x:1347.6,startPosition:29},0).wait(1).to({x:1365.6,y:234.8,startPosition:0},0).wait(1).to({x:1383.7,startPosition:1},0).wait(1).to({x:1401.8,y:234.9,startPosition:2},0).wait(1).to({x:1419.9,startPosition:3},0).wait(1).to({y:249.4,startPosition:4},0).wait(1).to({y:263.9,startPosition:5},0).wait(1).to({x:1420,y:278.3,startPosition:6},0).wait(1).to({y:292.8,startPosition:7},0).wait(1).to({y:307.3,startPosition:8},0).wait(1).to({y:321.8,startPosition:9},0).wait(1).to({y:336.3,startPosition:10},0).wait(1).to({x:1420.1,y:350.8,startPosition:11},0).wait(1).to({y:365.2,startPosition:12},0).wait(1).to({y:379.7,startPosition:13},0).wait(1).to({y:394.2,startPosition:14},0).wait(1).to({y:408.7,startPosition:15},0).wait(1).to({x:1420.2,y:423.2,startPosition:16},0).wait(1).to({y:437.7,startPosition:17},0).wait(1).to({y:452.1,startPosition:18},0).wait(1).to({y:466.6,startPosition:19},0).wait(1).to({y:481.1,startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

	// tire 4
	this.instance_7 = new lib._6724T_007_5psd("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(233,124.1,0.02,0.02,0,0,0,2754.3,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:2748.9,regY:2036.9,x:232.9,y:124,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({x:251.1,y:123.9,startPosition:0},0).wait(1).to({x:269.2,y:123.8,startPosition:1},0).wait(1).to({x:287.3,y:123.7,startPosition:2},0).wait(1).to({x:305.4,y:123.5,startPosition:3},0).wait(1).to({x:323.5,y:123.4,startPosition:4},0).wait(1).to({x:341.6,y:123.3,startPosition:5},0).wait(1).to({x:359.7,y:123.1,startPosition:6},0).wait(1).to({x:377.9,y:123,startPosition:7},0).wait(1).to({x:396,y:122.9,startPosition:8},0).wait(1).to({x:414.1,y:122.7,startPosition:9},0).wait(1).to({x:432.2,y:122.6,startPosition:10},0).wait(1).to({x:450.3,y:122.5,startPosition:11},0).wait(1).to({x:468.4,y:122.3,startPosition:12},0).wait(1).to({x:486.5,y:122.2,startPosition:13},0).wait(1).to({x:504.6,y:122.1,startPosition:14},0).wait(1).to({x:522.8,y:121.9,startPosition:15},0).wait(1).to({x:540.9,y:121.8,startPosition:16},0).wait(1).to({x:559,y:121.7,startPosition:17},0).wait(1).to({x:577.1,y:121.6,startPosition:18},0).wait(1).to({x:595.2,y:121.4,startPosition:19},0).wait(1).to({x:613.3,y:121.3,startPosition:20},0).wait(1).to({x:631.4,y:121.2,startPosition:21},0).wait(1).to({x:649.5,y:121,startPosition:22},0).wait(1).to({x:667.7,y:120.9,startPosition:23},0).wait(1).to({x:685.8,y:120.8,startPosition:24},0).wait(1).to({x:703.9,y:120.6,startPosition:25},0).wait(1).to({x:722,y:120.5,startPosition:26},0).wait(1).to({x:740.1,y:120.4,startPosition:27},0).wait(1).to({x:758.2,y:120.2,startPosition:28},0).wait(1).to({x:776.3,y:120.1,startPosition:29},0).wait(1).to({x:794.5,y:120,startPosition:0},0).wait(1).to({x:812.6,y:119.8,startPosition:1},0).wait(1).to({x:830.7,y:119.7,startPosition:2},0).wait(1).to({x:848.8,y:119.6,startPosition:3},0).wait(1).to({x:866.9,y:119.4,startPosition:4},0).wait(1).to({x:885,y:119.3,startPosition:5},0).wait(1).to({x:903.1,y:119.2,startPosition:6},0).wait(1).to({x:921.2,y:119.1,startPosition:7},0).wait(1).to({x:939.4,y:118.9,startPosition:8},0).wait(1).to({x:957.5,y:118.8,startPosition:9},0).wait(1).to({x:975.6,y:118.7,startPosition:10},0).wait(1).to({x:993.7,y:118.5,startPosition:11},0).wait(1).to({x:1011.8,y:118.4,startPosition:12},0).wait(1).to({x:1029.9,y:118.3,startPosition:13},0).wait(1).to({x:1048,y:118.1,startPosition:14},0).wait(1).to({x:1066.1,y:118,startPosition:15},0).wait(1).to({x:1065.8,y:123.3,startPosition:16},0).wait(1).to({x:1065.4,y:128.7,startPosition:17},0).wait(1).to({x:1065.1,y:134,startPosition:18},0).wait(1).to({x:1064.7,y:139.4,startPosition:19},0).wait(1).to({x:1064.4,y:144.7,startPosition:20},0).wait(1).to({x:1064,y:150.1,startPosition:21},0).wait(1).to({x:1063.7,y:155.4,startPosition:22},0).wait(1).to({x:1063.3,y:160.8,startPosition:23},0).wait(1).to({x:1063,y:166.1,startPosition:24},0).wait(1).to({x:1062.6,y:171.5,startPosition:25},0).wait(1).to({x:1062.3,y:176.8,startPosition:26},0).wait(1).to({x:1061.9,y:182.2,startPosition:27},0).wait(1).to({x:1061.6,y:187.5,startPosition:28},0).wait(1).to({x:1061.2,y:192.9,startPosition:29},0).wait(1).to({x:1060.9,y:198.2,startPosition:0},0).wait(1).to({x:1060.5,y:203.6,startPosition:1},0).wait(1).to({x:1060.2,y:208.9,startPosition:2},0).wait(1).to({x:1059.8,y:214.3,startPosition:3},0).wait(1).to({x:1059.5,y:219.6,startPosition:4},0).wait(1).to({x:1059.1,y:225,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({x:1082.9,y:225.1,startPosition:21},0).wait(1).to({x:1106.7,y:225.3,startPosition:22},0).wait(1).to({x:1130.5,y:225.4,startPosition:23},0).wait(1).to({x:1154.3,y:225.6,startPosition:24},0).wait(1).to({x:1178.1,y:225.7,startPosition:25},0).wait(1).to({x:1201.9,y:225.8,startPosition:26},0).wait(1).to({x:1225.7,y:226,startPosition:27},0).wait(1).to({x:1249.5,y:226.1,startPosition:28},0).wait(1).to({x:1273.3,y:226.2,startPosition:29},0).wait(1).to({x:1297.1,y:226.4,startPosition:0},0).wait(1).to({x:1320.9,y:226.5,startPosition:1},0).wait(1).to({x:1344.7,y:226.7,startPosition:2},0).wait(1).to({x:1368.5,y:226.8,startPosition:3},0).wait(1).to({x:1392.3,y:226.9,startPosition:4},0).wait(1).to({x:1416.1,y:227.1,startPosition:5},0).wait(1).to({x:1439.9,y:227.2,startPosition:6},0).wait(1).to({x:1463.7,y:227.3,startPosition:7},0).wait(1).to({x:1487.5,y:227.5,startPosition:8},0).wait(1).to({x:1511.3,y:227.6,startPosition:9},0).wait(1).to({x:1535.1,y:227.8,startPosition:10},0).wait(1).to({x:1558.9,y:227.9,startPosition:11},0).wait(1).to({y:241.2,startPosition:12},0).wait(1).to({y:254.5,startPosition:13},0).wait(1).to({y:267.8,startPosition:14},0).wait(1).to({y:281.2,startPosition:15},0).wait(1).to({y:294.5,startPosition:16},0).wait(1).to({y:307.8,startPosition:17},0).wait(1).to({y:321.1,startPosition:18},0).wait(1).to({y:334.4,startPosition:19},0).wait(1).to({y:347.7,startPosition:20},0).wait(1).to({y:361.1,startPosition:21},0).wait(1).to({y:374.4,startPosition:22},0).wait(1).to({y:387.7,startPosition:23},0).wait(1).to({y:401,startPosition:24},0).wait(1).to({y:414.3,startPosition:25},0).wait(1).to({y:427.6,startPosition:26},0).wait(1).to({y:441,startPosition:27},0).wait(1).to({y:454.3,startPosition:28},0).wait(1).to({y:467.6,startPosition:29},0).wait(1).to({y:480.9,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

	// tire 5
	this.instance_8 = new lib._6724T_007_5psd("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(294,556,0.02,0.02,0,0,0,2754.3,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:2748.9,regY:2036.9,x:302.7,y:555.9,startPosition:1},0).wait(1).to({x:311.4,startPosition:2},0).wait(1).to({x:320.1,startPosition:3},0).wait(1).to({x:328.9,startPosition:4},0).wait(1).to({x:337.6,startPosition:5},0).wait(1).to({x:346.3,startPosition:6},0).wait(1).to({x:355,startPosition:7},0).wait(1).to({x:363.8,startPosition:8},0).wait(1).to({x:372.5,startPosition:9},0).wait(1).to({x:381.2,startPosition:10},0).wait(1).to({x:389.9,startPosition:11},0).wait(1).to({x:398.7,startPosition:12},0).wait(1).to({x:407.4,startPosition:13},0).wait(1).to({x:416.1,startPosition:14},0).wait(1).to({x:424.8,startPosition:15},0).wait(1).to({x:425,y:574.3,startPosition:16},0).wait(1).to({x:425.1,y:592.6,startPosition:17},0).wait(1).to({x:425.2,y:611,startPosition:18},0).wait(1).to({x:425.3,y:629.4,startPosition:19},0).wait(1).to({x:425.5,y:647.8,startPosition:20},0).wait(1).to({x:425.6,y:666.1,startPosition:21},0).wait(1).to({x:425.7,y:684.5,startPosition:22},0).wait(1).to({x:425.8,y:702.9,startPosition:23},0).wait(1).to({x:426,y:721.3,startPosition:24},0).wait(1).to({x:426.1,y:739.6,startPosition:25},0).wait(1).to({x:426.2,y:758,startPosition:26},0).wait(1).to({x:426.3,y:776.4,startPosition:27},0).wait(1).to({x:426.5,y:794.8,startPosition:28},0).wait(1).to({x:426.6,y:813.1,startPosition:29},0).wait(1).to({x:426.7,y:831.5,startPosition:0},0).wait(1).to({x:426.8,y:849.9,startPosition:1},0).wait(1).to({x:431.9,startPosition:2},0).wait(1).to({x:436.9,startPosition:3},0).wait(1).to({x:442,startPosition:4},0).wait(1).to({x:447,startPosition:5},0).wait(1).to({x:452,startPosition:6},0).wait(1).to({x:457.1,startPosition:7},0).wait(1).to({x:462.1,startPosition:8},0).wait(1).to({x:467.1,startPosition:9},0).wait(1).to({x:472.2,startPosition:10},0).wait(1).to({x:477.2,startPosition:11},0).wait(1).to({x:482.2,startPosition:12},0).wait(1).to({x:487.3,startPosition:13},0).wait(1).to({x:492.3,startPosition:14},0).wait(1).to({x:497.3,startPosition:15},0).wait(1).to({x:502.4,startPosition:16},0).wait(1).to({x:507.4,startPosition:17},0).wait(1).to({x:512.5,startPosition:18},0).wait(1).to({x:517.5,startPosition:19},0).wait(1).to({x:522.5,startPosition:20},0).wait(1).to({x:527.6,startPosition:21},0).wait(1).to({x:532.6,startPosition:22},0).wait(1).to({x:537.6,startPosition:23},0).wait(1).to({x:542.7,startPosition:24},0).wait(1).to({x:547.7,startPosition:25},0).wait(1).to({x:552.7,startPosition:26},0).wait(1).to({x:557.8,startPosition:27},0).wait(1).to({x:562.8,startPosition:28},0).wait(1).to({x:567.8,startPosition:29},0).wait(1).to({y:853.4,startPosition:0},0).wait(1).to({y:857,startPosition:1},0).wait(1).to({y:860.5,startPosition:2},0).wait(1).to({y:864.1,startPosition:3},0).wait(1).to({y:867.6,startPosition:4},0).wait(1).to({y:871.2,startPosition:5},0).wait(1).to({y:874.7,startPosition:6},0).wait(1).to({y:878.3,startPosition:7},0).wait(1).to({y:881.8,startPosition:8},0).wait(1).to({y:885.4,startPosition:9},0).wait(1).to({y:888.9,startPosition:10},0).wait(1).to({y:892.4,startPosition:11},0).wait(1).to({y:896,startPosition:12},0).wait(1).to({y:899.5,startPosition:13},0).wait(1).to({y:903.1,startPosition:14},0).wait(1).to({y:906.6,startPosition:15},0).wait(1).to({y:910.2,startPosition:16},0).wait(1).to({y:913.7,startPosition:17},0).wait(1).to({y:917.3,startPosition:18},0).wait(1).to({y:920.8,startPosition:19},0).wait(1).to({y:924.4,startPosition:20},0).wait(1).to({y:927.9,startPosition:21},0).wait(1).to({y:931.4,startPosition:22},0).wait(1).to({y:935,startPosition:23},0).wait(1).to({y:938.5,startPosition:24},0).wait(1).to({y:942.1,startPosition:25},0).wait(1).to({y:945.6,startPosition:26},0).wait(1).to({y:949.2,startPosition:27},0).wait(1).to({y:952.7,startPosition:28},0).wait(1).to({y:956.3,startPosition:29},0).wait(1).to({y:959.8,startPosition:0},0).wait(1).to({y:963.4,startPosition:1},0).wait(1).to({y:966.9,startPosition:2},0).wait(1).to({y:970.4,startPosition:3},0).wait(1).to({y:974,startPosition:4},0).wait(1).to({y:977.5,startPosition:5},0).wait(1).to({y:981.1,startPosition:6},0).wait(1).to({y:984.6,startPosition:7},0).wait(1).to({y:988.2,startPosition:8},0).wait(1).to({y:991.7,startPosition:9},0).wait(1).to({y:995.3,startPosition:10},0).wait(1).to({y:998.8,startPosition:11},0).wait(1).to({y:1002.4,startPosition:12},0).wait(1).to({y:1005.9,startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({y:1005.8,startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({y:1005.7,startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({y:1005.6,startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({y:1005.5,startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({y:1005.4,startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({y:1005.3,startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({y:1005.2,startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({y:1005.1,startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({y:1005,startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({y:1004.9,startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

	// tire 6
	this.instance_9 = new lib._6724T_007_5psd("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(275.7,574.3,0.02,0.02,0,0,0,2754.3,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({startPosition:1},0).wait(1).to({regX:2748.9,regY:2036.9,x:287.9,startPosition:2},0).wait(1).to({x:300.3,y:574.2,startPosition:3},0).wait(1).to({x:312.6,startPosition:4},0).wait(1).to({x:324.9,y:574.1,startPosition:5},0).wait(1).to({x:337.3,startPosition:6},0).wait(1).to({x:349.6,y:574,startPosition:7},0).wait(1).to({x:361.9,startPosition:8},0).wait(1).to({x:374.3,y:573.9,startPosition:9},0).wait(1).to({x:386.6,startPosition:10},0).wait(1).to({x:398.9,y:573.8,startPosition:11},0).wait(1).to({x:411.3,startPosition:12},0).wait(1).to({x:423.6,y:573.7,startPosition:13},0).wait(1).to({x:435.9,startPosition:14},0).wait(1).to({x:448.2,y:573.6,startPosition:15},0).wait(1).to({x:460.6,startPosition:16},0).wait(1).to({x:472.9,y:573.5,startPosition:17},0).wait(1).to({x:485.2,startPosition:18},0).wait(1).to({x:497.6,y:573.4,startPosition:19},0).wait(1).to({x:509.9,startPosition:20},0).wait(1).to({x:522.2,y:573.3,startPosition:21},0).wait(1).to({x:534.6,startPosition:22},0).wait(1).to({x:546.9,y:573.2,startPosition:23},0).wait(1).to({x:559.2,startPosition:24},0).wait(1).to({x:571.6,y:573.1,startPosition:25},0).wait(1).to({x:583.9,startPosition:26},0).wait(1).to({x:596.2,y:573,startPosition:27},0).wait(1).to({x:608.6,startPosition:28},0).wait(1).to({x:620.9,y:572.9,startPosition:29},0).wait(1).to({x:621.5,y:579.7,startPosition:0},0).wait(1).to({x:622.1,y:586.4,startPosition:1},0).wait(1).to({x:622.7,y:593.1,startPosition:2},0).wait(1).to({x:623.3,y:599.8,startPosition:3},0).wait(1).to({x:623.9,y:606.5,startPosition:4},0).wait(1).to({x:624.4,y:613.2,startPosition:5},0).wait(1).to({x:625,y:619.9,startPosition:6},0).wait(1).to({x:625.6,y:626.6,startPosition:7},0).wait(1).to({x:626.2,y:633.3,startPosition:8},0).wait(1).to({x:626.8,y:640,startPosition:9},0).wait(1).to({x:627.4,y:646.7,startPosition:10},0).wait(1).to({x:628,y:653.4,startPosition:11},0).wait(1).to({x:628.6,y:660.1,startPosition:12},0).wait(1).to({x:629.2,y:666.8,startPosition:13},0).wait(1).to({x:629.8,y:673.5,startPosition:14},0).wait(1).to({x:630.4,y:680.2,startPosition:15},0).wait(1).to({x:630.9,y:686.9,startPosition:16},0).wait(1).to({x:631.5,y:693.6,startPosition:17},0).wait(1).to({x:632.1,y:700.3,startPosition:18},0).wait(1).to({x:632.7,y:707,startPosition:19},0).wait(1).to({x:633.3,y:713.7,startPosition:20},0).wait(1).to({x:633.9,y:720.4,startPosition:21},0).wait(1).to({x:634.5,y:727.2,startPosition:22},0).wait(1).to({x:635.1,y:733.9,startPosition:23},0).wait(1).to({x:635.7,y:740.6,startPosition:24},0).wait(1).to({x:636.3,y:747.3,startPosition:25},0).wait(1).to({x:636.9,y:754,startPosition:26},0).wait(1).to({x:637.4,y:760.7,startPosition:27},0).wait(1).to({x:638,y:767.4,startPosition:28},0).wait(1).to({x:638.6,y:774.1,startPosition:29},0).wait(1).to({x:639.2,y:780.8,startPosition:0},0).wait(1).to({x:639.8,y:787.5,startPosition:1},0).wait(1).to({x:640.4,y:794.2,startPosition:2},0).wait(1).to({x:641,y:800.9,startPosition:3},0).wait(1).to({x:641.6,y:807.6,startPosition:4},0).wait(1).to({x:642.2,y:814.3,startPosition:5},0).wait(1).to({x:642.8,y:821,startPosition:6},0).wait(1).to({x:643.4,y:827.7,startPosition:7},0).wait(1).to({x:643.9,y:834.4,startPosition:8},0).wait(1).to({x:644.5,y:841.1,startPosition:9},0).wait(1).to({x:645.1,y:847.8,startPosition:10},0).wait(1).to({x:645.7,y:854.5,startPosition:11},0).wait(1).to({x:646.3,y:861.2,startPosition:12},0).wait(1).to({x:646.9,y:867.9,startPosition:13},0).wait(1).to({x:650.7,startPosition:14},0).wait(1).to({x:654.5,startPosition:15},0).wait(1).to({x:658.3,startPosition:16},0).wait(1).to({x:662,y:867.8,startPosition:17},0).wait(1).to({x:665.8,startPosition:18},0).wait(1).to({x:669.6,startPosition:19},0).wait(1).to({x:673.4,startPosition:20},0).wait(1).to({x:677.2,y:867.7,startPosition:21},0).wait(1).to({x:681,startPosition:22},0).wait(1).to({x:684.7,startPosition:23},0).wait(1).to({x:688.5,startPosition:24},0).wait(1).to({x:692.3,y:867.6,startPosition:25},0).wait(1).to({x:696.1,startPosition:26},0).wait(1).to({x:699.9,startPosition:27},0).wait(1).to({x:703.7,y:867.5,startPosition:28},0).wait(1).to({x:707.4,startPosition:29},0).wait(1).to({x:711.2,startPosition:0},0).wait(1).to({x:715,startPosition:1},0).wait(1).to({x:718.8,y:867.4,startPosition:2},0).wait(1).to({x:722.6,startPosition:3},0).wait(1).to({x:726.4,startPosition:4},0).wait(1).to({x:730.1,startPosition:5},0).wait(1).to({x:733.9,y:867.3,startPosition:6},0).wait(1).to({x:737.7,startPosition:7},0).wait(1).to({x:741.5,startPosition:8},0).wait(1).to({x:745.3,y:867.2,startPosition:9},0).wait(1).to({x:749.1,startPosition:10},0).wait(1).to({x:752.8,startPosition:11},0).wait(1).to({x:756.6,startPosition:12},0).wait(1).to({x:760.4,y:867.1,startPosition:13},0).wait(1).to({x:764.2,startPosition:14},0).wait(1).to({x:768,startPosition:15},0).wait(1).to({x:771.8,startPosition:16},0).wait(1).to({x:775.5,y:867,startPosition:17},0).wait(1).to({x:779.3,startPosition:18},0).wait(1).to({x:783.1,startPosition:19},0).wait(1).to({x:786.9,y:866.9,startPosition:20},0).wait(1).to({x:787,y:873.3,startPosition:21},0).wait(1).to({x:787.1,y:879.6,startPosition:22},0).wait(1).to({x:787.2,y:885.9,startPosition:23},0).wait(1).to({x:787.3,y:892.2,startPosition:24},0).wait(1).to({x:787.4,y:898.5,startPosition:25},0).wait(1).to({y:904.9,startPosition:26},0).wait(1).to({x:787.5,y:911.2,startPosition:27},0).wait(1).to({x:787.6,y:917.5,startPosition:28},0).wait(1).to({x:787.7,y:923.8,startPosition:29},0).wait(1).to({x:787.8,y:930.1,startPosition:0},0).wait(1).to({x:787.9,y:936.4,startPosition:1},0).wait(1).to({x:788,y:942.8,startPosition:2},0).wait(1).to({x:788.1,y:949.1,startPosition:3},0).wait(1).to({x:788.2,y:955.4,startPosition:4},0).wait(1).to({x:788.3,y:961.7,startPosition:5},0).wait(1).to({x:788.4,y:968,startPosition:6},0).wait(1).to({y:974.4,startPosition:7},0).wait(1).to({x:788.5,y:980.7,startPosition:8},0).wait(1).to({x:788.6,y:987,startPosition:9},0).wait(1).to({x:788.7,y:993.3,startPosition:10},0).wait(1).to({x:788.8,y:999.6,startPosition:11},0).wait(1).to({x:788.9,y:1005.9,startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({y:1005.8,startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({y:1005.7,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({y:1005.6,startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({y:1005.5,startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({y:1005.4,startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({y:1005.3,startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({y:1005.2,startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({y:1005.1,startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({y:1005,startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({y:1004.9,startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

	// tire 7
	this.instance_10 = new lib._6724T_007_5psd("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(257.3,592.7,0.02,0.02,0,0,0,2754.3,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(103).to({startPosition:12},0).wait(1).to({regX:2748.9,regY:2036.9,x:267,y:592.8,startPosition:13},0).wait(1).to({x:276.7,y:592.9,startPosition:14},0).wait(1).to({x:286.4,y:593,startPosition:15},0).wait(1).to({x:296.1,y:593.1,startPosition:16},0).wait(1).to({x:305.8,y:593.2,startPosition:17},0).wait(1).to({x:315.5,y:593.3,startPosition:18},0).wait(1).to({x:325.2,y:593.4,startPosition:19},0).wait(1).to({x:334.9,y:593.5,startPosition:20},0).wait(1).to({x:344.6,y:593.6,startPosition:21},0).wait(1).to({x:354.3,y:593.7,startPosition:22},0).wait(1).to({x:364,y:593.8,startPosition:23},0).wait(1).to({x:373.7,y:593.9,startPosition:24},0).wait(1).to({x:383.4,y:594,startPosition:25},0).wait(1).to({x:393.1,y:594.1,startPosition:26},0).wait(1).to({x:402.8,y:594.2,startPosition:27},0).wait(1).to({x:412.5,y:594.3,startPosition:28},0).wait(1).to({x:422.3,y:594.5,startPosition:29},0).wait(1).to({x:432,y:594.6,startPosition:0},0).wait(1).to({x:441.7,y:594.7,startPosition:1},0).wait(1).to({x:451.4,y:594.8,startPosition:2},0).wait(1).to({x:461.1,y:594.9,startPosition:3},0).wait(1).to({x:470.8,y:595,startPosition:4},0).wait(1).to({x:480.5,y:595.1,startPosition:5},0).wait(1).to({x:490.2,y:595.2,startPosition:6},0).wait(1).to({x:499.9,y:595.3,startPosition:7},0).wait(1).to({x:509.6,y:595.4,startPosition:8},0).wait(1).to({x:519.3,y:595.5,startPosition:9},0).wait(1).to({x:529,y:595.6,startPosition:10},0).wait(1).to({x:538.7,y:595.7,startPosition:11},0).wait(1).to({x:548.4,y:595.8,startPosition:12},0).wait(1).to({x:558.1,y:595.9,startPosition:13},0).wait(1).to({x:567.8,y:596,startPosition:14},0).wait(1).to({x:577.5,y:596.1,startPosition:15},0).wait(1).to({x:587.3,y:596.3,startPosition:16},0).wait(1).to({x:597,y:596.4,startPosition:17},0).wait(1).to({x:606.7,y:596.5,startPosition:18},0).wait(1).to({x:616.4,y:596.6,startPosition:19},0).wait(1).to({x:626.1,y:596.7,startPosition:20},0).wait(1).to({x:635.8,y:596.8,startPosition:21},0).wait(1).to({x:645.5,y:596.9,startPosition:22},0).wait(1).to({x:655.2,y:597,startPosition:23},0).wait(1).to({x:664.9,y:597.1,startPosition:24},0).wait(1).to({x:674.6,y:597.2,startPosition:25},0).wait(1).to({x:684.3,y:597.3,startPosition:26},0).wait(1).to({x:694,y:597.4,startPosition:27},0).wait(1).to({x:703.7,y:597.5,startPosition:28},0).wait(1).to({x:713.4,y:597.6,startPosition:29},0).wait(1).to({x:723.1,y:597.7,startPosition:0},0).wait(1).to({x:732.8,y:597.8,startPosition:1},0).wait(1).to({x:742.5,y:597.9,startPosition:2},0).wait(1).to({x:752.3,y:598.1,startPosition:3},0).wait(1).to({x:762,y:598.2,startPosition:4},0).wait(1).to({x:771.7,y:598.3,startPosition:5},0).wait(1).to({x:781.4,y:598.4,startPosition:6},0).wait(1).to({x:791.1,y:598.5,startPosition:7},0).wait(1).to({x:800.8,y:598.6,startPosition:8},0).wait(1).to({x:810.5,y:598.7,startPosition:9},0).wait(1).to({x:820.2,y:598.8,startPosition:10},0).wait(1).to({x:829.9,y:598.9,startPosition:11},0).wait(1).to({x:831,y:604.6,startPosition:12},0).wait(1).to({x:832,y:610.3,startPosition:13},0).wait(1).to({x:833.1,y:615.9,startPosition:14},0).wait(1).to({x:834.2,y:621.6,startPosition:15},0).wait(1).to({x:835.2,y:627.3,startPosition:16},0).wait(1).to({x:836.3,y:633,startPosition:17},0).wait(1).to({x:837.3,y:638.7,startPosition:18},0).wait(1).to({x:838.4,y:644.3,startPosition:19},0).wait(1).to({x:839.5,y:650,startPosition:20},0).wait(1).to({x:840.5,y:655.7,startPosition:21},0).wait(1).to({x:841.6,y:661.4,startPosition:22},0).wait(1).to({x:842.7,y:667.1,startPosition:23},0).wait(1).to({x:843.7,y:672.8,startPosition:24},0).wait(1).to({x:844.8,y:678.4,startPosition:25},0).wait(1).to({x:845.9,y:684.1,startPosition:26},0).wait(1).to({x:846.9,y:689.8,startPosition:27},0).wait(1).to({x:848,y:695.5,startPosition:28},0).wait(1).to({x:849,y:701.2,startPosition:29},0).wait(1).to({x:850.1,y:706.8,startPosition:0},0).wait(1).to({x:851.2,y:712.5,startPosition:1},0).wait(1).to({x:852.2,y:718.2,startPosition:2},0).wait(1).to({x:853.3,y:723.9,startPosition:3},0).wait(1).to({x:854.4,y:729.6,startPosition:4},0).wait(1).to({x:855.4,y:735.2,startPosition:5},0).wait(1).to({x:856.5,y:740.9,startPosition:6},0).wait(1).to({x:857.6,y:746.6,startPosition:7},0).wait(1).to({x:858.6,y:752.3,startPosition:8},0).wait(1).to({x:859.7,y:758,startPosition:9},0).wait(1).to({x:860.8,y:763.6,startPosition:10},0).wait(1).to({x:861.8,y:769.3,startPosition:11},0).wait(1).to({x:862.9,y:775,startPosition:12},0).wait(1).to({x:863.9,y:780.7,startPosition:13},0).wait(1).to({x:865,y:786.4,startPosition:14},0).wait(1).to({x:866.1,y:792,startPosition:15},0).wait(1).to({x:867.1,y:797.7,startPosition:16},0).wait(1).to({x:868.2,y:803.4,startPosition:17},0).wait(1).to({x:869.3,y:809.1,startPosition:18},0).wait(1).to({x:870.3,y:814.8,startPosition:19},0).wait(1).to({x:871.4,y:820.5,startPosition:20},0).wait(1).to({x:872.5,y:826.1,startPosition:21},0).wait(1).to({x:873.5,y:831.8,startPosition:22},0).wait(1).to({x:874.6,y:837.5,startPosition:23},0).wait(1).to({x:875.6,y:843.2,startPosition:24},0).wait(1).to({x:876.7,y:848.9,startPosition:25},0).wait(1).to({x:877.8,y:854.5,startPosition:26},0).wait(1).to({x:878.8,y:860.2,startPosition:27},0).wait(1).to({x:879.9,y:865.9,startPosition:28},0).wait(1).to({x:882.9,startPosition:29},0).wait(1).to({x:885.8,startPosition:0},0).wait(1).to({x:888.8,y:865.8,startPosition:1},0).wait(1).to({x:891.7,startPosition:2},0).wait(1).to({x:894.7,startPosition:3},0).wait(1).to({x:897.6,startPosition:4},0).wait(1).to({x:900.6,y:865.7,startPosition:5},0).wait(1).to({x:903.6,startPosition:6},0).wait(1).to({x:906.5,startPosition:7},0).wait(1).to({x:909.5,startPosition:8},0).wait(1).to({x:912.4,startPosition:9},0).wait(1).to({x:915.4,y:865.6,startPosition:10},0).wait(1).to({x:918.3,startPosition:11},0).wait(1).to({x:921.3,startPosition:12},0).wait(1).to({x:924.2,startPosition:13},0).wait(1).to({x:927.2,startPosition:14},0).wait(1).to({x:930.2,y:865.5,startPosition:15},0).wait(1).to({x:933.1,startPosition:16},0).wait(1).to({x:936.1,startPosition:17},0).wait(1).to({x:939,startPosition:18},0).wait(1).to({x:942,y:865.4,startPosition:19},0).wait(1).to({x:944.9,startPosition:20},0).wait(1).to({x:947.9,startPosition:21},0).wait(1).to({x:950.9,startPosition:22},0).wait(1).to({x:953.8,startPosition:23},0).wait(1).to({x:956.8,y:865.3,startPosition:24},0).wait(1).to({x:959.7,startPosition:25},0).wait(1).to({x:962.7,startPosition:26},0).wait(1).to({x:965.6,startPosition:27},0).wait(1).to({x:968.6,y:865.2,startPosition:28},0).wait(1).to({x:971.6,startPosition:29},0).wait(1).to({x:974.5,startPosition:0},0).wait(1).to({x:977.5,startPosition:1},0).wait(1).to({x:980.4,startPosition:2},0).wait(1).to({x:983.4,y:865.1,startPosition:3},0).wait(1).to({x:986.3,startPosition:4},0).wait(1).to({x:989.3,startPosition:5},0).wait(1).to({x:992.2,startPosition:6},0).wait(1).to({x:995.2,startPosition:7},0).wait(1).to({x:998.2,y:865,startPosition:8},0).wait(1).to({x:1001.1,startPosition:9},0).wait(1).to({x:1004.1,startPosition:10},0).wait(1).to({x:1007,startPosition:11},0).wait(1).to({x:1010,y:864.9,startPosition:12},0).wait(1).to({x:1012.9,startPosition:13},0).wait(1).to({x:1015.9,startPosition:14},0).wait(1).to({y:871.9,startPosition:15},0).wait(1).to({y:878.9,startPosition:16},0).wait(1).to({y:885.9,startPosition:17},0).wait(1).to({y:892.9,startPosition:18},0).wait(1).to({y:899.9,startPosition:19},0).wait(1).to({y:906.9,startPosition:20},0).wait(1).to({y:913.9,startPosition:21},0).wait(1).to({y:920.9,startPosition:22},0).wait(1).to({y:927.9,startPosition:23},0).wait(1).to({y:934.9,startPosition:24},0).wait(1).to({y:941.9,startPosition:25},0).wait(1).to({y:948.9,startPosition:26},0).wait(1).to({y:955.9,startPosition:27},0).wait(1).to({y:962.9,startPosition:28},0).wait(1).to({y:969.9,startPosition:29},0).wait(1).to({y:976.9,startPosition:0},0).wait(1).to({y:983.9,startPosition:1},0).wait(1).to({y:990.9,startPosition:2},0).wait(1).to({y:997.9,startPosition:3},0).wait(1).to({y:1004.9,startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

	// tire 8
	this.instance_11 = new lib._6724T_007_5psd("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(239,611,0.02,0.02,0,0,0,2754.3,2038.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(209).to({startPosition:29},0).wait(1).to({regX:2748.9,regY:2036.9,x:251.2,startPosition:0},0).wait(1).to({x:263.4,startPosition:1},0).wait(1).to({x:275.7,y:610.9,startPosition:2},0).wait(1).to({x:288,startPosition:3},0).wait(1).to({x:300.3,startPosition:4},0).wait(1).to({x:312.5,startPosition:5},0).wait(1).to({x:324.8,startPosition:6},0).wait(1).to({x:337.1,startPosition:7},0).wait(1).to({x:349.3,y:610.8,startPosition:8},0).wait(1).to({x:361.6,startPosition:9},0).wait(1).to({x:373.9,startPosition:10},0).wait(1).to({x:386.2,startPosition:11},0).wait(1).to({x:398.4,startPosition:12},0).wait(1).to({x:410.7,startPosition:13},0).wait(1).to({x:423,y:610.7,startPosition:14},0).wait(1).to({x:435.3,startPosition:15},0).wait(1).to({x:447.5,startPosition:16},0).wait(1).to({x:459.8,startPosition:17},0).wait(1).to({x:472.1,startPosition:18},0).wait(1).to({x:484.3,startPosition:19},0).wait(1).to({x:496.6,y:610.6,startPosition:20},0).wait(1).to({x:508.9,startPosition:21},0).wait(1).to({x:521.2,startPosition:22},0).wait(1).to({x:533.4,startPosition:23},0).wait(1).to({x:545.7,startPosition:24},0).wait(1).to({x:558,startPosition:25},0).wait(1).to({x:570.2,y:610.5,startPosition:26},0).wait(1).to({x:582.5,startPosition:27},0).wait(1).to({x:594.8,startPosition:28},0).wait(1).to({x:607.1,startPosition:29},0).wait(1).to({x:619.3,startPosition:0},0).wait(1).to({x:631.6,startPosition:1},0).wait(1).to({x:643.9,y:610.4,startPosition:2},0).wait(1).to({x:656.1,startPosition:3},0).wait(1).to({x:668.4,startPosition:4},0).wait(1).to({x:680.7,startPosition:5},0).wait(1).to({x:693,startPosition:6},0).wait(1).to({x:705.2,startPosition:7},0).wait(1).to({x:717.5,y:610.3,startPosition:8},0).wait(1).to({x:729.8,startPosition:9},0).wait(1).to({x:742.1,startPosition:10},0).wait(1).to({x:754.3,startPosition:11},0).wait(1).to({x:766.6,startPosition:12},0).wait(1).to({x:778.9,startPosition:13},0).wait(1).to({x:791.1,startPosition:14},0).wait(1).to({x:803.4,y:610.2,startPosition:15},0).wait(1).to({x:815.7,startPosition:16},0).wait(1).to({x:828,startPosition:17},0).wait(1).to({x:840.2,startPosition:18},0).wait(1).to({x:852.5,startPosition:19},0).wait(1).to({x:864.8,y:610.1,startPosition:20},0).wait(1).to({x:877,startPosition:21},0).wait(1).to({x:889.3,startPosition:22},0).wait(1).to({x:901.6,startPosition:23},0).wait(1).to({x:913.9,startPosition:24},0).wait(1).to({x:926.1,startPosition:25},0).wait(1).to({x:938.4,y:610,startPosition:26},0).wait(1).to({x:950.7,startPosition:27},0).wait(1).to({x:962.9,startPosition:28},0).wait(1).to({x:975.2,startPosition:29},0).wait(1).to({x:987.5,startPosition:0},0).wait(1).to({x:999.8,startPosition:1},0).wait(1).to({x:1012,y:609.9,startPosition:2},0).wait(1).to({x:1024.3,startPosition:3},0).wait(1).to({x:1036.6,startPosition:4},0).wait(1).to({x:1048.8,startPosition:5},0).wait(1).to({x:1050.3,y:617.1,startPosition:6},0).wait(1).to({x:1051.7,y:624.2,startPosition:7},0).wait(1).to({x:1053.1,y:631.4,startPosition:8},0).wait(1).to({x:1054.6,y:638.6,startPosition:9},0).wait(1).to({x:1056,y:645.8,startPosition:10},0).wait(1).to({x:1057.4,y:652.9,startPosition:11},0).wait(1).to({x:1058.8,y:660.1,startPosition:12},0).wait(1).to({x:1060.3,y:667.3,startPosition:13},0).wait(1).to({x:1061.7,y:674.4,startPosition:14},0).wait(1).to({x:1063.1,y:681.6,startPosition:15},0).wait(1).to({x:1064.6,y:688.8,startPosition:16},0).wait(1).to({x:1066,y:696,startPosition:17},0).wait(1).to({x:1067.4,y:703.1,startPosition:18},0).wait(1).to({x:1068.8,y:710.3,startPosition:19},0).wait(1).to({x:1070.3,y:717.5,startPosition:20},0).wait(1).to({x:1071.7,y:724.6,startPosition:21},0).wait(1).to({x:1073.1,y:731.8,startPosition:22},0).wait(1).to({x:1074.6,y:739,startPosition:23},0).wait(1).to({x:1076,y:746.1,startPosition:24},0).wait(1).to({x:1077.4,y:753.3,startPosition:25},0).wait(1).to({x:1078.8,y:760.5,startPosition:26},0).wait(1).to({x:1080.3,y:767.7,startPosition:27},0).wait(1).to({x:1081.7,y:774.8,startPosition:28},0).wait(1).to({x:1083.1,y:782,startPosition:29},0).wait(1).to({x:1084.6,y:789.2,startPosition:0},0).wait(1).to({x:1086,y:796.4,startPosition:1},0).wait(1).to({x:1087.4,y:803.5,startPosition:2},0).wait(1).to({x:1088.8,y:810.7,startPosition:3},0).wait(1).to({x:1090.3,y:817.9,startPosition:4},0).wait(1).to({x:1091.7,y:825,startPosition:5},0).wait(1).to({x:1093.1,y:832.2,startPosition:6},0).wait(1).to({x:1094.6,y:839.4,startPosition:7},0).wait(1).to({x:1096,y:846.6,startPosition:8},0).wait(1).to({x:1097.4,y:853.7,startPosition:9},0).wait(1).to({x:1098.8,y:860.9,startPosition:10},0).wait(1).to({x:1106.5,y:861.3,startPosition:11},0).wait(1).to({x:1114.1,y:861.7,startPosition:12},0).wait(1).to({x:1121.8,y:862.1,startPosition:13},0).wait(1).to({x:1129.4,y:862.5,startPosition:14},0).wait(1).to({x:1137.1,y:862.9,startPosition:15},0).wait(1).to({x:1144.7,y:863.3,startPosition:16},0).wait(1).to({x:1152.4,y:863.7,startPosition:17},0).wait(1).to({x:1160,y:864.1,startPosition:18},0).wait(1).to({x:1167.7,y:864.5,startPosition:19},0).wait(1).to({x:1175.3,y:864.9,startPosition:20},0).wait(1).to({x:1183,y:865.3,startPosition:21},0).wait(1).to({x:1190.6,y:865.7,startPosition:22},0).wait(1).to({x:1198.3,y:866.1,startPosition:23},0).wait(1).to({x:1205.9,y:866.5,startPosition:24},0).wait(1).to({x:1213.6,y:866.9,startPosition:25},0).wait(1).to({x:1221.2,y:867.3,startPosition:26},0).wait(1).to({x:1228.9,y:867.7,startPosition:27},0).wait(1).to({x:1236.5,y:868.1,startPosition:28},0).wait(1).to({x:1244.2,y:868.5,startPosition:29},0).wait(1).to({x:1251.8,y:868.9,startPosition:0},0).wait(1).to({x:1252.1,y:878.3,startPosition:1},0).wait(1).to({x:1252.3,y:887.6,startPosition:2},0).wait(1).to({x:1252.5,y:897,startPosition:3},0).wait(1).to({x:1252.7,y:906.3,startPosition:4},0).wait(1).to({x:1252.9,y:915.7,startPosition:5},0).wait(1).to({x:1253.1,y:925,startPosition:6},0).wait(1).to({x:1253.3,y:934.4,startPosition:7},0).wait(1).to({x:1253.6,y:943.8,startPosition:8},0).wait(1).to({x:1253.8,y:953.1,startPosition:9},0).wait(1).to({x:1254,y:962.5,startPosition:10},0).wait(1).to({x:1254.2,y:971.8,startPosition:11},0).wait(1).to({x:1254.4,y:981.2,startPosition:12},0).wait(1).to({x:1254.6,y:990.5,startPosition:13},0).wait(1).to({x:1254.8,y:999.9,startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

	// idle bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.725)").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape.setTransform(329.7,915.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.725)").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_1.setTransform(322,915.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.725)").s().p("AgmAyIAAhjIAgAAQAMAAALAGQAKAGAHALQAFALAAAOIAAADQAAAOgFALQgHAKgKAHQgLAGgLAAgAgOAfIAIAAQAKAAAFgHQAGgHAAgPIAAgDQAAgPgGgHQgGgHgJAAIgIAAg");
	this.shape_2.setTransform(313.5,915.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.725)").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_3.setTransform(306.7,915.1);

	this.instance_12 = new lib.RFE_OEMMaster();
	this.instance_12.parent = this;
	this.instance_12.setTransform(41,801,0.15,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.729)").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_4.setTransform(1303.1,176.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.729)").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_5.setTransform(1295.4,176.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.729)").s().p("AgmAyIAAhjIAgAAQAMAAALAGQALAGAFALQAGALAAAOIAAADQAAAOgGALQgFAKgLAHQgLAGgLAAgAgOAfIAJAAQAIAAAGgHQAGgHAAgPIAAgDQAAgPgGgHQgGgHgJAAIgIAAg");
	this.shape_6.setTransform(1286.9,176.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.729)").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_7.setTransform(1280.1,176.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.729)").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_8.setTransform(622.3,397.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.729)").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_9.setTransform(614.6,397.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.729)").s().p("AgmAyIAAhjIAgAAQAMAAALAGQALAGAFALQAGALAAAOIAAADQAAAOgGALQgFAKgLAHQgLAGgLAAgAgOAfIAJAAQAJAAAFgHQAGgHAAgPIAAgDQAAgPgGgHQgFgHgKAAIgIAAg");
	this.shape_10.setTransform(606.2,397.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.729)").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_11.setTransform(599.4,397.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("EhBFBCeIAAgUIAYAAIAAAUgEhlfA2MIAAlUMAjnAAAIAAFUgEAXOA2KIAAlUIOEAAIAAFUgEgLTA2KIAAlUIODAAIAAFUgEgtxA2KIAAlUIOEAAIAAFUgEhllgasIAAlUMCBrAAAIAAFUgEAhUg9JIAAlUMBESAAAIAAFUg");
	this.shape_12.setTransform(860.7,585.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(635));

	// triangle
	this.instance_13 = new lib.TCR1S();
	this.instance_13.parent = this;
	this.instance_13.setTransform(32,543,0.14,0.14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("Ah0iGIDpCGIjpCHg");
	this.shape_13.setTransform(1518,177);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("Ah0iGIDpCHIjpCGg");
	this.shape_14.setTransform(1050.7,397.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00AEEF").s().p("Ah0iGIDpCGIjpCHg");
	this.shape_15.setTransform(1517.5,397.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00AEEF").s().p("Ah0iGIDpCGIjpCHg");
	this.shape_16.setTransform(1398.7,398.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AEEF").s().p("Ah0iGIDpCGIjpCHg");
	this.shape_17.setTransform(1280.7,398.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AEEF").s().p("Ah0iGIDpCHIjpCGg");
	this.shape_18.setTransform(1158.7,398);

	this.instance_14 = new lib.SWT01_straighton_grey();
	this.instance_14.parent = this;
	this.instance_14.setTransform(10,230,0.39,0.39);

	this.instance_15 = new lib.TCX51EL_grey();
	this.instance_15.parent = this;
	this.instance_15.setTransform(32,0,0.336,0.336);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AEEF").s().p("EA/nA3iIDqCHIjqCHgEAg9AQqIDrCIIjrCGgAgbQqIDqCIIjqCGgEghzAQqIDrCIIjrCGgEhDGAQqIDqCIIjqCGgEAgzg7uIDrCHIjrCHgEgAlg7uIDqCHIjqCHgEgh8g7uIDqCHIjqCHgEhDQg7uIDqCHIjqCHg");
	this.shape_19.setTransform(822.5,546.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.instance_15},{t:this.instance_14},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_13}]}).wait(635));

	// 10:15
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgQAvQgIgEgFgHQgFgHAAgJIAXAAQABAGADAEQADACAEAAQAMABAAgSQAAgPgNAAQgJAAgDAEIgTgDIAGgzIA5AAIAAASIgmAAIgCAUIAGgCIAHgBQAPgBAIAKQAIAHAAAQQAAAKgEAIQgFAHgHAEQgIAFgLgBQgIAAgIgDg");
	this.shape_20.setTransform(1194.1,533);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_21.setTransform(1185.4,532.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgIAkQgEgEAAgFQAAgFAEgDQADgEAFABQAGgBADAEQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDgAgIgSQgEgEAAgEQAAgGAEgDQADgDAFAAQAGAAADADQAEADAAAGQAAAEgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_22.setTransform(1179.9,534.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgZAoQgIgLgBgUIAAgRQABgUAIgLQAJgLAQAAQAQAAAJALQAKALgBAUIAAARQABAUgKALQgJALgQAAQgQAAgJgLgAgIgbQgCAEAAAKIAAAZQgBALADAFQADAFAFAAQAGAAADgFQACgFAAgKIAAgYQAAgLgCgFQgDgFgGAAQgFAAgDAFg");
	this.shape_23.setTransform(1173.8,532.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_24.setTransform(1165,532.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},310).wait(325));

	// 11:30
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgZAoQgIgLgBgUIAAgRQABgUAIgLQAKgLAPAAQAQAAAJALQAKALgBAUIAAARQABAUgKALQgJALgQAAQgPAAgKgLgAgIgbQgDAEAAAKIAAAZQABALACAFQADAFAFAAQAGAAADgFQADgFAAgKIAAgYQAAgLgDgFQgDgFgGAAQgFAAgDAFg");
	this.shape_25.setTransform(1314.3,532.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgSAvQgIgDgFgHQgEgHAAgIIAXAAQAAAFAEADQAEADAEAAQAGAAAEgDQADgDAAgGQAAgHgEgDQgDgDgGAAIgLAAIAAgRIALAAQAMAAAAgMQAAgFgDgDQgDgDgGAAQgEAAgDACQgDADAAAEIgXAAQAAgIAEgGQAEgGAIgEQAIgDAJAAQAQAAAJAHQAKAIAAANQAAAHgEAFQgEAGgIAEQAIABAFAGQAEAGAAAJQAAANgKAIQgKAIgQAAQgKAAgIgEg");
	this.shape_26.setTransform(1306,532.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgIAkQgEgEAAgFQAAgFAEgDQADgEAFABQAGgBADAEQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDgAgIgSQgEgEAAgEQAAgGAEgDQADgDAFAAQAGAAADADQAEADAAAGQAAAEgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_27.setTransform(1300,534.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_28.setTransform(1293.2,532.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_29.setTransform(1285.1,532.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},344).wait(291));

	// 12:45
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgQAvQgIgEgFgHQgFgHAAgJIAXAAQABAGADAEQADACAEAAQAMABAAgSQAAgPgNAAQgJAAgDAEIgTgDIAGgzIA5AAIAAASIgmAAIgCAUIAGgCIAHgBQAPgBAIAKQAIAHAAAQQAAAKgEAIQgFAHgHAEQgIAFgLgBQgIAAgIgDg");
	this.shape_30.setTransform(1430.2,533);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAEAyIAAgVIgmAAIgCgOIAohAIAWAAIAAA8IAKAAIAAASIgKAAIAAAVgAACgQIgQAbIASAAIAAgeg");
	this.shape_31.setTransform(1422.2,532.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgIAkQgEgEAAgFQAAgFAEgDQADgEAFABQAGgBADAEQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDgAgIgSQgEgEAAgEQAAgGAEgDQADgDAFAAQAGAAADADQAEADAAAGQAAAEgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_32.setTransform(1416,534.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AghAzIAAgQIAgghQALgNAAgHQAAgHgDgDQgCgDgFgBQgFAAgDAFQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgFAJAAQAQAAAJAIQAIAHAAAPQAAAFgCAGIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_33.setTransform(1409.8,532.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_34.setTransform(1401.1,532.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},380).wait(255));

	// 14:20
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8CC640").s().p("AgLAyIAAgkIggg/IAZAAIASArIASgrIAaAAIggA/IAAAkg");
	this.shape_35.setTransform(1575.8,549.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8CC640").s().p("AgmAyIAAhjIAgAAQAMAAALAGQALAGAFALQAGALAAAOIAAADQAAAOgGALQgFAKgLAHQgLAGgLAAgAgOAfIAJAAQAJAAAFgHQAGgHAAgPIAAgDQAAgPgGgHQgFgHgKAAIgIAAg");
	this.shape_36.setTransform(1567,549.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8CC640").s().p("AAWAyIgGgTIggAAIgFATIgaAAIAlhjIAVAAIAlBjgAgKANIAVAAIgLgig");
	this.shape_37.setTransform(1557.6,549.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8CC640").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_38.setTransform(1549.1,549.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8CC640").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_39.setTransform(1540.6,549.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8CC640").s().p("AgZAoQgJgLAAgUIAAgRQAAgUAJgLQAKgLAPAAQARAAAJALQAIALABAUIAAARQgBAUgIALQgJALgRAAQgPAAgKgLgAgHgbQgDAEAAAKIAAAZQAAALACAFQADAFAFAAQAGAAADgFQADgFgBgKIAAgYQABgLgDgFQgDgFgGAAQgFAAgCAFg");
	this.shape_40.setTransform(1572.3,532.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8CC640").s().p("AghAzIAAgQIAgghQALgNAAgHQAAgHgDgDQgCgDgFgBQgFAAgDAFQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgFAJAAQAQAAAJAIQAIAHAAAPQAAAFgCAGIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_41.setTransform(1564.1,532.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8CC640").s().p("AgIAkQgEgEAAgFQAAgFAEgDQADgEAFABQAGgBADAEQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDgAgIgSQgEgEAAgEQAAgGAEgDQADgDAFAAQAGAAADADQAEADAAAGQAAAEgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_42.setTransform(1558,534.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8CC640").s().p("AAEAyIAAgVIgmAAIgCgOIAohAIAWAAIAAA8IAKAAIAAASIgKAAIAAAVgAACgQIgPAbIARAAIAAgeg");
	this.shape_43.setTransform(1551.9,532.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8CC640").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_44.setTransform(1543.1,532.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},420).wait(215));

	// per tire
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAEAyIAAgVIgmAAIgCgOIAohAIAWAAIAAA8IALAAIAAASIgLAAIAAAVgAACgQIgPAbIARAAIAAgeg");
	this.shape_45.setTransform(1161,914.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_46.setTransform(1149.9,914.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_47.setTransform(1142.2,914.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_48.setTransform(1134.3,914.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgiAAIAAAqIgZAAIAAhjIAZAAIAAAoIAiAAIAAgoIAXAAIAABjg");
	this.shape_49.setTransform(1125.2,914.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_50.setTransform(1114.2,914.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAvQgIgDgFgHQgEgHAAgIIAXAAQAAAFAEADQAEADAEAAQAGAAAEgDQADgDAAgGQAAgHgEgDQgDgDgGAAIgLAAIAAgRIALAAQAMAAAAgMQAAgFgDgDQgDgDgGAAQgEAAgDACQgDADAAAEIgXAAQAAgIAEgGQAEgGAIgEQAIgDAJAAQAQAAAJAHQAKAIAAANQAAAHgEAFQgEAGgIAEQAIABAFAGQAEAGAAAJQAAANgKAIQgKAIgQAAQgKAAgIgEg");
	this.shape_51.setTransform(939.9,914.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_52.setTransform(928.9,914.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_53.setTransform(921.2,914.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_54.setTransform(913.3,914.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgjAAIAAAqIgXAAIAAhjIAXAAIAAAoIAjAAIAAgoIAYAAIAABjg");
	this.shape_55.setTransform(904.2,914.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_56.setTransform(893.2,914.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AghAyIAAgPIAgghQALgMAAgJQAAgGgDgEQgCgCgFAAQgFAAgDAEQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgEAJAAQAQAAAJAHQAIAIAAANQAAAGgCAGIgHALIgPAQIgLAOIAmAAIAAASg");
	this.shape_57.setTransform(719.3,914.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_58.setTransform(708.3,914.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_59.setTransform(700.6,914.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_60.setTransform(692.7,914.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgjAAIAAAqIgYAAIAAhjIAYAAIAAAoIAjAAIAAgoIAYAAIAABjg");
	this.shape_61.setTransform(683.6,914.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_62.setTransform(672.6,914.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_63.setTransform(500.8,914.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_64.setTransform(490.3,914.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_65.setTransform(482.6,914.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_66.setTransform(474.7,914.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgiAAIAAAqIgZAAIAAhjIAZAAIAAAoIAiAAIAAgoIAXAAIAABjg");
	this.shape_67.setTransform(465.6,914.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_68.setTransform(454.6,914.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_69.setTransform(529.5,957.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_70.setTransform(521,957.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_71.setTransform(514.1,957.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgLAyIAAhQIgdAAIAAgTIBRAAIAAATIgdAAIAABQg");
	this.shape_72.setTransform(507.5,957.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_73.setTransform(495.2,957.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_74.setTransform(486.8,957.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgmAyIAAhjIAmAAQAMAAAJAEQAIAFAFAHQAFAIAAAKQAAAPgKAHQgLAJgSAAIgOAAIAAAigAgOgCIAOAAQAHAAAEgDQAEgEAAgGQAAgHgEgEQgEgEgGAAIgPAAg");
	this.shape_75.setTransform(478.2,957.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgQAuQgIgDgFgHQgFgHAAgJIAXAAQABAGADADQADADAEABQAMAAAAgRQAAgQgNAAQgJAAgDAEIgTgEIAGgyIA5AAIAAASIgmAAIgCAUIAGgDIAHgBQAPAAAIAJQAIAIAAAQQAAAJgEAJQgFAHgHAEQgIAFgLAAQgIgBgIgEg");
	this.shape_76.setTransform(465.9,958);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_77.setTransform(457.2,957.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgIAjQgEgDAAgFQAAgFAEgDQADgEAFABQAGgBADAEQAEADAAAFQAAAFgEADQgDAEgGAAQgFAAgDgEgAgIgSQgEgEAAgFQAAgFAEgDQADgDAFAAQAGAAADADQAEADAAAFQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_78.setTransform(451.7,959.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_79.setTransform(444.9,957.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AASAyIgig9IAAA9IgZAAIAAhjIAZAAIAiA9IAAg9IAXAAIAABjg");
	this.shape_80.setTransform(315.6,750.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgVAtQgKgGgGgKQgFgLgBgOIAAgFQAAgPAGgLQAFgLAKgGQAKgGAMAAQANAAAKAGQAJAGAGALQAFALABAOIAAAEQAAAPgGALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgSgEIAAAGQAAAPAFAIQAFAHAIAAQAJAAAFgHQAFgIAAgPIAAgDQAAgPgFgIQgFgHgJAAQgRAAgBAbg");
	this.shape_81.setTransform(305.8,750.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_82.setTransform(298.9,750.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgLAyIAAhQIgdAAIAAgTIBSAAIAAATIgeAAIAABQg");
	this.shape_83.setTransform(292.3,750.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAWAyIgGgTIggAAIgFATIgaAAIAlhjIAVAAIAlBjgAgKANIAVAAIgLgig");
	this.shape_84.setTransform(283.1,750.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_85.setTransform(274,750.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_86.setTransform(265.5,750.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgmAyIAAhjIAmAAQAMAAAJAEQAIAFAFAHQAFAIAAAKQAAAPgKAHQgLAJgSAAIgOAAIAAAigAgOgCIAOAAQAHAAAEgDQAEgEAAgGQAAgHgEgEQgEgEgGAAIgPAAg");
	this.shape_87.setTransform(256.9,750.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgVAtQgKgGgGgKQgFgLgBgOIAAgFQAAgPAGgLQAFgLAKgGQAKgGAMAAQANAAAKAGQAJAGAGALQAFALABAOIAAAEQAAAPgGALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgSgEIAAAGQAAAPAFAIQAFAHAIAAQAJAAAFgHQAFgIAAgPIAAgDQAAgPgFgIQgFgHgJAAQgRAAgBAbg");
	this.shape_88.setTransform(247.4,750.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgmAyIAAhjIAgAAQAMAAALAGQALAGAFALQAGALAAAOIAAADQAAAOgGALQgFAKgLAHQgLAGgLAAgAgOAfIAJAAQAJAAAFgHQAGgHAAgPIAAgDQAAgPgGgHQgFgHgKAAIgIAAg");
	this.shape_89.setTransform(328.3,735.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_90.setTransform(319.9,735.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgmAyIAAhjIAgAAQANAAAKAGQAKAGAHALQAFALAAAOIAAADQAAAOgFALQgHAKgKAHQgKAGgMAAgAgOAfIAIAAQAKAAAFgHQAGgHAAgPIAAgDQAAgPgGgHQgGgHgJAAIgIAAg");
	this.shape_91.setTransform(311.4,735.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AASAyIgjg9IAAA9IgXAAIAAhjIAXAAIAiA9IAAg9IAZAAIAABjg");
	this.shape_92.setTransform(301.8,735.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_93.setTransform(293.2,735.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgLAyIAAhQIgdAAIAAgTIBSAAIAAATIgeAAIAABQg");
	this.shape_94.setTransform(284.6,735.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgLAyIAAhQIgeAAIAAgTIBSAAIAAATIgdAAIAABQg");
	this.shape_95.setTransform(275.7,735.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAWAyIgGgTIggAAIgFATIgaAAIAlhjIAVAAIAlBjgAgKANIAVAAIgLgig");
	this.shape_96.setTransform(266.5,735.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AASAyIgig9IAAA9IgZAAIAAhjIAZAAIAiA9IAAg9IAXAAIAABjg");
	this.shape_97.setTransform(256.8,735.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgbApQgLgKAAgQIAAhAIAYAAIAABAQAAARAOAAQAIAAAEgEQADgEAAgKIAAg/IAYAAIAAA/QAAALgEAJQgFAIgJAEQgJAEgMAAQgRAAgKgJg");
	this.shape_98.setTransform(247.2,735.8);

	this.instance_16 = new lib.NoHands();
	this.instance_16.parent = this;
	this.instance_16.setTransform(205,728,0.1,0.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_99.setTransform(295,705.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_100.setTransform(286.5,705.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_101.setTransform(279.6,705.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgLAyIAAhQIgeAAIAAgTIBSAAIAAATIgdAAIAABQg");
	this.shape_102.setTransform(273,705.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_103.setTransform(260.7,705.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_104.setTransform(252.3,705.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgmAyIAAhjIAmAAQAMAAAJAEQAIAFAFAHQAFAIAAAKQAAAPgKAHQgLAJgSAAIgOAAIAAAigAgOgCIAOAAQAHAAAEgDQAEgEAAgGQAAgHgEgEQgEgEgGAAIgPAAg");
	this.shape_105.setTransform(243.7,705.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgZAoQgIgLgBgUIAAgRQABgUAIgLQAJgLAQAAQAQAAAKALQAJALgBAUIAAARQABAUgJALQgKALgQAAQgQAAgJgLgAgIgbQgCAEAAAKIAAAZQgBALADAFQADAFAFAAQAGAAADgFQACgFAAgKIAAgYQAAgLgCgFQgDgFgGAAQgFAAgDAFg");
	this.shape_106.setTransform(231.5,705.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AghAzIAAgPIAggiQALgNAAgHQAAgHgDgDQgCgEgFAAQgFAAgDAFQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgFAJAAQAQAAAJAIQAIAHAAAPQAAAGgCAFIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_107.setTransform(223.3,705.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgIAkQgEgEAAgFQAAgFAEgDQADgDAFAAQAGAAADADQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDgAgIgSQgEgEAAgEQAAgGAEgCQADgEAFAAQAGAAADAEQAEACAAAGQAAAEgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_108.setTransform(217.2,706.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AghAzIAAgPIAggiQALgNAAgHQAAgHgDgDQgCgEgFAAQgFAAgDAFQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgFAJAAQAQAAAJAIQAIAHAAAPQAAAGgCAFIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_109.setTransform(211,705.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAEAyIAAgVIgmAAIgCgOIAohAIAWAAIAAA8IALAAIAAASIgLAAIAAAVgAACgQIgPAbIARAAIAAgeg");
	this.shape_110.setTransform(956.3,665.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgXAdQgLgLAAgQIAAgCQAAgLAFgIQAEgJAIgEQAIgGAKAAQAQABAJAJQAJAKAAARIAAAIIgtAAQABAHAEADQAEADAGABQALAAAGgIIALAMQgFAHgHADQgIADgKABQgQgBgKgJgAgKgGIAWAAIAAgCQAAgFgDgDQgDgEgFAAQgJAAgCAOg");
	this.shape_111.setTransform(945,666.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgVAmIAAhJIAVAAIAAAJQAGgLAKAAIAHABIgBAWIgIgBQgLAAgCAHIAAAug");
	this.shape_112.setTransform(938.7,666.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_113.setTransform(933.9,665);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgeAAIAAgTIBTAAIAAATIgeAAIAABQg");
	this.shape_114.setTransform(927.5,665.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgSAvQgIgDgFgHQgEgHAAgIIAXAAQAAAFAEADQAEADAEAAQAGAAAEgDQADgDAAgGQAAgHgEgDQgDgDgGAAIgLAAIAAgRIALAAQAMAAAAgMQAAgFgDgDQgDgDgGAAQgEAAgDACQgDADAAAEIgXAAQAAgIAEgGQAEgGAIgEQAIgDAJAAQAQAAAJAHQAKAIAAANQAAAHgEAFQgEAGgIAEQAIABAFAGQAEAGAAAJQAAANgKAIQgKAIgQAAQgKAAgIgEg");
	this.shape_115.setTransform(742.5,665.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgXAdQgLgLAAgQIAAgCQAAgLAFgIQAEgJAIgEQAIgGAKAAQAQABAJAJQAJAKAAARIAAAIIgtAAQABAHAEADQAEADAGABQALAAAGgIIALAMQgFAHgHADQgIADgKABQgQgBgKgJgAgKgGIAWAAIAAgCQAAgFgDgDQgDgEgFAAQgJAAgCAOg");
	this.shape_116.setTransform(731.4,666.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgVAmIAAhJIAVAAIAAAJQAGgLAKAAIAHABIgBAWIgHgBQgMAAgDAHIAAAug");
	this.shape_117.setTransform(725.1,666.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_118.setTransform(720.3,665);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgeAAIAAgTIBSAAIAAATIgdAAIAABQg");
	this.shape_119.setTransform(713.9,665.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AghAyIAAgPIAgghQALgMAAgJQAAgGgDgEQgCgCgFAAQgFAAgDAEQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgEAJAAQAQAAAJAHQAIAIAAANQAAAGgCAGIgHALIgPAQIgLAOIAmAAIAAASg");
	this.shape_120.setTransform(529,665.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgXAdQgLgLAAgQIAAgCQAAgLAFgIQAEgJAIgEQAIgGAKAAQAQABAJAJQAJAKAAARIAAAIIgtAAQABAHAEADQAEADAGABQALAAAGgIIALAMQgFAHgHADQgIADgKABQgQgBgKgJgAgKgGIAWAAIAAgCQAAgFgDgDQgDgEgFAAQgJAAgCAOg");
	this.shape_121.setTransform(517.8,666.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgWAmIAAhJIAWAAIAAAJQAGgLAKAAIAGABIAAAWIgIgBQgKAAgDAHIAAAug");
	this.shape_122.setTransform(511.5,666.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_123.setTransform(506.7,665);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgdAAIAAgTIBSAAIAAATIgeAAIAABQg");
	this.shape_124.setTransform(500.3,665.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_125.setTransform(314.8,665.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgXAdQgLgLAAgQIAAgCQAAgLAFgIQAEgJAIgEQAIgGAKAAQAQABAJAJQAJAKAAARIAAAIIgtAAQABAHAEADQAEADAGABQALAAAGgIIALAMQgFAHgHADQgIADgKABQgQgBgKgJgAgKgGIAWAAIAAgCQAAgFgDgDQgDgEgFAAQgJAAgCAOg");
	this.shape_126.setTransform(304.1,666.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgWAmIAAhJIAWAAIAAAJQAGgLAKAAIAGABIAAAWIgHgBQgMAAgDAHIAAAug");
	this.shape_127.setTransform(297.9,666.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_128.setTransform(293,665);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgdAAIAAgTIBRAAIAAATIgdAAIAABQg");
	this.shape_129.setTransform(286.7,665.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_130.setTransform(1163.7,440.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_131.setTransform(1155.2,440.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_132.setTransform(1148.3,440.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgLAyIAAhQIgeAAIAAgTIBTAAIAAATIgeAAIAABQg");
	this.shape_133.setTransform(1141.7,440.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_134.setTransform(1129.4,440.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_135.setTransform(1121,440.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgmAyIAAhjIAmAAQAMAAAJAEQAIAFAFAHQAFAIAAAKQAAAPgKAHQgLAJgSAAIgOAAIAAAigAgOgCIAOAAQAHAAAEgDQAEgEAAgGQAAgHgEgEQgEgEgGAAIgPAAg");
	this.shape_136.setTransform(1112.4,440.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgQAvQgIgFgFgGQgFgHAAgIIAXAAQABAFADAEQADACAEAAQAMAAAAgRQAAgPgNAAQgJAAgDAEIgTgDIAGgyIA5AAIAAASIgmAAIgCATIAGgCIAHgBQAPAAAIAJQAIAHAAAQQAAAKgEAHQgFAIgHAEQgIAEgLAAQgIAAgIgDg");
	this.shape_137.setTransform(1100.1,441);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_138.setTransform(1091.4,440.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgIAkQgEgEAAgFQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAFgEAEQgDADgGAAQgFAAgDgDgAgIgSQgEgDAAgFQAAgGAEgCQADgEAFAAQAGAAADAEQAEACAAAGQAAAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_139.setTransform(1085.9,442.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_140.setTransform(1079.1,440.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AADAyIAAgVIglAAIgBgOIAmhAIAYAAIAAA8IAJAAIAAASIgJAAIAAAVgAACgQIgQAbIARAAIAAgeg");
	this.shape_141.setTransform(1494.4,397.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_142.setTransform(1483.3,397.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_143.setTransform(1475.6,397.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_144.setTransform(1467.7,397.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgjAAIAAAqIgYAAIAAhjIAYAAIAAAoIAjAAIAAgoIAYAAIAABjg");
	this.shape_145.setTransform(1458.6,397.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_146.setTransform(1447.6,397.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgSAvQgIgDgFgHQgEgHAAgIIAXAAQAAAFAEADQAEADAEAAQAGAAAEgDQADgDAAgGQAAgHgEgDQgDgDgGAAIgLAAIAAgRIALAAQAMAAAAgMQAAgFgDgDQgDgDgGAAQgEAAgDACQgDADAAAEIgXAAQAAgIAEgGQAEgGAIgEQAIgDAJAAQAQAAAJAHQAKAIAAANQAAAHgEAFQgEAGgIAEQAIABAFAGQAEAGAAAJQAAANgKAIQgKAIgQAAQgKAAgIgEg");
	this.shape_147.setTransform(1375.5,398.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_148.setTransform(1364.5,398.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_149.setTransform(1356.8,398.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_150.setTransform(1348.9,398.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgjAAIAAAqIgXAAIAAhjIAXAAIAAAoIAjAAIAAgoIAYAAIAABjg");
	this.shape_151.setTransform(1339.8,398.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_152.setTransform(1328.8,398.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AghAyIAAgPIAgghQALgMAAgJQAAgGgDgEQgCgCgFAAQgFAAgDAEQgEAFAAAGIgXAAQAAgJAFgIQAEgHAJgFQAIgEAJAAQAQAAAJAHQAIAIAAANQAAAGgCAGIgHALIgPAQIgLAOIAmAAIAAASg");
	this.shape_153.setTransform(1257.5,398.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_154.setTransform(1246.5,398.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_155.setTransform(1238.8,398.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_156.setTransform(1230.9,398.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgjAAIAAAqIgYAAIAAhjIAYAAIAAAoIAjAAIAAgoIAYAAIAABjg");
	this.shape_157.setTransform(1221.8,398.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_158.setTransform(1210.8,398.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_159.setTransform(1135,397.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAYAAIAABQIApAAIAAATg");
	this.shape_160.setTransform(1124.5,397.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_161.setTransform(1116.8,397.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_162.setTransform(1108.9,397.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AASAyIAAgqIgiAAIAAAqIgYAAIAAhjIAYAAIAAAoIAiAAIAAgoIAXAAIAABjg");
	this.shape_163.setTransform(1099.8,397.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AANAyIgNg4IgMA4IgZAAIgVhjIAYAAIALA+IAOg+IATAAIAOA+IALg+IAYAAIgVBjg");
	this.shape_164.setTransform(1088.8,397.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_165.setTransform(295.2,219.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_166.setTransform(286.7,219.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgLAyIAAhjIAXAAIAABjg");
	this.shape_167.setTransform(279.8,219.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgLAyIAAhQIgeAAIAAgTIBTAAIAAATIgeAAIAABQg");
	this.shape_168.setTransform(273.2,219.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AAOAyIgQgjIgNAAIAAAjIgYAAIAAhjIAnAAQARAAAKAIQAKAIAAAOQAAALgFAGQgEAGgJAFIAVAoIAAABgAgPgDIAPAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgDgGAAIgPAAg");
	this.shape_169.setTransform(260.9,219.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AghAyIAAhjIBDAAIAAATIgrAAIAAAVIAkAAIAAARIgkAAIAAAXIArAAIAAATg");
	this.shape_170.setTransform(252.5,219.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgmAyIAAhjIAmAAQAMAAAJAEQAIAFAFAHQAFAIAAAKQAAAPgKAHQgLAJgSAAIgOAAIAAAigAgOgCIAOAAQAHAAAEgDQAEgEAAgGQAAgHgEgEQgEgEgGAAIgPAAg");
	this.shape_171.setTransform(243.9,219.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgYAoQgJgLAAgUIAAgRQAAgUAJgLQAIgLAQAAQARAAAIALQAKALgBAUIAAARQABAUgKALQgIALgRAAQgQAAgIgLgAgIgbQgDAEAAAKIAAAZQABALACAFQADAFAFAAQAGAAADgFQADgFAAgKIAAgYQAAgLgDgFQgDgFgGAAQgFAAgDAFg");
	this.shape_172.setTransform(231.7,219.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AghAzIAAgQIAgghQALgMAAgJQAAgGgDgEQgCgCgFAAQgFgBgDAFQgEAEAAAHIgXAAQAAgJAFgIQAEgIAJgEQAIgFAJABQAQgBAJAIQAIAIAAAOQAAAFgCAGIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_173.setTransform(223.5,219.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgIAjQgEgDAAgFQAAgFAEgDQADgDAFAAQAGAAADADQAEADAAAFQAAAFgEADQgDAEgGAAQgFAAgDgEgAgIgSQgEgEAAgFQAAgFAEgDQADgDAFAAQAGAAADADQAEADAAAFQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_174.setTransform(217.4,221.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AghAzIAAgQIAgghQALgMAAgJQAAgGgDgEQgCgCgFAAQgFgBgDAFQgEAEAAAHIgXAAQAAgJAFgIQAEgIAJgEQAIgFAJABQAQgBAJAIQAIAIAAAOQAAAFgCAGIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_175.setTransform(211.2,219.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAEAyIAAgVIgmAAIgCgOIAohAIAWAAIAAA8IAKAAIAAASIgKAAIAAAVgAACgQIgPAbIARAAIAAgeg");
	this.shape_176.setTransform(955.3,176.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgXAcQgLgKAAgQIAAgCQAAgKAFgJQAEgJAIgFQAIgEAKAAQAQgBAJAKQAJAKAAASIAAAHIgtAAQABAGAEAEQAEADAGAAQALABAGgIIALANQgFAFgHAEQgIADgKAAQgQAAgKgKgAgKgGIAWAAIAAgCQAAgGgDgDQgDgCgFAAQgJAAgCANg");
	this.shape_177.setTransform(944,177.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgVAmIAAhJIAVAAIAAAJQAGgLAKAAIAHABIgBAWIgIgBQgKAAgEAHIAAAug");
	this.shape_178.setTransform(937.7,177.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_179.setTransform(932.9,176);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgeAAIAAgTIBTAAIAAATIgeAAIAABQg");
	this.shape_180.setTransform(926.5,176.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgSAvQgIgDgFgHQgEgHAAgIIAXAAQAAAFAEADQAEADAEAAQAGAAAEgDQADgDAAgGQAAgHgEgDQgDgDgGAAIgLAAIAAgRIALAAQAMAAAAgMQAAgFgDgDQgDgDgGAAQgEAAgDACQgDADAAAEIgXAAQAAgIAEgGQAEgGAIgEQAIgDAJAAQAQAAAJAHQAKAIAAANQAAAHgEAFQgEAGgIAEQAIABAFAGQAEAGAAAJQAAANgKAIQgKAIgQAAQgKAAgIgEg");
	this.shape_181.setTransform(741.5,176.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgXAcQgLgKAAgQIAAgCQAAgKAFgJQAEgJAIgFQAIgEAKAAQAQgBAJAKQAJAKAAASIAAAHIgtAAQABAGAEAEQAEADAGAAQALABAGgIIALANQgFAFgHAEQgIADgKAAQgQAAgKgKgAgKgGIAWAAIAAgCQAAgGgDgDQgDgCgFAAQgJAAgCANg");
	this.shape_182.setTransform(730.4,177.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgVAmIAAhJIAVAAIAAAJQAGgLAKAAIAHABIgBAWIgHgBQgMAAgDAHIAAAug");
	this.shape_183.setTransform(724.1,177.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_184.setTransform(719.3,176);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgdAAIAAgTIBRAAIAAATIgdAAIAABQg");
	this.shape_185.setTransform(712.9,176.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AghAzIAAgQIAgghQALgMAAgJQAAgGgDgDQgCgDgFAAQgFgBgDAFQgEAEAAAHIgXAAQAAgJAFgIQAEgIAJgEQAIgFAJABQAQgBAJAIQAIAHAAAPQAAAFgCAGIgHAKIgPARIgLAPIAmAAIAAASg");
	this.shape_186.setTransform(528,176.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgXAcQgLgKAAgQIAAgCQAAgKAFgJQAEgJAIgFQAIgEAKAAQAQgBAJAKQAJAKAAASIAAAHIgtAAQABAGAEAEQAEADAGAAQALABAGgIIALANQgFAFgHAEQgIADgKAAQgQAAgKgKgAgKgGIAWAAIAAgCQAAgGgDgDQgDgCgFAAQgJAAgCANg");
	this.shape_187.setTransform(516.8,177.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgWAmIAAhJIAWAAIAAAJQAGgLAKAAIAGABIAAAWIgIgBQgKAAgDAHIAAAug");
	this.shape_188.setTransform(510.5,177.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_189.setTransform(505.7,176);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgdAAIAAgTIBSAAIAAATIgeAAIAABQg");
	this.shape_190.setTransform(499.3,176.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAAAyIAAhJIgWAHIAAgSIArgPIACAAIAABjg");
	this.shape_191.setTransform(313.8,176.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgXAcQgLgKAAgQIAAgCQAAgKAFgJQAEgJAIgFQAIgEAKAAQAQgBAJAKQAJAKAAASIAAAHIgtAAQABAGAEAEQAEADAGAAQALABAGgIIALANQgFAFgHAEQgIADgKAAQgQAAgKgKgAgKgGIAWAAIAAgCQAAgGgDgDQgDgCgFAAQgJAAgCANg");
	this.shape_192.setTransform(303.1,177.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgWAmIAAhJIAWAAIAAAJQAGgLAKAAIAGABIAAAWIgIgBQgKAAgDAHIAAAug");
	this.shape_193.setTransform(296.9,177.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgLA0IAAhJIAXAAIAABJgAgIggQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgDgDg");
	this.shape_194.setTransform(292,176);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgLAyIAAhQIgdAAIAAgTIBRAAIAAATIgdAAIAABQg");
	this.shape_195.setTransform(285.7,176.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_16},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(635));

	// Tires
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00AEEF").s().p("AqJCqIAAlTIUTAAIAAFTg");
	this.shape_196.setTransform(1165,915);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00AEEF").s().p("AqJCqIAAlTIUTAAIAAFTg");
	this.shape_197.setTransform(944,915);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00AEEF").s().p("AqJCqIAAlTIUTAAIAAFTg");
	this.shape_198.setTransform(723.4,915);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00AEEF").s().p("AqJCqIAAlTIUTAAIAAFTg");
	this.shape_199.setTransform(505.4,915);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00AEEF").s().p("Al2CqIAAlTILtAAIAAFTg");
	this.shape_200.setTransform(1470,397.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00AEEF").s().p("Al2CqIAAlTILtAAIAAFTg");
	this.shape_201.setTransform(1351.2,398.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00AEEF").s().p("Al2CqIAAlTILtAAIAAFTg");
	this.shape_202.setTransform(1233.2,398.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00AEEF").s().p("Al2CqIAAlTILtAAIAAFTg");
	this.shape_203.setTransform(1111.2,398);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00AEEF").s().p("EhAxAo6IAAlUIdlAAIAAFUgEAjXAo2IAAlUIdlAAIAAFUgEAB+AozIAAlTIdmAAIAAFTgEgfYAozIAAlTIdkAAIAAFTgEhA7gjeIAAlVIdmAAIAAFVgEAjNgjkIAAlTIdlAAIAAFTgEAB0gjmIAAlUIdmAAIAAFUgEgfigjmIAAlUIdkAAIAAFUg");
	this.shape_204.setTransform(620.8,421.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]}).wait(635));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(810,540,1519.8,1010.8);
// library properties:
lib.properties = {
	id: 'F3A827579EF599409AE107AAB8F7AFC0',
	width: 1600,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/walk_away_atlas_.png", id:"walk_away_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F3A827579EF599409AE107AAB8F7AFC0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;