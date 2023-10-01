
(function() {

    set_page();

})();



function set_page() {
    const app_url = window.location.href;
    const app_name = 'LENJOY 乐享';
    


    var timestamp = new Date().getTime();
    var cssUrl = "styles.css?v=" + timestamp;
    document.write('<link rel="stylesheet" href="' + cssUrl + '">');

    // let page = 'Home';

    // const app_title = page + ' - ' + app_name;
    document.title = app_name;
    $('.app_name').text(app_name);

    // const menuButton = document.getElementById('menu-btn');
    // menuButton.textContent = '目录';
    $('.menu-text').text('目录');

  

    
}
