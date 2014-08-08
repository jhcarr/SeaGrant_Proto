Ext.define('Ext.ux.DropDownButton', {
	extend: 'Ext.Button',
	xtype: 'dropdownbutton',

	initialize: function(){
		if(this.menu){
			if(!this.menu.isComponent){
				this.menu = new Ext.ux.Menu(this.menu);
				this.on('tap', function(){
					if(this.menu.isHidden()){
						this.menu.showBy(this);
					}
				});
			}
		}
		this.callParent(arguments);
	},
	destroy: function(){
		if(this.menu && this.menu.destroy){
			this.menu.destroy();
		}
		this.CallParent(arguments);
	}
});