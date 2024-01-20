const list = document.getElementById("list");
const add = document.getElementById("add");
const remove = document.getElementById("Remove");
const done = document.getElementById("done");

let tasks = []; // array of tasks

add.addEventListener("click", function() {
    addtasks();
});

complete.addEventListener("click", function() {
    completedTask();
});

function addtasks() {

    // create a new list item and checkbox
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Append the checkbox to the list item
    li.appendChild(checkbox);

    // Get the task from the input field
    let list = document.getElementById("list").value;

    if (list == " ") {
        alert("Add Something!!!");
    } else {
        // Append the task text to the list item
        li.appendChild(document.createTextNode(list));
        
        // Append the list item to the task list
        document.getElementById("myUL").appendChild(li);
    }

    // clear the input field
    document.getElementById("list").value = " ";

}

function completedTask() {

    // get all checked checkboxes in the task list
    let done = document.querySelectorAll("#myUL li input[type='checkbox']:checked");

    // check if checkbox is not selected
    if (done.length === 0) {
        alert("Please select a task to complete.");
    } else {

        // Iterate over selected tasks
        done.forEach(checkbox => {

            // clone the entire list item
            let completetask = checkbox.parentElement.cloneNode(true);
            
            // Append the cloned task to the completed task list
            document.getElementById("taskUL").appendChild(completetask);
            
            // Remove the original task from the task list
            checkbox.parentElement.remove();
        });
    }
}
