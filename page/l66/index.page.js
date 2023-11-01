import {
	PADDING,
	WIDGET_RECT,
	DEVICE_WIDTH,
	PAGE_TITLE,
	WIDGET_HEIGHT_WITH_PADDING,
	WIDTH_WITHOUT_PADDING,
	WIDGET_HEIGHT,
	H1,
	H2,
} from './style';
import { data } from './data';

Page({
	build() {
		hmUI.setLayerScrolling(true);

		hmUI.createWidget(hmUI.widget.TEXT, PAGE_TITLE('Stops'));

		for (let i = 0; i < data.length; i++) {
			const group = hmUI.createWidget(hmUI.widget.GROUP, {
				x: PADDING,
				y: WIDGET_HEIGHT_WITH_PADDING * (i + 1),
				w: WIDTH_WITHOUT_PADDING,
				h: WIDGET_HEIGHT,
			});

			group.createWidget(hmUI.widget.FILL_RECT, WIDGET_RECT);

			group.createWidget(hmUI.widget.TEXT, H1(data[i].name));
			group.createWidget(hmUI.widget.TEXT, H2(data[i].line, 52));
			group.addEventListener(hmUI.event.CLICK_UP, function (info) {});

			group.createWidget(hmUI.widget.IMG, {
				x: DEVICE_WIDTH - 32,
				y: 40,
				src: 'arrow.png',
			});

			group.addEventListener(hmUI.event.CLICK_UP, function (info) {
				hmApp.gotoPage({
					url: 'page/l66/stop.page',
					param: i.toString(),
				});
			});
		}
		hmUI.createWidget(hmUI.widget.FILL_RECT, {
			x: 0,
			y: WIDGET_HEIGHT_WITH_PADDING * data.length,
			w: DEVICE_WIDTH,
			h: WIDGET_HEIGHT * 2,
		});
	},
	onInit() {},
	onDestroy() {},
});
