Ext.define('LOU.view.RestaurantDetail', {
	extend: 'Ext.Panel',
	xtype: 'restaurant_detail',

	config: {
		styleHtmlContent:true,
		scrollable: 'vertical',
		tpl: "{index}, {name}, {address}"
	}
})