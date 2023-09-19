function introduction(name){
    return `Hi, my name is ${name}.`;
} introduction("Aki");

// function logTwoValues(value1, value2) {
//     console.log(`The two values are ${value1} and {value2}.`);
// }

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Aki", "Ember.js");

// function sayHelloTo(firstName = "User") {
//     console.log(`Hello, ${firstName}!`)
// }

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional("Gracie", undefined);