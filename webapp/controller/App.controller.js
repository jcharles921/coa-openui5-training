sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
         // set data model on view
         const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

      onShowHello() {
        
        const oModel = this.getView().getModel();
        const sRecipient = oModel.getProperty("/recipient/name");
        MessageToast.show(`Hello  ${sRecipient}`);
      }
   });
});