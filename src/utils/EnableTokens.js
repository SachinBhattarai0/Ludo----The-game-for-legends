import DisableOrEnableDice from "./DisableOrEnableDice";

const EnableTokens = (turn, points) => {
  DisableOrEnableDice();
  const currentTurnTokens = document.querySelectorAll(
    `.token.${turn.toLowerCase()}`
  );

  if (points == 6) {
    currentTurnTokens.forEach((token) => (token.disabled = false));
    return;
  }
  [...currentTurnTokens]
    .filter((token) => token.parentElement.className == "boxes")
    .forEach((token) => (token.disabled = false));
};

export default EnableTokens;
