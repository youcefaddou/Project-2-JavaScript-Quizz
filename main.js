const prompt = require("prompt-sync")()
//Defining the questions tab
let tabquest = [
    {
        question: "\nQuel est le nom scientifique de l'effet qui cause la montée des marées ?",
        answer: ["A. Effet Doppler", "B. Effet photoélectrique", "C. Effet de marée", "D. Effet Venturi"],
        goodAnswer: 'c'
    },
    {
        question: "\nEn quelle année a eu lieu la Révolution russe ?",
        answer: ["A. 1917", "B. 1905", "C. 1921", "D. 1932"],
        goodAnswer: 'a'
    },
    {
        question: "\nQui a écrit 'À la recherche du temps perdu' ?",
        answer: ["A. Honoré de Balzac", "B. Marcel Proust", "C. Gustave Flaubert", "D. Émile Zola"],
        goodAnswer: 'b'
    },
    {
        question: "\nQuel est le plus grand désert non polaire du monde ?",
        answer: ["A. Désert de Gobi", "B. Désert de Kalahari", "C. Désert du Sahara", "D. Désert de Namib"],
        goodAnswer: 'c'
    },
    {
        question: "\nQuel compositeur a écrit les 'Quatre Saisons' ?",
        answer: ["A. Ludwig van Beethoven", "B. Johann Sebastian Bach", "C. Wolfgang Amadeus Mozart", "D. Antonio Vivaldi"],
        goodAnswer: 'd'
    }]

console.log(prompt("BIENVENUE DANS LE QUIZZ DES 5 ! APPUYEZ SUR UNE TOUCHE POUR DÉMARRER "))

const pseudo = prompt("Entrez votre pseudo: ");
console.log("\n\nC'est parti, " + pseudo + " !");

// Initializing good answers count
let countGoodAnswers = 0

// Managing errors with a function
function errorLog(userAnswer) {
    if (userAnswer !== 'a' && userAnswer !== 'b' && userAnswer !== 'c' && userAnswer !== 'd') {
        console.log("Choix invalide, veuillez taper a, b, c ou d.");
        return true;
    }
    return false;
}

//Making 2 loops, first one to iterate on each element of the tabquest, second one to iterate on each answer of the current question
for (let i = 0; i < tabquest.length; i++) {
    console.log(tabquest[i].question);
    for (let j = 0; j < tabquest[i].answer.length; j++) {
        console.log(tabquest[i].answer[j]);
    }
    let userAnswer = prompt("Veuillez taper votre réponse: (a, b, c ou d)").toLowerCase();
    
    // Verify and manage errors 
    while (errorLog(userAnswer)) {
        userAnswer = prompt("Veuillez taper votre réponse: (a, b, c ou d)").toLowerCase();
    }

    // Condition for the score
    if (userAnswer === tabquest[i].goodAnswer) {
        console.log("Bonne réponse ! Vous marquez un point ");
        countGoodAnswers++;
    } else {
        console.log("Mauvaise réponse ! La bonne réponse était : " + tabquest[i].goodAnswer.toUpperCase());
    }
}

console.log(`Votre score est de : ${countGoodAnswers} sur ${tabquest.length} `);