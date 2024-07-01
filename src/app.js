/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello rigo from console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [" dog", " grandma", " cat", " neighbor", ""];
  let action = [" ate", " lost", " broke", " hid"];
  let possession = [" my homework", " my keys", " my car", " my shoes"];
  let where = [" in the park", " at home", " in my car", " at school"];

  let proINDEX = Math.floor(Math.random() * pronoun.length);
  let subINDEX = Math.floor(Math.random() * subject.length);
  let actINDEX = Math.floor(Math.random() * action.length);
  let posINDEX = Math.floor(Math.random() * possession.length);
  let wheINDEX = Math.floor(Math.random() * where.length);

  return (
    pronoun[proINDEX] +
    subject[subINDEX] +
    action[actINDEX] +
    possession[posINDEX] +
    where[wheINDEX]
  );
};
