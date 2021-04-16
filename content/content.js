
const random = max => {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

const oldManOnclick = _=> {
    alert("you found the secret old man. Now try it in real life!");
    deleteOldMan();
    createOldMan();
    return;
}

const deleteOldMan = _=> {
    const oldManNode = document.getElementById("oldman");
    oldManNode.remove();

}

const createOldMan = _=> {
    const nodes = document.querySelectorAll('body *:not(script)');
    const oldManNode = nodes[random(nodes.length)];
    console.log(oldManNode);

    const oldManImg = document.createElement("img");
    oldManImg.src = chrome.extension.getURL("/icons/icon.png");
    oldManImg.width = 20;
    oldManImg.id = "oldman";
    oldManImg.addEventListener('click', oldManOnclick);

    oldManNode.appendChild(oldManImg);

    return;
}

createOldMan();
