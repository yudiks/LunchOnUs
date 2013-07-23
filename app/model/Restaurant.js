Ext.define('LOU.model.Restaurant', {
    extend: 'Ext.data.Model',
    xtype: 'restaurant_model',

    config: {
        fields: [
            {name: 'name',     type: 'string'},
            {name: 'logo',     type: 'string'},
            {name: 'address',  type: 'string'},
            {name: 'location', type: 'string'}
        ]
    },

    fullName: function(){
    	var d = this.data,
    	names = [d.name, d.location];
    	return names.join(" ");
    }
});