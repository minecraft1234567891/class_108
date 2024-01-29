//https://teachablemachine.withgoogle.com/models/4RrbIGA5W/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4RrbIGA5W/model.json',modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="i can hear "+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2);
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");
        if(results[0].label=="clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="snapping"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(results[0].label=="tapping"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
    }
}