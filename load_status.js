var playerState = JSON.parse(localStorage.playerState);

document.getElementById("level").innerHTML = playerState["Level"];
document.getElementById("race").innerHTML = playerState["RaceName"];
document.getElementById("class").innerHTML = playerState["ClassName"];
document.getElementById("health").innerHTML = playerState["Health"];
document.getElementById("max_health").innerHTML = playerState["MaxHealth"];
document.getElementById("attack").innerHTML = playerState["Attack"];
document.getElementById("defense").innerHTML = playerState["Defense"];
document.getElementById("gold").innerHTML = playerState["Gold"];
document.getElementById("count").innerHTML = playerState["QuestCount"];
document.getElementById("target").innerHTML = playerState["QuestTarget"];
document.getElementById("name").innerHTML = playerState["QuestEnemy"];

var expTill = playerState["Level"] * 100 - playerState["Exp"];
document.getElementById("exp").innerHTML = expTill;