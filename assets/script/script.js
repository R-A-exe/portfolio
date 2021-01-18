var lastScT = 440;

$(document).scroll(() => {
    var dist = $(window).scrollTop();
    var opac = $("header").css("opacity");
    if (dist > 440) {
        if (lastScT < dist) {
            if (opac > 0) {
                $("header").css("opacity",  (50-dist + lastScT)/50);
            } else {
                lastScT = dist;
                console.log("CHANGE ")
                $("header").hide();
            }
        }
        else {
            if($("header").is(":hidden")){
                $("header").show();
            }
            if(opac < 1){
                $("header").css("opacity",  (lastScT-dist)/50);
            } else {
                lastScT = dist;
                console.log("CHANGE ")
            }   
        }
    } else {
        $("header").css("opacity", 1);
    }
})