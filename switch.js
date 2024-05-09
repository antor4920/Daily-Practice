let day;
 
switch(new Date().getDay()){
    case 0:
        day="Robi bar";
        break;
        case 1: 
        day="Shom bar";
        break;
        case 2:
            day="Mongol bar"
            break;
            case 3:
                day="bud bar"
                break;
                case 4:
                    day="brihoshpoti bar"
                    break;
                    case 5:
                        day="shokro bar"
                        break;
                        case 6:
                            day="shoni bar"
                            break;

                        
}
console.log(day);


// statement 

let age=6;

if (age=>18){
    console.log("Adult");
}
else{
    console.log((age<5)? "chiled":"Young");
}