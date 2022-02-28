let score=[0,1];
//team1 details
var team1={
    name:"BRAZIL",
    runs: [],
    score:0
}
//team2 details
var team2={
    name:"ARGENTINA",
    runs: [],
    score:0
}
window.onload=() => {
    //which team will hit first
    selectToss();
    //update the text button
    updateButtonText();
    //update the final score
    updateScore();
    //update the names
    updateName();
}
updateName=()=>{
    document.getElementById("team1name").textContent=team1.name;
    document.getElementById("team2name").textContent=team2.name;
}
var toss;
selectToss=()=>{
    toss= Math.round(Math.random())+1;
}
updateButtonText=()=>{
    var button= document.getElementById("strike");
    //who will strike first
    button.textContent=(toss==1?team1.name:team2.name)+" Hit";
    var result= document.getElementById("result");
    //both team has played or not
    if(team1.runs.length==5&&team2.runs.length==5){
        document.getElementById("strike").remove();
        //display who wins
        result.textContent=(team1.score==team2.score?"MATCH DRAW":(team1.score>team2.score?team1.name:team2.name)+" Wins");
    }
    else{
        toss=(team1.runs.length==5?2:team2.runs.length==5?1:toss);
    }
    if(team1.runs.length==5&&team2.runs.length==5){
        timeRefresh(2000);
    }
}
updateScore=()=>{
    document.getElementById("team1score").textContent=team1.score;
    document.getElementById("team2score").textContent=team2.score;
    updateRuns();
}
ButtonClick=()=>{
    var runs = score[Math.floor(Math.random()*score.length)];
    runs=(runs==0?0:1);
    if(toss==1){
        team1.runs.push(runs);
        team1.score = calculateScore(team1.runs);
        toss=toss+1;
    }
    else{
        team2.runs.push(runs);
        team2.score = calculateScore(team2.runs);
        toss=toss-1;
    }
updateButtonText();
updateScore();
 }
 calculateScore=(runs)=>{
    return runs.map(num=> {
        return(num==0?0:1);
    }).reduce((total,num)=>total+num);
}
updateRuns=()=>{
    var teamone =document.getElementById("team1round").children;
    var teamTwo =document.getElementById("team2round").children;
    var color=["red","green"];
    team1.runs.forEach((runs,index)=>{
        teamone[index].style.background=color[runs];
    })
    team2.runs.forEach((runs,index)=>{
        teamTwo[index].style.background=color[runs];
    })
}
timeRefresh=(timeoutPeriod)=>{
    setTimeout("location.reload(true);", timeoutPeriod);
}