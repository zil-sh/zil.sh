# zil.sh ![favicon-32x32](https://user-images.githubusercontent.com/19412160/87087722-9b087500-c201-11ea-82b5-62025d0e0786.png) 



## What is zil.sh?

Instead of sending ETH to `0xc49a7E03d79d3eEFb09920263a42D33B88dA9250`

or visiting

https://gateway.ipfs.io/ipfs/Qmb2DUiFqR99U3w2hqBEHCpSprULVWxsvashz1MSWWUoaS

[Unstoppable Domains](https://unstoppabledomains.com/) replaces crypto blobs with human readable names such as `helloworld.zil`

Because `.zil` is not a registered DNS top-level domain it is normally inaccessible from
DNS.

Accessing `.zil` domains usually requires a browser extension

`zil.sh` solves this by appending `.sh` to the domain.

For example: If your website is `helloworld.zil` then use `helloworld.zil.sh`

## How does zil.sh work with IPFS?

IPFS has a content identifier (CID) which acts as a pointer to the content.

`zil.sh` acts as a DNS resolver between web2 and web3.

This allows anyone to access your website.

## How it works under the hood

- User visits `helloworld.zil.sh`
- The server parses the subdomain: `helloworld.zil`
- Then tries to resolve the subdomain to a CID: `Qmb2DUiFqR99U3w2hqBEHCpSprULVWxsvashz1MSWWUoaS`
- If successful, the sever will redirect to the correct gateway.
- If unsuccessful, it'll redirect to this page. hi.

