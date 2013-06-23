threeSixty = {
    init: function() {
        this._vr = new AC.VR('viewer', 'img/360/Seq_v04_640x378_##.jpg', 40, {
            invert: true
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, false);
}