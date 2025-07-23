var Myform = document.getElementById("myForm");

Myform.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);

    var nameValue = e.target[0].value;
    console.log(nameValue);

    var emailValue = e.target[1].value;
    console.log(emailValue);

    var divForData = document.createElement('div');
    Myform.appendChild(divForData);

    var p = document.createElement('p');
    divForData.appendChild(p);

    p.classList.add('text-black', 'p-2', 'bg-info');
    p.innerText = "The Name is : " + nameValue + "\n" + "The email is : " + emailValue;
});