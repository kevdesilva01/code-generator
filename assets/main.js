document.getElementById("randombarcode").onclick = function () {
    location.href = "rand_barcode.html";
};

document.getElementById("custombarcode").onclick = function () {
    location.href = "custom_barcode.html";
};

document.getElementById("random2d").onclick = function () {
    location.href = "rand_datamatrix.html";
};

document.getElementById("custom2d").onclick = function () {
    location.href = "custom_datamatrix.html";
};

function generateRandomBarcode() {
    var generatedCode = "EXC_TEST_" + createRandomCode(7);
    var newBarcode = JsBarcode("#barcode", generatedCode, {
        format: "CODE128",
        linecolor: "0000",
        fontSize: 50,
        width: 4,
        height: 200,
    })
    return newBarcode;
}

function generateCustomBarcode() {
    var generatedCode = "EXC_TEST_" + document.getElementById('customstring').value;
    var newBarcode = JsBarcode("#barcode", generatedCode, {
        format: "CODE128",
        linecolor: "0000",
        fontSize: 50,
        width: 4,
        height: 200,
    })
    return newBarcode;
}

// Generate Datamatrix
function generateCustom2dCode() {
var barcode = new ej.barcodegenerator.DataMatrixGenerator
(
    {
       width: '200px',
        height: '150px',
        displayText: { visibility: true },
        mode: 'SVG',
        value: 'EXC_TEST_' + document.getElementById('customstring').value,

    }
);
barcode.appendTo('#element');
}

function generateRandom2dCode() {
    var barcode = new ej.barcodegenerator.DataMatrixGenerator
    (
        {
           width: '200px',
            height: '150px',
            displayText: { visibility: true },
            mode: 'SVG',
            value: 'EXC_TEST_' + createRandomCode(7),
    
        }
    );
    barcode.appendTo('#element');
    }

function createRandomCode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
     