Ext.define('LOU.controller.RestaurantController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            restaurant: 'restaurant_view'
        },
        control: {
            'restaurant_view list': {
                disclose: 'showDetail',
                itemtap:  'showDetailOnTap'
            }
        }
    },
    showDetail: function(list, record) {
        this.getRestaurant().push({
            xtype: 'restaurant_detail',
            data: record.data,
            title: record.fullName() // This is the name title of detailed view page
        });
        
    },

    showDetailOnTap: function(list, index, target, record) {
        console.log (index);
        this.getRestaurant().push({
            xtype: 'restaurant_detail',
            data: record.data,
            title: record.fullName(), // This is the name title of detailed view page
        });
        
    }
});
