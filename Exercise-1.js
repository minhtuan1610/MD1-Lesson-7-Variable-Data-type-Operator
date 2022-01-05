let inputphys;
let inputchems;
let inputbio;
let average;
let sum;
inputphys = prompt("Enter the physic score");
inputchems = prompt("Enter the chemistry score");
inputbio = prompt("Enter the biology score");
let phys;
let chems;
let bio;
phys = parseInt(inputphys);
chems = parseInt(inputchems);
bio = parseInt(inputbio);
sum = phys + chems + bio;
average = sum / 3
document.write("Physic score: " + phys);
document.write("<br>");
document.write("Chemistry score: " + chems);
document.write("<br>");
document.write("Biology score: " + bio);
document.write("<br>");
document.write("The sum score is: " + sum);
document.write("<br>")
document.write("The average score is: " + average);
