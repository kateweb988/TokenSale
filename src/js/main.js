document.addEventListener("DOMContentLoaded", () => {
});

(function ($) {
   var elActive = '';
   $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
         color: "#888888", // color
         backgroundColor: "#FFFFFF", // background
         change: function () { }, // event change
      }, options);

      return this.each(function () {

         var selectParent = $(this);
         list = [],
            html = '';

         //parameter CSS
         var width = $(selectParent).width();

         $(selectParent).hide();
         if ($(selectParent).children('option').length == 0) { return; }
         $(selectParent).children('option').each(function () {
            if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
            list.push({
               value: $(this).attr('value'),
               text: $(this).text(),
               selected: s,
            })
         })

         // style
         var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

         html += "<ul class='selectCF'>";
         html += "<li>";
         html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
         html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
         html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
         html += "<ul>";
         $.each(list, function (k, v) {
            s = (v.selected == 1) ? "selected" : "";
            html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
         })
         html += "</ul>";
         html += "</li>";
         html += "</ul>";
         $(selectParent).after(html);
         var customSelect = $(this).next('ul.selectCF'); // add Html
         var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
         var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
         var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

         // handle active select
         $(customSelect).unbind('click').bind('click', function (e) {
            e.stopPropagation();
            if ($(this).hasClass('onCF')) {
               elActive = '';
               $(this).removeClass('onCF');
               $(this).removeClass('searchActive'); $(seachElInput).val('');
               $(seachElOption).show();
            } else {
               if (elActive != '') {
                  $(elActive).removeClass('onCF');
                  $(elActive).removeClass('searchActive'); $(seachElInput).val('');
                  $(seachElOption).show();
               }
               elActive = $(this);
               $(this).addClass('onCF');
               $(seachEl).children('input').focus();
            }
         })

         // handle choose option
         var optionSelect = $(customSelect).children('li').children('ul').children('li');
         $(optionSelect).bind('click', function (e) {
            var value = $(this).attr('value');
            if ($(this).hasClass('selected')) {
               //
            } else {
               $(optionSelect).removeClass('selected');
               $(this).addClass('selected');
               $(customSelect).children('li').children('.titleCF').html($(this).html());
               $(selectParent).val(value);
               settings.change.call(selectParent); // call event change
            }
         })

         // handle search 
         $(seachEl).children('input').bind('keyup', function (e) {
            var value = $(this).val();
            if (value) {
               $(customSelect).addClass('searchActive');
               $(seachElOption).each(function () {
                  if ($(this).text().search(new RegExp(value, "i")) < 0) {
                     // not item
                     $(this).fadeOut();
                  } else {
                     // have item
                     $(this).fadeIn();
                  }
               })
            } else {
               $(customSelect).removeClass('searchActive');
               $(seachElOption).fadeIn();
            }
         })

      });
   };
   $(document).click(function () {
      if (elActive != '') {
         $(elActive).removeClass('onCF');
         $(elActive).removeClass('searchActive');
      }
   })
}(jQuery));

$(function () {
   var event_change = $('#event-change');
   $(".select").selectCF({
      change: function () {
         var value = $(this).val();
         var text = $(this).children('option:selected').html();
         console.log(value + ' : ' + text);
         event_change.html(value + ' : ' + text);
      }
   });
   $(".test").selectCF({
      color: "#FFF",
      backgroundColor: "#663052",
   });
})
$('.articmodal-close').click(function (e) {
   $.arcticmodal('close');

});
$('.calc').click(function (e) {
   e.preventDefault();
   $('#code').arcticmodal({
   });
});
$('.p1').click(function (e) {
   e.preventDefault();
   $('#p1').arcticmodal({
   });
});
$('.p5').click(function (e) {
   e.preventDefault();
   $('#success').arcticmodal({
   });
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
(function () {
   let speed = 2; // Скорость скролла.

   let scroll = document.querySelector('.wallet-right__flex');

   let left = 0; // отпустили мышку - сохраняем положение скролла
   let drag = false;
   let coorX = 0; // нажали мышку - сохраняем координаты.

   scroll.addEventListener('mousedown', function (e) {
      drag = true;
      coorX = e.pageX - this.offsetLeft;
   });
   document.addEventListener('mouseup', function () {
      drag = false;
      left = scroll.scrollLeft;
   });
   scroll.addEventListener('mousemove', function (e) {
      if (drag) {
         this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed;
      }
   });

})();