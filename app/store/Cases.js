Ext.define("Fiesta.store.Cases", {
	extend: "Ext.data.Store",
	model: "Fiesta.model.Case",
	autoLoad: true,
	proxy: {
		type: "ajax",
		url: "cases"
	}
});