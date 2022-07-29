/**randomm inputs for the computer */
getComputerChoice=()=>{
    let chois=["rock","paper","scissors"], comchoise= chois[Math.floor(Math.random()*chois.length)]
    return comchoise;
}
//one time game function
var comScore=0 , userScore=0;
one=(playerSelction, computerSelection)=>{
    playerSelction=prompt("Please type in either Rock , Paper or Scissors \n any typo adds score to computer","");
    computerSelection= getComputerChoice();
     let   small=playerSelction.toLowerCase();
     
         switch (true) {
             case small===computerSelection:
                 {
                 console.log(`even `);}
                break; 
             case small==="rock"&& computerSelection=="scissors":
             case small==="scissors" && computerSelection=="paper":
             case small==="paper" && computerSelection=="rock":
                 userScore++
                 console.log(`Nice Job!! \n ${playerSelction} beates ${computerSelection}.`);
                 break;
                 default:
                { comScore++
               console.log(`OOOPS!! \n ${computerSelection}  beats ${playerSelction}.`);
                }}
         }
         // function to excute function one five times
gameplay=()=>{
    comScore=0;
for (let i = 0; i < 5; i++) {
   one();
}
let result=(userScore>comScore)?console.log(`You:${userScore} <<>> ${comScore}:computer \n YOU Won! \n click the button to start again!`):console.log(`You:${userScore} <<>> ${comScore}:computer \n Try Again \n This Time With Courage!`);
result;
}