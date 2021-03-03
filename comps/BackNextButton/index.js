function BackNextButtonUI(text="text") {
    return `<div class="back" style="
    background-color:#FE9179;
    height: 40px;
    width: 75px;
    border-radius: 10px;
    color: white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-family: sans-serif;
    font-weight: bold;
    ">${text}
    </div>

    <br>

    <div class="next" style="
    background-color:#FE9179;
    height: 40px;
    width: 75px;
    border-radius: 10px;
    color: white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-family: sans-serif;
    font-weight: bold;
    ">${text}
    </div>


    `
}

export const BackNextButton = BackNextButtonUI();