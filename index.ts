#! /usr/bin/env node
import inquirer from "inquirer";

const questionBank : string[] = [
    "1.Which of the following companies has developed TypeScript?",
    "2.TypeScript is a _______ of JavaScript.",
    "3.Which of the following is a feature of TypeScript not available in plain JavaScript?",
    "4.How does TypeScript handle type checking?",
    "5.What is TypeScript's primary role in development?",
    "6.What does TypeScript offer over JavaScript?",
    "7.TypeScript files have the extension _______.",
    "8.Which command is used to compile TypeScript files?",
    "9.What does 'TS' stand for in TypeScript files?",
    "10.What tool is used to convert TypeScript code into JavaScript?"
   ]
const answers : string[][] = [
    ["a) Google","b) Apple","c) Facebook","d) Microsoft"],
    ["a) Subset","b) Alternative" ,"c) Replacement","d) Superset"],
    ["a) Interfaces","b) Enums","c) Classes","d) All of the above"],
    ["a) Runtime","b) Engine","c) Interpretation","d) Compile-time"],
    ["a) Styling","b) Networking","c) Animation","d)  Typing"],
    ["a) Graphics","b) Mobile","c) Real-time","d) Typing"],
    ["a) .js","b)  .html","c) .txt","d) .ts"],
    ["a) run","b) compile","c) node","d) tsc"],
    ["a) Script","b) Style","c) Syntax","d) Type"],
    ["a) Inline documentation","b) Code formatting","c) Type annotations","d) Automatic comments "],
]    
async function startQuiz(): Promise <void> {
   
    const input = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Enter Your Name:"
      });

      console.log("\n");
      console.log(`WELCOME ${input.name}, TO THE QUIZ!`);

     let score = 0;

    console.log("\n");
    // Looping through each question
      for (let i = 0; i < questionBank.length; i++) {
        // Asking the question
        const response = await inquirer.prompt({
                name: "response",
                type: "list",
                message: questionBank[i],
                choices: answers[i]
            });  
    // Displaying the question number, user's answer, and correct answer
            console.log(`Question ${i + 1}: ${questionBank[i]}`);
            console.log(`Your answer: ${response.response}`);
            console.log(`Correct answer: ${answers[i][3]}`);
            // Checking if the answer is correct
            if(response.response === answers[i][3]){
                console.log("Correct! \n");
                score ++; // Adding a point to the score
            }else{
                console.log("Incorrect! \n");
            }    
            }
    // Calculating and showing the total score and percentage    
        const percentage = (score/questionBank.length) * 100;
        console.log(`Total Score: ${score}/${questionBank.length}`);
        console.log(`Percentage: ${percentage.toFixed(2)}% \n `)    
        } 

startQuiz()


