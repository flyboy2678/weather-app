export const iconLogic = (code, iconArr, isDay) => {
	for (let i = 0; i < iconArr.length; i++) {
		if (code == iconArr[i].code) {
			if (isDay == 1) {
				return iconArr[i].icon;
			} else {
				return iconArr[i].nightIcon;
			}
		}
	}
};
