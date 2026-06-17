// Client-side i18n — reads locale from localStorage, fetches locale JSON,
// sets window.__locale / window.__t(), applies [data-i18n] attributes,
// then dispatches 'i18nReady' event.
(function () {
    var SUPPORTED = ['en', 'tr'];
    var DEFAULT = 'en';

    function getLocale() {
        var stored = localStorage.getItem('locale');
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
        var browser = navigator.language ? navigator.language.split('-')[0] : DEFAULT;
        if (SUPPORTED.indexOf(browser) !== -1) return browser;
        return DEFAULT;
    }

    var locale = getLocale();
    window.__locale = locale;
    window.__t = function (key) {
        return (window.__i18nData && window.__i18nData[key] !== undefined)
            ? window.__i18nData[key]
            : key;
    };

    function applyTranslations(data) {
        // [data-i18n] → innerHTML
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (data[key] !== undefined) el.innerHTML = data[key];
        });
        // [data-i18n-value] → value attribute (for inputs)
        document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-value');
            if (data[key] !== undefined) el.value = data[key];
        });
        window.dispatchEvent(new Event('i18nReady'));
    }

    fetch('data/locales/' + locale + '.json')
        .then(function (r) { return r.json(); })
        .then(function (data) {
            window.__i18nData = data;
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function () { applyTranslations(data); });
            } else {
                applyTranslations(data);
            }
        })
        .catch(function (err) { console.error('[i18n] Failed to load locale:', err); });
})();

