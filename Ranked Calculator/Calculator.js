//Rank Points Calculator 
//learning how to use functions 

let wins = carrer(0, 0)
let rank = ""


function carrer(win, loss){
    return win - loss
}


switch (true){
    case wins <=10 :
        rank = "Iron"
        break 
    
    case wins >= 11 && wins <= 20:
        rank = "Bronze"
        break
    
    case wins >= 21 && wins <= 50:
        rank = "Silver"
        break

    case wins >= 51 && wins <= 80:
        rank ="Gold"
        break

    case wins >= 81 && wins <= 90:
        rank="Diamond"
        break

    case wins >= 91 && wins <= 100:
        rank = "Legendary"
        break

        case wins >= 101:
            rank = "Imortal"
            break
}


console.log("The player has " + wins + " points and are at the " + rank + " rank" )





