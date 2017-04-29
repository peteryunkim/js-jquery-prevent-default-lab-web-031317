$(document).ready(function(){
  submitForm()
});

// define functions here
function submitForm(){
  $('form').on('submit', function(e){
    var thing = $('#item').val();
    var listed = `<li> ${thing} </li>`
    $('#list ol').append(listed);
    e.preventDefault();
  })

}
