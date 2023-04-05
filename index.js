function scuberGreetingForFeet(feet){
  
  let result
  if(feet <= 400) {
    result = "This one is on me!";
  }
  if (feet > 400 && feet <= 2000){
    result = "That will be twenty bucks.";
  }
  if (feet > 2000 && feet <= 2500){
    result = "I will gladly take your thirty bucks."
  }
  else if (feet > 2500){
    return "No can do."
  }
  return result
}



function ternaryCheckCity(city){
  if (city=== 'NYC')
  return 'Ok, sounds good.';

  else (city !== 'Pittsburg')
  return 'No go.';
  }

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case "generous":
      return("Thank you so much.");
      case "not as generous":
      return ("Thank you.");
      default: "if anything else";
        return ("Bye.");
      }}
