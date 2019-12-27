var contents = document.querySelector(".contents");
var n = 1;
var space = "\u00A0"

function getApi() {
    var i = 0;
    var topArr;

    var getItem = function () {
        if (i < 30) {
            $.get(`https://hacker-news.firebaseio.com/v0/item/${topArr[i++]}.json?print=pretty`, item => {
                viewData(item);
                getItem();
            })
        }
    }

    $.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', list => {
        topArr = list;
        getItem();
    })
}
getApi();


function viewData(data) {
    // 태그 생성

    var posts = document.createElement("li");
    var postsNum = document.createElement("div");
    var postsText = document.createElement("div");
    var firstLine = document.createElement("div");
    var secondLine = document.createElement("div");
    var num = document.createElement("span");
    var url = document.createElement("span");
    var title = document.createElement("span");
    var postsInfo = document.createElement("ul");
    var score = document.createElement("li");
    var by = document.createElement("li");
    var time = document.createElement("li");
    var hide = document.createElement("li");
    var coment = document.createElement("li");

    // 클래스 생성
    posts.classList.add("posts");
    postsNum.classList.add("postsNum");
    num.classList.add("postsNum-num");
    title.classList.add("postsText-title");
    title.classList.add("cursorEffect");
    url.classList.add("postsText-deco");
    postsInfo.classList.add("postsInfo");
    score.classList.add("postsText-deco");
    by.classList.add("postsText-deco");
    time.classList.add("postsText-deco");
    hide.classList.add("postsText-deco");
    coment.classList.add("postsText-deco");

    // 블럭요소로 틀 잡기
    num.innerText = n + "." + space;
    title.innerText = data.title + space;
    url.innerText = data.url;
    contents.appendChild(posts);
    posts.appendChild(postsNum);
    posts.appendChild(postsText);
    postsText.appendChild(firstLine);
    postsText.appendChild(secondLine);
    secondLine.appendChild(postsInfo);

    // 블럭요소 안에 인라인 요소 삽입
    postsNum.appendChild(num);
    firstLine.appendChild(title);
    firstLine.appendChild(url);

    var scoreEle = document.createElement("span");
    var byEle = document.createElement("span");
    var TimeEle = document.createElement("span");
    var hideEle = document.createElement("span");
    var comentEle = document.createElement("span");

    url.classList.add("hoverEffect");
    byEle.classList.add("hoverEffect");
    TimeEle.classList.add("hoverEffect");
    hideEle.classList.add("hoverEffect");
    hideEle.classList.add("postsInfo-hide");
    comentEle.classList.add("hoverEffect");

    scoreEle.innerText = data.score + " points ";
    by.innerText = "by" + space;
    byEle.innerText = data.by;
    TimeEle.innerText = data.time;
    hideEle.innerText = "hide";
    comentEle.innerText = data.descendants + " coments";

    score.appendChild(scoreEle);
    by.appendChild(byEle);
    time.appendChild(TimeEle);
    hide.appendChild(hideEle);
    coment.appendChild(comentEle);
    postsInfo.appendChild(score);
    postsInfo.appendChild(by);
    postsInfo.appendChild(time);
    postsInfo.appendChild(hide);
    postsInfo.appendChild(coment);
    n++;
}
