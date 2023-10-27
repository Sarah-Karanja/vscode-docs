const localStorage = window.localStorage;

const initialize = () => {
if (localStorage) {
const count = localStorage.getItem("visitCount") || 0;
const newCount = parseInt(count) + 1;
localStorage.setItem("visitCount", newCount);
}
updateDOM();
};
const showAllStoredKeyValues = () => {
console.log(`we have ${localStorage.length} values`);
const ul = document.getElementById("storedItems");
ul.innerHTML = "";
for (let index = 0; index < localStorage.length; index++) {
const key = localStorage.key(index);
var li = document.createElement("li");
li.appendChild(
document.createTextNode(`${key} = ${localStorage.getItem(key)}`)
);
ul.appendChild(li);
}
};
const updateDOM = () => {
const count = localStorage.getItem("visitCount") || 0;
const storedPreferences = localStorage.getItem("preference");
const preference = storedPreferences
? JSON.parse(storedPreferences)
: {};
document.getElementById(
"visitCount"
).innerHTML = `Visit count ${count}`;
document.body.style.background = preference.color || "white";
showAllStoredKeyValues();
};
const setColorPreference = color => {
const localStorage = window.localStorage;
const preference = { color }
localStorage.setItem("preference", JSON.stringify(preference));
updateDOM();
};
const removeCount = () => {
localStorage.removeItem("visitCount");
updateDOM();
};
const clearAll = () => {
localStorage.clear();
updateDOM();
};