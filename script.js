var vardasI = document.getElementById('vardas');
var pavardeI = document.getElementById('pavarde');
var amziusI = document.getElementById('amzius');

var table = document.querySelector('table');

var taip = document.querySelector('#taip');
var ne = document.querySelector('#ne');
var shift = document.querySelector('#shift');


taip.addEventListener('click', () => {
    var vardas = vardasI.value;
    var pavarde = pavardeI.value;
    var amzius = amziusI.value;

    var template = `
                 <tr>
                    <td>${vardas}</td>
                    <td>${pavarde}</td>
                    <td>${amzius}</td>
                 </tr>`;  
                    
    if(amziusI.value > 0) {
        table.innerHTML += template;
    } else {
        alert("meow")
    }
    
})

ne.addEventListener('click', () => {
    var row = document.getElementsByTagName('tr')

    if(row.length) {
        row[row.length - 1].remove()
    } else {
        alert("amogus")
    }

    
}) 

shift.addEventListener('click', () => {
    var row = document.getElementsByTagName('tr')

    if(row.length) {
        row[0].remove()
    } else {
        alert("meow")
    }
})