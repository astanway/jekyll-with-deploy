function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

if (getParam("success") == "true") {
    alert('You\'re awesome.')
}

if (getParam("success") == "false") {
    alert('Yikes! Looks like your payment didn\'t go through. Try again?')
}

$(function() {
    $('#buy1').click(function(){ 
        var token = function(res){
            var $input = $('<input type=hidden name=stripeToken />').val(res.id);
            $('form').append($input).submit();
            var $emailInput = $('<input type=hidden name=stripeEmail />').val(res.email);
            $('form').append($input).append($emailInput).submit();
        };

        var description = 'Thanks for your support!';
        var amount = parseInt($('#form1').val()) * 100
        StripeCheckout.open({
            key:        'pk_YccsSmoNgT5S1MVLuKzs6ExOhq1e3',
            amount:      amount,
            currency:    'usd',
            name:        'Donate $' + $('#form1').val() + ' to save Abe!',
            description: description,
            panelLabel:  'Pay',
            token:       token,
            shippingAddress: true
        });

        return false;
    });
    
    
    $('#buy2').click(function(){ 
        var token = function(res){
            var $input = $('<input type=hidden name=stripeToken />').val(res.id);
            $('form').append($input).submit();
            var $emailInput = $('<input type=hidden name=stripeEmail />').val(res.email);
            $('form').append($input).append($emailInput).submit();
        };

        var description = 'Thanks for your support!';
        var amount = parseInt($('#form2').val()) * 100
        StripeCheckout.open({
            key:        'pk_YccsSmoNgT5S1MVLuKzs6ExOhq1e3',
            amount:      amount,
            currency:    'usd',
            name:        'Donate $' + $('#form2').val() + ' to save Abe!',
            description: description,
            panelLabel:  'Pay',
            token:       token,
            shippingAddress: true
        });

        return false;
    });
    
});

