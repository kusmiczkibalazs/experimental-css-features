const image = document.querySelector("img");
const textBlock = document.querySelector(".text-block");
const paragraph = document.querySelector("p");

function filterTypeChange() {
    if (document.querySelector('input[name="filter-type"]:checked').value == "filter") {
        textBlock.style.display = "none"
        image.style.display = "block";
    } else {
        image.style.display = "none";
        textBlock.style.display = "flex";
    }
    filterContent();
}

function resetValues() {
    document.querySelectorAll('input:not([name="filter-type"])').forEach(input => {
        input.value = input.dataset.default;
    });
    filterContent();
}

function refreshValueDisplay() {
    document.querySelectorAll('input[type="range"]').forEach(input => {
        document.querySelector("." + input.id + ".value-display").innerHTML = input.value + input.dataset.unit;
    });
    document.querySelector(".drop-shadow-color.value-display").innerHTML = document.querySelector("#drop-shadow-color").value;
}

function getDropShadowString() {
    const shadowParams = document.querySelectorAll("input.drop-shadow");
    return "drop-shadow(" +
            shadowParams[0].value + shadowParams[0].dataset.unit + " " +
            shadowParams[1].value + shadowParams[1].dataset.unit + " " +
            shadowParams[2].value + shadowParams[2].dataset.unit + " " +
            shadowParams[3].value + ")";
}

function filterContent() {
    let styleString = "";
    document.querySelectorAll('input[type="range"]:not(.drop-shadow)').forEach(input => {
        styleString += input.id + "(" + input.value + input.dataset.unit + ") ";
    });
    styleString += getDropShadowString();

    if (document.querySelector('input[name="filter-type"]:checked').value == "filter") {
        image.style.filter = styleString;
    } else {
        paragraph.style.backdropFilter = styleString
    }

    refreshValueDisplay();
}

document.querySelectorAll('input[name="filter-type"]').forEach(elem => elem.addEventListener("click", filterTypeChange));
document.querySelectorAll('input:not([type="radio"])').forEach(elem => elem.addEventListener("input", filterContent));
document.querySelector("#reset-values").addEventListener("click", resetValues);

refreshValueDisplay();
filterContent();
filterTypeChange();
