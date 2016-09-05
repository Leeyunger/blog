var switch_menu = 0;

function display_menu(){
	if ( switch_menu === 0 ) {
		menu.style.display = "block";
		switch_menu = 1;
	} else {
		menu.style.display = "none";
		switch_menu = 0;
	}
}