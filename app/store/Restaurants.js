Ext.define('LOU.store.Restaurants', {
    extend: 'Ext.data.Store',
    xtype: 'restaurant_store',

    config: {
        model: 'LOU.model.Restaurant',
        autoLoad: true,
        fields: ['name', 'logo', 'address', 'location'],
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('location');
            },
        },
        proxy: {
            type: 'ajax',
            url:  'resources/data/restaurant.json', 
            reader: {
                type: 'json',
                rootProperty: ''
            }
        }
    }
});