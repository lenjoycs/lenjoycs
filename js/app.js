
(function() {

    set_page();

})();



function set_page() {
    const app_url = window.location.href;
    const app_name = 'LENJOY 乐享';
    


    // var timestamp = new Date().getTime();
    // var cssUrl = "css/styles.css?v=" + timestamp;
    // document.write('<link rel="stylesheet" href="' + cssUrl + '">');

    // let page = 'Home';

    // const app_title = page + ' - ' + app_name;
    document.title = app_name;
    $('.app_name').text(app_name);
    // const menuButton = document.getElementById('menu-btn');
    // menuButton.textContent = '目录';

    $('.menu-text').text('目录');
    $('.svc-text').text('服务项目');
    $('.psvc-text').text('个人服务');
    $('.csvc-text').text('企业服务');
    $('.osvc-text').text('其他服务');
    $('.about-text').text('关于我们');

  

    
}
