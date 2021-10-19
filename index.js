const myEmojis = ["👨‍💻", "⛷", "🍲"];
let myEmojiContainer = document.getElementById("emoji-container");


/// looping through myEmoji Array
//let emojiCounter = "";
for (let i = 0; i < myEmojis.length; i++) {
    let emojiSpan = document.createElement("span");
    emojiSpan.textContent += myEmojis[i];
    myEmojiContainer.append(emojiSpan);

}