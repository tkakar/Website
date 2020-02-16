$(function() {
    var newHash      = "",
        $mainContent = $("#wrapper"),
        $pageWrap    = $("#mainPage"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    // $("nav").delegate("a", "click", function() {
    //     window.location.hash = $(this).attr("href");
    //     return false;
    // });
    
    $(window).bind('hashchange', function(){
        newHash = window.location.hash.substring(1);
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');
});


$(function(){
    // var clicked =""
    // $('#header a[href]').click(function(){
    //     console.log($(this).attr('innerText'))
    //     clicked = $(this).attr('innerText')
    //     // if ($(this).attr('href').includes("index") && $(this).attr('innerText').includes("Tabassum")
    // });
$('#header a[href]').each(function() {
    if (window.location.pathname.includes($(this).attr('href'))|| window.location.pathname.includes($(this).attr('href'))) {
        if($(this).attr('href').includes("index") && $(this).attr('innerText').includes("Home")){ 
            // console.log("Home", $(this).attr('innerText'), $(this))
            $(this).addClass('activeMenu');
        }
        if ($(this).attr('href').includes("index") && $(this).attr('innerText').includes("Tabassum")){
            // console.log("Home", $(this).attr('innerText'), $(this))
            // console.log("Hi")
            $(this).removeClass('activeMenu');
        }
        else if (!$(this).attr('innerText').includes("Tabassum") ||  $(this).attr('innerText').includes("Home"))
            $(this).addClass('activeMenu');
    }
       
});

});


