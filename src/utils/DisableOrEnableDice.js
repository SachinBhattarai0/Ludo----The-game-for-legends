const DisableOrEnableDice = () => {
  const dice = document.querySelector("#dice");
  dice.disabled ? (dice.disabled = false) : (dice.disabled = true);
};

export default DisableOrEnableDice;
