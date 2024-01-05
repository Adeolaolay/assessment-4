module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way","A friend is a present you give yourself", "Adventure can be real happiness","An inch of time is an inch of gold","All your hard work will soon pay off."];

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getColor: (req, res) => {
        const colors = [ "Pink", "Blue", "Purple","Red","Black."]

        // choose random color
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];

        res.status(200).send(randomColor); const complimentBtn = document.querySelector("#complimentButton")
    },

    getHairstyle: (req, res) => {
        const hairstyles = [ "New Color", "Haircut", "Buzz cut", "Blond", "Party in the front and back."];

        // choose random hairstyles 
         let randomIndex = Math.floor(Math.random() * hairstyles.length);
         let randomHairstyle = hairstyles[randomIndex];

         res.status(200).send(randomHairstyle); const hairstyleBtn = document.querySelector("#hairstyleButton")
    },

    getMakeup: (req, res) => {
        const makeups = [ "Blush", "Eyeliner", "Lipstain", "Powder", "Lipstick."];

        // choose random makeups
        let randomIndex = Math.floor(Math.random() * makeups.length);
        let randomMakeup = makeups[randomIndex];

        res.status(200).send(randomMakeup); const makeupBtn = document.querySelector("#makeupButton")
    },


}

