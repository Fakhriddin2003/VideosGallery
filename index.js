let url = document.getElementById("video-text")
let youtube_player = document.getElementById("youtube-player")
let videoBox = document.getElementsByClassName('video-box')
let videosBox = document.getElementById("videosBox")
let index = 0
const testElement = document.createElement("div")

videosBox.innerHTML = ""


const addVideo = () => {
    const video = url.value;
    if (video == "") return;
    youtube_base_url = 'https://www.youtube.com/embed/'
    video_link = url.value.replace('https://www.youtube.com/watch?v=', '')
    videosBox.src = youtube_base_url + video_link
    
    if (videosBox.innerHTML.includes(videosBox.src)) return;

    index1 = index++
    videosBox.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3" id = '${index1}'>
    <div class="rounded shadow video-box">
    <iframe width="100%" height="100%" src="${videosBox.src}" frameborder="0" id="youtube-player"></iframe>
    <button class="btn btn-dark" onclick="deleteVideo('${index1}')"><i class="fas fa-trash" ></i></button>
    </div>
    </div>
    `
    
}

// const checkVideo = (video) => {
//     let videoTag = document.getElementsByClassName("video-box")
//     let avatar = videoTag[0].getAttribute("avatar")
//     if(avatar !== undefined)
    
    // videos = document.getElementById('videosBox').children
    // for (const element of videos) {
    //     if (video == element.src) {
    //         return true
    //     }
    // }
// }

const deleteVideo = (id) => {
    document.getElementById(id).remove()
}
const removeAllVideos = () => {
    videosBox.innerHTML = "";
}