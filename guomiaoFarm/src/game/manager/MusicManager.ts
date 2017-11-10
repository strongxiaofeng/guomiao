class MusicManager {
	/**声音开关 */
	public static isSoundOn: boolean = true;
	private static channel: egret.SoundChannel;
	private static haveRegistered:boolean = false;
	public constructor() {
	}

	public static playMusic()
	{
		if(! this.isSoundOn) return;

		if(this.channel)
		{
			this.channel.volume = 1;
		}
		else
		{
			var bgm: egret.Sound = RES.getRes("bgm_mp3");
			this.channel = bgm.play(0, -1);
			this.registerPageActive();
		}
	}
	public static stopMusic()
	{
		if(this.channel) this.channel.volume = 0;
	}

	public static registerPageActive()
	{
		if(this.haveRegistered) return;
		this.haveRegistered = true;

		var hiddenProperty = 'hidden' in document ? 'hidden' :    
			'webkitHidden' in document ? 'webkitHidden' :    
			'mozHidden' in document ? 'mozHidden' :    
			null;
		var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
		var onVisibilityChange = function(){
			if (!document[hiddenProperty]) {  
				MusicManager.playMusic();  
			}else{
				MusicManager.stopMusic();
			}
		}
		document.addEventListener(visibilityChangeEvent, onVisibilityChange);
	}
}