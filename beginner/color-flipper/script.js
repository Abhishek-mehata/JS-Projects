// console.log("#" + Math.floor(Math.random() * 16777215)).toString(16)
const btn = document.getElementById("btn");
const H2 = document.querySelector("h2")

const flipColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    if (randomColor === "#000000") {
        btn.style.color = "#ffffff";
        H2.style.color = "#ffffff";
    }
    else if(randomColor === "#ffffff") {
        btn.style.color = "#000000";
        H2.style.color = "#000000";
    }

    // btn.style.backgroundColor = randomColor;

}

// ✅ Why 16777215 in the random hex color generator?
// The number 16777215 is the maximum decimal value for a 24-bit color, which is what standard hex color codes (#RRGGBB) represent.
// #RRGGBB
// RR = Red (00 to FF)
// GG = Green (00 to FF)
// BB = Blue (00 to FF)

// Each of those two-digit hex values can range from 00 (0 in decimal) to FF (255 in decimal).

// Total colors = 256 (Red-RR) × 256 (Green-GG) × 256 (Blue-BB) = 16,777,216
// Max number to generate = 16777216 - 1 = 16777215


