$(document).ready(function() {
  $("#task").focus();
  var id = 0;
  $("form#skylark").submit(function(event) {
    event.preventDefault();
    var task_tisk = $("input#task").val();
    var priori = $("select#prioritaah").val();
    var task = {
      nome: task_tisk,
      priority: priori,
      ident: id++,
    };

    $("#banana_patch").append("<li><span class='task' id=" + task.ident + ">" + task.nome + "</span>");

    $(".task").last().click(function() {
      $("#show-tusk").show();
      $(".tusk").text(task.nome);
      $(".priority").text(task.priority);
      $(".id_span").text(task.ident);
    });

    $(".task").last().dblclick(function() {
      $("span#" + task.ident).toggleClass("done");
    });

    $("#banana_patch").show();
    this.reset();
  });



});
