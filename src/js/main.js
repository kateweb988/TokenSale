document.addEventListener("DOMContentLoaded", () => {
});
$(document).ready(function () {
   $('.js-example-basic-single').select2();
});
$('body').on('click', '.password-control', function () {
   if ($('#password-input').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input').attr('type', 'text');
   } else {
      $(this).removeClass('view');
      $('#password-input').attr('type', 'password');
   }
   return false;
});
$('body').on('click', '.password-control2', function () {
   if ($('#password-input2').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input2').attr('type', 'text');
   } else {
      $(this).removeClass('view');
      $('#password-input2').attr('type', 'password');
   }
   return false;
});
$('body').on('click', '.password-control3', function () {
   if ($('#password-input3').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input3').attr('type', 'text');
   } else {
      $(this).removeClass('view');
      $('#password-input3').attr('type', 'password');
   }
   return false;
});
$('body').on('click', '.password-control4', function () {
   if ($('#password-input4').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input4').attr('type', 'text');
   } else {
      $(this).removeClass('view');
      $('#password-input4').attr('type', 'password');
   }
   return false;
});
$(document).ready(function () {
   $('.select').each(function () {
      const _this = $(this),
         selectOption = _this.find('option'),
         selectOptionLength = selectOption.length,
         selectedOption = selectOption.filter(':selected'),
         duration = 450; // длительность анимации 

      _this.hide();
      _this.wrap('<div class="select"></div>');
      $('<div>', {
         class: 'new-select',
         text: _this.children('option:disabled').text()
      }).insertAfter(_this);

      const selectHead = _this.next('.new-select');
      $('<div>', {
         class: 'new-select__list'
      }).insertAfter(selectHead);

      const selectList = selectHead.next('.new-select__list');
      for (let i = 1; i < selectOptionLength; i++) {
         $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
               text: selectOption.eq(i).text()
            })
         })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
      }

      const selectItem = selectList.find('.new-select__item');
      selectList.slideUp(0);
      selectHead.on('click', function () {
         if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
               let chooseItem = $(this).data('value');

               $('select').val(chooseItem).attr('selected', 'selected');
               selectHead.text($(this).find('span').text());

               selectList.slideUp(duration);
               selectHead.removeClass('on');
            });

         } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
         }
      });
   });
});
// Burger
$('.menu .button').click(function (event) {
   $(this).toggleClass('active');
   $('.burger').toggleClass('active');
   return false;
});
$('.my').change(function () {
   if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
   else $(this).prev().text('Выберите файлы');
});
$(window).on('load', function () {
   $(".calc__btn_one").prop('disabled', !$("input[name='formK']:checked").length);
   $("input[name='formK']").on('change', function () {
      $(".calc__btn_one").prop('disabled', !$("input[name='formK']:checked").length);
   });
   $(".calc__btn_two").prop('disabled', !$("input[name='formT']:checked").length);
   $("input[name='formT']").on('change', function () {
      $(".calc__btn_two").prop('disabled', !$("input[name='formT']:checked").length);
   });
   $(".calc__btn_three").prop('disabled', !$("input[name='formA']:checked").length);
   $("input[name='formA']").on('change', function () {
      $(".calc__btn_three").prop('disabled', !$("input[name='formA']:checked").length);
   });
   $(".calc__btn_fourth").prop('disabled', !$("input[name='formA']:checked").length);
   $("input[name='formA']").on('change', function () {
      $(".calc__btn_fourth").prop('disabled', !$("input[name='formA']:checked").length);
   });
});
$('.calc__btn_one').click(function (event) {
   $('.calc__one').css('display', 'none');
   $('.calc__two').fadeIn();
   return false;
});
$('.calc__btn_two').click(function (event) {
   $('.calc__two').css('display', 'none');
   $('.calc__three').fadeIn();
   return false;
});
$('.calc__btn_three').click(function (event) {
   $('.calc__three').css('display', 'none');
   $('.calc__fourth').fadeIn();
   return false;
});
$('.calc__btn_three').click(function (event) {
   $('.calc__three').css('display', 'none');
   $('.calc__four').fadeIn();
   return false;
});
// Accordeon
$(document).ready(function () {
   $(".set > a").on("click", function () {
     if ($(this).hasClass('active')) {
       $(this).removeClass("active");
       $(this).siblings('.content').slideUp(200);
       $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
     }
     else {
       $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
       $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
       $(".set > a").removeClass("active");
       $(this).addClass("active");
       $('.content').slideUp(200);
       $(this).siblings('.content').slideDown(200);
     }
     return false
   });
 
 });
jQuery('img.svg').each(function () {
   var $img = jQuery(this);
   var imgID = $img.attr('id');
   var imgClass = $img.attr('class');
   var imgURL = $img.attr('src');

   jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image ID to the new SVG
      if (typeof imgID !== 'undefined') {
         $svg = $svg.attr('id', imgID);
      }
      // Add replaced image classes to the new SVG
      if (typeof imgClass !== 'undefined') {
         $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
         $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

   }, 'xml');

});