let btn = document.querySelectorAll(".btn");

let check = [0, 0, 0, 0, 0, 0, 0, 0, 0]


for (let i = 0; i < 9; i++) {

    btn[i].addEventListener("click", function () {
        let text = this.innerHTML;
        // console.log(text);
        // console.log(i);
        // console.log(check[i]);
        Soundadded(text);
        // console.log("i = " + i);

        let audio = document.querySelectorAll("audio");

        if(check[i] == 1)
        {
            btn[i].classList.add("playing");
            audio[i].loop = true;
            audio[i].play();
        }
        else
        {
            btn[i].classList.remove("playing");
            audio[i].loop = false;
        }

    })
}

function Soundadded(text) {

    if (text == "Boom") {

        if(check[0] == 1)
        {
            check[0] = 0;
        }
        else
        {
            check[0] = 1;
        }

    } 
    else if (text == "Clap") {

        if(check[1] == 1)
        {
            check[1] = 0;
        }
        else
        {
            check[1] = 1;
        }
    } 
    else if (text == "Hihat") {

        if(check[2] == 1)
        {
            check[2] = 0;
        }
        else
        {
            check[2] = 1;
        }
    }
    else if (text == "Kick") {

        if(check[3] == 1)
        {
            check[3] = 0;
        }
        else
        {
            check[3] = 1;
        }
        
    } 
    else if (text == "Openhat") {

        if(check[4] == 1)
        {
            check[4] = 0;
        }
        else
        {
            check[4] = 1;
        }
    } 
    else if (text == "Ride") {

        if(check[5] == 1)
        {
            check[5] = 0;
        }
        else
        {
            check[5] = 1;
        }
    } 
    else if (text == "Snare") {

        if(check[6] == 1)
        {
            check[6] = 0;
        }
        else
        {
            check[6] = 1;
        }
    }
    else if (text == "Tink") {

        if(check[7] == 1)
        {
            check[7] = 0;
        }
        else
        {
            check[7] = 1;
        }
    } 
    else {

        if(check[8] == 1)
        {
            check[8] = 0;
        }
        else
        {
            check[8] = 1;
        }
    }

}