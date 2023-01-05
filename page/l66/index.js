import {
	PADDING,
	MARGIN,
	STOP_WIDGET_HEIGHT,
	DEVICE_WIDTH,
	RECT_STOPS,
	PAGE_TITLE,
	MAIN_TEXT,
	SEC_TEXT,
	SPACER,
} from './style';

import { data } from './data';

Page({
	build() {
		hmUI.setLayerScrolling(true);

		hmUI.createWidget(hmUI.widget.TEXT, PAGE_TITLE('Stops'));

		let totalWidgets = 0;

		for (let i = 0; i < Object.keys(data).length; i++) {
			let line = data[Object.keys(data)[i]];
			for (let j = 0; j < line.stops.length; j++) {
				const group = hmUI.createWidget(hmUI.widget.GROUP, {
					x: PADDING,
					y: (STOP_WIDGET_HEIGHT + MARGIN * 2) * totalWidgets + STOP_WIDGET_HEIGHT,
					w: DEVICE_WIDTH,
					h: STOP_WIDGET_HEIGHT,
				});

				group.createWidget(hmUI.widget.FILL_RECT, RECT_STOPS);

				group.createWidget(hmUI.widget.TEXT, MAIN_TEXT(line.stops[j].name));
				group.createWidget(hmUI.widget.TEXT, SEC_TEXT(Object.keys(data)[i]));
				group.addEventListener(hmUI.event.CLICK_UP, function (info) {
					hmApp.gotoPage({
						url: 'page/l66/stop',
						param: JSON.stringify({
							name: line.stops[j].name,
							departures: line.stops[j].departures,
							line: Object.keys(data)[i],
						}),
					});
				});
				group.createWidget(hmUI.widget.IMG, {
					x: DEVICE_WIDTH - 20 - PADDING * 3,
					y: STOP_WIDGET_HEIGHT / 2 - 10,
					src: 'arrow.png',
				});
				totalWidgets++;
			}
		}

		hmUI.createWidget(hmUI.widget.FILL_RECT, SPACER(totalWidgets));
	},
	onInit() {},
	onDestroy() {},
});
