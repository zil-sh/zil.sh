<h1>zil.sh </h1>

<h2>What is zil.sh? </h2>

Instead of sending ETH to `0xc49a7E03d79d3eEFb09920263a42D33B88dA9250`

or visiting

https://gateway.ipfs.io/ipfs/Qmet973uchMw7p213NvNUjxR8rRjqhh7TQn23ZJuCdZC9u/

Unstoppable Domains replaces crypto blobs with human readable names such as `helloworld.zil`

Because `.zil` is not a registered DNS top-level domain it is normally inaccessible from
DNS.

Accessing `.zil` domains usually requires a browser extension

`zil.sh` solves this by appending `.sh` to the domain.

For example: If your website is `helloworld.zil` then use `helloworld.zil.sh`

<h2>How does `zil.sh` work with IPFS? </h2>

IPFS has a content identifier (CID) which acts as a pointer to the content.

`zil.sh` acts as a DNS resolver between web2 and web3.

<h2> How it works under the hood </h2>

- User visits `helloworld.zil.sh`
- The server parses the subdomain: `helloworld.zil`
- Then tries to resolve the link to a CID: `/ipfs/Qmet973uchMw7p213NvNUjxR8rRjqhh7TQn23ZJuCdZC9u/`
- If successful, the sever will redirect to the correct gateway.
- If unsuccessful, it will redirect to this page. hi

