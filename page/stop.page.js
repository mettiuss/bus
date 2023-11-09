import {
	PADDING,
	WIDGET_RECT,
	DEVICE_WIDTH,
	SUBTITLE,
	PAGE_TITLE,
	WIDGET_HEIGHT_WITH_PADDING,
	WIDTH_WITHOUT_PADDING,
	WIDGET_HEIGHT,
	H1,
	H2,
} from './style';
import { data } from './data';

const weekdayLink = {
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 1,
	7: 2,
};

function formatTime(time) {
	let minutes = time % 60;
	let hours = (time - minutes) / 60;
	if (minutes < 10) minutes = `0${minutes}`;
	if (hours < 10) hours = `0${hours}`;
	return `${hours}:${minutes}`;
}

Page({
	onInit(p) {
		hmUI.setLayerScrolling(true);

		hmUI.createWidget(hmUI.widget.TEXT, PAGE_TITLE(data[p].name));
		hmUI.createWidget(hmUI.widget.TEXT, SUBTITLE(data[p].line));

		const time = hmSensor.createSensor(hmSensor.id.TIME);
		const currentTime = time.hour * 60 + time.minute;
		let totalWidgets = 0;
		const maximumWidgets = 10;

		for (let j = 0; j < data[p].departures[weekdayLink[time.week]].length && totalWidgets < maximumWidgets; j++) {
			if (data[p].departures[weekdayLink[time.week]][j] < currentTime) continue;
			const group = hmUI.createWidget(hmUI.widget.GROUP, {
				x: PADDING,
				y: WIDGET_HEIGHT_WITH_PADDING * (totalWidgets + 1.2),
				w: WIDTH_WITHOUT_PADDING,
				h: WIDGET_HEIGHT,
			});

			group.createWidget(hmUI.widget.FILL_RECT, WIDGET_RECT);

			group.createWidget(hmUI.widget.TEXT, H1(formatTime(data[p].departures[weekdayLink[time.week]][j])));
			group.createWidget(hmUI.widget.TEXT, H2('Today', 48));
			totalWidgets++;
		}

		for (
			let i = 0;
			totalWidgets < maximumWidgets &&
			i < data[p].departures[weekdayLink[time.week != 7 ? time.week + 1 : 1]].length;
			i++
		) {
			const group = hmUI.createWidget(hmUI.widget.GROUP, {
				x: PADDING,
				y: WIDGET_HEIGHT_WITH_PADDING * (totalWidgets + 1.2),
				w: WIDTH_WITHOUT_PADDING,
				h: WIDGET_HEIGHT,
			});

			group.createWidget(hmUI.widget.FILL_RECT, WIDGET_RECT);

			group.createWidget(
				hmUI.widget.TEXT,
				H1(formatTime(data[p].departures[weekdayLink[time.week != 7 ? time.week + 1 : 1]][i]))
			);
			group.createWidget(hmUI.widget.TEXT, H2('Tomorrow', 48));
			totalWidgets++;
		}

		hmUI.createWidget(hmUI.widget.FILL_RECT, {
			x: 0,
			y: WIDGET_HEIGHT_WITH_PADDING * (totalWidgets + 1.2),
			w: DEVICE_WIDTH,
			h: WIDGET_HEIGHT * 2,
		});
	},
	onDestroy() {},
});
