
window.addEventListener('keydown',function(e){
    const drum = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime=0;
    audio.play();
    console.log(drum);
    drum.classList.add('active');
    this.setTimeout(function(){
        drum.classList.remove("active")
    },300)
    
})

