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
}
const switzerland = {
    name: "Switzerland",
    factor: 3,
    score: 0,
    points: 0,
}
const turkey = {
    name: "Turkey",
    factor: 2,
    score: 0,
    points: 0,
};
//  ------------- group B

const belgium = {
    name: "Belgium",
    factor: 6,
    score: 0,
    points: 0,
};
const denmark = {
    name: "Denmark",
    factor: 4,
    score: 0,
    points: 0,
}
const finland = {
    name: "Finland",
    factor: 2,
    score: 0,
    points: 0,
}
const russia = {
    name: "Russia",
    factor: 3,
    score: 0,
    points: 0,
};

//  ------------- group C

const nederlands = {
    name: "Nederlands",
    factor: 5,
    score: 0,
    points: 0,
};
const austria = {
    name: "Austria",
    factor: 3,
    score: 0,
    points: 0,
}
const ukraine = {
    name: "Ukraine",
    factor: 3,
    score: 0,
    points: 0,
}
const north_macedonia = {
    name: "North Macedonia",
    factor: 2,
    score: 0,
    points: 0,
};

//  ------------- group D
const england = {
    name: "England",
    factor: 5,
    score: 0,
    points: 0,
};
const croatia = {
    name: "Croatia",
    factor: 4,
    score: 0,
    points: 0,
}
const czech_republic = {
    name: "Czech Republic",
    factor: 3,
    score: 0,
    points: 0,
}
const scotland = {
    name: "Scotland",
    factor: 2,
    score: 0,
    points: 0,
};
// ------------- groupE
const poland = {
    name: "Poland",
    factor: 3,
    score: 0,
    points: 0,
};
const spain = {
    name: "Spain",
    factor: 5,
    score: 0,
    points: 0,
};
const sweden = {
    name: "Sweden",
    factor: 3,
    score: 0,
    points: 0,
};
const slovakia = {
    name: "Slovakia",
    factor: 2,
    score: 0,
    points: 0,
};
//  ------------- group F
const france = {
    name: "France",
    factor: 6,
    score: 0,
    points: 0,
};
const germany = {
    name: "Germany",
    factor: 5,
    score: 0,
    points: 0,
}
const portugal = {
    name: "Portugal",
    factor: 5,
    score: 0,
    points: 0,
}
const hungary = {
    name: "Hungary",
    factor: 2,
    score: 0,
    points: 0,
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
const groupsNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"]


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
groups.forEach((group, index)=>{
    console.log(`Rozgrywki grupy ${groupsNames[index]}`)
    groupSolve(group);
});

//nowa funkcja meczu, zeby nie dodawalo bramek i punktow dla druzyn(w budowie): 
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
//funkcja finalsMatch() wykonuje mecze pucharowe, do ogarniecia kod, zrobiony na tyle zeby dzialal :D //edit: kod w sumie ogarniety, kwestia dorobienia wrzucania info do DOM;
const thirdPlacesArray = [];
function thirdPlaces(subject){
    for(let i = 0; i < subject.length; i++){
        thirdPlacesArray.unshift(subject[i][2]);
    };
    //zajebista metoda sortowania, tutaj najpierw sortuje po punktach, a jesli punkty sa rowne, sprawdza liczbe strzelonych bramek i sortuje wg nich.
    thirdPlacesArray.sort((a, b) => a.points > b.points ? -1 : (a.points === b.points)? ((a.score > b.score)? -1 : 1) : 1);
    thirdPlacesArray.pop(); thirdPlacesArray.pop();
    console.log(thirdPlacesArray);
};



//faza pucharowa:

//1/8 finalu:
//trzeba sprawic, by zespol dolaczany z 3 miejsca, byl dolaczony do pary do zespolu pochodzacego z kazdej innej grupy, niz wygrany; czyli: wygrany z grupy C moze zostac dolaczony z zespolem z trzeciego miejsca z konkretnych grup (A, B, D, E, F). i tak dalej z nastepnymi zwyciezcami.: 1 miejsce z B moze byc z 3 miejscem z A,C,D,E,F. wiec mozna z funkcji wylaniajacej tabelke 3 miejsc, wyciagnac tylko te, ktore faktycznie przechodza (usunac dwa ostatnie na przyklad). a nastepnie w funkcji roundof16solve zrobic sprawdzenie czy zespol nie jest/jest z danej grupy i przylaczac.

//na razie zrobilem tak: tabelka 3 miejsc wylania tablice 4 zespolow z 3 miejsc, ktore przechodza dalej i maja zostac przydzielone do zwyciescow grup. 

// metodą .includes(name) moge sprawdzic, czy name/3 miejsce znajduje sie w danej tablicy. czyli, gdy bede chcial przypisac zespol do zwyciezcy grupy X, bede musial zapisac X.includes(tablica zespolow z 3 miejsc). moznaby sprobowac zrobic cos ala podwojne sprawdzenie w jednej linijce -> iterowac po grupach od a do f i sprawdzac, czy dany zespol z 3 miejsca pasuje. i mozna zrobic to w sposob odwrocony -> jesli a.includes(zespol 1 z)
// 
thirdPlaces(groups);
function roundOf16Solve(groupStageWinners){
    finalsMatch(groupStageWinners[0][1], groupStageWinners[1][1]);
    finalsMatch(groupStageWinners[0][0], groupStageWinners[2][1]);
    finalsMatch(groupStageWinners[2][0], thirdPlacesArray[0]);
    finalsMatch(groupStageWinners[1][0], thirdPlacesArray[1]);
    finalsMatch(groupStageWinners[3][1], groupStageWinners[4][1]);
    finalsMatch(groupStageWinners[5][0], thirdPlacesArray[2]);
    finalsMatch(groupStageWinners[3][0], groupStageWinners[5][1]);
    finalsMatch(groupStageWinners[4][0], thirdPlacesArray[3]);
};
roundOf16Solve(groups);

//29.06.2021: problem - funkcja przypisywania par 1/8 moze dopuscic do gry pary pochodzacej z tej samej grupy, trzeba to zmienic

// A 2 - B 2
// A 1 - C 2
// C 1 - 3RD PLACE D
// B 1 - 3RD PLACE F
// D 2 - E 2
// F 1 - 3RD PLACE A/B
// D 1 - F 2 
// E 1 - 3RD PLACE C




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