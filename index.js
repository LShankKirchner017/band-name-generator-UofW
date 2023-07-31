import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation'
import inquirer from 'inquirer'

console.log(chalkAnimation)

inquirer
  .prompt([
    {
      type: "number",
      name: "numWords",
      message: "How many words do you want in your band name?",
      default: 3,
    },
    {
      type: "list",
      name: "animationName",
      message: "Which animation do you want to use?",
      choices: ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke'],
      default: 'rainbow'
    },
  ])
  .then((answers) => {
    console.log(answers.animationName);
  
    const randomSlug = generateSlug(answers.numWords, {
        format: 'title'
    })

    chalkAnimation[answers.animationName](randomSlug)

  })
  .catch((err) => {
    console.log(err);
  });



