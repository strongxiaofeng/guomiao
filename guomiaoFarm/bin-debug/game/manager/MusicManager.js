var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MusicManager = (function () {
    function MusicManager() {
    }
    MusicManager.playMusic = function () {
        if (this.channel) {
            this.channel.volume = 1;
        }
        else {
            var bgm = RES.getRes("bgm_mp3");
            this.channel = bgm.play(0, -1);
            this.registerPageActive();
        }
    };
    MusicManager.stopMusic = function () {
        if (this.channel)
            this.channel.volume = 0;
    };
    MusicManager.registerPageActive = function () {
        if (this.haveRegistered)
            return;
        this.haveRegistered = true;
        var hiddenProperty = 'hidden' in document ? 'hidden' :
            'webkitHidden' in document ? 'webkitHidden' :
                'mozHidden' in document ? 'mozHidden' :
                    null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function () {
            if (!document[hiddenProperty]) {
                MusicManager.playMusic();
            }
            else {
                MusicManager.stopMusic();
            }
        };
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    };
    MusicManager.haveRegistered = false;
    return MusicManager;
}());
__reflect(MusicManager.prototype, "MusicManager");
//# sourceMappingURL=MusicManager.js.map