const videoBox = document.getElementById("videoBox")
const videoLink = document.getElementById("videoLink")
let index = 2;
videoBox.innerHTML = "";
let lastVideo = "";
//const testElement = document.createElement("div")
// const checkColor = (color) => {
//     const colors = document.getElementsByClassName("color-box")
//     // Background berish jarayoni    
//      if (color.includes(".")) testElement.style.background = `url(${color})`;
//      else testElement.style.background = color;

//     for (const element of colors) {
//         if (element.style.background == testElement.style.background) return true;
//     }
//     return false;
// }

const addVideo = () => {
    const link = videoLink.value;
    if (link == "") return;
    //  lastColors = colorsBox.innerHTML;
    const video = document.createElement("video")
    video.width = "100%"
    video.height = "100%"
    video.className = "col-sm-6 col-md-4 col-lg-3 mb-3"
    video.src = videoLink.value
    video.autoplay = true
const videoDiv = document.createElement("div")
videoDiv.className = "rounded shadow color-box"
videoDiv.appendChild(video)

}

    //const col = document.createElement("div")
    //col.className = "col-sm-6 col-md-4 col-lg-3 mb-3"
    //col.id = index
    //const colorBox = document.createElement("div")
    //colorBox.className = "rounded shadow color-box"
    // Background berish jarayoni
    // if (color.includes(".")) colorBox.style.background = `url(${color})`;
    // else colorBox.style.background = color;

//     colorBox.style.background = color;
//     colorBox.innerHTML = `
//     <button class="btn btn-danger" onclick="deleteColor('${index++}')"><i class="fas fa-trash"></i></button>
//     `
//     col.appendChild(colorBox);
//     colorsBox.appendChild(col)
// }

const deleteColor = (id) => {
    const element = document.getElementById(id)
    console.log(element);
    element.remove()
}
const removeAllColors = () => {
    lastColors = colorsBox.innerHTML;
    colorsBox.innerHTML = ""
}
const back = () => {
    colorsBox.innerHTML = lastColors
}

// const iframeTag = document.createElement("iframe")
// iframeTag.style.margin = "0"
// iframeTag.style.padding = "0"
// iframeTag.style.width = "100%"
// iframeTag.src = inputValues
// iframeTag.className = "video"

// colorsBox.appendChild(iframeTag)
// bigContainer.appendChild(colorsBox)