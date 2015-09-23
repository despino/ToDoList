$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDueDate = $("input#new-due-date").val();
    var inputtedTask = $("input#new-task").val();
    var newList = { name: inputtedName, dueDate: inputtedDueDate, task: inputtedTask };
    var check = "<div class='" + newClass + "'><span class='checkbox-wrapper'><input id='checkbox-1' type='checkbox'></span></div>";
    var newClass = "newClass" + appendTask;
    var taskList = "taskList" + appendTask;
    var contact = "contact" + appendTask;
    var show_items = "show-items" + appendTask;
    var due_date = "due-date" + appendTask;
    var name = "name" + appendTask;
    var task = "task" + appendTask;
    var delButtonId = "del_btn" + appendTask;

    $("ul#items").append("<li><span id='" + contact + "'>" + newList.name +  "</span></li>");
    $("input#new-name").val("");
    $("input#new-due-date").val("");
    $("input#new-task").val("");

    var appendTask = 0;
    function addDiv(){
      $("div#" + taskList).append("<div class ='row'><div class='col-md-6'>");
      $("div#" + taskList).append("<div id='" + show_items + "'>");
      $("div#" + taskList + "h2").append("<h2></h2>");
      $("div#" + taskList + "h2").append(check);
      $("div#" + taskList).append("<p>Name: <span id=" + name + "></span></p>");
      $("div#" + taskList).append("<p>Due Date: <span id=" + due_date + "></span></p>");
      $("div#" + taskList).append("<p>Task: <span id=" + task + "></span></p>");
      // s += "<button id='" + delButtonId + "'>Delete</button>";
      $("div#" + taskList).append("</div></div>");

      appendTask++;
    }

    $("#" + contact).last().click(function() {
      addDiv();


      // $("#show-items").show();
      // addDiv();
      // $("#" + show_items).show();
      // $("#" + show_items + "h2").text(newList.name);
      // $("#" + show_items + "h2").append(check);
      // $("." + name).text(newList.name);
      // $("." + due_date).text(newList.dueDate);
      // $("." + task).text(newList.task);
    });

    // $(".checkbox-wrapper").click(function() {
    //   alert("checked!");
    // });



  });

});


// var addCounter = 1;
// function addRow() {
//   var incButtonId = "inc_btn" + addCounter;
//   var decButtonId = "dec_btn" + addCounter;
//   var resButtonId = "res_btn" + addCounter;
//   var delButtonId = "del_btn" + addCounter;
//   var s = "<div class='row'><div class='col-md-12'>";
//   s += "<button id='" + incButtonId + "'>+</button>";
//   s += "<label id='" + "counter" + addCounter + "'>0</label>";
//   s += "<button id='" + decButtonId + "'>-</button>";
//   s += "<button id='" + resButtonId + "'>Reset</button>";
//   s += "<button id='" + delButtonId + "'>Delete</button>";
//   s += "</div></div>";
//   $("#container2").append(s);
//
//   var cnt = newCounter();
//   var result = $("#counter" + addCounter);
//   $("#"+incButtonId).click(function() {
//     result.html(cnt.more());
//   });
//
//   $("#"+decButtonId).click(function() {
//     result.html(cnt.less());
//   });
//
//   $("#"+resButtonId).click(function() {
//     result.html(cnt.reset());
//   });
//
//   $("#"+delButtonId).click(function() {
//     $("#"+delButtonId).parent().parent().remove();
//   });
//
//   addCounter++;
// }
