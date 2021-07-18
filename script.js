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
//tablica 4 zespol z 3 miejsc, ktore przechodza dalej:
const thirdPlacesArray = [];
//zmienne przygotowane do przypisania druzyn awansujacych z 3 miejsc:
let qualifier1;
let qualifier2;
let qualifier3;
let qualifier4;
//tablica zwyciezcow z 1/8 finalu:
let quarterfinals;
//tablica zwyciezcow z 1/4 finalu:
let semifinals;
//tablica zwyciezcow z polfinalow:
let finals;
//zmienna zwycięzcy turnieju:
let tournamentWinner;


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
        matchWinner = teamA;
        
        console.log(`Wynik to ${teamA.name} ${teamAgoals} : ${teamBgoals} ${teamB.name}`);
        console.log(`Dalej przechodzi: ${matchWinner.name}`);
        console.log('------');
        // break;
    } else if(teamBgoals > teamAgoals){
        console.log(`Wygrali ${teamB.name}, zdobywając ${teamBgoals} bramek.`);
        matchWinner = teamB;
        console.log(`Wynik to ${teamA.name} ${teamAgoals} : ${teamBgoals} ${teamB.name}`);
        console.log(`Dalej przechodzi: ${matchWinner.name}`);
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
            matchWinner = teamA;
            console.log(`Wynik po dogrywce to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            console.log(`Dalej przechodzi: ${matchWinner.name}`);
            console.log('------');
            // break;
        } else if(teamBgoalsExtraTime > teamAgoalsExtraTime){
            console.log(`Dogrywkę wygrali ${teamB.name}`);
            matchWinner = teamB;
            console.log(`Wynik po dogrywce to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            console.log(`Dalej przechodzi: ${matchWinner.name}`);
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
                matchWinner = teamA;

            } else if(penaltiesScoreB > penaltiesScoreA){
                console.log(`Won ${teamB.name}`);
                matchWinner = teamB;
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
                    matchWinner = teamA;
                } else {
                    console.log(`Gratulacje, ostatecznie wygrywają ${teamB.name}`);
                    matchWinner = teamB;
                };
                
            };
            console.log(`Wynik po dogrywce to ${teamA.name} ${teamAgoalsExtraTime} : ${teamBgoalsExtraTime} ${teamB.name}`);
            console.log(`Wynik karnych to ${teamA.name} ${penaltiesScoreA} : ${penaltiesScoreB} ${teamB.name}`);
            console.log("Tablica wyników rzutów karnych: A :" + teamApenalties + " B: " + teamBpenalties);
            

        };
        

    };
    console.log("--------------------------------");
    return matchWinner;
};

//funkcja zbierająca zespoly z 3 miejsc z grup, sortujaca wg puntow i bramek, oraz wylonienie 4 z 6 druzyn, ktore przechodza dalej (sortowanie):

function thirdPlaces(subject){
    for(let i = 0; i < subject.length; i++){
        thirdPlacesArray.unshift(subject[i][2]);
    };
    //zajebista metoda sortowania, tutaj najpierw sortuje po punktach, a jesli punkty sa rowne, sprawdza liczbe strzelonych bramek i sortuje wg nich.
    thirdPlacesArray.sort((a, b) => a.points > b.points ? -1 : (a.points === b.points)? ((a.score > b.score)? -1 : 1) : 1);
    thirdPlacesArray.pop(); 
    thirdPlacesArray.pop();
};
//funkcja skracająca kod w funcji thirdPlacesQualifiers(), zwraca odnaleziony z tablicy zespol:
function pick(letter){
    return thirdPlacesArray.find(element=>element.group === letter);
};


//funkcja wyłaniająca do ktorej pary dopisac 3 miejscowicza
function thirdPlacesQualifiers(){
    let b1; let e1; let f1; let c1;
    if(thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && !thirdPlacesArray.find(element => element.group === "E") && !thirdPlacesArray.find(element => element.group === "F")){
        b1 = pick("A");
        e1 = pick("B");
        f1 = pick("C");
        c1 = pick("D");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && !thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && !thirdPlacesArray.find(element => element.group === "F")){
        b1 = pick("A");
        e1 = pick("B");
        f1 = pick("C");
        c1 = pick("E");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && !thirdPlacesArray.find(element => element.group === "D") && !thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){
        b1 = pick("A");
        e1 = pick("B");
        f1 = pick("C");
        c1 = pick("F");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && !thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && !thirdPlacesArray.find(element => element.group === "F")){
        e1 = pick("A");
        f1 = pick("B");
        b1 = pick("D");
        c1 = pick("E");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && !thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && !thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){
        e1 = pick("A");
        f1 = pick("B");
        b1 = pick("D");
        c1 = pick("F");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && !thirdPlacesArray.find(element => element.group === "C") && !thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){   
        f1 = pick("A");
        e1 = pick("B");
        b1 = pick("E");
        c1 = pick("F");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && !thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && !thirdPlacesArray.find(element => element.group === "F")){ 
        f1 = pick("A");
        e1 = pick("C");
        c1 = pick("D");
        b1 = pick("E");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && !thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && !thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){ 
        f1 = pick("A");
        e1 = pick("C");
        c1 = pick("D");
        b1 = pick("F");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && !thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && !thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){   
        f1 = pick("A");
        e1 = pick("C");
        b1 = pick("E");
        c1 = pick("F");
    };
    if(thirdPlacesArray.find(element => element.group === "A") && !thirdPlacesArray.find(element => element.group === "B") && !thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){   
        f1 = pick("A");
        e1 = pick("D");
        b1 = pick("E");
        c1 = pick("F");
    };
    if(!thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && !thirdPlacesArray.find(element => element.group === "F")){   
        f1 = pick("C");
        e1 = pick("B");
        b1 = pick("E");
        c1 = pick("D");
    };
    if(!thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && !thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){ 
        f1 = pick("B");
        e1 = pick("C");
        b1 = pick("F");
        c1 = pick("D");
    };
    if(!thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && !thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){ 
        f1 = pick("B");
        e1 = pick("C");
        b1 = pick("F");
        c1 = pick("E");
    };
    if(!thirdPlacesArray.find(element => element.group === "A") && thirdPlacesArray.find(element => element.group === "B") && !thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){ 
        c1 = pick("E");
        e1 = pick("D");
        b1 = pick("F");
        f1 = pick("B");
    };
    if(!thirdPlacesArray.find(element => element.group === "A") && !thirdPlacesArray.find(element => element.group === "B") && thirdPlacesArray.find(element => element.group === "C") && thirdPlacesArray.find(element => element.group === "D") && thirdPlacesArray.find(element => element.group === "E") && thirdPlacesArray.find(element => element.group === "F")){ 
        c1 = pick("E");
        e1 = pick("D");
        b1 = pick("F");
        f1 = pick("C");
    };
    qualifier1 = c1;
    qualifier2 = b1;
    qualifier3 = f1;
    qualifier4 = e1;
};



// - - - - - - - Zaczynamy Euro! - - - - - - - 
//ponizej petla rozgrywajace faze grupowa:
groups.forEach((group, index)=>{
    console.log(`Rozgrywki grupy ${groupsNames[index]}`)
    groupSolve(group);
});

//funkcja wylaniajaca 4 zespoly z 3 miejsc, ktore przechodza dalej:
thirdPlaces(groups);

//przypisanie 3-miejscowiczow do par do 1/8 finalu:
console.log(thirdPlacesArray);
thirdPlacesQualifiers(thirdPlacesArray);

// console.log(qualifier1 + ", " + qualifier2 + ", " + qualifier3 + ", " + qualifier4);
//faza pucharowa:

// - - - - - - - 1/8 FINALS - - - - - - - 

//na tym etapie mamy zwyciezcow grup, drugie miejsca z grup, i wylonionych tych co przechodza z trzecich miejsc.
console.log("--------------------1/8 FINALS--------------------");
function roundOf16Solve(groupStageWinners, q1, q2, q3, q4){
    const quarter1 = finalsMatch(groupStageWinners[1][0], q2);
    const quarter2 = finalsMatch(groupStageWinners[0][0], groupStageWinners[2][1]);
    const quarter3 = finalsMatch(groupStageWinners[5][0], q3);
    const quarter4 = finalsMatch(groupStageWinners[3][1], groupStageWinners[4][1]);
    const quarter5 = finalsMatch(groupStageWinners[4][0], q4);
    const quarter6 = finalsMatch(groupStageWinners[3][0], groupStageWinners[5][1]);
    const quarter7 = finalsMatch(groupStageWinners[2][0], q1);
    const quarter8 = finalsMatch(groupStageWinners[0][1], groupStageWinners[1][1]);
    quarterfinals = [quarter1, quarter2, quarter3, quarter4, quarter5, quarter6, quarter7, quarter8];
    console.log(quarterfinals);
};
roundOf16Solve(groups, qualifier1, qualifier2, qualifier3, qualifier4);



// - - - - - - - 1/4 FINALS - - - - - - - 

function roundOf8Solve(solved16){
    console.log('----------------------1/4 finals------------------------');
    console.log(quarterfinals);
    const semi1 = finalsMatch(solved16[0], solved16[1]);
    const semi2 = finalsMatch(solved16[2], solved16[3]);
    const semi3 = finalsMatch(solved16[4], solved16[5]);
    const semi4 = finalsMatch(solved16[6], solved16[7]);
    semifinals = [semi1, semi2, semi3, semi4];
    console.log(semi1, semi2,  semi3, semi4);
};
roundOf8Solve(quarterfinals);

// - - - - - - - SEMI-FINALS - - - - - - - 

function roundOf4Solve(solved8){
    console.log('----------------------1/2 finals------------------------');
    const finalist1 = finalsMatch(solved8[0], solved8[1]);
    const finalist2 = finalsMatch(solved8[2], solved8[3]);
    finals = [finalist1, finalist2];
    console.log(finalist1, finalist2);
};
roundOf4Solve(semifinals);

// - - - - - - - FINALS - - - - - - - 

function greatFinal(solvedSemi){
    console.log('----------------------GREAT FINAL------------------------');
    tournamentWinner = finalsMatch(solvedSemi[0], solvedSemi[1]);
    console.log(`ZWYCIĘZCĄ TURNIEJU ZOSTALI: ${tournamentWinner.name}`);
}
greatFinal(finals);
//29.06.2021: problem - funkcja przypisywania par 1/8 moze dopuscic do gry pary pochodzacej z tej samej grupy, trzeba to zmienic
//11.07.2021: ZROBIONE!

// <-- pomysl na dzialanie na stronce -->
// mozna zrobic przycisk "rozpocznij turniej" ktory by symulowal caly turniej, i pozniej dawac buttony do klikania zeby "wprowadzac wyniki" gdy uzytkownik mialby wpisane "rozegraj faze grupowa" a faktycznie dodawaloby odpowiednie zmienne do elementow html.