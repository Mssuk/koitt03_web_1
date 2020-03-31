function Submenu_OC(num) {

	var leftmenuDepth01 = document.getElementById("LeftMenuID" + num);
	var leftmenuDepth01_icon = document.getElementById("icon-plus-minus" + num);

	if (leftmenuDepth01.style.display == "none") {
		leftmenuDepth01.style.display = "block";
		leftmenuDepth01_icon.className = "icon-list-minus";
	} else {
		leftmenuDepth01.style.display = "none";
		leftmenuDepth01_icon.className = "icon-list-plus";
	}

}