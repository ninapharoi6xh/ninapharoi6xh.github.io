var contact_footer = document.getElementById('contact_footer'),
    contact_product = document.getElementById('contact_product'),
    contact_landing = document.getElementById('contact_landing'),
    contact_newsletter = document.getElementById('contact_newsletter'),
    contact_tesztgep = document.getElementById('contact_tesztgep');

var captchas = {
    'footer': {},
    'product': {},
    'landing': {},
    'newsletter': {},
    'tesztgep': {},
}

var onloadCallback = function () {
    var sitekey = '6Ldm1zIUAAAAAFoU4nt8UIc8n473BqaUoMdPdqK3';

    if (contact_footer) {
        captchas['footer']['id'] = grecaptcha.render('footer_captcha', {
            'sitekey': sitekey,
            'callback': footer_captcha_callback,
            'size': 'invisible'
        });
    }

    if (contact_product) {
        captchas['product']['id'] = grecaptcha.render('product_captcha', {
            'sitekey': sitekey,
            'callback': product_captcha_callback,
            'size': 'invisible'
        });
    }

    if (contact_landing) {
        captchas['landing']['id'] = grecaptcha.render('landing_captcha', {
            'sitekey': sitekey,
            'callback': landing_captcha_callback,
            'size': 'invisible'
        });
    }

    if (contact_newsletter) {
        captchas['newsletter']['id'] = grecaptcha.render('newsletter_captcha', {
            'sitekey': sitekey,
            'callback': newsletter_captcha_callback,
            'size': 'invisible'
        });
    }

    if (contact_tesztgep) {
        captchas['tesztgep']['id'] = grecaptcha.render('tesztgep_captcha', {
            'sitekey': sitekey,
            'callback': tesztgep_captcha_callback,
            'size': 'invisible'
        });
    }

};

var contact_forms = document.querySelectorAll('.form');

contact_forms.forEach(function (contact_form) {
    var captcha = contact_form.dataset.captcha;
    
    contact_form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('CAPTCHA:', captcha);
        sumbitform(contact_form, captchas[captcha].id);
    });
});

function sumbitform(form, captcha_id) {
    var resp = grecaptcha.getResponse(captcha_id)
    console.log(resp);
    
    if (resp) {
        form.submit();
    } else {
        grecaptcha.execute(captcha_id);
    }
}

function footer_captcha_callback() {
    sumbitform(contact_footer, captchas['footer'].id);
}

function product_captcha_callback() {
    sumbitform(contact_product, captchas['product'].id);
}

function landing_captcha_callback() {
    sumbitform(contact_landing, captchas['landing'].id);
}

function newsletter_captcha_callback() {
    sumbitform(contact_newsletter, captchas['newsletter'].id);
}

function tesztgep_captcha_callback() {
    sumbitform(contact_tesztgep, captchas['tesztgep'].id);
}
