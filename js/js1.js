function showStories() {
    var button = document.getElementById('button1');
    var story3 = document.getElementById('story3');
    if (story3.style.display != 'block') {
        story3.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        story3.style.display = 'none';
        button.innerHTML = "More";
    }
}
