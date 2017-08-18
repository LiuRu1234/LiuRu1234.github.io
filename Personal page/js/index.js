$('#dowebok').fullpage({
    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    'navigation': true,
    anchors: ['p0','p1', 'p2', 'p3', 'p4'],
    menu:"#menu",
    continuousVertical:true,
    navigationTooltips:["首页","资料","技能","项目","自评"],
    afterLoad:function (anchor,index) {
        if(index===1){
            $(".section1 .pic").addClass('animated bounceInDown');
            $(".section1 .name").addClass('animated flipInY');
            $(".section1 .zhiwei").addClass('animated slideInLeft');
        }
        if(index===2){
            $(".section2 .xinxi1").addClass('animated slideInLeft');
            $(".section2 .xinxi2").addClass('animated slideInDown');
            $(".section2 .xinxi3").addClass('animated slideInDown');
            $(".section2 .xinxi4").addClass('animated slideInRight');
        }
        if(index===3){
            $(".section3 h3").addClass('animated slideInDown');
        }
        if(index===4){
            $(".section4 li").addClass('animated slideInLeft');
        }
        if(index===5){
            var i = 0;
            var str = document.getElementById("string").innerHTML;
            function type() {
                if(i == str.length) {
                    return;
                }
                document.getElementById("showStr").innerText = str.substring(0, i++);
            }
            st=setInterval(type, 200); //通过定时器来让文字逐步显示
        }

    },
    onLeave:function (index) {
        if(index===1){
            $(".section1 .pic").removeClass('animated bounceInDown');
            $(".section1 .name").removeClass('animated flipInY');
            $(".section1 .zhiwei").removeClass('animated slideInLeft');
        }
        if(index===2){
            $(".section2 .xinxi1").removeClass('animated slideInLeft');
            $(".section2 .xinxi2").removeClass('animated slideInDown');
            $(".section2 .xinxi3").removeClass('animated slideInDown');
            $(".section2 .xinxi4").removeClass('animated slideInRight');
        }
        if(index===3){
            $(".section3 h3").removeClass('animated slideInDown');
        }
        if(index===4){
            $(".section4 li").removeClass('animated slideInLeft');
        }
        if(index===5){
            clearInterval(st);
        }
    }
});
var st;




