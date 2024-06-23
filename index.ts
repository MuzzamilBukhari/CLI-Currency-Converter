#! /usr/bin/env node
import inquirer from "inquirer";

const currency = {
  USD: 1, // base currency
  EUR: 0.93,
  GBP: 0.79,
  INR: 83.56,
  PKR: 277.91,
};

type Currency = keyof typeof currency;

interface Answers {
  value: number;
  fromCurr: Currency;
  toCurr: Currency;
}

let ans: Answers = await inquirer.prompt([
  {
    name: "fromCurr",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    message: "Select from Currency Option",
  },
  {
    name: "toCurr",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    message: "Select to Currency Option",
  },
  {
    name: "value",
    type: "number",
    message: "What value you want to convert? ",
  },
]);

const { value, fromCurr, toCurr } = ans;

const fromAmount: number = currency[fromCurr];
const toAmount: number = currency[toCurr];

const converted = value / fromAmount;
const res = converted * toAmount;

console.log(res.toFixed(3));
