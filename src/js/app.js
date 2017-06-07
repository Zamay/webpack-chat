window.onload = function () {

    $('.chat[data-chat=person2]').addClass('active-chat');
    $('.person[data-chat=person2]').addClass('active');

    $('.left .person').mousedown(function () {
        if ($(this).hasClass('.active')) {
            return false;
        } else {
            var findChat = $(this).attr('data-chat');
            var personName = $(this).find('.name').text();
            $('.right .top .name').html(personName);
            $('.chat').removeClass('active-chat');
            $('.left .person').removeClass('active');
            $('.write').show();
            $(this).addClass('active');
            $('.chat[data-chat = ' + findChat + ']').addClass('active-chat');
        }

        return false;
    });

    $(document).on('click', '.setting-user a', function () {
        if ($(this).hasClass('.active')) {
            return false;
        } else {
            var findChat = $(this).attr('data-chat');
            var personName = 'Setting';
            $('.right .top .name').html(personName);
            $('.chat').removeClass('active-chat');
            $('.write').hide();
            $('.left .person').removeClass('active');
            $('.chat[data-chat = ' + findChat + ']').addClass('active-chat heid');

        }

        return false;
    });

    $(document).on('click', '.search-icon a', function () {
        $('.search').toggle();

        return false;
    });

    $(document).on('click', '.expand a', function () {
        // var compress = $('.compress');
        // var expand = $('.expand');
        // if (compress.style.display == "none"){
        //     expand.show();
        //     compress.hide();
        // } else {
        //     expand.hide();
        //     compress.show();
        // }
        $('.right').toggleClass('add-width');
        return false;
    });

    return false;

}