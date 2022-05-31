let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let listitems = [];
var userinput = {
<<<<<<< HEAD
  id: "",
=======
>>>>>>> 2d949dd8b772b0141202600f288bbbf1272adced
  title: "",
  content: "",
  date: "",
  time: "",
  color: "",
};
function onloading() {
  saveToList();
  saveToLocal();
  push();
  add();
  document.getElementById("date").innerHTML = currentDate.toDateString();
  console.log(listitems);
}

function save() {
  saveToList();
<<<<<<< HEAD
=======
  userinput.date = cDay + "/" + cMonth + "/" + cYear;
  userinput.time = currentDate.getHours() + ":" + currentDate.getMinutes();
>>>>>>> 2d949dd8b772b0141202600f288bbbf1272adced
  userinput.title = document.getElementById("inputTitle").value;
  var content = document.getElementById("inputContent").value;
  var content2 = content.trim();
  userinput.content = content2;
  userinput.color = document.getElementById("cl-1").value;
  userinput.time = currentDate.getHours() + ":" + currentDate.getMinutes();
  userinput.date = cDay + "/" + cMonth + "/" + cYear;
  document.getElementById("form").reset();
  if (userinput.title !== "" || userinput.content !== "") {
    listitems.push(userinput);
  } else {
    console.log("create note");
  }
  saveToLocal();
}

function saveToLocal() {
  localStorage.setItem("userinput", JSON.stringify(listitems));
}
function saveToList() {
  localData = JSON.parse(localStorage.getItem("userinput"));
  if (localData == null || undefined) {
    listitems = [
      {
        title: "Confucius",
        content:
          "“Set your heart on doing good. Do it over and over again, and you will be filled with joy.”",
        date: cDay + "/" + cMonth + "/" + cYear,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
<<<<<<< HEAD
        color: "#E0ECE4",
=======
>>>>>>> 2d949dd8b772b0141202600f288bbbf1272adced
      },
    ];
    console.log("null and undefined");
  } else {
    listitems = JSON.parse(localStorage.getItem("userinput"));
<<<<<<< HEAD
=======
    console.log("not working");
>>>>>>> 2d949dd8b772b0141202600f288bbbf1272adced
  }
}

const push = () => {
  var data = "";
  console.log(listitems);
  data = listitems.map((ci, idx) => {
<<<<<<< HEAD
    return `
   <div id="nt-${idx}" class="note-container" style="background-color: ${ci.color}">
    <div class="card-body">
        <h1 class="note-title">${ci.title}</h1>
        <textarea id="notes" class="note-content" rows="5">
       ${ci.content}  </textarea>
    </div>
    <div class="prebtnContainerMain">
        <span class="dateNTime p-1">${ci.date}</span>
        <div class="preContainer" >
        <button class="prebtn" style="width: 2rem;" onclick="generatePDF(${idx})">
            <i class="bi biBtn bi-filetype-pdf"></i>
        </button>
        <button class="prebtn" style="width: 2rem;" onclick="del(${idx})">
        <i class="bi biBtn bi-trash"></i>
        </button>
        <button class="prebtn" style="width: 2rem;" onclick="expand(${idx})">
           <i class="bi biBtn bi-arrows-angle-expand"></i>
       </button>
        </div>
    </div>
</div>
    `;
=======
    return `<div id="${idx}" class="note-container">
            <div class="card-body">
            <h1 class="note-title">${ci.title}</h1>
            <textarea id="notes" class="note-content" rows="5" contenteditable =""> ${ci.content}  </textarea>
            </div><div class="btn-con">
            <span class=" dateNTime p-1" >${ci.date}</span>
              <span class="bg-note-container">
                      <span class="bg-note-color cl-1" onclick="setBg('#676FA3',${idx})"></span>
                      <span class="bg-note-color cl-2" onclick="setBg('#7900FF',${idx})"></span>
                      <span class="bg-note-color cl-3" onclick="setBg('#548CFF',${idx})"></span>
                      <span class="bg-note-color cl-4" onclick="setBg('#1A374D',${idx})"></span>
                      <span class="bg-note-color cl-5" onclick="setBg('#F2789F',${idx})"></span>
                      <span class="bg-note-color cl-6" onclick="setBg('#519259',${idx})"></span>
                      </span>
            <button class="btn btn-sm d-inline float-end" style="width: 2rem;" onclick="expand(${idx})" >
            <i class="bi bi-arrows-angle-expand"></i>
            </button>

            <button class="btn btn-sm d-inline float-end" style="width: 2rem;" onclick="del(${idx})">
            <i class="bi bi-trash" ></i>
            </button>

            <button class="btn btn-sm d-inline float-end" style="width: 2rem;" onclick="generatePDF(${idx})" >
            <i class="bi bi-filetype-pdf"></i>
            </button>
            </div> </div>`;
>>>>>>> 2d949dd8b772b0141202600f288bbbf1272adced
  });
  document.getElementById("cards").innerHTML =
    createNoteArea + data.reverse().join("");
};
function del(id) {
  listitems.splice(id, 1);
  push();
  saveToLocal();
}
function add() {
  save();
  push();
}
function edit() {
  document.getElementById("btncontent").contenteditable = "true";
}
<<<<<<< HEAD
var createNoteArea = `<span id="createNote" class="input-field">
    <form id="form" class="inputField">
        <input id="inputTitle" type="text" placeholder="Title..">
        <textarea id="inputContent" rows="30" placeholder="Notes..."></textarea>
        <span class="bg-note-container">
            <i class="bi bi-palette-fill"></i>
            <input type="color" id="cl-1"  class="bg-note-color cl-1" value="#E0ECE4" list="profilecolorslist"
           onchange="setBg('#F9EBC8')"
             />
        </span>
         <datalist id="profilecolorslist">
                <option value="#F9EBC8">
                <option value="#EDEEF7">
                <option value="#F4F9F9">
                <option value="#C9CBFF">
                <option value="#FCF876">
                <option value="#555555">
                <option value="#B4FF9F">
                <option value="#A0BCC2">
                <option value="#FFEEEE">
                <option value="#B8FFF9">
                <option value="#F7F7F7">
                <option value="#BFFFF0">
                <option value="#D9D7F1">
                <option value="#C3B091">
                <option value="#FFCCD2">
            </datalist>
        <button onclick="add()" id="addItem" type="button" value="add"><i class="
                       bi bi-plus-lg"></i></i></button>
    </form>
</span>
                      `;

function expand(id) {
  var cardExpand = document.getElementById(`nt-${id}`);
  cardExpand.classList.toggle("expanded");
}
function setBg(color) {
  document.getElementById(
    "form"
  ).style.backgroundColor = `${event.target.value}`;
  console.log(event.target.value);
}

function generatePDF(id) {
  var doc = new jsPDF();
  doc.fromHTML(
    document.getElementById(`nt-${id}`),
    15,
    15,
    {
      width: 170,
    },
    function (a) {
      doc.save(`mynote${id}.pdf`);
=======
var createNoteArea = `<span class="input-field">
                      <form id="form" class="inputField">
                      <input id="inputTitle" type="text" placeholder="Title..">
                      <textarea id="inputContent" rows="30" placeholder="Notes..."></textarea>
                      <button onclick="add()" id="addItem" type="button" value="add"
                       ><i class="
                       bi bi-plus-lg"></i></i></button>
                      </form>
                      </span>
                      `;
function expand(id) {
  var cardExpand = document.getElementById(`${id}`);
  cardExpand.classList.toggle("expanded");
}
function setBg(color, id) {
  var bgColor = document.getElementById(`${id}`);
  bgColor.style.backgroundColor = color;
  userinput.color = color;
}

function generatePDF(id) {
  var doc = new jsPDF(); //create jsPDF object
  doc.fromHTML(
    document.getElementById(id), // page element which you want to print as PDF
    15,
    15,
    {
      width: 170, //set width
    },
    function (a) {
      doc.save(`mynote${id}.pdf`); // save file name as HTML2PDF.pdf
>>>>>>> 2d949dd8b772b0141202600f288bbbf1272adced
    }
  );
}
