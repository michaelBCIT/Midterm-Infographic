function HeaderUI (text = "THE COST OF FOOD WASTE"){
    return `<div style="
    background-color: #FE9179; 
    height:133px;
    width:375px;

    display: flex;
    justify-content:center;
    align-items:center;
    ">
        <div style="
        font-size:30px;
        font-weight: bold;

        color: #FFFFFF;
        text-shadow: 0px 3px 0px #70614F;
        font-family: sans-serif;

        display: flex;
        justify-content:center;
        align-items:center;

        padding: 50px;
        margin-left: 30px;
        ">
        ${text}
        </div>
    </div>` 
}

//export const Header = HeaderUI();   

 

