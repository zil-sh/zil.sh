const express = require("express");
const app = express();
const { Resolution } = require("@unstoppabledomains/resolution");
const PORT = process.env.PORT || 5000;

const resolution = new Resolution({
  blockchain: {
    ens: { url: "https://mainnet.infura.io/v3" },
    cns: { url: "https://mainnet.infura.io/v3" },
  },
});

// listen
app.get("*", async (req, res) => {
  // parse
	const subdomain = req.subdomains.reverse().join(".").concat('.zil')
  try {
    // resolve dns
		const cid = await resolution.ipfsHash(subdomain);
    // redirect
    return res.redirect(`http://gateway.ipfs.io/ipfs/${cid}`);
  } catch (error) {
    // this page
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
