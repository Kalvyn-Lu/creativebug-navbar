(function(){window.cbVid=window.cbVid||{};window.cbVid.bindChapterCtrls=function(){$(".table").on("click","tr",function(c){var a=$(this).closest(".chapters-pane").data("slug");var b=$(this).data("index");if(b==undefined){return}if(a){document.location=location.protocol+"//"+location.host+a+"/"+b}else{jwplayer("videoplayer").pause(false);resume=false;setTimeout(function(){playVideoByIndex(b)},1)}})}}());$(function(){window.cbVid.bindChapterCtrls()});