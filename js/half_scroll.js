$(window).load(function () {

    var skills1 = $("#skills1"); //고정 시작 영역
    var leftBox = $("#left_box"); // 고정될 영역
    var nextSection = $("#work"); //반 스크롤 다음 섹션
    var titLi = $(tit_list).children(); // 제목 리스트 Li
    var titLiNum = titLi.size(); //제목 리스트 Li 개수
    var txtLi = $(txt_list).children(); // 텍스트 리스트 Li
    var idx = 0;
    var windowWidth


    Reset();
    inEvent();

    function Reset() { //window사이즈를 측정해주는 함수
        windowWidth = $(window).width();
    }


    function inEvent() { //이벤트 적용 함수
        $(window).on('resize', Reset);
        $(window).on('scroll', halfScroll);
    }


    function halfScroll() {

        //-----------------해상도가 768이상일 때만 half scroll 적용-----------------
        if (windowWidth > 768) {
            
            //스크롤 값이 leftBox가 보이는 범위 안에 있을 때
            if ($(window).scrollTop() >= skills1.offset().top && $(window).scrollTop() <= $('#right_box ul li').last().offset().top) {
                //왼쪽 박스 고정
                leftBox.css({'position': 'fixed','top': 0,'left': 0});
                txtLi.css({'position': 'absolute'});

                //각 타이틀에 맞는 텍스트 보여주는 애니메이션
                for (i = 0; i < titLiNum; i++) {
                    if ($(window).scrollTop() >= titLi.eq(i).offset().top * 0.9) {
                        txtLi.css({'opacity': 0});
                        txtLi.eq(i).css({'opacity': 1});
                    }
                }
                
            }else { //스크롤값이 leftBox범위보다 클 때
                leftBox.css({'position': 'relative'});
                txtLi.css({'position': 'relative'});
            }

            
        }else{//-----------------window 해상도가 768이하일때-----------------
            leftBox.css({'position': 'relative'});
            txtLi.css({'position': 'relative','opacity':1});

        }
    }
});
