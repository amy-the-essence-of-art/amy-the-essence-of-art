(function () {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.466774, 126.657658),
        zoom: 18
    });

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.467088, 126.658218),
        map: map
    });

    var path = "http://m.map.naver.com/route.nhn?menu=route&ename=%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%AF%B8%EC%B6%94%ED%99%80%EA%B5%AC%20%EC%88%99%EA%B3%A8%EB%A1%9C43%EB%B2%88%EA%B8%B8%20142&ex=126.9816485&ey=37.4765675&pathType=0&showMap=true";
    var contentString = [
            '<div class="iw_inner">',
            '    <div class="iw_head">',
            '        <p>',
            '            <img src="./images/logo.jpg" width="40px" height="40px" align="middle" />',
            '            <span class="main-text">예술의 정석 / <a class="search-road" href="' + path + '">길 찾기</a></span>',
            '        </p>',
            '    </div>',
            '    <div class="iw_body">',
            '        <p>\'일상에 예술 한 스푼\'</p>',
            '        <p>가치있는 즐거운 예술을 만듭니다.</p>',
            '        <p>문화예술의 중심 \'예술의 정석\'</p>',
            '    </div>',
            '    <p><label><img src="./images/logo_instagram.jpg" width="15px" height="15px" /> <a id="logo-instagram" href="https://www.instagram.com/amy_the_essence_of_art">amy_the_essence_of_art</a></label></p>',
            '</div>'].join('');

    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });

    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });

    infowindow.open(map, marker);
    infowindow.close();
    
    setTimeout(function() {
        infowindow.open(map, marker);
    }, 500);
})();
