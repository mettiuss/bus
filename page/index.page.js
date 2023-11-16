import { WIDGET_RECT, DEVICE_WIDTH, PAGE_TITLE, WIDGET_HEIGHT_WITH_PADDING, WIDGET_HEIGHT, H1, H2 } from './style';
import { data } from './data';

Page({
	build() {
		hmUI.setLayerScrolling(true);

		hmUI.createWidget(hmUI.widget.TEXT, PAGE_TITLE('Stops'));

		for (let i = 0; i < data.length; i++) {
			let position = {
				x: 0,
				y: WIDGET_HEIGHT_WITH_PADDING * (i + 1),
				w: DEVICE_WIDTH,
				h: WIDGET_HEIGHT,
				src: '',
			};
			const group = hmUI.createWidget(hmUI.widget.GROUP, position);

			group.createWidget(hmUI.widget.FILL_RECT, WIDGET_RECT);

			group.createWidget(hmUI.widget.TEXT, H1(data[i].name));
			group.createWidget(hmUI.widget.TEXT, H2(data[i].line, 52));

			group.createWidget(hmUI.widget.IMG, {
				x: DEVICE_WIDTH - 32,
				y: 40,
				src: 'arrow.png',
			});

			hmUI.createWidget(hmUI.widget.IMG, position).addEventListener(hmUI.event.CLICK_UP, () => {
				hmApp.gotoPage({
					url: 'page/stop.page',
					param: i.toString(),
				});
			});
		}
		hmUI.createWidget(hmUI.widget.FILL_RECT, {
			x: 0,
			y: WIDGET_HEIGHT_WITH_PADDING * (data.length + 1),
			w: DEVICE_WIDTH,
			h: WIDGET_HEIGHT * 2,
		});
	},
	onInit() {},
	onDestroy() {},
});
