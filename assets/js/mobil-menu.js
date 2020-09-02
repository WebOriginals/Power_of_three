$( '.show-menu-btn' ).on( 'click', function(){
        $( '.menu' ).addClass( 'open-menu' );
        $( 'body' ).addClass( 'no-scroll' );
});

$( '.close-menu' ).on( 'click', function(){
    $( '.menu' ).removeClass( 'open-menu' );
    $( 'body' ).removeClass( 'no-scroll' );
});



