// Client-side results page renderer.
// Depends on: results_handler.js (globals), dimensions.js (global), _i18n.js (window.__t)
(function () {
    function buildDimensionHTML(leftDim, rightDim, leftPercent, neutralPercent, rightPercent, delay) {
        var t = window.__t;
        var neutralHtml = neutralPercent > 0
            ? '<div class="rail center-aligned" style="width:' + calculateWidth(neutralPercent) + ';">' + neutralPercent + '%</div>'
            : '';
        return '<div class="axis no-reveal" style="--delay:' + delay + 'ms">' +
            '<img src="' + leftDim.imageSrc + '" alt="' + t(leftDim.name) + ' ' + t('icon') + '">' +
            '<div class="rail left-aligned" style="background-color:#' + leftDim.color + ';width:' + calculateWidth(leftPercent) + ';' + (leftPercent > 0 ? '' : 'padding-right:0;') + '">' +
            '<span class="rail-name">' + t(leftDim.name) + '</span>' +
            '<span class="rail-percent" style="' + (leftPercent > 0 ? '' : 'display:none;') + '">' + leftPercent + '%</span>' +
            '</div>' +
            neutralHtml +
            '<div class="rail right-aligned" style="background-color:#' + rightDim.color + ';width:' + calculateWidth(rightPercent) + ';' + (rightPercent > 0 ? '' : 'padding-left:0;') + '">' +
            '<span class="rail-name">' + t(rightDim.name) + '</span>' +
            '<span class="rail-percent" style="' + (rightPercent > 0 ? '' : 'display:none;') + '">' + rightPercent + '%</span>' +
            '</div>' +
            '<img src="' + rightDim.imageSrc + '" alt="' + rightDim.name + ' ' + t('icon') + '">' +
            '</div>';
    }

    function renderResults() {
        var params = new URLSearchParams(window.location.search);
        // Build a plain object of query params for generateScoresMap
        var resultsQuery = {test: params.get('test')};
        params.forEach(function (value, key) {
            if (key !== 'test' && key !== 'lang') resultsQuery[key] = value;
        });

        var result = generateScoresMap(resultsQuery);
        var scoresMap = result[0];
        var renderOrder = result[1];

        var panel = document.getElementById('panel');
        var html = '';
        var d = 100;

        renderOrder.forEach(function (element) {
            var scores0 = scoresMap[String(element[0])];
            var scores1 = scoresMap[String(element[1])];
            if (!scores0 || !scores1) return;
            var pct = calculateScorePercentages(scores0, scores1);
            html += buildDimensionHTML(dimensions[element[0]], dimensions[element[1]], pct[0], pct[1], pct[2], d);
            d += 100;
        });

        panel.innerHTML = html;
    }

    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', renderResults);
        } else {
            renderResults();
        }
    }

    // Render immediately when DOM is ready. i18n translations will be applied
    // if/when they load; renderResults can work without them (uses English keys as fallback).
    init();
})();

