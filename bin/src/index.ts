import "../pre-start";
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("APP started listening on PORT", port);
});
