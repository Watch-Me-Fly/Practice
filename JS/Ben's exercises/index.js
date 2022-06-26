// ---------------------------------------------------- get json file
let jsonArray = './index.json';

// -------------------------------- Use a function for each exercice:

$.getJSON(jsonArray, function (data) {
    /**=============================================================
     * TODO 1- get all the teams with challengeId = "PremierChallenge"
     *==============================================================**/
    function getAllTeamsWithChallengeIdPremier() {
        for (var i = 0; i < data.length; i++) {

            if (data[i].challengeId === "PremierChallenge") {

                challengeId.innerHTML +=
                    `team ${i} named : ${data[i].name} 
                    has the challenge ID of premier challenge <br/>`;
            }

        }
    }
    getAllTeamsWithChallengeIdPremier();

    /**=============================================================
     * TODO 2- get all the teams that are not complete(maximumMembers === userCount)
     *==============================================================**/
    function incompleteTeams() {
        for (var i = 0; i < data.length; i++) {

            if (data[i].maximumMembers > data[i].userCount) {
                notComplete.innerHTML += `team ${i} : ( ${data[i].name} ) is incomplete<br/>`;
            }

        }
    }
    incompleteTeams();

    /**=============================================================
     * TODO 3- return an array with all the teams sorted by alphabetical order(A-- > Z)
     *==============================================================**/
    function aToZarray() {
        var sortedNames = new Array();

        for (let team of data) {
            // FIXME je n'arrive pas à (sort by name )
            // team.name.sort();
            var names = team.name.toLowerCase();
            sortedNames[names]++;
        }

        console.log('sortedNames:', sortedNames);
    }
    aToZarray();

    /**=============================================================
     * TODO 4- return true if at least of the teams have more than 3000 points
     *==============================================================**/
    function minOneTeam3000Points() {
        let pointsBoolean = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i].points >= 3000) {
                pointsBoolean = true;

                threethousand.innerHTML += `${data[i].name} has ${data[i].points} points <br/> ${pointsBoolean}<br/>`;
            }
        }
    }
    minOneTeam3000Points();

    /**=============================================================
     * TODO 5- return true if all the teams have at least 10 points
     *==============================================================**/
    function min10points() {

        for (var i = 0; i < data.length; i++) {

            if (data[i].points > 10) {
                let booleanGroup = true;
                min10.innerHTML = `${booleanGroup}, 
                                all groups have at least 10 points`;
            }
            else {
                booleanGroup = false;
                min10.innerHTML = `${booleanGroup}, 
                                not all groups have min of 10 points`;
            }
        }
    }
    min10points();
    /**=============================================================
     * TODO 6- return all the teams that have more than 3000 points
     *==============================================================**/
    function allteams3000points() {
        for (var i = 0; i < data.length; i++) {

            if (data[i].points > 3000) {

                allteamspoints.innerHTML += `team ${i} has ${data[i].points} points, which is more than the set 3000 points <br/>`;
            }
        }
    }
    allteams3000points();
    /**=============================================================
     * TODO 7- (hard) add a team to the array with the teamId = name 
     *      without space and camel cased(ex Empty Team-- > emptyTeam)
     *==============================================================**/
    addTeam.addEventListener('click', function () {
        let newTeam = data.push(
            {
                "challengeId": "my added team",
                "points": 10000,
                "administratorId": "MPKFJG20",
                "defaultColor": "#00000",
                "teamId": "Team Saja",
                "invitations": [2],
                "maximumMembers": 1,
                "name": "Team Saja",
                "userCount": 1
            }
        );
        teamadded.innerHTML = `number of teams now : ${newTeam} (console.log to check)`;
        console.log(data);
    }
    );

    /**=============================================================
     * TODO 8- (hard) loop through the array to add a "followers" key(number) to each team
     *==============================================================**/

    addFollowers.addEventListener('click', function (e) {
        //FIXME ??
        // #code 
    });

});