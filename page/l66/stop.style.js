import { PADDING, MARGIN, DEVICE_WIDTH, RECT_STOPS, STOP_WIDGET_HEIGHT, MAIN_TEXT } from './style';

function formatTime(time) {
	minutes = time % 60;
	hours = (time - minutes) / 60;
	if (minutes < 10) minutes = `0${minutes}`;
	if (hours < 10) hours = `0${hours}`;
	return `${hours}:${minutes}`;
}

export function placeWidgets(data, currentTime, week, startPlacedWidgets) {
	let placedWidgets = startPlacedWidgets;
	let i = 0;

	while (placedWidgets < 10 && i < data.departures.length) {
		if (
			(data.departures[i].time > currentTime && week < 6) ||
			(week == 6 && data.departures[i].saturday && data.departures[i].time > currentTime) ||
			(week == 7 && data.departures[i].sunday && data.departures[i].time > currentTime)
		) {
			const group = hmUI.createWidget(hmUI.widget.GROUP, {
				x: PADDING,
				y: (STOP_WIDGET_HEIGHT + MARGIN * 2) * placedWidgets + STOP_WIDGET_HEIGHT,
				w: DEVICE_WIDTH,
				h: STOP_WIDGET_HEIGHT,
			});

			group.createWidget(hmUI.widget.FILL_RECT, RECT_STOPS);

			group.createWidget(hmUI.widget.TEXT, MAIN_TEXT(formatTime(data.departures[i].time)));
			placedWidgets++;
		}
		i++;
	}
	return placedWidgets;
}
