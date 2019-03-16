;
(function($,root){
    function AudioManager(){
        this.audio = new Audio();
        this.status = 'pause';
    }
    AudioManager.prototype = {
        play:function(){
                this.audio.play();
                this.status = 'playing';
        },
        pause:function(){
            
                this.audio.pause();
                this.status = 'pause'
            
        },
        getAudio:function(src){
            
            this.audio.src = src;
            this.audio.load();//加载 音频；
           
        },
        playTo:function(time){
            this.audio.currentTime = time;//视音频的当前时间设为 time
        },
        // autoPlay:function(status,callback){
        //     this.audio.onended = function(e){
        //         clearInterval(timer);
        //         callback(status);
        //     }
        // },
        mannagerAudio:function(callback){
            // audioStatus 播放的状态必须是 时实的  不能按参数传进来 不然 不是实时的
            // console.log(audioStatus);
            // this.autoPlay(status,callback);
            this.audio.onended = function(e){
                clearInterval(timer);
                callback(audioStatus);
            }
            // console.log(this);
            //  switch(status){
            //      case 'auto' : this.autoPlay(status,callback);//需要用this调用
            //      break;
            //      case 'sj' : this.sjPlay(status,callback);//随机播放
            //      break;
            //      case 'dq' : this.dqplay(status,callback);//单曲循环
            //      default:alert('error');
            //  }
        },
    }
   
    root.AudioManager = new AudioManager();
})(window.Zepto,window.player || (window.player = {}))