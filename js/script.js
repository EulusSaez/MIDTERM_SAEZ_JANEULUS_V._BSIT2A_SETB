function stdName(){
    var getName = prompt("Name:");

    if (getName != null){
        document.getElementById("stdName").innerHTML = "Student Name:" + " " + getName;
    }
}

function evaluateStudent() {
    var math = document.querySelector("#math").value;
    var science = document.querySelector("#science").value;
    var english = document.querySelector("#english").value;
    var filipino = document.querySelector("#filipino").value;
    var pe = document.querySelector("#pe").value;
    var first = "../img/gold-medal.png";
    var second = "../img/silver-medal.png";
    var fail = "../img/fail.png";
    var recognition = "../img/ribbon.png";

    math = parseInt(math);
    science = parseInt(science);
    english = parseInt(english);
    filipino = parseInt(filipino);
    pe = parseInt(pe);

    //MATH
    if (math <= 100 && math >= 90){
        document.querySelector("#math-remark").textContent="Excellent";
    }else if (math <= 89 && math >= 80){
        document.querySelector("#math-remark").textContent="Good";
    }else if (math <= 79 && math >= 70){
        document.querySelector("#math-remark").textContent="Average";
    }else if (math <= 69 && math >= 60){
        document.querySelector("#math-remark").textContent="Poor";
    }else if (math <= 51 && math >= 0){
        document.querySelector("#math-remark").textContent="Fail";
    }

    //SCIENCE
    if (science <= 100 && science >= 90){
        document.querySelector("#science-remark").textContent="Excellent";
    }else if (science <= 89 && science >= 80){
        document.querySelector("#science-remark").textContent="Good";
    }else if (science <= 79 && science >= 70){
        document.querySelector("#science-remark").textContent="Average";
    }else if (science <= 69 && science >= 60){
        document.querySelector("#science-remark").textContent="Poor";
    }else if (science <= 51 && science >= 0){
        document.querySelector("#science-remark").textContent="Fail";
    }

    //ENGLISH
    if (english <= 100 && english >= 90){
        document.querySelector("#english-remark").textContent="Excellent";
    }else if (english <= 89 && english >= 80){
        document.querySelector("#english-remark").textContent="Good";
    }else if (english <= 79 && english >= 70){
        document.querySelector("#english-remark").textContent="Average";
    }else if (english <= 69 && english >= 60){
        document.querySelector("#english-remark").textContent="Poor";
    }else if (english <= 51 && english >= 0){
        document.querySelector("#english-remark").textContent="Fail";
    }

    //FILIPINO
    if (filipino <= 100 && filipino >= 90){
        document.querySelector("#filipino-remark").textContent="Excellent";
    }else if (filipino <= 89 && filipino >= 80){
        document.querySelector("#filipino-remark").textContent="Good";
    }else if (filipino <= 79 && filipino >= 70){
        document.querySelector("#filipino-remark").textContent="Average";
    }else if (filipino <= 69 && filipino >= 60){
        document.querySelector("#filipino-remark").textContent="Poor";
    }else if (filipino <= 51 && filipino >= 0){
        document.querySelector("#filipino-remark").textContent="Fail";
    }

    //PE
    if (pe <= 100 && pe >= 90){
        document.querySelector("#pe-remark").textContent="Excellent";
    }else if (pe <= 89 && pe >= 80){
        document.querySelector("#pe-remark").textContent="Good";
    }else if (pe <= 79 && pe >= 70){
        document.querySelector("#pe-remark").textContent="Average";
    }else if (pe <= 69 && pe >= 60){
        document.querySelector("#pe-remark").textContent="Poor";
    }else if (pe <= 51 && pe >= 0){
        document.querySelector("#pe-remark").textContent="Fail";
    }

    if (math <= 100 && math >= 90 && 
        science <= 100 && science >= 90 && 
        english <= 100 && english >= 90 && 
        filipino <= 100 && filipino >= 90 && 
        pe <= 100 && pe >= 90)
    {
        document.querySelector("#rank").textContent="Top Honor Student";
        document.querySelector("#certificate").setAttribute("src", first);
    }
    else if (science <= 69 && science >= 0 && 
        pe <= 69 && pe >= 0 && 
        filipino <= 69 && filipino >= 0 &&
         math <= 69 && math >= 0 && 
         english <= 69 && english >= 0)
     {
         document.querySelector("#rank").textContent="Repeater";
         document.querySelector("#certificate").setAttribute("src", fail);
     }
    else if ((math <= 100 && math >= 90 && science <= 100 && science >= 90 && pe <= 100 && pe >= 90) || 
    (math <= 100 && math >= 90 && science <= 100 && science >= 90 && filipino <= 100 && filipino >= 90) ||
    (math <= 100 && math >= 90 && science <= 100 && science >= 90 && english <= 100 && english >= 90) || 
    (math <= 100 && math >= 90 && filipino <= 100 && filipino >= 90 && pe <= 100 && pe >= 90) || 
    (math <= 100 && math >= 90 && english <= 100 && english >= 90 && pe <= 100 && pe >= 90) || 
    (math <= 100 && math >= 90 && filipino <= 100 && filipino >= 90 && english <= 100 && english >= 90) || 
    (filipino <= 100 && filipino >= 90 && science <= 100 && science >= 90 && pe <= 100 && pe >= 90) || 
    (english <= 100 && english >= 90 && science <= 100 && science >= 90 && pe <= 100 && pe >= 90) || 
    (english <= 100 && english >= 90 && science <= 100 && science >= 90 && filipino <= 100 && filipino >= 90) ||
    (english <= 100 && english >= 90 && filipino <= 100 && filipino >= 90 && pe <= 100 && pe >= 90) )
    {
        document.querySelector("#rank").textContent="Second Honorable Student";
        document.querySelector("#certificate").setAttribute("src", second);
    }
    else
     {
         document.querySelector("#rank").textContent="Keep Studying";
         document.querySelector("#certificate").setAttribute("src", recognition);
     }
    
}