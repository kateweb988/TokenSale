document.addEventListener("DOMContentLoaded", () => {
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
$(document).mouseup(function (e) {
   var container = $(".drop");
   if (container.has(e.target).length === 0) {
      container.removeClass('visible');
   }
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