let inputValue = document.getElementById('text-string');
inputValue.style.width = "50%";
let setInputValueBtn = document.getElementById('sort-alphabetically-btn');
let findLogestWordBtn = document.getElementById('find-longest-word-btn');

//Level 1
setInputValueBtn.addEventListener('click', function stringSortToAlphabet(event){
    let arr = inputValue.value.split("").sort();
    let newInputValue = arr.join("");
    inputValue.value = newInputValue;
    event.preventDefault();
});

//Level 2
findLogestWordBtn.addEventListener('click', function findLongestWord(event){
    let arr = inputValue.value.split(" ");
    let sortedArr = arr.sort((a, b) => b.length - a.length);
    let newInputArr = [];

    for(i = 0; i < sortedArr.length; i++){
        if(sortedArr[0].length == sortedArr[i].length){
            newInputArr.push(sortedArr[i]);
        }
    };

    inputValue.value = newInputArr.join(" ");
    event.preventDefault();
});


