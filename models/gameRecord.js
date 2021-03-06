var mongoose = require("mongoose");

//SCHEMA SETUP
var gameRecordSchema = new mongoose.Schema({

	timeGameStarted: Date,
	timeAssassinationStarted: Date,
	timeGameFinished: Date,
	winningTeam: String,
	spyTeam: [String],
	resistanceTeam: [String],

	gameMode: String,

	numberOfPlayers: Number,
	howTheGameWasWon: String,
	whoAssassinShot: String,
	whoAssassinShot2: String,

	roles: [String],
	cards: [String],

	ladyChain: [String],
	ladyHistoryUsernames: [String],

	refChain: [String],
	refHistoryUsernames: [String],

	sireChain: [String],
	sireHistoryUsernames: [String],

	missionHistory: [String],
	voteHistory: Object,
	playerRoles: Object,

	moreThanOneFailMissions: [Boolean]

});
//compile schema into a model
var gameRecord = mongoose.model("gameRecord", gameRecordSchema);

module.exports = gameRecord;