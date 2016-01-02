/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * qooxdoo extensions theme. 
 * Applications that use qxex.ui.form.TimeField should extend this theme in their Appearance.js
 * Resource management:
 * http://manual.qooxdoo.org/current/pages/desktop/ui_resources.html
 * @asset(qx/icon/${qx.icontheme}/16/apps/preferences-clock.png)
 */
qx.Theme.define("qxex.theme.Appearance",
{
  extend : qx.theme.modern.Appearance,

  appearances :
  {
  	"watcheetimefield" : "datefield",

    "watcheetimefield/button" :
    {
      style : function(states)
      {
        return {
          // icon : "qxex/preferences-clock.png",					//copied
          // icon : "qx/icon/Tango/16/apps/preferences-clock.png",	//icon theme fixed
          icon : "icon/16/apps/preferences-clock.png",				//using qooxdoo's original resource (themed), not copied one
          padding : [0, 3],
          decorator : undefined
        };
      }
    }
  }
});