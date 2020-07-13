const express = require("express");
const app = express();
const { Resolution } = require("@unstoppabledomains/resolution");
var favicon = require("serve-favicon");
const PORT = process.env.PORT || 5000;

const resolution = new Resolution({
  blockchain: {
    ens: { url: "https://mainnet.infura.io/v3" },
    cns: { url: "https://mainnet.infura.io/v3" },
  },
});

app.use(favicon(__dirname + "/public/favicon.ico"));

// listen
app.get("*", async (req, res) => {
  // parse
  const subdomain = req.subdomains.reverse().join(".").concat(".zil");

  // resolve dns. can either be IPFS CID or http URL
  const cid = await resolution.ipfsHash(subdomain).catch((e) => false);
  const url = await resolution.httpUrl(subdomain).catch((e) => false);

  // redirect to IPFS gateway
  if (cid) {
    return res.redirect(`http://gateway.ipfs.io/ipfs/${cid}`);
  }

  // redirect to http url
  if (url) {
    return res.redirect(url);
  }

  return res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
