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
                var firstLine = document.createElement("div");
                var secondLine = document.createElement("div");
                var num = document.createElement("span");
                var title = document.createElement("span");
                var url = document.createElement("span");
                var score = document.createElement("span");
                var by = document.createElement("span");
                var time = document.createElement("span");
                var coment = document.createElement("span");

                firstLine.classList.add("content-line");
                secondLine.classList.add("content-line");
                title.classList.add("content-title");
                num.classList.add("content-num");
                url.classList.add("content-others");
                score.classList.add("content-others");
                by.classList.add("content-others");
                time.classList.add("content-others");
                coment.classList.add("content-others");

                num.innerText = n+". ";
                title.innerText = item.title+" ";
                url.innerText = item.url;
                contents.appendChild(li);
                li.appendChild(firstLine);
                li.appendChild(secondLine);
                firstLine.appendChild(num);
                firstLine.appendChild(title);
                firstLine.appendChild(url);

                score.innerText = item.score+" points ";
                by.innerText = "by "+item.by;
                time.innerText = " "+item.time
                coment.innerText = " "+item.descendants+" coments"
                secondLine.appendChild(score);
                secondLine.appendChild(by);
                secondLine.appendChild(time);
                secondLine.appendChild(coment);
                n++;
            });
        }
    });