/** gère le dragstart de l'image
 * @param {event} e
 */
function drag(e) {
    // sert à récupérer l'id de l'élément
    // et le stocke dans un objet dataTransfer
    // pour pouvoir le récupérer dans la fonction drop
    e.dataTransfer.setData("text", e.target.id);
}

/** gère le drop de l'image
 * @param {event} e
 */
function drop(e) {
    // empêche le comportement par défaut du navigateur
    e.preventDefault();
    // récupère l'id de l'élément
    // stocké dans l'objet dataTransfer
    let data = e.dataTransfer.getData("text");
    // ajoute l'élément dans la zone de drop
    e.target.appendChild(document.getElementById(data));
}

/** gère le dragover de l'image
 * @param {event} e
 */
function allowDrop(e) {
    // empêche le comportement par défaut du navigateur
    e.preventDefault();
}
