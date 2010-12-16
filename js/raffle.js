$(document).ready(function() {
  Raffle.setup();
});

var Raffle = {
  contestants: new Array('One', 'Two', 'Three', 'Four'),
  winner: null,
    
  setup: function() {
    $('#chooseit').live('click', Raffle.on_choose);
  },
  
  on_choose: function() {
    Raffle.insert_previous_winner_into_list();
    $('#chooser, #chooseit').hide();
    $('#chooser h1').html("Computing.....");
    $('#chooser').fadeIn();
    setTimeout('Raffle.pick_winner()', 1600);    
    return false;
  },
  
  pick_winner: function() {
    $('#chooser').hide();
    var randomnumber = Math.floor(Math.random()*Raffle.contestants.length);
    Raffle.winner = Raffle.contestants.splice(randomnumber,1);
    Raffle.display_winner();
  },
  
  insert_previous_winner_into_list: function() {
    if(Raffle.winner) {
      $('#winners ol').append("<li>" + Raffle.winner + "</li>");
    }
  },
  
  display_winner: function() {
    $('#chooser h1').html(Raffle.winner + "!");
    $('#chooseit span').html("Let's see who's next!");
    $('#chooseit').show();
    $('#chooser').fadeIn();
  }

};
