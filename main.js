Webcam.set({
 height:230,
 width:300,
 image_format:'png',
 png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        img_tag = "<img id='Snapshot' src='"+data_uri+"'>";
        document.getElementById("result").innerHTML = img_tag;
    });
} 
console.log('ml5.version:',ml5.version);
classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoded);
function modelLoded()
{
    console.log("model loded");
}