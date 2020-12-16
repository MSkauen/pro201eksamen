import videoObjectsForSunbellSmart from './sunbellSmartVideoObjects.js';

let sideBar = document.querySelector('.sideBar');

sideBar.innerText = "Hellooo";
let course = document.createElement("div");
course.className = 'course';
course.innerHTML = `
    <div class="courseDetails">
    <h2>Sunbell Smart</h2>
    </div>`;

sideBar.appendChild(course);

let videoesContainer = document.createElement("div");
videoesContainer.className = 'allVideosContainer';

sideBar.appendChild(videoesContainer);

for (let videoObject of videoObjectsForSunbellSmart) {
    let sidebarItem = document.createElement("div");
    sidebarItem.className = 'sideBarItem';

    const titleOfVideo = document.createElement("h4");
    titleOfVideo.innerText = `${videoObject.numberInLine}/13 ${videoObject.title}`;
    sidebarItem.append(titleOfVideo);

    let playButton = document.createElement("div")
    playButton.className = 'playButton';
    playButton.innerHTML = `<img class="playIcon" src=${videoObject.playIcon}`;
    sidebarItem.append(playButton);

    sideBar.append(sidebarItem);
}