cbEffects.registerEffect({selector:".js-register",bindFunc:launchRegisterModal,});function launchRegisterModal(a,b){var b=$(b);if(!b.hasClass("js-register-init")){b.on("click",function(e){var d=$("#register_modal");var g=b.data("register-title")?b.data("register-title"):"Join the Creativebug Community!";var f=b.data("register-action")?b.data("register-action"):"participate";d.find(".modal-title").text(g);d.find(".modal-body .register-action").text(f);d.modal("show");$("#register_modal_upgrade").off();$("#register_modal_signup").off();if(typeof b.data("register-ga-label")!=="undefined"){var c=b.data("register-ga-label")?b.data("register-ga-label"):"unspecified-feature";ga("send","event","register-modal","display",c+" register-modal");$("#register_modal_upgrade").on("click",function(){ga("send","event","register-modal","click",c+" register-modal upgrade-button")});$("#register_modal_signup").on("click",function(){ga("send","event","register-modal","click",c+" register-modal signup-button")})}});b.addClass("js-register-init")}};