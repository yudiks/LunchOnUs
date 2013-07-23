Ext.define('LOU.view.Restaurant', {
    extend: 'Ext.navigation.View',
    xtype: 'restaurant_view',

    config: {
    	title: 'Restaurants',
		iconCls: 'home',

    	items: {
        	xtype: 'list',
        	title: 'Restaurants',
        	itemTpl:  '<img src="{logo}"/><h1>{name}</h1>',
        	itemCls: 'restaurantlist',
        	grouped: true,
        	indexBar: true,
        	store: 'Restaurants',
        	onItemDisclosure: true	
        }
    }
})
