(function() {
    var ul = document.querySelector('#wrap ul'),
        lis = document.querySelectorAll('#wrap ul li'),
        closeBtns = document.querySelectorAll('#wrap ul li .close'),
        timer = null,
        last = null;

    timer = setTimeout(function() {
        ul.className = '';
        clearTimeout(timer);
    }, 200);

    // ul.addEventListener('click', function(e) {
    //     console.log(e.target);
    //     var target = e.target;
    //     // target.className = 'activeWrap';
    // }, false);

    lis.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // console.log(this);
            ul.setAttribute('id', 'activeWrap');
            last && (last.className = '');
            this.className = 'active';
            last = this;
        }, false)

        closeBtns[index].addEventListener('click', function(e) {
            e.cancelBubble = true;
            ul.removeAttribute('id');
            lis[index].className = '';
            last = null;
        }, false);
    });
}())