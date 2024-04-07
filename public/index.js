
var y =2;

function titleLoad(y){
    var Title = document.getElementById("title1");
    var Title1 =document.getElementById("title2");
    Title1.className="Titles"+y
    Title1.style.display="grid"
    Title1.style.gridTemplateColumns="12fr"
    Title.className="Titles"+y;
    var Titleimage = document.getElementById("img"+y);
    var subtitle = document.getElementById("SubTitlte"+y);
    subtitle.style.display="block"
    Titleimage.style.display="block";
    
        switch(y){
            case 1:
                for(i=1;i<6;i++){
                    if(i !== 1){
                    document.getElementById("img"+i).style.display="none";
                    document.getElementById("SubTitlte"+i).style.display="none";
                    }
                }
            break ;
            case 2:
                for(i=1;i<6;i++){
                    if(i !== 2){
                    document.getElementById("img"+i).style.display="none";
                    document.getElementById("SubTitlte"+i).style.display="none";
                    }
                }
            break;
            case 3:
                for(i=1;i<6;i++){
                    if(i !== 3){
                    document.getElementById("img"+i).style.display="none";
                    document.getElementById("SubTitlte"+i).style.display="none";
                    }
                }
            break;
            case 4:
                for(i=1;i<6;i++){
                    if(i !== 4){
                    document.getElementById("img"+i).style.display="none";
                    document.getElementById("SubTitlte"+i).style.display="none";
                    }
                }
            break;
            case 5:
                for(i=1;i<6;i++){
                    if(i !== 5){
                    document.getElementById("img"+i).style.display="none";
                    document.getElementById("SubTitlte"+i).style.display="none";
                    }
                }
            break;
        }
    
    
}

function MusicChange(y){

    var playIcon = document.getElementById("musics"+y);
    var music1 = document.getElementById("Music"+y);
    
    if(playIcon.classList.contains("bi-play-circle" )){
        playIcon.classList.remove("bi-play-circle")
        playIcon.classList.add("bi-pause-circle")
        music1.play()
    }
    else{
        playIcon.classList.remove("bi-pause-circle")
        playIcon.classList.add("bi-play-circle")
        music1.pause();
    }
    switch(music1.className){
        case "Musicplay1":
            for(i=1;i<6;i++){
                if(i !== 1){
                    document.getElementById("Music"+i).pause()
                    document.getElementById("musics"+i).className="bi-play-circle fs-4 text-white col-1"
                }
            }
        break ;
        case "Musicplay2":
            for(i=1;i<6;i++){
                if(i !== 2){
                    document.getElementById("Music"+i).pause()
                    document.getElementById("musics"+i).className="bi-play-circle fs-4 text-white col-1"
                }
            }
        break;
        case "Musicplay3":
            for(i=1;i<6;i++){
                if(i !== 3){
                    document.getElementById("Music"+i).pause()
                    document.getElementById("musics"+i).className="bi-play-circle fs-4 text-white col-1"
                }
            }
        break;
        case "Musicplay4":
            for(i=1;i<6;i++){
                if(i !== 4){
                    document.getElementById("Music"+i).pause()
                    document.getElementById("musics"+i).className="bi-play-circle fs-4 text-white col-1"
                }
            }
        break;
        case "Musicplay5":
            for(i=1;i<6;i++){
                if(i !== 5){
                    document.getElementById("Music"+i).pause()
                    document.getElementById("musics"+i).className="bi-play-circle fs-4 text-white col-1"
                }
            }
        break;
    }
}
function secondPlay(){
    
    var play2 = document.getElementById("title2play")
    var play3 = document.getElementById("title3play")
    var playIcon = document.getElementById("musics"+y);
    var music1 = document.getElementById("Music"+y);

        if(playIcon.classList.contains("bi-play-circle" )){
            playIcon.classList.remove("bi-play-circle")
            playIcon.classList.add("bi-pause-circle")
            play2.classList.remove("bi-play-circle-fill")
            play2.classList.add("bi-pause-circle-fill")
            play3.classList.remove("bi-play-circle-fill")
            play3.classList.add("bi-pause-circle-fill")
            music1.play()
        }
        else{
            playIcon.classList.remove("bi-pause-circle")
            playIcon.classList.add("bi-play-circle")
            play2.classList.remove("bi-pause-circle-fill")
            play2.classList.add("bi-play-circle-fill")
            play3.classList.remove("bi-pause-circle-fill")
            play3.classList.add("bi-play-circle-fill")  
            music1.pause();
        }

   
    
}
function bannerThree(y){
    var img = document.getElementById("bannerimg")
    img.src=`public/image/spotfiy/proj-img${y}.png`
    img.style.height="350px";
    img.style.width="350px";

    var bannertitle = document.getElementById("bannertitle")
    switch (y){
        case 1:
            bannertitle.innerHTML="Ae Dil Hai Mushkil(original Motion Picture Sountrack)[Delux Audio] 🎶";
            return;
        case 2:
            bannertitle.innerHTML="Satranga (from Animalmovie) 💕";
            return;
        case 3:
            bannertitle.innerHTML="Shree Hanumanchalisa (Hanumanji Ashtak)🙏";
        return;
        case 4:
            bannertitle.innerHTML="Love Aaj Kal (original Motion Picture Soundtrack)";
        return;
        case 5:
            bannertitle.innerHTML='Thum Kaya Mile (From "Rocky Aur Rani Kii pram kahane")';
        return;
    }
}
function Maincard(y){
            var title = document.getElementById("bottomTitle");

            var img = document.getElementById("minMigCard");
            img.src=`public/image/spotfiy/proj-img${y}.png`;
            img.style.height="50px"
            img.style.width="50px"
            switch (y){
                case 1:
                    title.innerHTML="Ae Dil Hai Mushkil(original Motion Picture Sountrack)[Delux Audio] 🎶";
                    return;
                case 2:
                    title.innerHTML="Satranga (from Animalmovie) 💕";
                    return;
                case 3:
                    title.innerHTML="Shree Hanumanchalisa (Hanumanji Ashtak)🙏";
                 return;
                 case 4:
                    title.innerHTML="Love Aaj Kal (original Motion Picture Soundtrack)";
                 return;
                 case 5:
                    title.innerHTML='Thum Kaya Mile (From "Rocky Aur Rani Kii pram kahane")';
                 return;
            }
}

function sideCard(y){
    var stitle =document.getElementById("sideTitle");
    var simg = document.getElementById("sideImg");
    simg.style.height="50px";
    simg.style.width="50px";
    switch (y){
        case 1:
            stitle.innerHTML="Satranga (from Animalmovie)";
            simg.src=`public/image/spotfiy/proj-img${y+1}.png`;
            return;
        case 2:
            stitle.innerHTML="💕Shree Hanumanchalisa (Hanumanji Ashtak)🙏";
            simg.src=`public/image/spotfiy/proj-img${y+1}.png`;
            return;
        case 3:
            stitle.innerHTML="Love Aaj Kal (original Motion Picture Soundtrack)";
            simg.src=`public/image/spotfiy/proj-img${y+1}.png`;
         return;
         case 4:
            stitle.innerHTML='Thum Kaya Mile (From "Rocky Aur Rani Kii pram kahane")';
            simg.src=`public/image/spotfiy/proj-img${y+1}.png`;
         return;
         case 5:
            stitle.innerHTML="Ae Dil Hai Mushkil(original Motion Picture Sountrack)[Delux Audio] 🎶";
            simg.src=`public/image/spotfiy/proj-img${y-4}.png`;
         return;
    }
}
function playClick(x){
    y=x
    var play3 = document.getElementById("title3play");
    var play2 = document.getElementById("title2play");
    var playIcon = document.getElementById("musics"+y);
    function slideBar(){
        var music1 = document.getElementById("Music"+y);
        var slidebar = document.getElementById("sliderBar")
        var spanmax = document.getElementById("playsecondmax");
        var spanmin = document.getElementById("playsecondmin");
        var min = Math.floor((music1.duration)/60);
        var sec = Math.floor((music1.duration)%60);
        var min1 = Math.floor((music1.currentTime)/60);
        var sec1 = Math.floor((music1.currentTime)%60);
        slidebar.max=music1.duration;
        slidebar.value = Math.floor(music1.currentTime);
        if(slidebar.value== Math.floor(music1.duration)){
            postMusic();
        }
         
        if(min <10){
            min = `0${min}`
        }
        if(sec <10){
            sec = `0${sec}`
        }
        if(min1 <10){
            min1 = `${min1}`
        }
        if(sec1 <10){
            sec1 = `${sec1}`
        }
        spanmax.innerHTML=`${min}:${sec}`;
        spanmin.innerHTML=`${min1}:${sec1}`;
    
    }  
    setInterval(slideBar,300);
    

        if(playIcon.classList.contains("bi-play-circle" )){
            play2.classList.remove("bi-play-circle-fill")
            play2.classList.add("bi-pause-circle-fill")
            play3.classList.remove("bi-play-circle-fill")
            play3.classList.add("bi-pause-circle-fill")
           }
        else{
            play2.classList.remove("bi-pause-circle-fill")
            play2.classList.add("bi-play-circle-fill")  
            play3.classList.remove("bi-pause-circle-fill")
            play3.classList.add("bi-play-circle-fill")    
    }

    sideCard(y)
    Maincard(y)
    bannerThree(y)
    titleLoad(y)
    MusicChange(y)
}
function preMusic(){
    var pre =y-1
    playClick(pre)
}
function postMusic(){
    var post = y+1
    playClick(post)
}
function slideBarchange(){
    var music1 = document.getElementById("Music"+y);
    var slidebar = document.getElementById("sliderBar");
    music1.currentTime=slidebar.value;
}
    
    