import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import CronJob from "cron";
dotenv.config();
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
const challenges = [
  " Burn 100 calories today.",
  "Walk 30 minutes today",
  "Put $30 into saving today",
  "Read 30 minutes today",
  "Write 30 minutes today.",
  "Be creative 30 minutes today.",
  "Meditate 30 minutes today.",
  "Volunteer 30 minutes today.",
  "Eat only homemade meals today.",
  "Take stairs whole day.",
  "Try new recipe today."
]
initializeApp({
  credential: cert({
    type: "service_account",
    project_id: "sophia-29aba",
    private_key_id: "356894260854f71803b768d8ebe50ddf2a125d06",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCr0Bg8XJZx6il\nzeVQTRqv7iRRS4BVtJV8Rxu4b7DRMJTzAOYUmhpMCUKPUXVfp77QAghBn8+LhnUA\nJkjsR1V/fGldWgntcijdMRUXq8Rq4bVkzhTDX4tA5/r6QA2JJGTD6I2JYb6RfN5s\nUVc3Jrzoyq7nSok9altvzwobWzZrBRLMCybtP1D0hEmwp4/WAA3ybIAQaYptGk1R\nDs7F1mYDuZ1R8xr6RiACImYEUiJC5L/x3Q9rGUuAmVzS976tdTTRpxS1xsTNduW0\nD8UzIMWx04Qw58JQQ0DJSKojQtuKrsN2gV4KfvCHE3u2L969SPQRM9l1r/iuIcVO\ny5eBS6C1AgMBAAECggEACM2q8BdK7/Ne1WyLj4eFCuqOWty6p2V8kvuWLc9jI/p5\n6ckjHlBfmwuaJmftEk/ACaDl5a3H0UvZs5GHn6OUIqkqDI4bP9D3NxVWmlTqk1i0\nfqPw/WqvHda/mxxVYFu0cMVtzQYN+381gZlmA7jtNuufYBcXQJ80Fki68MS9n7Yt\nQWE4UHgcx+tyiSO0HIknGZSZaPH1vfdWYm9ntrmxHfH4R/QEUvlEp4CSLMKfWtU4\nAA8QQ+Q2ubJ6qBT8Xk9npmBOAfpUH1OO3OzrV5nZh/cSlN4708XwJ8onV9Ro+dFO\n46ls4+85LjKLhmCjZJK7Imf5xNJnm1FsgeNegtGE4QKBgQDzJOKK7OAxDwwf89/B\nnuYgDXcjHo+koIVBjW++gDTpSBA6GNtG/IUh51HZmtegQ3jsKqQ+5uNULN3HmMBe\n8v9QwXY7JlxNdLPtwtBCzVnEMy5gsHP06LmXJ6MrkdP0SgpgZLn8XQzDdhA11qKI\n6l9pOiJ+PLyknpfS3e6JmK975QKBgQDM+m9tgqU/QEhldvYV+t5bBVXa7rWZnVK3\nNqkHMLvkKp1nYEksO9AkWYKdUJL84iFr65WQNQqXUY4zWUJZWoHQu2iT6PenGpes\ncaJPV7ksRV0A9AHjQlOMix3cCZJskSvGzYINuVtycJ7rFwo5QW4q5gC2VQ25lhRv\nq9TbRW1kkQKBgBQpCMewIF6w+rZjiDgLrtUViL1WuV5TGPl4er127+wv13iZuwTF\nx1wqS/UZC6v0LECYwImep1bBaZo1Ji45Q8Y0ZFM/OQQLGygpsQ746+qCu+O0fcje\nyxSnarYgH0zwHrAjafBs3rQORAXSyCNGG6cj9Nw2uQWFSN1pHXA3QsWpAoGAb9x3\ntMaoUYVOPPkXwNUARaH6wZilyCg//LY6ti7VSuYqskCsjhQyObQTgLB5FsJ9RLzz\nCRi5J+0c8k7S05p936B2qMlpZWswvK3iyvPvnQZZg+ylnxUSLU+6QtuCafcrcbmz\nMLQoAKMPRvJy5N4dNhIA74ApFk+d5XdbmTIhSdECgYEAikiRiUaUBPrRllNKLqOF\npoSr02UD0+L/1kgImI/kNZWjxQPZBFpbPDuZNAsiDYQsDH8i3rj6MK/RnfhmPnZu\njDKRQyUd8GPMPq9ZuSX9tVBfKhSUmuYfjwBvQ4u9JPDlXezDgxo3cLgpjBbweF15\n1C7sNJeiOBf50vNsSlv5HyE=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-qeu5d@sophia-29aba.iam.gserviceaccount.com",
    client_id: "108315631426621008234",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qeu5d%40sophia-29aba.iam.gserviceaccount.com",
  }),
});

const db = getFirestore();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", async (req, res) => {
    res.send("API is running....");
  });
}
let a = "V";
const job = new CronJob.CronJob("00 00 00 * * *", async function () {
  const docRef = db.collection("data").doc("d");
  console.log("dd");
  await docRef.set({
    numbers: [(Math.floor(Math.random() * 11) + 1),(Math.floor(Math.random() * (20 - 10 + 1) + 10)),(Math.floor(Math.random() * (30 - 20 + 1) + 20)),(Math.floor(Math.random() * (40 - 30 + 1) + 30))],
    challenge: challenges[Math.floor(Math.random() * challenges.length)],
  });
});
job.start();
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
