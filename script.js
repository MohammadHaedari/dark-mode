function selectMode(mode) {
    

    if (mode === "dark") {
        //color for dark mode
        color = "var(--light)";
        //background color for dark mode
        backgroundcolor = "var(--dark)";
        //image for dark mode
        image = "img/moon.png";
        //dark mode label
        label = "Dark Mode";
        //color of texts
        informationscolor = "var(--light)";
        //background color of texts
        backgroundinformations = "var(--dark2)";
        //texts 
        informationstext = "Hover moon if you are bored";
        //navbar width
        barwidth = "0";
        //burger color
        burgercolor = "var(--light2)";
    } else if (mode === "light") {
        //color for light mode
        color = "var(--dark)";
        //background color for light mode
        backgroundcolor = "var(--light)";
        //image for light mode
        image = "img/sun.png";
        //light mode label
        label = "Light Mode";
        //color of texts
        informationscolor = "var(--dark)";
        //background color of texts
        backgroundinformations = "var(--light2)";
        //texts
        informationstext = "Hover sun if you are bored";
        //navbar width
        barwidth = "0";
        //burger color
        burgercolor = "var(--dark)";
    } else {
        //color od special mode
        color = "var(--light)";
        //background color of special mode
        backgroundcolor = "linear-gradient(45deg,var(--green),var(--blue),var(--green))";
        //image of special mode
        image = "img/worldwide.png"
        //special mode label
        label = "Special Mode";
        //color of texts
        informationscolor = "var(--light)";
        //background color of texts
        backgroundinformations = "var(--green)";
        //texts
        informationstext = "Hover earth if you are bored";
        //navba rwidth
        barwidth = "0";
        //burger color
        burgercolor = "var(--light2)";
    }
    
    console.log(label);

    //changing css codes
    document.getElementById("theme").style.background = backgroundcolor;
    document.getElementById("theme").style.color = color;
    document.getElementById("informations").style.background = backgroundinformations;
    document.getElementById("informations").style.color = informationscolor;
    document.getElementById("icon").src = image;
    document.getElementById("label").innerHTML = label;
    document.getElementById("informations").innerHTML= informationstext;
    document.getElementById("myNav").style.width = barwidth;
    document.getElementById("burger").style.color = burgercolor;
}


function openNav() {
    //opening navbar
    document.getElementById("myNav").style.width = "100%";
}
