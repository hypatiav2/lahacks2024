const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const vapidKeys = webpush.generateVAPIDKeys()
console.log(vapidKeys);
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")))

const publicVapidKey = "BBKSVFaVJE-05VHWhqGhzavKHAfuajR0B7AIiUIolYzicxO1V4b6hf4O7ko0BKUGqWzZ5rlJKcyru8-QIOitPjQ";
const privateVapidKey = "xTyNo8ThC4KX7Nq-6OXJlr9kbZPXfrGf2gifEgdwjzg";

webpush.setVapidDetails("mailto:test@test.com", publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });
    webpush.sendNotification(subscription, payload).catch(console.log);
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})