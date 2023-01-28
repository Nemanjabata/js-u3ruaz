function postTweet() {
  event.preventDefault();
  var tweet = document.getElementById("tweet").value;
  var tweetContainer = document.getElementById("tweets");
  var newTweet = document.createElement("div");
  newTweet.innerHTML = tweet;
  tweetContainer.appendChild(newTweet);
  document.getElementById("tweet").value = "";
}
