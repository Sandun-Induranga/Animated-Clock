const deg = 6;

const hour = $("section:nth-child(1)");
const minute = $("section:nth-child(2)");
const sec = $("section:nth-child(3)");

setInterval(() =>{
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hour.css('transform', `rotateZ(${hh + (mm/12)}deg)`);
    minute.css('transform', `rotateZ(${mm}deg)`);
    sec.css('transform', `rotateZ(${ss}deg)`);

    $("p").text(hh/30 +":"+ mm/deg +":"+ ss/deg);
});
