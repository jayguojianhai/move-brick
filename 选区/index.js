$(function () {
  
  var box = $('#box');
  var firstX = 0;
  var firstY = 0;
  var currentNum = 0; //当前创建的第几个框
  var currentX = 0; //当前宽度
  var currentY = 0; //当前高度
  var needChange = true; //用于记录是否需要时时改变宽高

  box.on({
    mousedown : function (e) {
      var e = e || event;
      var me = $(this);
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      var x = mouseX - me.offset().left;
      var y = mouseY - me.offset().top;

      firstX = mouseX;
      firstY = mouseY;
      currentNum++;
      needChange = true;  //重置

      $('<div>')
        .appendTo(box)
        .attr({
          'class' : 'new-box new-box' + currentNum
        })
        .css({
          'top' : y + 'px',
          'left' : x + 'px'
        });

    },
    mousemove : function (e) {
      var e = e || event;
      var me = $(this);
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      var x = mouseX - firstX;
      var y = mouseY - firstY;

      me.addClass('create-box');

      if(needChange) {
        $('.new-box' + currentNum).css({'height' : y + 'px', 'width' : x + 'px'});
      }
    },
    mouseup : function (e) {
      var e = e || event;
      var me = $(this);
     
      needChange = false;
      me.removeClass('create-box');
    }



  });


  
























  //显示当前坐标值
  function showVal(x, y) {
    var spanX = $('.x');
    var spanY = $('.y');
    spanX.text(x);
    spanY.text(y);
  }


});