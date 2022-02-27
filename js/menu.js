$(function () {

    var menuBtn = $("#menu_btn");//메뉴 버튼
    var menu_Li = $("#main_menu").find('a')//메뉴 글씨
    var on_off = true;
    menuBtn.on('click',menuBtnEffect);

    function menuBtnEffect(e) {
        e.preventDefault();
        
        //메뉴 열리는 효과 함수--------------------------------------------------------------
        if (on_off) { 
            
            $("#menu_wrap").css({'top':0}); //menu_wrap 위치 내림
            $("#menu_btn span, .menu_bg").addClass('selected'); //메뉴 버튼 & 배경 생성
            menu_Li.stop().delay(200).animate({'opacity':1},250,"easeOutCubic"); //메뉴 글씨 opacity: 1
            on_off=false;//변수를 false로 초기화
            
            //열린 상태에서 메뉴 a클릭했을 때-------------------------------------------------
            $("#main_menu ul li a").click(function(){
                $("#menu_btn span, .menu_bg").removeClass('selected');// 메뉴 버튼 & 배경 제거
                menu_Li.stop().animate({'opacity':0},250,"easeOutCubic",function(){ //메뉴 글씨 opacity: 0
                    
                    setTimeout(function(){//0.5초 있다가 menu_wrap 위치 초기화
                        $("#menu_wrap").css({'top':"-110%"});
                    },500);
                    
                    on_off=true;//변수를 true로 초기화
                });
            });
            
            
        //메뉴 닫히는 효과 함수--------------------------------------------------------------
        }else{
            //제거 과정 (메뉴 배경, 버튼, 글씨 변경)
            $("#menu_btn span, .menu_bg").removeClass('selected');// 메뉴 버튼 & 배경 제거
            menu_Li.stop().animate({'opacity':0},250,"easeOutCubic",function(){//메뉴 글씨 opacity: 0

               setTimeout(function(){//0.5초 있다가 menu_wrap 위치 초기화
                        $("#menu_wrap").css({'top':"-110%"});
                    },500);
            });

            on_off=true;//변수를 true로 초기화
        }
    }
    
});

