let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let maxCount = document.getElementById("max")

function display() {
  let app = document.getElementById("counter")
  if (document.getElementById("prayers").value){
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
  let value = document.getElementById("prayers").value;
  document.getElementById("prayerName").textContent = value
  countEl.textContent = 0
  count = 0


}

function increment() {
  count++
  countEl.textContent = count
  if (count >= 50) {
    console.log(count)
    maxCount.textContent = "MAX CAPACITY REACHED!"

  }
}

function subtract() {
  if (count > 0){
  count--
  console.log(count)
  countEl.textContent = count
  if (count < 50) {
    maxCount.textContent = ""
  }
}
}
// function save() {
//   let countStr = count + " - "
//   saveEl.textContent += countStr
//   countEl.textContent = 0
//   count = 0
//   maxCount.textContent = ""
// }

function save() {
  let value = document.getElementById("prayers").value;
  if (value === "Fajr"){
    let fajrSavedCount = document.getElementById("fajr")
    fajrSavedCount.textContent = "Fajr: " + count
  } else if (value === "Zohar"){
    let zoharSavedCount = document.getElementById("zohar")
    zoharSavedCount.textContent = "Zohar: " + count
} else if (value === "Asar"){
  let asarSavedCount = document.getElementById("asar")
  asarSavedCount.textContent = "Asar: " + count
} else if (value === "Magrib"){
  let magribSavedCount = document.getElementById("magrib")
  magribSavedCount.textContent = "Magrib: " + count
} else if (value === "Isha"){
  let ishaSavedCount = document.getElementById("isha")
  ishaSavedCount.textContent = "Isha: " + count
} 
countEl.textContent = 0
count = 0
maxCount.textContent = ""
}
display()  


