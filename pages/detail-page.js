function submitComment() {
    event.preventDefault()
    const inputField = document.getElementById('name');
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    let name = inputField.value;


    if (doesNotPassAllValidations(name, msg)) { // guard clause
        return null;
    }

    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');



    h3.innerHTML = `${formatName(name)} said :`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea.value = null;
}
function formatName(name){
    if (name[0] !== name[0].toUpperCase()) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return name
}

function doesNotPassAllValidations(name, msg) {
    
    if (!name || !msg) {
        console.log(msg, name)
        alert('You forget to fill in your name or message')
        return true;
    }

    if (msg.length > 280) {
        alert('Your comment is too long');
        return true;
    }

    return false;
}