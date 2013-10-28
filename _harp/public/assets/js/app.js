
$('#header-carousel').carousel({
  interval: 4000
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".clearHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".stickytop");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 3080) {
            header.removeClass('stickytop').addClass("stickybottom");
        } else {
            header.removeClass("stickybottom").addClass('stickytop');
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".stickytop-screen");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 3080) {
            header.removeClass('stickytop-screen').addClass("stickybottom-screen");
        } else {
            header.removeClass("stickybottom-screen").addClass('stickytop-screen');
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.addClass("iPhone-Two");
        } else {
            header.removeClass("iPhone-Two");
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1200) {
            header.addClass("iPhone-Three");
        } else {
            header.removeClass("iPhone-Three");
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1700) {
            header.addClass("iPhone-Four");
        } else {
            header.removeClass("iPhone-Four");
        }
    });
}); 

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 2300) {
            header.addClass("iPhone-Five");
        } else {
            header.removeClass("iPhone-Five");
        }
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".iPhone");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 2850) {
            header.addClass("iPhone-Six");
        } else {
            header.removeClass("iPhone-Six");
        }
    });
}); 

// classie - class helper functions from bonzo https://github.com/ded/bonzo

( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

// Menu Activation
var menuLeft = document.getElementById( 'cbp-spmenu' ),
				showLeftPush = document.getElementById( 'showLeftPush' ),

				body = document.body;

			showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
			};


(function ($) {
    $(document).ready(function () {
      var playerDiv = $("#ytChanPlayer");
      playerDiv.ytChanPlayer({
        username: 'soundasthma',
        maxResults: 12,
        sticky: 'AWDM5jwRSag'
      }); 
       $(".yt-channel-list").before("<p class='tagline'></p>") 
    });
  }(jQuery));
			
// jQuery Youtube Channel Player 0.1.3 Author: Marc Loehe (boundaryfunctions)

(function ($) {
  "use strict";
  $.fn.ytChanPlayer = function (settings) {
    var $ytEl = $(this),
      $ytPlayer,
      $ytList = $('<div/>', {'class': 'yt-channel-list col-sm-5'}),
      $ytListInner = $('<div/>', {'class': 'yt-channel-list-inner'}),
      $ytContainer = $('<div/>', {'class': 'embed-container'}),
      options = $.extend({}, {
        username: '',
        query: '',
        startIndex: 1,
        maxResults: 10,
        orderBy: 'published',
        playerOpts: {
          autohide: 1,
          autoplay: 0,
          egm: 1,
          fs: 1,
          rel: 0,
          showinfo: 0,
          wmode: 'opaque'
        }
      }, settings),
      videos  = [],
      // accessory functions
      buildUrl  = function () {
        var base  = 'https://gdata.youtube.com/feeds/api/videos',
          params  = [
            'alt=json',
            'orderby=' + options.orderBy,
            'start-index=' + options.startIndex,
            'max-results=' + options.maxResults,
            'callback=?'
          ];
        if (options.username !== '') {
          params.push('author=' + options.username);
        } else if (options.query !== '') {
          params.push('q=' + encodeURIComponent(options.query));
        }
        return base + '?' + params.join('&');
      },
      buildPlayer = function (id) {
        if (id.length > 0) {
          if (!$ytPlayer) {
            $ytPlayer = $('<iframe/>', {'class': 'yt-player col-sm-6'});
            $ytContainer.appendTo($ytPlayer);
          }
          var src = 'http://www.youtube-nocookie.com/embed/' + id,
            opt;
          if (options.playerOpts) {
            src += '?';
            for (opt in options.playerOpts) {
              if (options.playerOpts.hasOwnProperty(opt)) {
                src += opt + '=' + options.playerOpts[opt] + '&';
              }
            }
            src += '_a=b';
          }
          $ytPlayer.attr('src', src).prependTo($ytEl);
        }
      },
      zeroFill = function (number, width) {
        width -= number.toString().length;
        if (width > 0) {
          return [width + (/\./.test(number) ? 2 : 1) ].join('0') + number;
        }
        return (number).toString();
      },
      parseTime = function (secs) {
        var m, s = parseInt(secs, 10);
        m = Math.floor(s / 60);
        s -= (m * 60);
        return m + ':' + zeroFill(s, 2);
      };
    // setup the html
    $ytEl.addClass('yt-channel-holder');
    $ytList.appendTo($ytEl);
    $ytListInner.appendTo($ytList);
    // parse the feed
    $.getJSON(buildUrl(), function (data) {
      var i, html, vid, e;
      // add the header
      if (data.feed.entry) {
        if (options.sticky) {
          buildPlayer(options.sticky);
        } else {
          buildPlayer(data.feed.entry[0].id.$t.match('[^/]*$'));
        }
        // add the items
        for (i = 0; i < data.feed.entry.length; i++) {
          e = data.feed.entry[i];
          vid = {
            link: (e ? e.media$group.media$player[0].url : ''),
            title: (e ? e.media$group.media$title.$t : ''),
            thumb:  (e ? e.media$group.media$thumbnail[0].url : ''),
            duration: (e ? e.media$group.yt$duration.seconds : 0),
            views: (e && e.yt$statistics ? e.yt$statistics.viewCount : 0),
            id: (e ? e.id.$t.match('[^/]*$') : '')
          };
          html  = $('<div/>', {'class': 'yt-channel-video'})
            .html([
              '<a href="', vid.link, '" title="', vid.title, ' (', parseTime(vid.duration), ')" target="_blank">',
              '<img class="vid-thumb" alt="', vid.title, '" src="', vid.thumb, '"/>',
              '</a>'
            ].join(''))
            .data('id', vid.id).click(function (e) {
              e.preventDefault();
              options.playerOpts = $.extend(options.playerOpts, {autoplay: 1});
              buildPlayer($(this).data('id'));
            })
            .css('opacity', '.7')
            .hover(function () {
              $(this).stop().animate({
                opacity: '1'
              }, 400);
            }, function () {
              $(this).stop().animate({
                opacity: '.7'
              }, 200);
            });
          videos.push(vid);
          html.appendTo($ytListInner);
        }
        
      } else {
        $('<div/>', {'class': 'yt-channel-video'})
          .html('<a>NO RESULTS</a>').appendTo($ytList);
      }
    });
    return this;
  };

}(jQuery));

jQuery(function() {
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test) jQuery.support.placeholder = true;
});
// This adds placeholder support to browsers that wouldn't otherwise support it. 
$(function() {
   if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text').focus(function () {
         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('hasPlaceholder');
         }
      }).blur(function () {
         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
         }
      });
      $(':text').blur();
      $(active).focus();
      $('form:eq(0)').submit(function () {
         $(':text.hasPlaceholder').val('');
      });
   }
});
$(".form-foot").on('submit', function(e) {
  var form = this;
 
  if (_gaq) {
    e.preventDefault();
    _gaq.push(['_trackEvent']);
    setTimeout(function() { form.submit(); }, 100);
 
    return false;
  }
 
  return true;
});

jQuery(function() {
   jQuery.support.placeholder = false;
   test = document.createElement('input');
   if('placeholder' in test) jQuery.support.placeholder = true;
});
// This adds placeholder support to browsers that wouldn't otherwise support it. 
$(function() {
   if(!$.support.placeholder) { 
      var active = document.activeElement;
      $(':text').focus(function () {
         if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('hasPlaceholder');
         }
      }).blur(function () {
         if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
            $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
         }
      });
      $(':text').blur();
      $(active).focus();
      $('form:eq(0)').submit(function () {
         $(':text.hasPlaceholder').val('');
      });
   }
});

