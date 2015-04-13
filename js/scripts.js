$(document).ready(function() {

  $("form#skylark").submit(function(event) {
    var task_tisk = $("input#task").val();
    var priori = $("select#prioritaah").val();

    var task = { nome: task_tisk, priority: priori };

    $("#banana_patch").append("<li><span class='task'>" + task.nome + "</span></li>");

    $(".task").click(function() {
      $("#show-tusk").toggle();
      $(".task").text(task.nome);
      $(".priority").text(task.priority);
    })

    $("#banana_patch").show();
    event.preventDefault();
  });

});
