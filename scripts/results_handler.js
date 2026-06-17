const completeRenderOrder = [[11, 17], [10, 12], [15, 18], [2, 13], [22, 23], [16, 6], [1, 20], [14, 19], [3, 7], [5, 4], [8, 0], [9, 21]];
const basicRenderOrder = [[11, 17], [2, 13], [16, 6], [5, 4]];

function generateScoresMap(resultsQuery) {
  let preferredRenderOrder = resultsQuery.test === 'complete' ? completeRenderOrder : basicRenderOrder;
  let result = {};
  for (const [key, _value] of Object.entries(resultsQuery)) {
    let scoresPair = resultsQuery[key].split(",");
    result[key] = [parseInt(scoresPair[0]), parseInt(scoresPair[1])];
  }
  return [result, preferredRenderOrder];
}

function calculateScorePercentages(left, right) {
  const neutralScore = left[1] + right[1];
  const totalScore = left[0] + right[0] + neutralScore + 0.0000001;
  let leftActual = (left[0] / totalScore) * 100;
  let neutralActual = (neutralScore / totalScore) * 100;
  let rightActual = (right[0] / totalScore) * 100;
  let leftPercent = Math.floor(leftActual);
  let neutralPercent = Math.floor(neutralActual);
  let rightPercent = Math.floor(rightActual);
  while((leftPercent + neutralPercent + rightPercent) < 100) {
    const leftDecimal = leftActual % 1;
    const neutralDecimal = neutralActual % 1;
    const rightDecimal = rightActual % 1;

    if(leftDecimal > neutralDecimal && leftDecimal > rightDecimal) {
      leftPercent++;
      leftActual -= leftDecimal;
    }
    else if(rightDecimal > neutralDecimal && rightPercent > leftDecimal) {
      rightPercent++;
      rightActual -= rightDecimal;
    }
    else {
      neutralPercent++;
      neutralActual -= neutralDecimal;
    }
  }
  return [leftPercent, neutralPercent, rightPercent];
}

function calculateWidth(percent) {
  if(percent === 0) {
    return '0%';
  }
  else if(percent < 10) {
    return 'var(--width-min)';
  }
  return `${percent}%`
}

// generateScoresMap, calculateScorePercentages, calculateWidth are browser globals.
// module.exports removed for static/browser use.
