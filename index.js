let count = 0;
let countEle = document.getElementById("count");
function addList() {
  let div = document.createElement("DIV");
  //   let t = document.createTextNode(newTime);
  //   div.appendChild(t);
  let newList = document.getElementById("todo-list");

  let newTask = document.getElementById("new-task").value;
  // list.insertBefore(div,list.childNodes[0]);
  newList.innerHTML =
    `<li id="list">
    <div class="todo-list">
        <p class="item1">
        <input class="check" type="checkbox" value="desc" style="margin-right: 20px"/>${newTask}
        </p>
    </div>
    <div class="edit">
    <div id="done" onClick="taskDone()">DONE</div>
    <span id="item2" value="edit"><i class="fas fa-edit"></i></span>

    </div></li>` + newList.innerHTML;
  count++;
  countEle.innerHTML = `count:${count}`;
}
const deleteEle = document.querySelector("#del");
deleteEle.addEventListener("click", deleteTodos);

function deleteTodos() {
  const checkedTodos = document.querySelectorAll("[type='checkbox']");
  checkedTodos.forEach((checkedEle) => {
    if (checkedEle.checked) {
      checkedEle.parentElement.parentElement.parentElement.remove();
      count--;
      countEle.innerHTML = `count:${count}`;
    }
  });
}
let val = true;
function taskDone() {
  if (val) {
    document.getElementById("done").style.backgroundColor = "red";
    val = false;
  } else {
    document.getElementById("done").style.backgroundColor = "black";
  }
}
const editEle = document.querySelector("#item2");
editEle.addEventListener("click", edit);
function edit() {}
