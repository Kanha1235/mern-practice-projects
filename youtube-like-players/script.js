let videos = [ "https://github.com/Kanha1235/mern-practice-projects/releases/download/v1-assets/456540_Thailand_Bangkok_1920x1080.mp4" , "https://github.com/Kanha1235/mern-practice-projects/releases/download/v1-assets/4879375_Gyps.Fulvus_Griffon.Vulture_3840x2160.mp4" , "https://github.com/Kanha1235/mern-practice-projects/releases/download/v1-assets/6356499_Herd_Afghanistan_3840x2160.mp4" ,"https://github.com/Kanha1235/mern-practice-projects/releases/download/v1-assets/big_buck_bunny_720p_10mb.mp4"]
        let last_video_in_the_view = 0;
        let videoList = document.querySelector(".video_playlist")
        videos.forEach((name,i)=>{
            videoList.insertAdjacentHTML(
                "beforeend",
                `<div class="video_in_list video${i}" data-key="${i}">
                <video data-key="${i}" width="157px" >
                    <source src="${videos[i]}">
                </video>
                <div class="description" data-key="${i}">
                    <h5 data-key="${i}">description${i+1}: Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                    <p data-key="${i}">Channel ${i+1}</p>
                </div>
            </div>`
            )
        })
        let tagList = [];
        for(let i = 0;i<4;i++)
        {
            tagList.push(document.querySelector(`.video${i}`));
        }
        let playBox = document.querySelector(".play_box");
        playBox.innerHTML = `<video controls autoplay muted loop width="100%" >
                <source src="${videos[0]}">
            </video>
            <h3>description1 Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p> Channel 1</p>`
        
        let playedVideoFromPlaylist = tagList[0];
        playedVideoFromPlaylist.classList.toggle("toggle")
        videoList.addEventListener("click",(e)=>{
            let id = e.target.dataset.key;
            if(id === undefined || id === last_video_in_the_view){
                return;
            }
            let lastVideo = tagList[last_video_in_the_view];
            lastVideo.classList.toggle('toggle');
            playBox.innerHTML = `<video controls autoplay muted loop width="100%" >
                <source src="${videos[id]}">
            </video>
            <h3>description${Number(id)+1} Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p> Channel ${Number(id)+1}</p>`
            let currVideo = tagList[id];
            currVideo.classList.toggle(":hover")
            currVideo.classList.toggle('toggle');
            last_video_in_the_view = id;
        })