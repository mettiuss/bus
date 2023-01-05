(() => {
	const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo();
	function PAGE_TITLE(content) {
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

	class Calculator {
		start() {
			hmUI.setLayerScrolling(true);

			const currentStop = STOPS[1];

			hmUI.createWidget(hmUI.widget.TEXT, PAGE_TITLE(`${currentStop.name} (${currentStop.line})`));

			const currentLineStop = LINE_STOPS[currentStop.id];
			console.log(currentLineStop);
			for (let i = 0; i < currentLineStop.length; i++) {
				const group = hmUI.createWidget(hmUI.widget.GROUP, {
					x: PADDING,
					y: (STOP_WIDGET_HEIGHT + MARGIN * 2) * i + STOP_WIDGET_HEIGHT,
					w: DEVICE_WIDTH,
					h: STOP_WIDGET_HEIGHT,
				});

				group.createWidget(hmUI.widget.FILL_RECT, RECT_STOPS);

				group.createWidget(hmUI.widget.TEXT, MAIN_TEXT(formatTime(currentLineStop[i])));
			}
		}
	}

	let __$$app$$__ = __$$hmAppManager$$__.currentApp;
	let __$$module$$__ = __$$app$$__.current;
	__$$module$$__.module = DeviceRuntimeCore.Page({
		onInit() {
			hmUI.setLayerScrolling(false);

			new Calculator().start();
		},
	});
})();
