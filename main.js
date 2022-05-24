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
imageClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded()
{
    console.log("model loded");
}

function check()
{
    img = document.getElementById('Snapshot');
    imageClassifier.classify(img,gotResult);

}

function gotResult(error,results)
{
    if(error)
    {
        console.log("error : ",error);
    }
    else
    {
        console.log(results);
         document.getElementById("object").innerHTML = results[0].label;
         document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}