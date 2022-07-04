
var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    $('a').css( 'color', color );
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
  }
}
var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';

    LinksSetColor('powderblue');
  }
  else{
    Body.setBackgroundColor('white');
    // target.style.backgroundColor = 'white';
    Body.setColor('black');
    // target.style.color = 'black';
    self.value='night';

    LinksSetColor('blue');
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    //   alist[i].style.color = 'blue';
    //   i = i + 1;
    // }
  }
}
