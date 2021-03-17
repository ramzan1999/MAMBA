var navsc = document.querySelector('.nav1')
var acount1 = document.querySelector('.acount1')
let isRun = true;

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    let a = 0

    navsc.classList.toggle('navcontainer', window.scrollY > 40)
    if (window.scrollY > 1350 && isRun) {
        var ac = setInterval(() => {
            a++;
            acount1.innerHTML = a
            // console.log(a);
            console.log(a);
            if (a == 232) {
                isRun = false;
                // alert("test");
                clearInterval(ac)

            }

        }, 9)

        console.log(a);

    }
    // ----------------------------------
    var acount2 = document.querySelector('.acount2')
    let isRun1 = true;
    let b = 0
    if (window.scrollY > 1350 && window.scrollY == 1384 && isRun1) {
        var ac1 = setInterval(() => {
            b++;
            acount2.innerHTML = b
            // console.log(a);
            console.log(a);
            if (b == 521) {
                isRun1 = false;
                // alert("test");
                clearInterval(ac1)

            }

        }, 5)

        console.log(a);

    }

    // -------------------------------------

    var acount3 = document.querySelector('.acount3')
    let isRun2 = true;
    let c = 0
    if (window.scrollY > 1350 && window.scrollY == 1384 && isRun2) {
        var ac2 = setInterval(() => {
            c++;
            acount3.innerHTML = c
            // console.log(a);
            if (c == 1463) {
                isRun2 = false;
                // alert("test");
                clearInterval(ac2)

            }

        }, 1)


    }

    // -------------------------------------

    var acount4 = document.querySelector('.acount4')
    let isRun3 = true;
    let d = 0
    if (window.scrollY > 1350 && window.scrollY == 1384 && isRun3) {
        var ac3 = setInterval(() => {
            d++;
            acount4.innerHTML = d
            // console.log(a);
            if (d == 15) {
                isRun3 = false;
                // alert("test");
                clearInterval(ac3)

            }

        }, 100)


    }

})