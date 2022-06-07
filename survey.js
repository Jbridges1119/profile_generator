const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {





              console.log(`${answer}: Enjoys ${answer2} while listenting to ${answer3}. ${answer}'s favorite meal is ${answer4} and enjoys eating ${answer5} during it. ${answer}'s absolute favorite sport is ${answer6}. ${answer}'s superpower: "${answer7}"`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
