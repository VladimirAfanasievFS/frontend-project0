#!/usr/bin/env node
import questWhatYourName from '../index.js';
import brainEven from './brain-even.js';

console.log(`Welcome to the Brain Games!`);
const nameUser = questWhatYourName();
console.log(`Hi ${nameUser}!`);
brainEven(nameUser);
// Question: 15
// Your answer: yes
