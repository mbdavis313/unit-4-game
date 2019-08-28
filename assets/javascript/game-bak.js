// Initialize totalScore and matchNumber to 0.
let totalScore = 0; 
let matchNumber = 0;

// Generate random matchNumber from 19 to 120.
matchNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
console.log('matchNumber', matchNumber);

// Function to Start Game
function startGame() {
// *** PLACE IN START GAME FUNCTION ***

// Generate randome number from 1 to 12 for each crystal.
 $( ".crystal-image" ).each(function(){
    $(this).attr("data-value", Math.floor(Math.random() * 12 + 1));
    $(this).click(function(){
    let crystalCount = $(this).data("value")
    // Add random number for each crystal (crystalCount) to totalScore.
    totalScore += crystalCount;
    console.log('total',totalScore);
    console.log('crystal value',crystalCount);
     // Call function to check if totalScore matches matchNumber.
    scoreCheck();
    })
 })
 }

// Function to check if totalScore matches matchNumber. 
 function scoreCheck(){
  if (totalScore > matchNumber) {
    console.log('Please Try Again, Good Luck.');
      }
  if (totalScore === matchNumber) {
       console.log('You Have Won!'); 
  }
}
 
  // Call function to Start Game.
  startGame();
 

  // Need it to work via HTML instead of console.log. Need ALERT WON or LOST. Game to END and RESTART button.
  

    // Input random number to each crystal
    
    
    //$("img").click(function(){
        
    //what you want to happen after you click on img       
    //});

 
    

    