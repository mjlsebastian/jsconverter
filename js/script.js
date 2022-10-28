function meters() {
    let inches = document.getElementById("inchesInput").value;
    const meters = 1;
    const ans = inches * 0.0254;

    document.getElementById("display").innerHTML = ans.toFixed(3);
    document.getElementById("displayUnit").innerHTML = "meters";

}

function cm() {
    let inches = document.getElementById("inchesInput").value;
    const cm = 1;
    const ans = inches * 2.54;

    document.getElementById("display").innerHTML = ans.toFixed(2);
    document.getElementById("displayUnit").innerHTML = "cm";

}

function mm() {
    let inches = document.getElementById("inchesInput").value;
    const mm = 1;
    const ans = inches * 25.4;

    document.getElementById("display").innerHTML = ans.toFixed(2);
    document.getElementById("displayUnit").innerHTML = "mm";

}