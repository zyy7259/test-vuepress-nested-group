/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b8f8cbfe3fff35efda8243de59ae1ded"
  },
  {
    "url": "assets/css/0.styles.1ff3b8e5.css",
    "revision": "15f1b960653424609b1d95956d12b6d7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3ac78cc4.js",
    "revision": "1e8f34dc57ebba574adaa81ceffdb27f"
  },
  {
    "url": "assets/js/10.401b2460.js",
    "revision": "902919612f123c5fc4d6b392835ecce7"
  },
  {
    "url": "assets/js/11.d8836c9c.js",
    "revision": "41deb564eb97cb36c6fec9e612dd0a3c"
  },
  {
    "url": "assets/js/12.22eb16f1.js",
    "revision": "d724dec65ccb48f65b5109f5e7c479ad"
  },
  {
    "url": "assets/js/13.e310b2a9.js",
    "revision": "c6bd8395d9ab0905b8afb7db1f62fe3f"
  },
  {
    "url": "assets/js/14.db552df8.js",
    "revision": "75ac8e0518050c259688c83554d73a88"
  },
  {
    "url": "assets/js/15.9831f4b1.js",
    "revision": "ea6a0b5da782865527b71f4e74f5bc51"
  },
  {
    "url": "assets/js/16.0105d681.js",
    "revision": "3994acf39382e9449aa13bc9b8633dd6"
  },
  {
    "url": "assets/js/17.7c96bfa5.js",
    "revision": "fd01c88329d008bde8fc20448b10368b"
  },
  {
    "url": "assets/js/18.a3eccdf0.js",
    "revision": "5b6638f8628d093b72739cc12c29d37e"
  },
  {
    "url": "assets/js/19.e50add14.js",
    "revision": "dd1957f17261a305071079b6f0592624"
  },
  {
    "url": "assets/js/2.9e44ad33.js",
    "revision": "e8aaffc27804aeb9b21b9ca447fa6f38"
  },
  {
    "url": "assets/js/20.537e99ee.js",
    "revision": "d6cc26bddf8b93c1f9578c47b7764f38"
  },
  {
    "url": "assets/js/21.2e5435c4.js",
    "revision": "76cdf03bda65f14843d187083fcbb9a7"
  },
  {
    "url": "assets/js/22.dfacb4ef.js",
    "revision": "cb467c6eef76cde29c69133b38bc2e9f"
  },
  {
    "url": "assets/js/23.0f47e110.js",
    "revision": "3399d102f0eb77686026a4cec87b9c46"
  },
  {
    "url": "assets/js/24.14ea55f0.js",
    "revision": "632b97409fc3a2a1ff6f745b5fdf1e17"
  },
  {
    "url": "assets/js/25.56003abe.js",
    "revision": "904143b591323f9cc3f9d71e1ae3e6bc"
  },
  {
    "url": "assets/js/26.b7be86e4.js",
    "revision": "01be16cdff74205ea5464a7faaf17935"
  },
  {
    "url": "assets/js/27.3f5ccfcb.js",
    "revision": "09d350b5bf9004d305a3b48194916f36"
  },
  {
    "url": "assets/js/28.8d92e9cb.js",
    "revision": "4d080eb29c4d7abbaa0b1c83fa1f7b1f"
  },
  {
    "url": "assets/js/29.37643080.js",
    "revision": "1d25506cee30fc2c8a76812b0ad0def5"
  },
  {
    "url": "assets/js/3.e5ac7009.js",
    "revision": "0cc0c019140a10e7ba989afa00252e9f"
  },
  {
    "url": "assets/js/30.07bd575f.js",
    "revision": "2f437066445686f2da92e5a13ea97def"
  },
  {
    "url": "assets/js/31.95591888.js",
    "revision": "4aea7c82cc12d5b68198481a7526c0f4"
  },
  {
    "url": "assets/js/32.707b6832.js",
    "revision": "da29484834611b2f7a293cb5ac15248d"
  },
  {
    "url": "assets/js/33.07c94c73.js",
    "revision": "c55ef97a25e3523e9ac2dbb8de760435"
  },
  {
    "url": "assets/js/34.face42d7.js",
    "revision": "79dbf748c3521340b849e9e0ec5a375a"
  },
  {
    "url": "assets/js/35.dcb05cd8.js",
    "revision": "8a0782d1f3ad2455419e186ac023b99d"
  },
  {
    "url": "assets/js/36.1d384bce.js",
    "revision": "0ba69fd2ce1e6c66f0bc5014c57799b7"
  },
  {
    "url": "assets/js/37.2f83d48c.js",
    "revision": "f8e05a9a45db98f98800913cd77871b5"
  },
  {
    "url": "assets/js/38.78421062.js",
    "revision": "2bc6856efc272c190da9c61ef025b860"
  },
  {
    "url": "assets/js/39.36eaf3d3.js",
    "revision": "10c5f41da63105cf66c4edc9ca8e934d"
  },
  {
    "url": "assets/js/4.387e254f.js",
    "revision": "81a3100f9fff9cf0b1e392ee97ea74e1"
  },
  {
    "url": "assets/js/40.664b79ee.js",
    "revision": "39c32f775afd2b6a6552dc09fcf54700"
  },
  {
    "url": "assets/js/41.a1d8a46f.js",
    "revision": "64968c41fc0001f1db50ab5fd7fd5b1e"
  },
  {
    "url": "assets/js/42.e15c55e2.js",
    "revision": "8590625565f11b50761769890f428d5d"
  },
  {
    "url": "assets/js/43.e172b5b8.js",
    "revision": "9e613febc2515ad7ea5aedaca19d84c8"
  },
  {
    "url": "assets/js/44.ec59992d.js",
    "revision": "534e35501dcaf97e463dbf62dfcd5b0f"
  },
  {
    "url": "assets/js/45.3b133825.js",
    "revision": "b566936e2a8dac692b93ac3c4d875776"
  },
  {
    "url": "assets/js/46.50ae17bf.js",
    "revision": "a2d7570f801c3bcbf62e2ab3de6e0eed"
  },
  {
    "url": "assets/js/47.4fb748b5.js",
    "revision": "5b0aa4515a3afda78e077e36862ea443"
  },
  {
    "url": "assets/js/48.622e7b55.js",
    "revision": "729f2983093275bc9276c83166805777"
  },
  {
    "url": "assets/js/49.06630953.js",
    "revision": "bd424351e824e39ffc3341d2aad5c0ca"
  },
  {
    "url": "assets/js/5.f953c028.js",
    "revision": "cb8611dfff3517fbd456ca98abf9a00d"
  },
  {
    "url": "assets/js/50.1d577874.js",
    "revision": "504f7c20b644a8ae3dbf8bf6e9d53908"
  },
  {
    "url": "assets/js/51.f11fb321.js",
    "revision": "0f7168cdf311dcf7b3090b17b7680814"
  },
  {
    "url": "assets/js/52.ab1ee785.js",
    "revision": "da5590b63edb296be80673963dcf364f"
  },
  {
    "url": "assets/js/53.9a56f2f4.js",
    "revision": "b097e0af897dea134a95014d2ea480f7"
  },
  {
    "url": "assets/js/54.f6b7c256.js",
    "revision": "7c506149aac3c3c42b4cad35a5a30f53"
  },
  {
    "url": "assets/js/55.d96daa92.js",
    "revision": "7f9d9bf4d4096abfd1d35b0e95b61597"
  },
  {
    "url": "assets/js/56.e2d2f9da.js",
    "revision": "f12a4c3efcc008c5aed58fdf8812cafd"
  },
  {
    "url": "assets/js/57.11427e0f.js",
    "revision": "d90f455e0a7ca777f6036a14b827e311"
  },
  {
    "url": "assets/js/58.701368d3.js",
    "revision": "cc69a3e5b55ee1745d13e14505a8b87a"
  },
  {
    "url": "assets/js/59.80b471b6.js",
    "revision": "9ff72012825b556dbbeb1ecfd2cc71cc"
  },
  {
    "url": "assets/js/6.aa2981c5.js",
    "revision": "b47c7a831a6f8d67fe3a30a0f128a1a1"
  },
  {
    "url": "assets/js/60.4f3eaaba.js",
    "revision": "d3401f5419ac3833648cf42584fb2e12"
  },
  {
    "url": "assets/js/61.1a842ea4.js",
    "revision": "3abe614d06417c92b91282aeccf715f3"
  },
  {
    "url": "assets/js/62.a3692314.js",
    "revision": "d12d79b2818eb863ab2864f5746f6e9d"
  },
  {
    "url": "assets/js/63.682e966c.js",
    "revision": "6d4989b0c3bde10f8b98c59d3e7b5b08"
  },
  {
    "url": "assets/js/64.a9d6fc94.js",
    "revision": "4f0e8be1fb7ebace4c070589500b7c19"
  },
  {
    "url": "assets/js/65.cec67d46.js",
    "revision": "f422c17c4d4bea89e00cce50dde40968"
  },
  {
    "url": "assets/js/66.ad4305ea.js",
    "revision": "a071ce73804393eaf6344e7f8fb2d2dd"
  },
  {
    "url": "assets/js/67.a84e0474.js",
    "revision": "4b7009d6e1328855be9d147ffd9da6a8"
  },
  {
    "url": "assets/js/68.19817ecd.js",
    "revision": "b6c79754b8b2e4301ca566f3ba8b613b"
  },
  {
    "url": "assets/js/69.0f89c65c.js",
    "revision": "9c9b977592c155d63f1aa5d0577bc854"
  },
  {
    "url": "assets/js/7.0fd0b808.js",
    "revision": "204f2e8a173c038ffb32bab1ff485a00"
  },
  {
    "url": "assets/js/70.0d3994df.js",
    "revision": "2e1e33b58bcf85975f7a175eb40c354f"
  },
  {
    "url": "assets/js/71.ec05a187.js",
    "revision": "056b5b85695b28c9c93b5c02e7dc8ebc"
  },
  {
    "url": "assets/js/72.a9916377.js",
    "revision": "f6c8f8a7ec590a6aa85513dbf44bf409"
  },
  {
    "url": "assets/js/73.8b308ca0.js",
    "revision": "788a6b7e5c6baf204c5f881eb2bb0508"
  },
  {
    "url": "assets/js/74.802bdbeb.js",
    "revision": "6168f9e7eb43c23e8536c4c739e85fbf"
  },
  {
    "url": "assets/js/75.1e919505.js",
    "revision": "23d915210d6a77414dc509fbcc8fd787"
  },
  {
    "url": "assets/js/76.ed258b36.js",
    "revision": "a18b4962f41f465d3554e00d6ee9a1f5"
  },
  {
    "url": "assets/js/77.12cb2e15.js",
    "revision": "32b1275ccd4477c928200867a39072d2"
  },
  {
    "url": "assets/js/78.e98c2f00.js",
    "revision": "08d74adedcbe354606e80aee8e2ce1eb"
  },
  {
    "url": "assets/js/79.6fad4bdb.js",
    "revision": "5c3f6b0ba6eed76d3d811241bca328a0"
  },
  {
    "url": "assets/js/8.0f770dcc.js",
    "revision": "f5125c7cd873ec09f06f1df0fbb0780e"
  },
  {
    "url": "assets/js/80.698bdf7c.js",
    "revision": "77068f2492bae93fde866d57c250e2e6"
  },
  {
    "url": "assets/js/81.fe2ad32a.js",
    "revision": "de2b5e3e8f237e8a80911d24f57a072e"
  },
  {
    "url": "assets/js/82.314b1748.js",
    "revision": "0fec065458d37a121eef58bb632664dc"
  },
  {
    "url": "assets/js/83.c83e2a54.js",
    "revision": "a114ea33c0dc4cf80b4259b89c9d6377"
  },
  {
    "url": "assets/js/84.bac1195b.js",
    "revision": "cf8458574925b76768897234026e654c"
  },
  {
    "url": "assets/js/85.5ae611c7.js",
    "revision": "bd3985b24cdc8535a45c5ab51005f85a"
  },
  {
    "url": "assets/js/9.85463219.js",
    "revision": "06a41e7cae595cd55358a77236f8d681"
  },
  {
    "url": "assets/js/app.2cb12a1c.js",
    "revision": "10cab1c193b6eda051a2d8cdf65cfa76"
  },
  {
    "url": "config/index.html",
    "revision": "635dcf483792726eb8120e857bfba5cd"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "0535cfdfa9b541f7f7b650b22afcaf17"
  },
  {
    "url": "guide/assets.html",
    "revision": "94d39f984d14d8df48c26606a13e5fea"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "c51b0fc33c425e9991d40711214b38f9"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "6735d40b3323252cee249464c34295db"
  },
  {
    "url": "guide/deploy.html",
    "revision": "1b1a76ab70c7b07f9624eb346b488271"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6847fe089c75abea883fbfe926166194"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a257ea0c7a403991d6f36a3178dded23"
  },
  {
    "url": "guide/index.html",
    "revision": "2172abbfb26c9e863eb2ccd2b7973487"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d69cac0ebd1a952ba1f75ec3086303d5"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "14ec1bfc313087742b0bb93c79c1376f"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ce5dce7cedf3e655000a0d79fa551857"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "nested/bar/bar-footer.html",
    "revision": "707c2317234001eb899e1892256bcd0b"
  },
  {
    "url": "nested/bar/bar-header.html",
    "revision": "fbc43ab34bcfc167f23d38c746ce9338"
  },
  {
    "url": "nested/bar/index.html",
    "revision": "9701065865f6432b51f12aa232faef02"
  },
  {
    "url": "nested/foo/foo-footer.html",
    "revision": "8f44da9b45062147ea2fb6381f0bb809"
  },
  {
    "url": "nested/foo/foo-header.html",
    "revision": "8742c6fc98a042aad676f261f045e812"
  },
  {
    "url": "nested/foo/index.html",
    "revision": "4089e902abe9d978dfc8ca119af68c68"
  },
  {
    "url": "nested/index.html",
    "revision": "be93e63db7afb7ae9635877ee605cee5"
  },
  {
    "url": "nested/nested-footer.html",
    "revision": "35ea53798b2acaf9221661c49c3a05ea"
  },
  {
    "url": "nested/nested-header.html",
    "revision": "f04a09237a6c29a474cab39fa7981dfb"
  },
  {
    "url": "nested1/bar/bar-footer.html",
    "revision": "b4b70127d7942132e512fbc5915976a1"
  },
  {
    "url": "nested1/bar/bar-header.html",
    "revision": "86dbb0f403192a7fbf4287aa06127afd"
  },
  {
    "url": "nested1/bar/index.html",
    "revision": "a1724553bfa90c82723b801ab8cf0b4d"
  },
  {
    "url": "nested1/foo/foo-footer.html",
    "revision": "36cd85f86919d7d6fbe4aa78740fa80d"
  },
  {
    "url": "nested1/foo/foo-header.html",
    "revision": "291ddd215d06512da43ddee99b053cd2"
  },
  {
    "url": "nested1/foo/index.html",
    "revision": "7b3b1a18f0b7843aa48270e3167624f5"
  },
  {
    "url": "nested1/index.html",
    "revision": "d3af1de910ddb8dc7f9ab7d804c21948"
  },
  {
    "url": "nested1/nested-footer.html",
    "revision": "dce88874822b20320f9d4fc4243f8f59"
  },
  {
    "url": "nested1/nested-header.html",
    "revision": "a3bc4555afaf53e6b6d09ff5f0096c85"
  },
  {
    "url": "nested2/bar/bar-footer.html",
    "revision": "9b8cecc9b41c0d1ae27a62b64c4d1fb0"
  },
  {
    "url": "nested2/bar/bar-header.html",
    "revision": "4689a6dd0be6c67ede4497ce325446bc"
  },
  {
    "url": "nested2/bar/index.html",
    "revision": "f0c7980ba41073b99bfbb115a73ab624"
  },
  {
    "url": "nested2/foo/foo-footer.html",
    "revision": "b9ee3c5ce1a90cd276984197d272cbc7"
  },
  {
    "url": "nested2/foo/foo-header.html",
    "revision": "1d60c93097b7f2e17d4fbbccf56b2a82"
  },
  {
    "url": "nested2/foo/index.html",
    "revision": "cf04a342e29394ff04e688c1e7a332e7"
  },
  {
    "url": "nested2/index.html",
    "revision": "ef9834614750b7dc56c163929fff1419"
  },
  {
    "url": "nested2/nested-footer.html",
    "revision": "6ab34373c21acf665ef67199f8eaa13e"
  },
  {
    "url": "nested2/nested-header.html",
    "revision": "f41c524e4199c09ab5e6e4f78e0212dc"
  },
  {
    "url": "zh/config/index.html",
    "revision": "1cb46d81d3be6a5dc0b7d63340fc7a61"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "4260141619b678c15b411219ca7d924d"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "0fa160c8cca34c008be09135b294cfe7"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "2abf6c870eb1432671836cc583dcf995"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "eb8228e864782957443967fbfaf83526"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "9c6be7e92d75c41d87bdccb9ebf1c6d2"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "dde0af3455bbc754cbb05dc66fd003a9"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "7806a94734a5210a1a2ff2e88c18374f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "85c6b0c83a73ae742a5e4cd890ecaa1e"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "78253f7f90410664730ec78b1f78a0bd"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "1f24d64f56255988fceba5321a1604a8"
  },
  {
    "url": "zh/index.html",
    "revision": "4d1b10a77e9f327fa20477bbdc7cf713"
  },
  {
    "url": "zh/nested/bar/bar-footer.html",
    "revision": "bf6363087cb16b52a5ebde344265109e"
  },
  {
    "url": "zh/nested/bar/bar-header.html",
    "revision": "58ae8ecb7c4cdd06bbc51b4c1330e5f4"
  },
  {
    "url": "zh/nested/bar/index.html",
    "revision": "4acb47eb3fc8e6eea9312e670344c013"
  },
  {
    "url": "zh/nested/foo/foo-footer.html",
    "revision": "397a2c01d7ef87adabeb79d658432373"
  },
  {
    "url": "zh/nested/foo/foo-header.html",
    "revision": "0f6f8f2a516505964403565e1061a831"
  },
  {
    "url": "zh/nested/foo/index.html",
    "revision": "d7da400a0b832a810057436a8f285305"
  },
  {
    "url": "zh/nested/index.html",
    "revision": "9e7c7ba170d7622b9a52e74e248c75c9"
  },
  {
    "url": "zh/nested/nested-footer.html",
    "revision": "f774951285fb641262ba687188f682a9"
  },
  {
    "url": "zh/nested/nested-header.html",
    "revision": "9254cee2913ad416a3905b61c8f153b0"
  },
  {
    "url": "zh/nested1/bar/bar-footer.html",
    "revision": "d95e0eed19a98aea752b05262624bc67"
  },
  {
    "url": "zh/nested1/bar/bar-header.html",
    "revision": "a65cdef19003a216a3e3c30e396f31cd"
  },
  {
    "url": "zh/nested1/bar/index.html",
    "revision": "49de3b25ff60475c4c116adc617f54dd"
  },
  {
    "url": "zh/nested1/foo/foo-footer.html",
    "revision": "0c110ddb88513791d7ff30a189a10371"
  },
  {
    "url": "zh/nested1/foo/foo-header.html",
    "revision": "f5a5d763df1c8799d6d5793f7399be6a"
  },
  {
    "url": "zh/nested1/foo/index.html",
    "revision": "ad71e9becb497502dd74fa92a2596035"
  },
  {
    "url": "zh/nested1/index.html",
    "revision": "83cee3260e3546a08a8ff7a9cddd7904"
  },
  {
    "url": "zh/nested1/nested-footer.html",
    "revision": "e3d2513add9fb2caa52f30acedc675cc"
  },
  {
    "url": "zh/nested1/nested-header.html",
    "revision": "ec42a29e54a0c8ff817c24b221094fe3"
  },
  {
    "url": "zh/nested2/bar/bar-footer.html",
    "revision": "0564dc8258029b23b39ab74b4075b003"
  },
  {
    "url": "zh/nested2/bar/bar-header.html",
    "revision": "50e122a93e3af52eac9666d33a809195"
  },
  {
    "url": "zh/nested2/bar/index.html",
    "revision": "075c1daae323d9bebd4ddeaca6646f51"
  },
  {
    "url": "zh/nested2/foo/foo-footer.html",
    "revision": "20f24447bd349440f83157c759f177df"
  },
  {
    "url": "zh/nested2/foo/foo-header.html",
    "revision": "02a4b0f4415fea56dd538fd05331a77c"
  },
  {
    "url": "zh/nested2/foo/index.html",
    "revision": "6a171ffee92cb49486bab5b5b150ba29"
  },
  {
    "url": "zh/nested2/index.html",
    "revision": "83ef05c76329a5802bf36bf95d772f09"
  },
  {
    "url": "zh/nested2/nested-footer.html",
    "revision": "94c3b11acacfbbbc92ced8075a832a6f"
  },
  {
    "url": "zh/nested2/nested-header.html",
    "revision": "69978e26d1d389f218fe362594ee4fda"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
