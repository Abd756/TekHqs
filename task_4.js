// let defaultNum=document.getElementById("item1");
// defaultNum.style.backgroundColor="purple";
// let count=1;
// document.getElementById("text").innerText="Step1:- Learn Html";

// function onReset(){
//     defaultNum.style.backgroundColor = "grey"; 
//     defaultNum=document.getElementById("item1");
//     defaultNum.style.backgroundColor="purple";
//     document.getElementById("text").innerText="Step1:- Learn Html";
// }

// function onNext(){
//     let prev=defaultNum;
//     if(defaultNum.id=="item1"){
//         prev.style.backgroundColor="grey";
//         defaultNum=document.getElementById("item2");
//         document.getElementById("text").innerText="Step2:- Learn Css";
//         defaultNum.style.backgroundColor="purple";
//     }
//     else if(defaultNum.id=="item2"){
//         prev.style.backgroundColor="grey";
//         defaultNum=document.getElementById("item3");
//         document.getElementById("text").innerText="Step3:- Learn JavaScript";
//         defaultNum.style.backgroundColor="purple";
//     }
// }

// function onPrev() {
//     let prev = defaultNum;
//     if (defaultNum.id === "item3") {
//         prev.style.backgroundColor = "grey";
//         defaultNum = document.getElementById("item2");
//         document.getElementById("text").innerText = "Step2: Learn Css";
//         defaultNum.style.backgroundColor = "purple";
//     } else if (defaultNum.id === "item2") {
//         prev.style.backgroundColor = "grey";
//         defaultNum = document.getElementById("item1");
//         document.getElementById("text").innerText = "Step1: Learn Html";
//         defaultNum.style.backgroundColor = "purple";
//     }
// }


const steps=[
       {id:"item1",text:"Step1: Learn Html"},
       {id:"item2",text:"Step2: Learn Css"},
       {id:"item3",text:"Step3: Learn JavaScript"},
]
let currentstepindex=0;
document.getElementById(steps[0].id).style.backgroundColor="rgb(29, 10, 137)";
document.getElementById(steps[0].id).style.color="white";
document.getElementById("text").innerText=steps[0].text;

const update=(updatestep)=>{
document.getElementById(steps[currentstepindex].id).style.backgroundColor="grey";
currentstepindex=updatestep;
document.getElementById(steps[currentstepindex].id).style.backgroundColor=" rgb(29, 10, 137)";
document.getElementById(steps[currentstepindex].id).style.color="white";
document.getElementById('text').innerText=steps[currentstepindex].text;
}

const onNext=()=>{
    if(currentstepindex<steps.length-1){
        //document.getElementById("Prev").disabled=false;
        return update(currentstepindex+1);
    }
    else{
        document.getElementById("Next").disabled=true;
    }
}

const onPrev=()=>{
    if(currentstepindex>0){
        //document.getElementById("Next").disabled=false;
        return update(currentstepindex-1);
    }
    else {
        document.getElementById("Prev").disabled=true;

    }
}

const onReset=()=>{
    document.getElementById("Prev").disabled=false;
    document.getElementById("Next").disabled=false;
    return update(0);
}

