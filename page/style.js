export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo();
export const PADDING = 6;
export const WIDGET_HEIGHT = 100;

//Arithmetic operations are slow on the band, here is some pre-calculeted data
export const WIDGET_HEIGHT_WITH_PADDING = WIDGET_HEIGHT + PADDING * 2;
export const WIDTH_WITHOUT_PADDING = DEVICE_WIDTH - PADDING * 2;
export const DOUBLE_PADDING = PADDING * 2;

export const WIDGET_RECT = {
	x: 0,
	y: 0,
	w: DEVICE_WIDTH,
	h: WIDGET_HEIGHT,
	radius: 16,
	color: 0x141414,
};

export function PAGE_TITLE(content) {
	return {
		x: 0,
		y: 42,
		w: DEVICE_WIDTH,
		h: WIDGET_HEIGHT,
		color: 0xffffff,
		text_size: 28,
		text: content,
		align_h: hmUI.align.CENTER_H,
	};
}

export function SUBTITLE(content) {
	return {
		x: 0,
		y: WIDGET_HEIGHT - 16,
		w: DEVICE_WIDTH,
		h: WIDGET_HEIGHT,
		color: 0xededed,
		text_size: 18,
		text: content,
		align_h: hmUI.align.CENTER_H,
	};
}

export function H1(content) {
	return {
		x: DOUBLE_PADDING,
		y: PADDING,
		w: 164,
		h: 52,
		color: 0xfafafa,
		text_size: 34,
		text: content,
		align_h: hmUI.align.LEFT,
	};
}

export function H2(content, yOffset = 0) {
	return {
		x: DOUBLE_PADDING,
		y: PADDING + yOffset,
		w: 164,
		h: 30,
		color: 0xededed,
		text_size: 18,
		text: content,
		align_h: hmUI.align.LEFT,
	};
}
