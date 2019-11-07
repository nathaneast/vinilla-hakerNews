var contents = document.querySelector(".contents");
var n = 1;
$.ajax({
    method: "GET",
    url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
})
    .done(function (items) {
        for (var i = 0; 10 > i; i++) {
            $.get(`https://hacker-news.firebaseio.com/v0/item/${items[i]}.json?print=pretty`, function (item) {
                console.log(item);
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

                contents.appendChild(li);
                li.appendChild(firstLine);
                li.appendChild(secondLine);
                num.innerText = n+". ";
                firstLine.appendChild(num);
                title.innerText = item.title;
                firstLine.appendChild(title);
                url.innerText = item.url;
                firstLine.appendChild(url);

                score.innerText = item.score+" points ";
                secondLine.appendChild(score);
                by.innerText = "by "+item.by;
                secondLine.appendChild(by);
                time.innerText = " "+item.time
                secondLine.appendChild(time);
                coment.innerText = " "+item.descendants+" coments"
                secondLine.appendChild(coment);
                n++;
            });
        }
    });