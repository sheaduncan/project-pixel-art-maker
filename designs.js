// When the submit button is clicked this calls makeGrid() function
document.getElementById('sizePicker').addEventListener('submit', function makeGrid(event) {
  //sets the table to insert rows and cells
  const table = document.getElementById('pixelCanvas')
  //clears the table children
  table.innerHTML = "";
  //this takes the users input on grid height and sets it rows variable
  var rows = document.getElementById('inputHeight').value;
  //this takes the user input on grid width and sets its columns variable
  var columns = document.getElementById('inputWidth').value;
  //for loop to insert rows based on rows input
  for (r = 1; r <= rows; r++) {
    var row = table.insertRow(0);
    //for loop to insert the cells into the row and set an onclick to call
      //setcolor function
    for (c = 1; c <= columns; c++) {
      var cell = row.insertCell(0);
      cell.setAttribute("onclick", "setColor(event)");
    };
  };
  event.preventDefault();
});

//this function gets the value of the colorPicker and sets the backgroundcolor
  //of the cell clicked
function setColor() {
  var target = event.target;
  target.style.backgroundColor = document.getElementById('colorPicker').value;
}
