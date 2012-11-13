Ext.define("Fiesta.model.User", {
	extend: "Ext.data.Model",
	idProperty: "id",
	fields: ["id", "name", "email", "password"],
	proxy: {
		type: "rest",
		url: "/users",
		reader: {
			type: "json"
		}
	}
});