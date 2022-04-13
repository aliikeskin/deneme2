var database = [
	{
		username: "furkan",
		password: "webmaster",
		friends: ["abdullah", "yeşim"]
	},
	{
		username: "abdullah",
		password: "123",
		friends: ["furkan", "yeşim"]
	},
	{
		username: "yeşim",
		password: "777",
		friends: ["abdullah", "furkan"]
	}
];
var newsFeed = [
	{
		username: "abdullah",
		tweet: "Bilet fiyatları uçtu uçtu!!!"
	},
	{
		username: "yeşim",
		tweet: "şarjım bitti :("
	},
	{
		username: "furkan",
		tweet: "Javascript bir harika"
	}
];

// Kullanıcı Girişi
var userNamePrompt = prompt("kullanıcı adınızı giriniz :");
var passwordPrompt = prompt("şifre giriniz :");

function isUserValid(user, pass) {
  for (i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password)
	{
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    newsFeed.forEach(function (news) {
      if (user == news.username) {
        const arrayTweets = [];
        arrayTweets.push(news.tweet);
        Tweets(user, arrayTweets);
      }
    }
	);
  } else {
    console.log("kullanıcı adı veya şifre hatalı");
  }
}

function Tweets(thisUser, arrayTweets) {
  if (arrayTweets == "") {
    console.log("kullanıcı hiç tweet girmemiş");
  } else {
    console.log(`${thisUser} : ${arrayTweets}`);
  }
}

signIn(userNamePrompt, passwordPrompt);

