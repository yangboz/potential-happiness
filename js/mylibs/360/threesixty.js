threeSixty={init:function(){this._browser=new informBrowser();this._vr=new AC.VR("viewer","/html5/showcase/threesixty/images/optimized/Seq_v04_640x378_##.jpg",72,{invert:true})
},didShow:function(){this.init()},willHide:function(){recycleObjectValueForKey(this,"_vr")
},shouldCache:function(){return false}};if(!window.isLoaded){window.addEventListener("load",function(){threeSixty.init()
},false)};