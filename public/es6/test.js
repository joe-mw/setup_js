// Preprocessor directives -- sort of
'use strict'

// es6 feature, block declaration
const sentences = [
    {subject:'Javascript', verb:'is', object:'great'},
    {subject:'Elephants', verb:'are',  object:'huge'},
];

// es6 feature: object unpacking
function say({subject, verb, object}){
    console.log(`${subject} ${verb} ${object}`);
}

for( let s of sentences){
    say(s)
}
