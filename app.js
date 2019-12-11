var contents = document.querySelector(".contents");
var n = 1;
var space = "\u00A0";

$.ajax({
    method: "GET",
    url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
})
    .done(function (items) {
        for (var i = 0; i < 30; i++) {
            $.get(`https://hacker-news.firebaseio.com/v0/item/${items[i]}.json?print=pretty`, function (item) {
                var li = document.createElement("li");
                var postsNum = document.createElement("div");
                var postsText = document.createElement("div");
                var firstLine = document.createElement("div");
                var secondLine = document.createElement("div");
                var postsInfo = document.createElement("ul");
                var num = document.createElement("span");
                var url = document.createElement("span");
                var title = document.createElement("span");
                var score = document.createElement("li");
                var by = document.createElement("li");
                var time = document.createElement("li");
                var hide = document.createElement("li");
                var coment = document.createElement("li");

                // postsNum , postsText
                li.classList.add("posts");
                postsNum.classList.add("postsNum");
                num.classList.add("postsNum-num");
                postsInfo.classList.add("postsInfo");
                title.classList.add("postsText-title");
                title.classList.add("cursorEffect");
                url.classList.add("postsText-deco");
                score.classList.add("postsText-deco");
                by.classList.add("postsText-deco");
                time.classList.add("postsText-deco");
                hide.classList.add("postsText-deco");
                coment.classList.add("postsText-deco");

                // firstLine , secondLine
                num.innerText = n + "." + space;
                title.innerText = item.title + space;
                url.innerText = item.url;
                contents.appendChild(li);
                li.appendChild(postsNum);
                li.appendChild(postsText);
                postsNum.appendChild(num);
                postsText.appendChild(firstLine);
                postsText.appendChild(secondLine);
                firstLine.appendChild(title);
                firstLine.appendChild(url);
                secondLine.appendChild(postsInfo);

                // firstLine , secondLine 안에 요소들
                var scoreEle = document.createElement("span");
                var byEle = document.createElement("span");
                var TimeEle = document.createElement("span");
                var hideEle = document.createElement("span");
                var comentEle = document.createElement("span");
                scoreEle.innerText = item.score + " points ";
                by.innerText = "by" + space;
                byEle.innerText = item.by;
                TimeEle.innerText = item.time;
                hideEle.innerText = "hide";
                comentEle.innerText = item.descendants + " coments";
                url.classList.add("hoverEffect");
                byEle.classList.add("hoverEffect");
                TimeEle.classList.add("hoverEffect");
                hideEle.classList.add("hoverEffect");
                hideEle.classList.add("postsInfo-hide");
                comentEle.classList.add("hoverEffect");
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
            });
        }
    });
    