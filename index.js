const express = require("express");
const ipfs = require("ipfs");
const app = express();
const PORT = process.env.PORT || 5000;

// start IPFS node
let node;
(async function start() {
  node = await ipfs.create();
})();

// listen
app.get("*", async (req, res) => {
  // parse
  const subdomain = req.subdomains.reverse().join(".");
  try {
    // resolve dns
    const path = await node.dns(subdomain);
    // redirect
    return res.redirect(`http://gateway.ipfs.io${path}`);
  } catch (error) {
    // this page
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
