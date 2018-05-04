  var result;
  $(document).ready(function(){
  $('form#pingpong').submit(function(event){
  $('ul.data').text('');
  result=parseInt($('input#txt').val());
  React();
  $('input#txt').val('');
  event.preventDefault();
  });
  });

  function React(){
     for(var counter=1;counter<=result;counter++){
        if(counter % 15==0){
          $('ul.data').append('<li>pingpong</li>');
        }
        else if(counter % 5==0){
          $('ul.data').append('<li>pong</li>');
        }
        else if(counter % 3==0){
          $('ul.data').append('<li>ping</li>');
        }
        else{
            $('ul.data').append('<li>'+counter+'</li>');
        }
     }
  }
