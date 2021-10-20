const myEmojis = ["👨‍💻", "⛷", "🍲"];
let myEmojiContainer = document.querySelector("#emoji-container");
let pushBtn = document.querySelector("#push-btn");
let unshiftBtn = document.querySelector("#unshift-btn");
let emojiInput = document.querySelector("#emoji-input");
let popBtn = document.querySelector("#pop-btn");
let shiftBtn = document.querySelector("#shift-btn");

renderArray(myEmojis);
let newEmojiArray = [];

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = null;
        renderArray(myEmojis);

    } else {
        alert("Input field is not supposd to be empty");
    }
});

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = null;

        renderArray(myEmojis);

    } else {
        alert("Input field is not supposd to be empty");
    }
});

popBtn.addEventListener("click", function() {
    myEmojis.pop();
    renderArray(myEmojis);

});
shiftBtn.addEventListener("click", function() {
    myEmojis.shift();
    renderArray(myEmojis);

});

function renderArray(arr) {
    myEmojiContainer.innerHTML = null;
    for (let i = 0; i < arr.length; i++) {
        let emojiSpan = document.createElement("span");
        emojiSpan.textContent += arr[i];
        myEmojiContainer.append(emojiSpan);


    }

}