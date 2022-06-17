const SetTokens = (tokenInfo) => {
  let boxes = document.querySelectorAll(".boxes");

  const RedPath = [
    boxes[19],
    boxes[20],
    boxes[21],
    boxes[22],
    boxes[23],
    boxes[15],
    boxes[12],
    boxes[9],
    boxes[6],
    boxes[3],
    boxes[0],
    boxes[1],
    boxes[2],
    boxes[5],
    boxes[8],
    boxes[11],
    boxes[14],
    boxes[17],
    boxes[24],
    boxes[25],
    boxes[26],
    boxes[27],
    boxes[28],
    boxes[29],
    boxes[41],
    boxes[53],
    boxes[52],
    boxes[51],
    boxes[50],
    boxes[49],
    boxes[48],
    boxes[56],
    boxes[59],
    boxes[62],
    boxes[65],
    boxes[68],
    boxes[71],
    boxes[70],
    boxes[69],
    boxes[66],
    boxes[63],
    boxes[60],
    boxes[57],
    boxes[54],
    boxes[47],
    boxes[46],
    boxes[45],
    boxes[44],
    boxes[43],
    boxes[42],
    boxes[30],
    boxes[31],
    boxes[32],
    boxes[33],
    boxes[34],
    boxes[35],
    "finalpath",
  ];
  const GreenPath = [
    boxes[5],
    boxes[8],
    boxes[11],
    boxes[14],
    boxes[17],
    boxes[24],
    boxes[25],
    boxes[26],
    boxes[27],
    boxes[28],
    boxes[29],
    boxes[41],
    boxes[53],
    boxes[52],
    boxes[51],
    boxes[50],
    boxes[49],
    boxes[48],
    boxes[56],
    boxes[59],
    boxes[62],
    boxes[65],
    boxes[68],
    boxes[71],
    boxes[70],
    boxes[69],
    boxes[66],
    boxes[63],
    boxes[60],
    boxes[57],
    boxes[54],
    boxes[47],
    boxes[46],
    boxes[45],
    boxes[44],
    boxes[43],
    boxes[42],
    boxes[30],
    boxes[18],
    boxes[19],
    boxes[20],
    boxes[21],
    boxes[22],
    boxes[23],
    boxes[15],
    boxes[12],
    boxes[9],
    boxes[6],
    boxes[3],
    boxes[0],
    boxes[1],
    boxes[4],
    boxes[7],
    boxes[10],
    boxes[13],
    boxes[16],
    "finalpath",
  ];
  const YellowPath = [
    boxes[52],
    boxes[51],
    boxes[50],
    boxes[49],
    boxes[48],
    boxes[56],
    boxes[59],
    boxes[62],
    boxes[65],
    boxes[68],
    boxes[71],
    boxes[70],
    boxes[69],
    boxes[66],
    boxes[63],
    boxes[60],
    boxes[57],
    boxes[54],
    boxes[47],
    boxes[46],
    boxes[45],
    boxes[44],
    boxes[43],
    boxes[42],
    boxes[30],
    boxes[18],
    boxes[19],
    boxes[20],
    boxes[21],
    boxes[22],
    boxes[23],
    boxes[15],
    boxes[12],
    boxes[9],
    boxes[6],
    boxes[3],
    boxes[0],
    boxes[1],
    boxes[2],
    boxes[5],
    boxes[8],
    boxes[11],
    boxes[14],
    boxes[17],
    boxes[24],
    boxes[25],
    boxes[26],
    boxes[27],
    boxes[28],
    boxes[29],
    boxes[41],
    boxes[40],
    boxes[39],
    boxes[38],
    boxes[37],
    boxes[36],
    "finalpath",
  ];
  const BluePath = [
    boxes[66],
    boxes[63],
    boxes[60],
    boxes[57],
    boxes[54],
    boxes[47],
    boxes[46],
    boxes[45],
    boxes[44],
    boxes[43],
    boxes[42],
    boxes[30],
    boxes[18],
    boxes[19],
    boxes[20],
    boxes[21],
    boxes[22],
    boxes[23],
    boxes[15],
    boxes[12],
    boxes[9],
    boxes[6],
    boxes[3],
    boxes[0],
    boxes[1],
    boxes[2],
    boxes[5],
    boxes[8],
    boxes[11],
    boxes[14],
    boxes[17],
    boxes[24],
    boxes[25],
    boxes[26],
    boxes[27],
    boxes[28],
    boxes[29],
    boxes[41],
    boxes[53],
    boxes[52],
    boxes[51],
    boxes[50],
    boxes[49],
    boxes[48],
    boxes[56],
    boxes[59],
    boxes[62],
    boxes[65],
    boxes[68],
    boxes[71],
    boxes[70],
    boxes[67],
    boxes[64],
    boxes[61],
    boxes[58],
    boxes[55],
    "finalpath",
  ];
  const TokenPaths = { RedPath, GreenPath, BluePath, YellowPath };

  //SetTokens
  const tokenInfos = Object.values(tokenInfo);
  tokenInfos.forEach((tokenInfo) => {
    const { Color, tokenPositions, parentClass } = tokenInfo;
    const parents = document.querySelectorAll(parentClass);
    Object.values(tokenPositions).forEach((tokenPosition, i) => {
      tokenPosition == null
        ? (parents[
            i
          ].innerHTML = `<button disabled class='token ${Color.toLowerCase()}'></button>`)
        : (TokenPaths[Color + "Path"][
            tokenPosition
          ].innerHTML = `<button disabled class='token ${Color.toLowerCase()}'></button>`);
    });
  });
};

export default SetTokens;
