var contents = document.querySelector(".contents");
var n = 1;
$.ajax({
    method: "GET",
    url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
})
    .done(function (items) {
        for (var i = 0; 10 > i; i++) {
            $.get(`https://hacker-news.firebaseio.com/v0/item/${items[i]}.json?print=pretty`, function (item) {
                var li = document.createElement("li");
                var postsNum = document.createElement("div");
                var postsText = document.createElement("div");
                var firstLine = document.createElement("div");
                var secondLine = document.createElement("div");
                var num = document.createElement("span");
                var title = document.createElement("span");
                var url = document.createElement("span");
                var score = document.createElement("span");
                var by = document.createElement("span");
                var time = document.createElement("span");
                var coment = document.createElement("span");
                var hide = document.createElement("span");
                var space = "\u00A0";

                li.classList.add("posts");
                postsNum.classList.add("postsNum");
                num.classList.add("postsNum-num");
                title.classList.add("postsText-title");
                url.classList.add("postsText-others");
                score.classList.add("postsText-others");
                by.classList.add("postsText-others");
                time.classList.add("postsText-others");
                hide.classList.add("postsText-others");
                coment.classList.add("postsText-others");

                num.innerText = n + "." + space;
                contents.appendChild(li);
                li.appendChild(postsNum);
                li.appendChild(postsText);
                postsNum.appendChild(num);

                title.innerText = item.title + space;
                url.innerText = item.url;
                postsText.appendChild(firstLine);
                postsText.appendChild(secondLine);
                firstLine.appendChild(title);
                firstLine.appendChild(url);

                score.innerText = item.score + " points ";
                by.innerText = "by "+item.by;
                time.innerText = space + item.time;
                hide.innerText = " | hide |";
                coment.innerText = space + item.descendants + " coments";
                secondLine.appendChild(score);
                secondLine.appendChild(by);
                secondLine.appendChild(time);
                secondLine.appendChild(hide);
                secondLine.appendChild(coment);
                n++;
            });
        }
    });