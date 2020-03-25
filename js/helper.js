/* ----------------------------------------------------------------------------
helper.js                                                                
Enthält ein paar kleine Helferlein für die Online Dokumentation in Screendesign. 
Kurs «Screendesign» an der TH Köln
Christian Noss
christian.noss@th-koeln.de
https://twitter.com/cnoss
https://th-koeln.github.io/mi-bachelor-screendesign/
----------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
	$(document).on("scroll", function() {
		let scrollWindow = $(document).scrollTop();
		let wHeight = $(window).height();
		if (scrollWindow >= wHeight) {
			$("#sticky-nav").addClass("sticky-nav-active");
			$("#l-mainContent").css(
				"margin-top",
				$("#sticky-nav").innerHeight() + 48 + "px"
			);
		} else {
			$("#sticky-nav").removeClass("sticky-nav-active");
			$("#l-mainContent").css("margin-top", "0px");
		}
	});

	$('a[href*="#"]').on("click", function(e) {
		e.preventDefault();
		var href = $(this).attr("href");
		let offset = $(href).offset().top - $("#sticky-nav").innerHeight() - 48;
		$("html, body").animate(
			{
				scrollTop: offset
			},
			300
		);
	});

	$(".sticky-nav-submenu-wrap").hover(
		function() {
			$(this)
				.children(".sticky-nav-submenu")
				.show();
			$.fx.off = true;
		},
		function() {
			$.fx.off = false;
			$(this)
				.children(".sticky-nav-submenu")
				.hide();
		}
	);
});

console.log("test");
