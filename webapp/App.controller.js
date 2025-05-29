sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.quickstart.App", {
		onPress() {
			MessageToast.show("Hello App!");
            alert("UI5 is ready");
		}
	});

});