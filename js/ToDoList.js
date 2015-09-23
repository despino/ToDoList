$(document).ready(function() {

  // --- begin form submit
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-name").val();
    var inputtedDueDate = $("input#new-due-date").val();
    var inputtedTask = $("input#new-task").val();
    var newItem = { name: inputtedName, dueDate: inputtedDueDate, task: inputtedTask };
    $("ul#items").append("<li><span id=''>" + newItem.name +  "</span></li>");
    $("ul#items").last().click(function(){
      var html = "";
      html += "<div>";

      html += "<div>";
      html += "Name: " + inputtedName;
      html += "</div>";
      html += "<div>";
      html += "<input type='checkbox'></input><label>Completed</label>";
      html += "</div>";
      html += "<div>";
      html += "Due date: " + inputtedDueDate;
      html += "</div>";
      html += "<div>";
      html += "Task: " + inputtedTask;
      html += "</div>";
      html += "<div>";
      html += "<button>Delete</button>";
      html += "</div>";

      html += "</div>";
      $("#taskList").append(html);
      $("#taskList").last().find("button").click(function(){
        $(this).parent().parent().remove();
      });
    });
    $("input#new-name").val("");
    $("input#new-due-date").val("");
    $("input#new-task").val("");
  });
  // --- end form submit

});
