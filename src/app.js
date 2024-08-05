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
const generateExcuse = () => {
  const pronoun = ["A", "The"];
  const subject = [" dog", " grandma", " cat", " neighbor"];
  const action = [" ate", " lost", " broke", " hid"];
  const possession = [" my homework", " my keys", " my car", " my shoes"];
  const where = [" in the park", " at home", " in my car", " at school"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    subject[subjectIndex] +
    action[actIndex] +
    possession[possessionIndex] +
    where[whereIndex]
  );
};
