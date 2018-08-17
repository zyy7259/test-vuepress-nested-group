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
    "revision": "74abcaba874f72627c5b831118f628a5"
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
    "url": "assets/js/1.0f55349f.js",
    "revision": "1e8f34dc57ebba574adaa81ceffdb27f"
  },
  {
    "url": "assets/js/10.006060f2.js",
    "revision": "902919612f123c5fc4d6b392835ecce7"
  },
  {
    "url": "assets/js/11.80aa604e.js",
    "revision": "41deb564eb97cb36c6fec9e612dd0a3c"
  },
  {
    "url": "assets/js/12.f91a757a.js",
    "revision": "d724dec65ccb48f65b5109f5e7c479ad"
  },
  {
    "url": "assets/js/13.374ef8d4.js",
    "revision": "c6bd8395d9ab0905b8afb7db1f62fe3f"
  },
  {
    "url": "assets/js/14.061936a9.js",
    "revision": "75ac8e0518050c259688c83554d73a88"
  },
  {
    "url": "assets/js/15.e38a3d06.js",
    "revision": "ea6a0b5da782865527b71f4e74f5bc51"
  },
  {
    "url": "assets/js/16.0580e03a.js",
    "revision": "3994acf39382e9449aa13bc9b8633dd6"
  },
  {
    "url": "assets/js/17.a9ee7852.js",
    "revision": "fd01c88329d008bde8fc20448b10368b"
  },
  {
    "url": "assets/js/18.d58bd961.js",
    "revision": "5b6638f8628d093b72739cc12c29d37e"
  },
  {
    "url": "assets/js/19.1c4151b0.js",
    "revision": "dd1957f17261a305071079b6f0592624"
  },
  {
    "url": "assets/js/2.6b76b3f7.js",
    "revision": "e8aaffc27804aeb9b21b9ca447fa6f38"
  },
  {
    "url": "assets/js/20.ad64c3df.js",
    "revision": "d6cc26bddf8b93c1f9578c47b7764f38"
  },
  {
    "url": "assets/js/21.0e5c333b.js",
    "revision": "76cdf03bda65f14843d187083fcbb9a7"
  },
  {
    "url": "assets/js/22.f33b4730.js",
    "revision": "cb467c6eef76cde29c69133b38bc2e9f"
  },
  {
    "url": "assets/js/23.c8c7412b.js",
    "revision": "3399d102f0eb77686026a4cec87b9c46"
  },
  {
    "url": "assets/js/24.1222e775.js",
    "revision": "632b97409fc3a2a1ff6f745b5fdf1e17"
  },
  {
    "url": "assets/js/25.6381d50e.js",
    "revision": "904143b591323f9cc3f9d71e1ae3e6bc"
  },
  {
    "url": "assets/js/26.5ef4a1c1.js",
    "revision": "01be16cdff74205ea5464a7faaf17935"
  },
  {
    "url": "assets/js/27.a91cec15.js",
    "revision": "09d350b5bf9004d305a3b48194916f36"
  },
  {
    "url": "assets/js/28.53f2a48f.js",
    "revision": "4d080eb29c4d7abbaa0b1c83fa1f7b1f"
  },
  {
    "url": "assets/js/29.65de7a24.js",
    "revision": "1d25506cee30fc2c8a76812b0ad0def5"
  },
  {
    "url": "assets/js/3.9eb2feb4.js",
    "revision": "0cc0c019140a10e7ba989afa00252e9f"
  },
  {
    "url": "assets/js/30.36418415.js",
    "revision": "2f437066445686f2da92e5a13ea97def"
  },
  {
    "url": "assets/js/31.64cdea92.js",
    "revision": "4aea7c82cc12d5b68198481a7526c0f4"
  },
  {
    "url": "assets/js/32.13739778.js",
    "revision": "da29484834611b2f7a293cb5ac15248d"
  },
  {
    "url": "assets/js/33.57ec34e7.js",
    "revision": "c55ef97a25e3523e9ac2dbb8de760435"
  },
  {
    "url": "assets/js/34.7e72b9dc.js",
    "revision": "79dbf748c3521340b849e9e0ec5a375a"
  },
  {
    "url": "assets/js/35.e4f413a0.js",
    "revision": "8a0782d1f3ad2455419e186ac023b99d"
  },
  {
    "url": "assets/js/36.fdf55a21.js",
    "revision": "0ba69fd2ce1e6c66f0bc5014c57799b7"
  },
  {
    "url": "assets/js/37.a99a162d.js",
    "revision": "f8e05a9a45db98f98800913cd77871b5"
  },
  {
    "url": "assets/js/38.e594c13c.js",
    "revision": "2bc6856efc272c190da9c61ef025b860"
  },
  {
    "url": "assets/js/39.69d4b68e.js",
    "revision": "10c5f41da63105cf66c4edc9ca8e934d"
  },
  {
    "url": "assets/js/4.74ada1fa.js",
    "revision": "81a3100f9fff9cf0b1e392ee97ea74e1"
  },
  {
    "url": "assets/js/40.60d1ac52.js",
    "revision": "39c32f775afd2b6a6552dc09fcf54700"
  },
  {
    "url": "assets/js/41.d0b5b155.js",
    "revision": "64968c41fc0001f1db50ab5fd7fd5b1e"
  },
  {
    "url": "assets/js/42.6addd2a2.js",
    "revision": "8590625565f11b50761769890f428d5d"
  },
  {
    "url": "assets/js/43.6dc7e12e.js",
    "revision": "9e613febc2515ad7ea5aedaca19d84c8"
  },
  {
    "url": "assets/js/44.f555ee24.js",
    "revision": "534e35501dcaf97e463dbf62dfcd5b0f"
  },
  {
    "url": "assets/js/45.d0dc4338.js",
    "revision": "b566936e2a8dac692b93ac3c4d875776"
  },
  {
    "url": "assets/js/46.81513ec6.js",
    "revision": "a2d7570f801c3bcbf62e2ab3de6e0eed"
  },
  {
    "url": "assets/js/47.86cca987.js",
    "revision": "5b0aa4515a3afda78e077e36862ea443"
  },
  {
    "url": "assets/js/48.5b1f4432.js",
    "revision": "729f2983093275bc9276c83166805777"
  },
  {
    "url": "assets/js/49.84f9387f.js",
    "revision": "bd424351e824e39ffc3341d2aad5c0ca"
  },
  {
    "url": "assets/js/5.515f4dd2.js",
    "revision": "cb8611dfff3517fbd456ca98abf9a00d"
  },
  {
    "url": "assets/js/50.c3aced6a.js",
    "revision": "504f7c20b644a8ae3dbf8bf6e9d53908"
  },
  {
    "url": "assets/js/51.a6630854.js",
    "revision": "0f7168cdf311dcf7b3090b17b7680814"
  },
  {
    "url": "assets/js/52.cadf0a38.js",
    "revision": "da5590b63edb296be80673963dcf364f"
  },
  {
    "url": "assets/js/53.bc32dbe3.js",
    "revision": "b097e0af897dea134a95014d2ea480f7"
  },
  {
    "url": "assets/js/54.9aa89fce.js",
    "revision": "7c506149aac3c3c42b4cad35a5a30f53"
  },
  {
    "url": "assets/js/55.bfbb9678.js",
    "revision": "7f9d9bf4d4096abfd1d35b0e95b61597"
  },
  {
    "url": "assets/js/56.dca5427a.js",
    "revision": "f12a4c3efcc008c5aed58fdf8812cafd"
  },
  {
    "url": "assets/js/57.777f3e4b.js",
    "revision": "d90f455e0a7ca777f6036a14b827e311"
  },
  {
    "url": "assets/js/58.ead76300.js",
    "revision": "cc69a3e5b55ee1745d13e14505a8b87a"
  },
  {
    "url": "assets/js/59.e11a3c9c.js",
    "revision": "9ff72012825b556dbbeb1ecfd2cc71cc"
  },
  {
    "url": "assets/js/6.c9d81a2d.js",
    "revision": "b47c7a831a6f8d67fe3a30a0f128a1a1"
  },
  {
    "url": "assets/js/60.b77faf13.js",
    "revision": "d3401f5419ac3833648cf42584fb2e12"
  },
  {
    "url": "assets/js/61.a79b36e8.js",
    "revision": "3abe614d06417c92b91282aeccf715f3"
  },
  {
    "url": "assets/js/62.a705b7b6.js",
    "revision": "d12d79b2818eb863ab2864f5746f6e9d"
  },
  {
    "url": "assets/js/63.f408b980.js",
    "revision": "6d4989b0c3bde10f8b98c59d3e7b5b08"
  },
  {
    "url": "assets/js/64.e43b4f7d.js",
    "revision": "4f0e8be1fb7ebace4c070589500b7c19"
  },
  {
    "url": "assets/js/65.230ae474.js",
    "revision": "f422c17c4d4bea89e00cce50dde40968"
  },
  {
    "url": "assets/js/66.a0d9d713.js",
    "revision": "a071ce73804393eaf6344e7f8fb2d2dd"
  },
  {
    "url": "assets/js/67.8cd09352.js",
    "revision": "4b7009d6e1328855be9d147ffd9da6a8"
  },
  {
    "url": "assets/js/68.7811bb97.js",
    "revision": "b6c79754b8b2e4301ca566f3ba8b613b"
  },
  {
    "url": "assets/js/69.7d5837dd.js",
    "revision": "9c9b977592c155d63f1aa5d0577bc854"
  },
  {
    "url": "assets/js/7.82d775c0.js",
    "revision": "204f2e8a173c038ffb32bab1ff485a00"
  },
  {
    "url": "assets/js/70.be17cfe7.js",
    "revision": "2e1e33b58bcf85975f7a175eb40c354f"
  },
  {
    "url": "assets/js/71.1b3bd636.js",
    "revision": "056b5b85695b28c9c93b5c02e7dc8ebc"
  },
  {
    "url": "assets/js/72.3fb671ee.js",
    "revision": "f6c8f8a7ec590a6aa85513dbf44bf409"
  },
  {
    "url": "assets/js/73.631f6b8f.js",
    "revision": "788a6b7e5c6baf204c5f881eb2bb0508"
  },
  {
    "url": "assets/js/74.53893ce4.js",
    "revision": "6168f9e7eb43c23e8536c4c739e85fbf"
  },
  {
    "url": "assets/js/75.92ae6109.js",
    "revision": "23d915210d6a77414dc509fbcc8fd787"
  },
  {
    "url": "assets/js/76.d583fc2c.js",
    "revision": "a18b4962f41f465d3554e00d6ee9a1f5"
  },
  {
    "url": "assets/js/77.b8b319c1.js",
    "revision": "32b1275ccd4477c928200867a39072d2"
  },
  {
    "url": "assets/js/78.826107f3.js",
    "revision": "08d74adedcbe354606e80aee8e2ce1eb"
  },
  {
    "url": "assets/js/79.d643415a.js",
    "revision": "5c3f6b0ba6eed76d3d811241bca328a0"
  },
  {
    "url": "assets/js/8.e3f4aeb2.js",
    "revision": "f5125c7cd873ec09f06f1df0fbb0780e"
  },
  {
    "url": "assets/js/80.88ab5c1c.js",
    "revision": "77068f2492bae93fde866d57c250e2e6"
  },
  {
    "url": "assets/js/81.0b52f662.js",
    "revision": "de2b5e3e8f237e8a80911d24f57a072e"
  },
  {
    "url": "assets/js/82.efe56848.js",
    "revision": "0fec065458d37a121eef58bb632664dc"
  },
  {
    "url": "assets/js/83.d76a1eba.js",
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
    "url": "assets/js/9.50ac6be4.js",
    "revision": "06a41e7cae595cd55358a77236f8d681"
  },
  {
    "url": "assets/js/app.afbea82f.js",
    "revision": "66033ec2616752106ff00901d4da3861"
  },
  {
    "url": "config/index.html",
    "revision": "6bf77ee6132a277f4b4efe474cd28166"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "f25fdd95730adbdc8f4906bc7ad7da01"
  },
  {
    "url": "guide/assets.html",
    "revision": "bfc914be3e1d566f8ddd21d2a7eb7e64"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "8af74c6241b6d439f47e0efc9002bcf9"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "d325baea5037c739513fa2ac39fe0b81"
  },
  {
    "url": "guide/deploy.html",
    "revision": "19e79a12dc5a92ed5f7bf97cc447c832"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0eafde442f3482ac7ad20322cebe094c"
  },
  {
    "url": "guide/i18n.html",
    "revision": "ca72b9b01cfeaeb900df6ab971fce144"
  },
  {
    "url": "guide/index.html",
    "revision": "370c830aa156f48253468667491ea8db"
  },
  {
    "url": "guide/markdown.html",
    "revision": "4868168406f120f44a75a878d53918ad"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "6b2b0b2a778929b8c1ad71ccbd4ab9e5"
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
    "revision": "eb1fb83bcd43bbe28fdc4c41468647b1"
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
    "revision": "98164229a0341f93e49fc94f05e044b4"
  },
  {
    "url": "nested/bar/bar-header.html",
    "revision": "b195150de464f338d8390d0f1c7e0726"
  },
  {
    "url": "nested/bar/index.html",
    "revision": "ade76e20025782571b97da31bb74b516"
  },
  {
    "url": "nested/foo/foo-footer.html",
    "revision": "c3f9af07a8fddd0191a5c1d466edb303"
  },
  {
    "url": "nested/foo/foo-header.html",
    "revision": "7b7f1124bc5e0cb056764ab0ab766ffa"
  },
  {
    "url": "nested/foo/index.html",
    "revision": "7aa7d1589233d4b4218bf880d1086177"
  },
  {
    "url": "nested/index.html",
    "revision": "93bb86e0ea3953fd62e2b4f15ca37067"
  },
  {
    "url": "nested/nested-footer.html",
    "revision": "3fb79e9e39b40676817119bfb6423aaf"
  },
  {
    "url": "nested/nested-header.html",
    "revision": "1141b183565e763283472fbff984a3a7"
  },
  {
    "url": "nested1/bar/bar-footer.html",
    "revision": "c8f84d16d765731bb739e07df821f615"
  },
  {
    "url": "nested1/bar/bar-header.html",
    "revision": "fe093dd9b5d4b0711c2bc30218c729e5"
  },
  {
    "url": "nested1/bar/index.html",
    "revision": "02d6ce5cd158f6b39618d87aac92e7fc"
  },
  {
    "url": "nested1/foo/foo-footer.html",
    "revision": "e539375c7cbc9f482d021d654d6f17ec"
  },
  {
    "url": "nested1/foo/foo-header.html",
    "revision": "967013e22f57f812664f0a6d2039b5d2"
  },
  {
    "url": "nested1/foo/index.html",
    "revision": "8d05f004c875196199e064954c1e2033"
  },
  {
    "url": "nested1/index.html",
    "revision": "2109a3f9043a1f25eb48d570b2e452bb"
  },
  {
    "url": "nested1/nested-footer.html",
    "revision": "54f76cbe1fde5426df8d02990d268210"
  },
  {
    "url": "nested1/nested-header.html",
    "revision": "2f17e16444734a6459c544bf7163e1b4"
  },
  {
    "url": "nested2/bar/bar-footer.html",
    "revision": "54c80b0b604a19227d4950dde77b0491"
  },
  {
    "url": "nested2/bar/bar-header.html",
    "revision": "5ee002537fcf14e8be2c2f353ba09b2d"
  },
  {
    "url": "nested2/bar/index.html",
    "revision": "c13e4fa16473332620d0ab262d62aa7d"
  },
  {
    "url": "nested2/foo/foo-footer.html",
    "revision": "d5403460c39c5bbb985d22cfb198c450"
  },
  {
    "url": "nested2/foo/foo-header.html",
    "revision": "93a7f87d06d6e3febd98a83e1b4bab69"
  },
  {
    "url": "nested2/foo/index.html",
    "revision": "cbffef75d2920e370b2f0ac53aafaae5"
  },
  {
    "url": "nested2/index.html",
    "revision": "2fb42a34e11d9b32ad7112d50beaae8e"
  },
  {
    "url": "nested2/nested-footer.html",
    "revision": "4336b0c4426f3f158f2dce90ba80f16a"
  },
  {
    "url": "nested2/nested-header.html",
    "revision": "b594a1bb7e3ff63e0197272f9855d8af"
  },
  {
    "url": "zh/config/index.html",
    "revision": "9d506a0f89dc278695ab863d5654ebce"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "2931ed4840d404f2e86b0534f2414c3e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "1609e0a08a8290cf2a6774d465b908f0"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "54c4c2e0595740801c7f78d12389ac92"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "02ad00584c4ec27fc02f3af5fe2a4d82"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d656e95067c9c650018d8fe4cfca5651"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8c9567b1cb9c5bdbdf23f71c4feae6ef"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "b182c6480b793666ce8bc1c3b2814a51"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1b58cfece271f8171ab5b6086e81b069"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "60f29eb1132ca9a3409f4b85b6003af3"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "bef0755c15863b638b87e99987b76e5f"
  },
  {
    "url": "zh/index.html",
    "revision": "d6bc4874aae856f0e6237f31a7b95445"
  },
  {
    "url": "zh/nested/bar/bar-footer.html",
    "revision": "4efcb523b2089acde5370f38e8795160"
  },
  {
    "url": "zh/nested/bar/bar-header.html",
    "revision": "53cfdc15242951921c4cc183b00a7c13"
  },
  {
    "url": "zh/nested/bar/index.html",
    "revision": "ffbd3356ee6da34fc5b4cd0651fdbb54"
  },
  {
    "url": "zh/nested/foo/foo-footer.html",
    "revision": "c13d29be6713f729cc54edc4fe4b1042"
  },
  {
    "url": "zh/nested/foo/foo-header.html",
    "revision": "cdf32622bf535fa0c5e6bf6f0407c39c"
  },
  {
    "url": "zh/nested/foo/index.html",
    "revision": "83240ddec5074e6322498a40ac5c77e4"
  },
  {
    "url": "zh/nested/index.html",
    "revision": "c85dfc5b1121c66433dfe7377c4884a8"
  },
  {
    "url": "zh/nested/nested-footer.html",
    "revision": "43094df9fbb64527d839cfd36a6da0c8"
  },
  {
    "url": "zh/nested/nested-header.html",
    "revision": "47cfe40a2cc89fb154a3dd73fe58bad7"
  },
  {
    "url": "zh/nested1/bar/bar-footer.html",
    "revision": "2783f5d9bc16dcfbeed88967b4b28d2a"
  },
  {
    "url": "zh/nested1/bar/bar-header.html",
    "revision": "c6dd6b9b66e4d2cd84168d603e91aa8c"
  },
  {
    "url": "zh/nested1/bar/index.html",
    "revision": "0ef7a23e2714f9891b715276f4a0185a"
  },
  {
    "url": "zh/nested1/foo/foo-footer.html",
    "revision": "0d6746468c2661e44565466b216956f8"
  },
  {
    "url": "zh/nested1/foo/foo-header.html",
    "revision": "a0c74aadf139e9b281999dbf756e323b"
  },
  {
    "url": "zh/nested1/foo/index.html",
    "revision": "e9349c8c4cd77a860e6cd988424f3a41"
  },
  {
    "url": "zh/nested1/index.html",
    "revision": "c5ba53bf1e60b7328f02c347ac00baf1"
  },
  {
    "url": "zh/nested1/nested-footer.html",
    "revision": "9b23681d284e5668ff7ac2a92a08b6d6"
  },
  {
    "url": "zh/nested1/nested-header.html",
    "revision": "ba1761186d32e1240031283d9c7a4d04"
  },
  {
    "url": "zh/nested2/bar/bar-footer.html",
    "revision": "13faafac6b97a2a90969f03ce6792694"
  },
  {
    "url": "zh/nested2/bar/bar-header.html",
    "revision": "4c0fcfda030e37c00ce3414ef20fc3a3"
  },
  {
    "url": "zh/nested2/bar/index.html",
    "revision": "c23497a28bea8f6b1b51f69856c93ce2"
  },
  {
    "url": "zh/nested2/foo/foo-footer.html",
    "revision": "7ee556871c9123253d8cb75391e3b57f"
  },
  {
    "url": "zh/nested2/foo/foo-header.html",
    "revision": "5f31bf7c1e0ed881266c42e8c459cd8b"
  },
  {
    "url": "zh/nested2/foo/index.html",
    "revision": "0d2bf533653f2817354b26baa1140053"
  },
  {
    "url": "zh/nested2/index.html",
    "revision": "e48a38d181d8eaa04ddec58ef7e3ed51"
  },
  {
    "url": "zh/nested2/nested-footer.html",
    "revision": "8e1bb22636d814c3d0d1f6fba05ecd61"
  },
  {
    "url": "zh/nested2/nested-header.html",
    "revision": "4ffe74239bb840a1761e1f5b92a73fa7"
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
