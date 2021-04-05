function selectMode(mode) {
    

    if (mode === "dark") {
        color = "var(--light)";
        backgroundcolor = "var(--dark)";
        image = "img/moon.png";
        label = "Dark Mode";
        informationscolor = "var(--light)";
        backgroundinformations = "var(--dark2)";
        informationstext = "Hover moon if you are bored";
    } else if (mode === "light") {
        color = "var(--dark)";
        backgroundcolor = "var(--light)";
        image = "img/sun.png";
        label = "Light Mode";
        informationscolor = "var(--dark)";
        backgroundinformations = "var(--light2)";
        informationstext = "Hover sun if you are bored";
    } else {
        color = "var(--light)";
        backgroundcolor = "linear-gradient(45deg,var(--green),var(--blue),var(--green))";
        image = "img/worldwide.png"
        label = "Special Mode";
        informationscolor = "var(--light)";
        backgroundinformations = "var(--green)";
        informationstext = "Hover earth if you are bored";
    }
    
    console.log(label);
    
    document.getElementById("theme").style.background = backgroundcolor;
    document.getElementById("theme").style.color = color;
    document.getElementById("informations").style.background = backgroundinformations;
    document.getElementById("informations").style.color = informationscolor;
    document.getElementById("icon").src = image;
    document.getElementById("label").innerHTML = label;
    document.getElementById("informations").innerHTML= informationstext;
}
