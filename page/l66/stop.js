import { PAGE_TITLE, SPACER } from './style';
import { placeWidgets } from './stop.style';

Page({
	onInit(p) {
		let data = JSON.parse(p);
		const time = hmSensor.createSensor(hmSensor.id.TIME);
		const currentTime = time.hour * 60 + time.minute;
		hmUI.setLayerScrolling(true);

		hmUI.createWidget(hmUI.widget.TEXT, PAGE_TITLE(`${data.name} (${data.line})`));

		let placedWidgets = placeWidgets(data, currentTime, time.week, 0);
		let finalWidgets = placeWidgets(data, 0, time.week < 7 ? time.week + 1 : 1, placedWidgets);

		hmUI.createWidget(hmUI.widget.FILL_RECT, SPACER(finalWidgets));
	},
	onDestroy() {},
});
