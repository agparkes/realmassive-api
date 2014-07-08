$(function() {
    $.get('https://www.realmassive.com/api/v1/spaces/search/austin', function(data) {
        var $listing = $('.listing');
        var template = $('#record-template').html();

        _.each(data.results, function(record) {
            console.log(record);
            $listing.append(_.template(template, record));
        });
    });
});
