$(document).ready(function(){
    $("#btnshow").click(function(){
        $(".sidenav").toggleClass('push');
            $(".mainscreen").toggleClass('push');
            $(".lowscreen").toggleClass('push');
            $(".dashboard").toggleClass('push')
    });
});

$(document).ready(function(){
    $("#showsenav").click(function(){
        $(".seconsnav").toggle('display');
        $(".thirdsnav").hide(".seconsnav");
    });
});

$(document).ready(function(){
    $("#showthnav").click(function(){
        $(".thirdsnav").toggle('display');
        $(".seconsnav").hide(".thirdsnav");
    });
});
