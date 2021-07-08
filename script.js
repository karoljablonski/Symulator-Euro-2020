//git commit naming: developing process divided for 3 blocks: html, css, js.

//rozegranie grup po kolei, kazdy mecz jeden po drugim, zeby zachowac odpowiednie przypisywanie kolenych zespolow do kolejnych drabinek. nastepnie rozegranie grupy pucharowej.
//do tego feature dodania druzyny jako "czarnego konia"


//  ------------- group A
const italy = {
    name: "Italy",
    factor: 6,
    score: 0,
    points: 0,
    group: "A",
};
const wales = {
    name: "Wales",
    factor: 3,
    score: 0,
    points: 0,
    group: "A",
}
const switzerland = {
    name: "Switzerland",
    factor: 3,
    score: 0,
    points: 0,
    group: "A",
}
const turkey = {
    name: "Turkey",
    factor: 2,
    score: 0,
    points: 0,
    group: "A",
};
//  ------------- group B

const belgium = {
    name: "Belgium",
    factor: 6,
    score: 0,
    points: 0,
    group: "B",
};
const denmark = {
    name: "Denmark",
    factor: 4,
    score: 0,
    points: 0,
    group: "B",
}
const finland = {
    name: "Finland",
    factor: 2,
    score: 0,
    points: 0,
    group: "B",
}
const russia = {
    name: "Russia",
    factor: 3,
    score: 0,
    points: 0,
    group: "B",
};

//  ------------- group C

const nederlands = {
    name: "Nederlands",
    factor: 5,
    score: 0,
    points: 0,
    group: "C",
};
const austria = {
    name: "Austria",
    factor: 3,
    score: 0,
    points: 0,
    group: "C",
}
const ukraine = {
    name: "Ukraine",
    factor: 3,
    score: 0,
    points: 0,
    group: "C",
}
const north_macedonia = {
    name: "North Macedonia",
    factor: 2,
    score: 0,
    points: 0,
    group: "C",
};

//  ------------- group D
const england = {
    name: "England",
    factor: 5,
    score: 0,
    points: 0,
    group: "D",
};
const croatia = {
    name: "Croatia",
    factor: 4,
    score: 0,
    points: 0,
    group: "D",
}
const czech_republic = {
    name: "Czech Republic",
    factor: 3,
    score: 0,
    points: 0,
    group: "D",
}
const scotland = {
    name: "Scotland",
    factor: 2,
    score: 0,
    points: 0,
    group: "D",
};
// ------------- groupE
const poland = {
    name: "Poland",
    factor: 3,
    score: 0,
    points: 0,
    group: "E",
};
const spain = {
    name: "Spain",
    factor: 5,
    score: 0,
    points: 0,
    group: "E",
};
const sweden = {
    name: "Sweden",
    factor: 3,
    score: 0,
    points: 0,
    group: "E",
};
const slovakia = {
    name: "Slovakia",
    factor: 2,
    score: 0,
    points: 0,
    group: "E",
};
//  ------------- group F
const france = {
    name: "France",
    factor: 6,
    score: 0,
    points: 0,
    group: "F",
};
const germany = {
    name: "Germany",
    factor: 5,
    score: 0,
    points: 0,
    group: "F",
}
const portugal = {
    name: "Portugal",
    factor: 5,
    score: 0,
    points: 0,
    group: "F",
}
const hungary = {
    name: "Hungary",
    factor: 2,
    score: 0,
    points: 0,
    group: "F",
};
//poszczególne grupy:
const groupA = [italy, switzerland, wales, turkey];
const groupB = [belgium, russia, denmark, finland];
const groupC = [nederlands, austria, north_macedonia, ukraine];
const groupD = [england, scotland, croatia, czech_republic];
const groupE = [poland, spain, sweden, slovakia];
const groupF = [germany, france, hungary, portugal];

//tablica groups tablic poszczegolnych grup:
const groups = [groupA, groupB, groupC, groupD, groupE, groupF];
const groupsNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"];

//zmienne przygotowane do przypisania druzyn awansujacych z 3 miejsc:
let qualifier1;
let qualifier2;
let qualifier3;
let qualifier4;


//funkcja meczu w fazie grupowej:
function match(teamA, teamB){
    console.log(`Pierwsza druzyna to ${teamA.name}, druga druzyna to ${teamB.name}.`);
    const teamAgoals = Math.floor(Math.random()*teamA.factor);
    const teamBgoals = Math.floor(Math.random()*teamB.factor);
    if(teamAgoals > teamBgoals){
        console.log(`Wygrali ${teamA.name}, zdobywając ${teamAgoals} bramek.`);
        teamA.points += 3;
    } else if(teamBgoals > teamAgoals){
        console.log(`Wygrali ${teamB.name}, zdobywając ${teamAgoals} bramek.`);
        teamB.points += 3;
    } else {
        console.log(`Wynik meczu to remis.`);
        teamA.points += 1;
        teamB.points += 1;
    };
    teamA.score += teamAgoals;
    teamB.score += teamBgoals;
    console.log(`Wynik to ${teamA.name} ${teamAgoals} : ${teamBgoals} ${teamB.name}`);
    console.log(`Punkty: ${teamA.name} - ${teamA.points}, ${teamB.name} - ${teamB.points}`);
    console.log('------');
};
//funkcja rozgrywająca mecze w danej grupie; wymaga dodania do sortowania, sortowania po ilosci bramek
function groupSolve(group){
    match(group[0], group[1]);
    match(group[2], group[3]);
    match(group[0], group[2]);
    match(group[1], group[3]);
    match(group[0], group[3]);
    match(group[1], group[2]);
    group.sort((a, b) => a.points > b.points ? -1 : 1 );
    console.log(group);
    console.log("---------------");
};

//funkcja meczu w fazie pucharowej (nie dodaje bramek i punktow dla druzyn, rozgrywa dogrywke/karne w przypadku remisu): 
function finalsMatch(teamA, teamB){
    console.log(`Faza pucharowa. Pierwsza druzyna to ${teamA.name}, druga druzyna to ${teamB.name}`);
    let matchWinner;
    const teamAgoals = Math.floor(Math.random()*teamA.factor);
    const teamBgoals = Math.floor(Math.random()*teamB.factor);
    if(teamAgoals > teamBgoals){
        console.log(`Wygrali ${teamA.name}, zdobywając ${teamAgoals} bramek.`);
        matchWinner = teamA.name;
        
        console.log(`Wynik to ${teamA.name} ${teamAgoals} : ${teamBgoals} ${teamB.name}`);
        console.log(`Dalej przechodzi: ${matchWinner}`);
        console.log('------');
        // break;
    } else if(teamBgoals > teamAgoals){
        console.log(`Wygrali ${teamB.name}, zdobywając ${teamBgoals} bramek.`);
        matchWinner = teamB.name;
        console.log(`Wynik to ${teamA.name} ${teamAgoals} : ${teamBgoals} ${teamB.name}`);
        console.log(`Dalej przechodzi: ${matchWinner}`);
        console.log('------');
        // break;
    } else {

        //  < ------ DOGRYWKA ------ > 

        console.log(`Wynik meczu to remis.`);
        console.log(`Wynik to ${teamA.name} ${teamAgoals} : ${teamBgoals} ${teamB.name}`);
        console.log('------');
        console.log(`Gramy dogrywkę!`);
        const teamAgoalsExtraTime = teamAgoals +  Math.floor(Math.random()*teamA.factor);
        const teamBgoalsExtraTime = teamBgoals + Math.floor(Math.random()*teamB.factor);
        if(teamAgoalsExtraTime > teamBgoalsExtraTime){
            console.log(`Dogrywkę wygrali ${teamA.name}`);
            matchWinner = teamA.name;
            console.log(`Wynik dogrywki to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            console.log(`Dalej przechodzi: ${matchWinner}`);
            console.log('------');
            // break;
        } else if(teamBgoalsExtraTime > teamAgoalsExtraTime){
            console.log(`Dogrywkę wygrali ${teamB.name}`);
            matchWinner = teamB.name;
            console.log(`Wynik dogrywki to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            console.log(`Dalej przechodzi: ${matchWinner}`);
            console.log('------');
            // break;
        } else {

            //  < ------ KARNE ------ > 

            console.log(`Remis w dogrywce! Gramy karne!`);
            console.log(`Wynik dogrywki to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            //karne rozgrywamy po 5 kolejek, do momentu wygranej przynajmniej jednym golem
            //mozna sprobowac zrobic dwie nowe tablice
            const teamApenalties = [];
            const teamBpenalties = [];
            let penaltiesScoreA = 0; let penaltiesScoreB = 0;
            // pushowac po jednym wyniku do kazdej z tablic 
            // i za kazdym razem sprawdzac warunek dot. 5 ciągłych kolejek. 
            for(i = 0; i < 5; i++){
                teamApenalties[i] = Math.round(Math.random());
                teamBpenalties[i] = Math.round(Math.random());
                penaltiesScoreA += teamApenalties[i];
                penaltiesScoreB += teamBpenalties[i];
                // if(penaltiesScoreA - penaltiesScoreB )
            };
            if(penaltiesScoreA > penaltiesScoreB){
                console.log(`Won ${teamA.name}`);

            } else if(penaltiesScoreB > penaltiesScoreA){
                console.log(`Won ${teamB.name}`);
            } else {
                console.log('Remis w karnych wowwww');
                console.log("gramy dalej:");
                do{
                    penaltiesScoreA += Math.round(Math.random());
                    penaltiesScoreB += Math.round(Math.random());
                    console.log(`Wynik kolejki: ${teamA.name} : ${penaltiesScoreA}, ${teamB.name} : ${penaltiesScoreB}`);
                } while (penaltiesScoreA == penaltiesScoreB);
                if(penaltiesScoreA > penaltiesScoreB){
                    console.log(`Gratulacje, ostatecznie wygrywają ${teamA.name}`);
                } else {
                    console.log(`Gratulacje, ostatecznie wygrywają ${teamB.name}`);
                };
                
            };
            console.log(`Wynik po dogrywce to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            console.log(`Wynik karnych to ${teamA.name} ${penaltiesScoreA} : ${penaltiesScoreB} ${teamB.name}`);
            console.log("Tablica wyników rzutów karnych: A :" + teamApenalties + " B: " + teamBpenalties);
            

        };
        

    };
};

//funkcja zbierająca zespoly z 3 miejsc z grup, sortujaca wg puntow i bramek, oraz wylonienie 4 z 6 druzyn, ktore przechodza dalej (sortowanie):
const thirdPlacesArray = [];
function thirdPlaces(subject){
    for(let i = 0; i < subject.length; i++){
        thirdPlacesArray.unshift(subject[i][2]);
    };
    //zajebista metoda sortowania, tutaj najpierw sortuje po punktach, a jesli punkty sa rowne, sprawdza liczbe strzelonych bramek i sortuje wg nich.
    thirdPlacesArray.sort((a, b) => a.points > b.points ? -1 : (a.points === b.points)? ((a.score > b.score)? -1 : 1) : 1);
    thirdPlacesArray.pop(); 
    thirdPlacesArray.pop();
};


function thirdPlacesQualifiers(){
    //funkcja ma wylonic do ktorej pary dopisac 3 miejscowicza, chyba najlepiej zapisac do globalnej zmiennej
    let b1; let e1; let f1; let c1;
    if(thirdPlacesArray.find(element => element.group === "A")){
        if(thirdPlacesArray.find(element => element.group === "B")){
            if(thirdPlacesArray.find(element => element.group === "C")){
                b1 = thirdPlacesArray.find(element => element.group === "A");
                e1 = thirdPlacesArray.find(element => element.group === "B");
                f1 = thirdPlacesArray.find(element => element.group === "C");
                if(thirdPlacesArray.find(element => element.group === "D")){
                    c1 = thirdPlacesArray.find(element => element.group === "D");
                    // return;
                } else if(thirdPlacesArray.find(element => element.group === "E")){
                    c1 = thirdPlacesArray.find(element => element.group === "E");
                    // return;
                } else {
                    c1 = thirdPlacesArray.find(element => element.group === "F");
                    // return;
                };
            };
            if(thirdPlacesArray.find(element => element.group === "D")){
                e1 = thirdPlacesArray.find(element => element.group === "A");
                f1 = thirdPlacesArray.find(element => element.group === "B");
                b1 = thirdPlacesArray.find(element => element.group === "D");
                if(thirdPlacesArray.find(element => element.group === "E")){
                    c1 = thirdPlacesArray.find(element => element.group === "E");
                    // return;
                } else {
                    c1 = thirdPlacesArray.find(element => element.group === "F");
                    // return;
                };
            };
            if(thirdPlacesArray.find(element => element.group === "E")){
                f1 = thirdPlacesArray.find(element => element.group === "A");
                e1 = thirdPlacesArray.find(element => element.group === "B");
                b1 = thirdPlacesArray.find(element => element.group === "E");
                c1 = thirdPlacesArray.find(element => element.group === "F");
                // return;
            };
        };
        if(thirdPlacesArray.find(element => element.group === "C")){
            f1 = thirdPlacesArray.find(element => element.group === "A");
            e1 = thirdPlacesArray.find(element => element.group === "C");
            if(thirdPlacesArray.find(element => element.group === "D")){
                c1 = thirdPlacesArray.find(element => element.group === "D");
                if(thirdPlacesArray.find(element => element.group === "E")){
                    b1 = thirdPlacesArray.find(element => element.group === "E");
                    // return;
                } else if(thirdPlacesArray.find(element => element.group === "F")){
                    b1 = thirdPlacesArray.find(element => element.group === "F");
                    // return;
                };
            };
            if(thirdPlacesArray.find(element => element.group === "E" && thirdPlacesArray.find(element => element.group === "F"))){
                b1 = thirdPlacesArray.find(element => element.group === "E");
                c1 = thirdPlacesArray.find(element => element.group === "F");
                // return;
            };
        };
        if(thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){
                f1 = thirdPlacesArray.find(element => element.group === "A");
                e1 = thirdPlacesArray.find(element => element.group === "D");
                b1 = thirdPlacesArray.find(element => element.group === "E");
                c1 = thirdPlacesArray.find(element => element.group === "F");
                // return;
        };
    };
    if(!thirdPlacesArray.find(element => element.group === "A")){
        if(thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "F")){
            f1 = thirdPlacesArray.find(element => element.group === "B");
            b1 = thirdPlacesArray.find(element => element.group === "F");
            if(thirdPlacesArray.find(element => element.group === "C")){
                e1 = thirdPlacesArray.find(element => element.group === "C");
                if(thirdPlacesArray.find(element => element.group === "D")){
                    c1 = thirdPlacesArray.find(element => element.group === "D");
                    // return;
                } else if(thirdPlacesArray.find(element => element.group === "E")){
                    c1 = thirdPlacesArray.find(element => element.group === "E");
                    // return;
                };
            };
            if(thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E")){
                e1 = thirdPlacesArray.find(element => element.group === "D");
                c1 = thirdPlacesArray.find(element => element.group === "E");
                // return;
            };
        };
        if(thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E")){
            f1 = thirdPlacesArray.find(element => element.group === "C");
            e1 = thirdPlacesArray.find(element => element.group === "B");
            b1 = thirdPlacesArray.find(element => element.group === "E");
            c1 = thirdPlacesArray.find(element => element.group === "D");
            // return;
        } else if(thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){
            f1 = thirdPlacesArray.find(element => element.group === "C");
            e1 = thirdPlacesArray.find(element => element.group === "D");
            b1 = thirdPlacesArray.find(element => element.group === "F");
            c1 = thirdPlacesArray.find(element => element.group === "E");
            // return;
        };
    };

    qualifier1 = c1.name;
    qualifier2 = b1.name;
    qualifier3 = f1.name;
    qualifier4 = e1.name;
};

// -------------------------------------PRZEJRZEC JESZCZE RAZ THIRDPLACESQUALIFIERS(), W JEDNYM PRZYPADKU WYPLULO Q2 I Q3 JAKO WALES! TAK SAMO BYLO Z CROATIA ALE DLA q1 i q2! czyli problem z grupa A i D!
// - - - - - - - Zaczynamy Euro! - - - - - - - 
//ponizej petla rozgrywajace faze grupowa:
groups.forEach((group, index)=>{
    console.log(`Rozgrywki grupy ${groupsNames[index]}`)
    groupSolve(group);
});

//funkcja wylaniajaca 4 zespoly z 3 miejsc, ktore przechodza dalej:
thirdPlaces(groups);

//przypisanie 3-miejscowiczow do par do 1/8 finalu:
// console.log(thirdPlacesArray);
thirdPlacesQualifiers(thirdPlacesArray);

console.log(qualifier1 + ", " + qualifier2 + ", " + qualifier3 + ", " + qualifier4);
//faza pucharowa:

//1/8 finalu:


// 

//na tym etapie mamy zwyciezcow grup, drugie miejsca z grup, i wylonionych tych co przechodza z trzecich miejsc.
console.log("--------------------1/8 FINALS--------------------");
function roundOf16Solve(groupStageWinners, q1, q2, q3, q4){

    console.log(
groupStageWinners[0][1], groupStageWinners[1][1],
groupStageWinners[0][0], groupStageWinners[2][1],
groupStageWinners[2][0], q1,
groupStageWinners[1][0], q2,
groupStageWinners[3][1], groupStageWinners[4][1],
groupStageWinners[5][0], q3,
groupStageWinners[3][0], groupStageWinners[5][1],
groupStageWinners[4][0], q4
);
    // finalsMatch(groupStageWinners[0][1], groupStageWinners[1][1]);
    // finalsMatch(groupStageWinners[0][0], groupStageWinners[2][1]);
    // finalsMatch(groupStageWinners[2][0], q1);
    // finalsMatch(groupStageWinners[1][0], q2);
    // finalsMatch(groupStageWinners[3][1], groupStageWinners[4][1]);
    // finalsMatch(groupStageWinners[5][0], q3);
    // finalsMatch(groupStageWinners[3][0], groupStageWinners[5][1]);
    // finalsMatch(groupStageWinners[4][0], q4);
};
roundOf16Solve(groups, qualifier1, qualifier2, qualifier3, qualifier4);

//29.06.2021: problem - funkcja przypisywania par 1/8 moze dopuscic do gry pary pochodzacej z tej samej grupy, trzeba to zmienic

//zasada przypisania zespol do 1/8 finalu:
// A 2 - B 2
// A 1 - C 2
// C 1 - 3RD PLACE D/E/F - funkcja d
// B 1 - 3RD PLACE A /D/E/F - funkcja a
// D 2 - E 2
// F 1 - 3RD PLACE A/B/C - funkcja c
// D 1 - F 2 
// E 1 - 3RD PLACE A/B/C/ D - funkcja f/
//AbCDeF
//a3, b2, c2, d3, e2, f2



// const groups = ["A", "B", "C", "D", "E", "F"];
// const scoreSymulator = () => Math.floor(Math.random()*4);


// const match = document.querySelector(`section.matchesGroup${groups[4]}>span.game${++gameNumber}`);

// const groupMatches = document.querySelector(`section.matchesGroup${groups[4]}`);

// const playMatch = (firstTeam, secondTeam) => {
//     const newMatch = document.createElement(`span.game${++gameNumber}`);
//     groupMatches.appendChild(newMatch);
//     let teamA = scoreSymulator();
//     let teamB = scoreSymulator();
//     console.log(teamA, teamB);
//     if(teamA > teamB){
//         console.log("Team A won, B lost");
//         console.log(`${firstTeam}`);

//     } else if(teamA < teamB){
//         console.log("Team A lost, B won");
//         console.log(`${secondTeam}`);
//     } else {
//         console.log("it's a draw.");
//     };
//     newMatch.textContent = `match played`;
// };
// playMatch(groupA[0], groupA[1]);
// playMatch(groupA[0], groupA[2]);
// playMatch(groupA[0], groupA[3]);
// playMatch(groupA[1], groupA[2]);
// playMatch(groupA[1], groupA[3]);
// playMatch(groupA[2], groupA[3]);


// <-- pomysl na dzialanie na stronce -->
// mozna zrobic przycisk "rozpocznij turniej" ktory by symulowal caly turniej, i pozniej dawac buttony do klikania zeby "wprowadzac wyniki" gdy uzytkownik mialby wpisane "rozegraj faze grupowa" a faktycznie dodawaloby odpowiednie zmienne do elementow html.