import express from "express";
import {
  REDIRECT_BASE_URL,
  STATIC_REDIRECTS,
  DYNAMIC_REDIRECTS,
} from "./config/redirects";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

STATIC_REDIRECTS.forEach((redirect_url, url) => {
  app.get(url, (req, res) => {
    res.redirect(redirect_url);
  });
});

DYNAMIC_REDIRECTS.forEach((redirect_url, url) => {
  app.get(url, (req, res) => {
    const seperator = ":";
    const amountOfSeperatorsInURL = url.split(seperator).length - 1;

    if (amountOfSeperatorsInURL > 1) {
      return res.redirect(REDIRECT_BASE_URL);
    }

    res.redirect(`${redirect_url}${req.params[url.split(seperator)[1]]}`);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
