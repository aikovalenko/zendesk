$(window).load(function() {
    header();
});

$(window).scroll(function (event) {
    header();
});

function header() {
    var scroll = $(window).scrollTop(),
        header = $('.js-sticky');

    if (scroll > 0) {
        header.addClass('header--sticky');
    }
    else {
        header.removeClass('header--sticky');
    }
}

function parseNews() {
    var preloader = $('.preloader'),
        block = $('.test'),
        btn = $('.js-load-news');

    preloader.addClass("preloader--loading");

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        dataType: 'JSON',
        type: 'get',
        success: function(data) {

            setTimeout(function () {

                var template = [];
                $(data).slice(0, 10).each(function (index, value) {
                    template.push(
                        '<article class="post-ajax">' +
                            '<h3>' + value.title + '</h3>' +
                            '<p>' + value.body + '</p>' +
                        '</article>'
                    );
                });


                preloader.removeClass("preloader--loading");
                block.append(template.reverse());

                $.each($('.post-ajax'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass("post-ajax--shown");
                    }, 100 + (i * 150));
                });
            }, 1000);

        }
    });
}
$('.js-load-news').on('click', function () {

    parseNews();
    $(this).remove();

});