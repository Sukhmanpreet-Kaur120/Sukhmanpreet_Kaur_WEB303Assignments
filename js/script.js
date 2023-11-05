$('.accord-name').on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    $('.accord-list').each(function() {
        $this.removeClass('showing');
    })

    $this.togglrClass('showing');
    $this.next().slideToggle();
    $('.accord-list').not($this.next()).slideUp();
});

$('.tab-list').hide();
$('#tab1').show();

$('.tab-panel').on('click', function(e) {
    e.preventDefault();
    $('.tab-panel li').removeClass('active');
    $('.tab-list').hide();

    $(this).addClass('active');
    let panel = $(this).find('a').attr('href');
    $(panel).show();
    return false;
});