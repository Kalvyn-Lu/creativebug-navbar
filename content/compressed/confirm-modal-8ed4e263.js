cbEffects.registerEffect({selector:".js-confirm",bindFunc:launchConfirmModal,});function launchConfirmModal(a,b){var b=$(b);if(!b.hasClass("js-confirm-init")){b.on("click",function(g){var f=$("#confirm-modal");var h={"confirm-action":b.data("confirm-action"),"confirm-target":b.data("confirm-target"),"confirm-close":b.data("confirm-close"),"confirm-confirm":b.data("confirm-confirm"),};var j=(h["confirm-action"]&&h["confirm-target"])?[h["confirm-action"],h["confirm-target"]].join(" "):"please confirm";var i="Are you sure you want to "+(h["confirm-action"]?h["confirm-action"]:"do")+" this"+(h["confirm-target"]?" "+h["confirm-target"]:"")+"?";var e=h["confirm-cancel"]||"cancel";var c=h["confirm-confirm"]||h["confirm-action"]||"confirm";f.find(".modal-title").text(j);f.find(".modal-body").text(i);f.find(".cancel-btn").text(e);f.find(".confirm-btn").text(c);var d=f.find(".confirm-btn");d.off();d.on("click",function(k){window[b.data("confirm-success")](JSON.parse(b.data("confirm-success-id")))});f.modal("show")});b.addClass("js-confirm-init")}};