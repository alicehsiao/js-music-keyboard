$(document).ready(() => {
  const notes = ["c", "d", "e", "f", "g", "a", "b"]

  for (let note of notes){
    $(`.${note}`).on('click', function(){
      $(`#${note}Audio`).load();
      $(`#${note}Audio`).get(0).play();
    });
  }


  $('body').on('keypress', function(event){
    $(`#${event.key}Audio`).load();
    $(`#${event.key}Audio`).get(0).play();
  });
})
