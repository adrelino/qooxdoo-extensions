/**
 * MultiSelectBox with filter.
 * 
 * overrides add method and introduces getChildByModel method 
 * that allows to retreive a child in constant time. TODO: move to mixin
 */
qx.Class.define("qxex.ui.form.FilterMultiSelectBox", {
  extend : qxex.ui.form.MultiSelectBox,
  include : qxex.ui.form.MSelectBoxFilter,

  construct : function(){
    this.base(arguments);
    this.addFilterTextField();
  },

  members : {
    _childrenByModelHash : null,
    hideInsteadOfDestroy : false,

    //overridden from http://www.qooxdoo.org/current/apiviewer/#qx.ui.form.AbstractSelectBox
    add : function(listItem, options){
      this.base(arguments,listItem, options);
      if(!this._childrenByModelHash) this._childrenByModelHash={};
      this._childrenByModelHash[listItem.getModel()]=listItem;
    },

    /**
     * Alternative to getChildren() and linear search if we have a model for the listItem
     * @param model
     */
    getChildByModel : function(model){
      return this._childrenByModelHash ? this._childrenByModelHash[model] : null;
    },

    //overrridden
    destroy : function(){
      var popup = this.getChildControl("popup");
      popup.exclude();
      if(this.hideInsteadOfDestroy){
        this.clearFilter();
        this.exclude();
      }else{
        this._childrenByModelHash = null;
        this.base(arguments);
      }
    }
  }
});
