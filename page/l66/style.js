export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo();
export const PADDING = 4;
export const MARGIN = 5;

export const STOP_WIDGET_HEIGHT = 100;

export const RECT_STOPS = {
	x: 0,
	y: 0,
	w: DEVICE_WIDTH - PADDING * 2,
	h: STOP_WIDGET_HEIGHT,
	radius: 12,
	color: 0x222222,
};

export function PAGE_TITLE(content) {
	return {
		x: 0,
		y: 42,
		w: DEVICE_WIDTH,
		h: STOP_WIDGET_HEIGHT,
		color: 0xfafafa,
		text_size: 28,
		text: content,
		align_h: hmUI.align.CENTER_H,
	};
}

export function MAIN_TEXT(content) {
	return {
		x: MARGIN * 2,
		y: MARGIN,
		w: 164,
		h: 52,
		color: 0xfafafa,
		text_size: 34,
		text: content,
		align_h: hmUI.align.LEFT,
	};
}

export function SEC_TEXT(content) {
	return {
		x: MARGIN * 2,
		y: MARGIN + 50,
		w: 164,
		h: 30,
		color: 0xededed,
		text_size: 18,
		text: content,
		align_h: hmUI.align.LEFT,
	};
}

export function SPACER(i) {
	return {
		x: 0,
		y: STOP_WIDGET_HEIGHT + (STOP_WIDGET_HEIGHT + MARGIN * 2) * i,
		w: DEVICE_WIDTH,
		h: STOP_WIDGET_HEIGHT * 2,
	};
}
