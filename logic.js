const socials = new Map();
socials.set("youtube", "https://youtube.com/@IdfkJake");
socials.set("discord", "https://discord.gg/gx33kv2rtJ");
socials.set("instagram", "https://instagram.com/idfk.jake");
socials.set("paypal", "https://paypal.me/JakeTheChad?country.x=IT&locale.x=it_IT");
socials.set("tiktok", "https://tiktok.com/@idfk_jake");
socials.set("twitter", "https://twitter.com/JakeLilOrions");
socials.set("twitch", "https://www.twitch.tv/idfk_jake");
socials.set("spotify", "https://open.spotify.com/track/4yr5aCDFyAyFmdxNQerppi?si=894555ce18994938");
socials.set("github", "https://github.com/J-ak-e");

function redirect(social) {
  window.open(socials.get(social.getAttribute("name")), "_blank");
}