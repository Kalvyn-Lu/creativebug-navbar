(function(){window.cbSocial=window.cbSocial||{};window.cbSocial.updateLikes=function(d,c){$counter_span=$(".count_"+d.data("id"));$counter_span.text(c.count)};window.cbSocial.deleteComment=function(c){if(CB.user_id!==null){CB.delete_comment(c,function(e){var d=$(".comment-"+c);if(d.parent().hasClass("comments-frame")){b(-1)}else{a($("#expand-"+d.parent().attr("id")),-1)}var g=parseInt($(".comments-cnt-"+e.item_id).first().text());g--;console.log(g);$(".comments-cnt-"+e.item_id).text(g);var f=$(".comment-"+c);f.fadeOut(500,function(){f.remove()});$("#replies-"+c).remove();$("#reply-"+c).remove()})}};window.cbSocial.reportComment=function(c){if(CB.user_id!==null){CB.report(c,function(d){console.log(d)})}};window.cbSocial.likeComment=function(d){if(CB.user_id!==null){var c=$("."+d);CB.like(c,function(e){var g=c.hasClass("liked")?-1:1;var f=c.find(".likes-total");f.text(parseInt(f.first().text(),10)+g);c.toggleClass("liked")})}};function b(d){var c=$(".comments-total");c.text(parseInt(c.text(),10)+d)}function a(c,e){var d=+c.data("count")+e;c.addClass("on");c.data("count",d);c.attr("data-count",d);c.find(".reply-count").text(d)}window.updateLikes=window.cbSocial.updateLikes;window.deleteComment=window.cbSocial.deleteComment;window.reportComment=window.cbSocial.reportComment;window.likeComment=window.cbSocial.likeComment})();$(function(){$(".cb-photo-modal [data-toggle=popover]").each(function(c,d){var b=$(d);b.popover({container:b.closest(".cb-photo-modal"),})});$(".toggle").unbind("click");toggler();var a=$(".js-imagefeed-next");fetchInstagram(a);a.on("click",function(b){fetchInstagram(a)})});function deleteImage(b){var a=$(b).parent().parent();var c=$($(b).parent().children()[0]).data("id");$(a).remove();$.ajax({url:CB.config.api.member.delete_image,type:"POST",dataType:"json",data:{api_key:CB.config.api.key,id:c,format:"json"},success:function(d){if(d.success===true){}}})}function fetchInstagram(b){var a=$("#instagram-gallery-thumbs");$.ajax({url:"/services/mediafeed/instagram",type:"get",dataType:"json",data:{max_id:b.data("imagefeed-last-id"),},error:function(c){console.log(c)},success:function(f,c,d){if(f.results.length){var e="";f.results.forEach(function(g){e+=$.template("template_imagefeed_instagram",g).trim()});$("#instagram-gallery-thumbs").append(e);b.data("imagefeed-last-id",f.results[f.results.length-1]["id"])}else{b.hide()}},})}function toggleFollow(a){CB.follow(a)}function toggleLike(b,a){CB.like(b,function(c){if(a){$.each(a,function(d,e){window[e](b,c)})}})}function toggler(){$.each($(".toggle"),function(c,d){a(d)});function b(e,d,c){$.each(e,function(f,g){window[g](d,c)})}$(".toggle").bind("click",function(i){i.preventDefault();var c,h,k,f,j,g;c=$(this);k=c.data("actions").split(",");h=c.data("state").split(",");if(c.data("state-text")){j=c.data("state-text").split(",")}if(c.data("hover")){f=c.data("hover").split(",")}if(c.data("callbacks")){g=c.data("callbacks").split(",")}b(k,c,g);var d=c.data("toggle-class");if(d){$("."+d).each(function(){var e=$(this);if(e.hasClass(h[0])){e.removeClass(h[0]);e.addClass(h[1]);if(j){e.html(j[1])}if(f){e.hover(function(){e.data("initialText",e.text());e.html(f[1])},function(){if(j){e.html(j[1])}})}}else{e.removeClass(h[1]);e.addClass(h[0]);if(j){e.html(j[0])}if(f){e.hover(function(){e.html(f[0])},function(){if(j){e.html(j[0])}})}}})}else{if(c.hasClass(h[0])){c.removeClass(h[0]);c.addClass(h[1]);if(j){c.html(j[1])}if(f){c.hover(function(){c.data("initialText",c.text());c.html(f[1])},function(){if(j){c.html(j[1])}})}}else{c.removeClass(h[1]);c.addClass(h[0]);if(j){c.html(j[0])}if(f){c.hover(function(){c.html(f[0])},function(){if(j){c.html(j[0])}})}}}});function a(e){var c,f,g,d;c=$(e);f=c.data("state").split(",");if(c.data("state-text")){g=c.data("state-text").split(",")}if(c.data("hover")){d=c.data("hover").split(",")}if(c.data("initial-state")){if(c.data("initial-state")==f[0]){c.removeClass(f[1]);c.addClass(f[0]);if(g){c.html(g[0])}if(d){c.hover(function(){c.html(d[0])},function(){if(g){c.html(g[0])}})}}else{c.removeClass(f[0]);c.addClass(f[1]);if(g){c.html(g[1])}if(d){c.hover(function(){c.html(d[1])},function(){if(g){c.html(g[1])}})}}}}};