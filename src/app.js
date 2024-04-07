let allRead = document.getElementById("allread");
let alertNew = document.querySelectorAll("#new");
let bgNotificationNew = document.querySelectorAll("#bg-ntf-new");
let textCountNotifications = document.getElementById("count-ntf");


allRead.addEventListener("click", (e) => {// Si da click en 'Mark all as read'
    for (var i = 0; i < alertNew.length; i++) {
        alertNew[i].style.display = "none";
        bgNotificationNew[i].style.backgroundColor = "transparent";
    }
    decreaseCounterComplet();// merma el contador completamente
});

function handleClick(index) {
    /*
    pide como parametro la posición de cada elemento
    para luego, cambiar estilos dependiendo de la posición en la
    que este elemento se encuentra en la lista.
    */
    alertNew[index].style.display = "none";
    bgNotificationNew[index].style.backgroundColor = "transparent";
    decreaseCounterOneInOne();
}

for (var i = 0; i < bgNotificationNew.length; i++) { // asigna el evento addEventListener a todos los bgNotificationsNew
    bgNotificationNew[i].addEventListener("click", handleClick.bind(null, i));
    /*
    Ya que Js es rarito, para el todos los bgNotificationNew
    tienen el mismo indice, si no se coloca el .bind, Js tomara
    el mismo indice para todos
    ? el .bind lo que hace que no compartan el mismo valor de i (indice)
    */
}

function decreaseCounterOneInOne() {
    // controlar el contador de notificaciones de cada elemento
    let count = (textCountNotifications.innerText -= 1);
    if (count <= 0) {
        textCountNotifications.innerText = 0;
        textCountNotifications.style.display = "none";
    }
}

function decreaseCounterComplet() {
    // controlar el contador de notificaciones de todos
    let count = (textCountNotifications.innerText = 0);
    if (count <= 0) {
        textCountNotifications.innerText = 0;
        textCountNotifications.style.display = "none";
    }
}
