const calculatebtn = document.getElementById("calculate-button");
const loveCalculator = document.querySelector(".love-calculator");
const resultContainer = document.querySelector(".result-container");
const resultName = document.querySelector(".result-name");
const resultMessage = document.querySelector(".result-message");
const resultPercentageBox = document.querySelector(".result-percentage-box");
const resultPercentageBoxWrapper = document.querySelector(".result-percentage-box-wrapper");
const recheckButton = document.getElementById("recheck-button");
const loveQuotesByPercentage = [
    {
    range: [0, 10],
    quote: "Not exactly Romeo and Juliet material",
},
{
    range: [11, 20],
    quote: "You two might be better off as friends.",
},
{
    range: [21, 30],
    quote: "Looks like the love radar says… try again.",
},
{
    range: [31, 40],
    quote: "Cute pair! But maybe the recipe needs more spice.",
},
{
    range: [41, 50],
    quote: "You’re like Wi-Fi — good connection, but signal drops sometimes.",
},
{
    range: [51, 60],
    quote: "Might not be forever yet, but definitely worth a try!",
},
{
    range: [61, 70],
    quote: "Wow! Cupid’s jealous of this connection. ❤️",
},
{
    range: [71, 80],
    quote: "Heartbeats synced! ❤️ Love level: Maximum.",
},
{
    range: [81, 90],
    quote: "Perfect match! Even peanut butter and jelly are jealous.",
},
{
    range: [91, 100],
    quote: "100% approved by the love gods!",
}
];



calculatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const inp1 = document.getElementById("name1");
    const inp2 = document.getElementById("name2");
    
    console.log("Input 1 value:", inp1.value);
    console.log("Input 2 value:", inp2.value);
    
    if(inp1.value && inp2.value){
        const loveScore = Math.floor(Math.random() * 100) + 1;
        console.log("Love score generated:", loveScore);
        
        loveCalculator.style.display = 'none';
        resultContainer.style.display = 'block';
        
        resultPercentageBoxWrapper.style.background = `conic-gradient(red 0% ${loveScore}%, #e0e0e0 ${loveScore}% 100%)`;
        resultName.innerText = `${inp1.value} & ${inp2.value}`;
        resultPercentageBox.innerText = `${loveScore}%`;
        
        const expectedQuote = loveQuotesByPercentage.find(elem => loveScore >= elem.range[0] && loveScore <= elem.range[1]);
        console.log("Found quote:", expectedQuote);
        
        if (expectedQuote) {
            resultMessage.innerText = expectedQuote.quote;
        } else {
            resultMessage.innerText = "The love meter is confused! Try again.";
        }

    }
    else{
        alert("Please enter both names");
    }

});
recheckButton.addEventListener("click", () => {window.location.reload();});