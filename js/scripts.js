$(document).ready(function() {

  $("form#skylark").submit(function(event) {
    var task_tisk = $("input#task").val();
    var priori = $("input#prioritaah").val();

    var task = { nome: task_tisk, priority: priori };

    $("#banana_patch").append("<li><span class='task'>" + task.nome + "</span></li>");


    event.preventDefault();
  });

});
