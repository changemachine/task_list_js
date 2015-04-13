$(document).ready(function() {
  $("#task").focus();
  $("form#skylark").submit(function(event) {
    event.preventDefault();
    var task_tisk = $("input#task").val();
    var priori = $("select#prioritaah").val();
    var task = { nome: task_tisk, priority: priori };

    $("#banana_patch").append("<li><span class='task'>" + task.nome + "</span></li>");

    $(".task").last().click(function() {
      $("#show-tusk").toggle();
      $(".tusk").text(task.nome);
      $(".priority").text(task.priority);
    });

    $("#banana_patch").show();
    this.reset();
  });

});
