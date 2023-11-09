try {
	(() => {
		var currentApp = __$$hmAppManager$$__.currentApp;
		try {
			currentApp.app = DeviceRuntimeCore.App({
				globalData: {},
				onCreate(e) {},
				onShow(e) {},
				onHide(e) {},
				onDestory(e) {},
				onError(e) {},
				onPageNotFound(e) {},
				onUnhandledRejection(e) {},
			});
		} catch (e) {
			console.log(e);
		}
		currentApp.app.__globals__ = {
			lang: new DeviceRuntimeCore.HmUtils.Lang(DeviceRuntimeCore.HmUtils.getLanguage()),
			px: DeviceRuntimeCore.HmUtils.getPx(192),
		};
	})();
} catch (e) {
	console.log(e);
}
