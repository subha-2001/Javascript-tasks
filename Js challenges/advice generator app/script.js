document.getElementById('advice').addEventListener('click',fetchAdvice);

async function fetchAdvice() {
    const proverb=document.getElementById("proverb");
    const adnumber=document.getElementById("number");
    try {
        const response=await fetch("https://api.adviceslip.com/advice");
    if(!response.ok){
        throw new Error("Network response not ok");
    }
    const data=await response.json();
    const advice=data.slip.advice;
    const number=data.slip.id;
    proverb.textContent=`"${advice}"`;
    adnumber.textContent=number;
    
    }
    catch(error) {
        console.log("error",error)

    }
}