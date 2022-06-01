
// 1 -------------------->
const upperCaseTest = (str) => {
    let reg = /[A-Z]/;
    let result = reg.test(str);
    console.log(result);
}
upperCaseTest('abcd');
upperCaseTest('Abcd');

// 2 ---------------------->
const vowel_count = (vowels) => {

    let reg = /[aeiou]/;
    let totalVowels = 0;
    for (let i = 0; i < vowels.length; i++) {
        if (reg.test(vowels[i])) {
            totalVowels++;
        }
    }
    console.log(totalVowels);
}
vowel_count('The quick brown fox jumps over the lazy dog');

// 3 ----------------------->
const is_alphaNumeric = (strings)=>{
    let reg = /([0-9]+[a-z])/gi;
    console.log(reg.test(strings));
}

is_alphaNumeric("37828sad");
is_alphaNumeric("3243#$sew");

// 4 -------------------------->

//Write a JavaScript function to check whether a given value is hexcolor value or not
const is_hexcolor = (hexNum)=>{

    let reg = /^[#]+([0-9]+{3})/;
    console.log(reg.test(hexNum));

}

is_hexcolor("#444");
is_hexcolor("#3333");


