const $ = window.jQuery;
const ga = window.ga;

$(document).ready(function(e) {
    $('body').on('click', 'a', function(e) {
        if("ga" in window) {
            var $this = $(this);
            var href = $this.prop('href').split('?')[0];
            var ext = href.split('.').pop();
            if ('xls,xlsx,doc,docx,ppt,pot,pptx,pdf,pub,txt,zip,rar,tar,7z,gz,exe,wma,mov,avi,wmv,wav,mp3,midi,csv,tsv,jar,psd,pdn,ai,pez,wwf,torrent,cbr'.split(',').indexOf(ext) !== -1) {
                ga('send', 'event', 'Download', ext, href);
            }
            if (href.toLowerCase().indexOf('mailto:') === 0) {
                ga('send', 'event', 'Mailto', href.substr(7));
            }
            if (href.toLowerCase().indexOf('tel:') === 0) {
                ga('send', 'event', 'Phone number', href.substr(4));
            }
            if ((this.protocol === 'http:' || this.protocol === 'https:') && this.hostname.indexOf(document.location.hostname) === -1) {
                ga('send', 'event', 'Outbound', this.hostname, this.pathname);
            }
        }
    });
});
