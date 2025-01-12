let userscore=0;
let compscore=0;
let r_color=document.getElementById("msg");
let h_u_choice=document.getElementById("u_score");
let h_c_choice=document.getElementById("c_score");

let choice=document.querySelectorAll(".choice");

const comp_choice=() => {
    let arr=["rock","paper","scissors"];
    let random= Math.floor(Math.random()*3);
    return arr[random];
    
}

const playgame= (userchoice) => {
    console.log("Users choice "+ userchoice);
    const compchoice= comp_choice();
    console.log("Comp choice "+ compchoice);
    
    if(userchoice=== compchoice)
    {
        //Draw game
        console.log("You selected "+userchoice+" and comp selected "+compchoice+" hence game is draw!!!");
        r_color.style.backgroundColor="rgb(208, 81, 223)";
        r_color.innerText="Game Draw"

    }
    else{

        let result=true;
        if(userchoice==="rock")
        {
            result= compchoice === "paper" ? false : true;
        }

        else if(userchoice === "paper"){
            result= compchoice === "scissors" ? false : true;
        }

        else if(userchoice === "scissors"){
            result= compchoice === "rock" ? false : true;
        }

        if(result)
    {
        console.log("Comp Choice is " +compchoice+" Congratulations You Won !!!");
        r_color.style.backgroundColor="green";
        r_color.innerText="Comp Choice is " +compchoice+" Congratulations You Won !!!"
        userscore++;
        h_u_choice.innerHTML=userscore;
    }

    else{
        console.log("You lose!!!");
        r_color.style.backgroundColor="Red";
        r_color.innerText="Comp choice is "+compchoice+" You lose!!!"
        compscore++;
        h_c_choice.innerHTML=compscore;
    }
    }

    
}


choice.forEach((ch) => {
    ch.addEventListener("click", () =>
    {
        let userchoice=ch.getAttribute("id");
        playgame(userchoice)
    });
});