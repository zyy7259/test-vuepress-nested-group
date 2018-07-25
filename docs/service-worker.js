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
    "revision": "a41a8cac50f9bcdedcca15d82f1f2351"
  },
  {
    "url": "assets/css/0.styles.fdab4d37.css",
    "revision": "2190eeade08bfd128917d682d82e8a55"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4a1b688d.js",
    "revision": "4c5f036dd7710da2df686ba689ef3668"
  },
  {
    "url": "assets/js/10.93ddcfcc.js",
    "revision": "836926fcda6c17f1ac9e3f98a5317e58"
  },
  {
    "url": "assets/js/11.44bb088f.js",
    "revision": "94e603b030a23f29409eb1dc4230a580"
  },
  {
    "url": "assets/js/12.65221a6c.js",
    "revision": "b8e42d73297a0635699c72c5ae106d35"
  },
  {
    "url": "assets/js/13.24ee663f.js",
    "revision": "0e618cf9e0228bbaa5ac1acf6aa0fa38"
  },
  {
    "url": "assets/js/14.c297ff26.js",
    "revision": "e657b69e1d3cd7ca05ffaf9053ed5917"
  },
  {
    "url": "assets/js/15.95cd8e06.js",
    "revision": "dc99e23bcff56c5e03397d575777c962"
  },
  {
    "url": "assets/js/16.eec2f445.js",
    "revision": "9b207bb08ceca9a47380b7e099a25ca0"
  },
  {
    "url": "assets/js/17.caade0be.js",
    "revision": "9c8070b3f055f0a377706327ae393528"
  },
  {
    "url": "assets/js/18.d8b7cf53.js",
    "revision": "6b481f2913e5f2b74bc17a911a00e13f"
  },
  {
    "url": "assets/js/19.11c3044a.js",
    "revision": "a12bdf39817bc5272dbcd14dcbd8be1a"
  },
  {
    "url": "assets/js/2.b22708ab.js",
    "revision": "dbd5ebd5939a3eb340728de958a48d67"
  },
  {
    "url": "assets/js/20.9946c0ae.js",
    "revision": "9a22daec677caeebe6c8921ee5705d98"
  },
  {
    "url": "assets/js/21.2172271f.js",
    "revision": "8e431189e3ff524040b399b4473e34ab"
  },
  {
    "url": "assets/js/22.f7969564.js",
    "revision": "29a109e715e9813696ce68638147a4f3"
  },
  {
    "url": "assets/js/23.9cfd619d.js",
    "revision": "869106d427241ddfe60a7e873315d142"
  },
  {
    "url": "assets/js/24.f860cee9.js",
    "revision": "8f43ca3a139c4842739bccc7bacb3213"
  },
  {
    "url": "assets/js/25.fb6a5b13.js",
    "revision": "a4ced9711954507779f003e781160c16"
  },
  {
    "url": "assets/js/26.33b00994.js",
    "revision": "28f79f324a3ba54b9690e740e962e62e"
  },
  {
    "url": "assets/js/27.949ca95e.js",
    "revision": "1607f58da4fa012177a0bd5092f9141d"
  },
  {
    "url": "assets/js/28.34492992.js",
    "revision": "a25e6f9a9507f5cf1788a8f8d2540ef3"
  },
  {
    "url": "assets/js/29.cd8dacb4.js",
    "revision": "17da28e29aa9d878db5e25d82a7e16ea"
  },
  {
    "url": "assets/js/3.76d4d19c.js",
    "revision": "93a8fec14d5fed48d30233adfe730ff7"
  },
  {
    "url": "assets/js/30.ad1c53f7.js",
    "revision": "863d2f1a97beb53e954f79bf78aa2c9f"
  },
  {
    "url": "assets/js/31.e8aa4535.js",
    "revision": "68b3775ee6de4a3f61847dc0ab307ecd"
  },
  {
    "url": "assets/js/32.92235e60.js",
    "revision": "fc31972cc84be2cfcc44b65d04f4bc91"
  },
  {
    "url": "assets/js/33.2532c617.js",
    "revision": "325cca12b411c498efcb75c2a2e9019a"
  },
  {
    "url": "assets/js/34.9e095c41.js",
    "revision": "67797f2b29fe7f4b52c1c656315e3137"
  },
  {
    "url": "assets/js/35.cf748fe3.js",
    "revision": "ea49b9f282063883e538185669df3707"
  },
  {
    "url": "assets/js/36.e0a03e16.js",
    "revision": "fc3126444a2069d7d212cba1d0bc5fea"
  },
  {
    "url": "assets/js/37.192db229.js",
    "revision": "fd42b45ce3f57f260f3e55e96b666ad7"
  },
  {
    "url": "assets/js/38.4891bcfa.js",
    "revision": "a9c01f2fe4f4bc85bd896ab30ad31036"
  },
  {
    "url": "assets/js/39.efe0f0db.js",
    "revision": "645959803157b9d2c3d39b7f86ad4fa4"
  },
  {
    "url": "assets/js/4.6e6febd9.js",
    "revision": "ce99ef0e965e45d66f0dbc9faf239d0d"
  },
  {
    "url": "assets/js/40.730be6e0.js",
    "revision": "e412d378449c910bb19c3c320df897dc"
  },
  {
    "url": "assets/js/41.ca28f003.js",
    "revision": "ed4a307313b0ae37b40c972393c19311"
  },
  {
    "url": "assets/js/42.5dd2fdf1.js",
    "revision": "ac365c541bff8065a948a4c56ebc77e1"
  },
  {
    "url": "assets/js/43.edab96a4.js",
    "revision": "5d3d093b97378357dfaf0d7eea17247a"
  },
  {
    "url": "assets/js/44.6fff0213.js",
    "revision": "8248c2218c36245843fa7d0f18dd3551"
  },
  {
    "url": "assets/js/45.4b8b7ef1.js",
    "revision": "bc40941a9cc9d42c40e1315da1ab812a"
  },
  {
    "url": "assets/js/46.5dac5798.js",
    "revision": "71a887f4e01a645df47a908f21310e59"
  },
  {
    "url": "assets/js/47.7c56a445.js",
    "revision": "61cbd96855a3b71c2ff140e965264ee6"
  },
  {
    "url": "assets/js/48.957c4577.js",
    "revision": "f7d76ea90f458abcb60d571495bde81e"
  },
  {
    "url": "assets/js/49.9c416519.js",
    "revision": "68fb111b2d3538cf7e8c5c6b5e9d5aef"
  },
  {
    "url": "assets/js/5.be9f02c4.js",
    "revision": "ee2caf00f6a40eb0b544811dd661cb52"
  },
  {
    "url": "assets/js/50.416e4c70.js",
    "revision": "8aadcebbe47982d85ad3ad745db01b5f"
  },
  {
    "url": "assets/js/51.67ab092d.js",
    "revision": "f89049e2f3873d0028493f423eb6c716"
  },
  {
    "url": "assets/js/52.e306d568.js",
    "revision": "d0596d23ac3bb061b5855c1baae9ef5a"
  },
  {
    "url": "assets/js/53.92ccd65d.js",
    "revision": "f749e7d291b9f680dd3078d72657c73c"
  },
  {
    "url": "assets/js/54.72669321.js",
    "revision": "851f210a3630c2f40c7501b2d57e39c5"
  },
  {
    "url": "assets/js/55.d5dbbca5.js",
    "revision": "e86fb347b79e8ba9c65e3e81f7076b5e"
  },
  {
    "url": "assets/js/56.1fbe2037.js",
    "revision": "8c43fc50956fe5c66d1ae75895bc19f3"
  },
  {
    "url": "assets/js/57.cc09c0bf.js",
    "revision": "ce26b42d8cb81ab72912d991206023ed"
  },
  {
    "url": "assets/js/58.b25686b4.js",
    "revision": "074cff94046c13fc1eb375fd0a6e8f11"
  },
  {
    "url": "assets/js/59.e8066bea.js",
    "revision": "9b079fcb8b4a2c9bb7c4cd6a67c042f0"
  },
  {
    "url": "assets/js/6.66b3306a.js",
    "revision": "f10982f9266d570033fb40ef2025ac64"
  },
  {
    "url": "assets/js/60.783c8927.js",
    "revision": "1d1ea802e36c331615986d247ae9ec7e"
  },
  {
    "url": "assets/js/61.5ad31818.js",
    "revision": "d946a91a0008c6c9f6204855f4afe448"
  },
  {
    "url": "assets/js/62.804445a0.js",
    "revision": "bf1313d0797071534817a961ee501475"
  },
  {
    "url": "assets/js/63.685a2af1.js",
    "revision": "d9cce26350e8f2d69003ac6f89e30909"
  },
  {
    "url": "assets/js/64.edddb440.js",
    "revision": "7578d5d75c6c547b455ba3a430911582"
  },
  {
    "url": "assets/js/65.f81d9c52.js",
    "revision": "4713b77130aec527883f5b3c2e06ac9f"
  },
  {
    "url": "assets/js/66.f9504011.js",
    "revision": "562edb6e7f50d257dccf29560d3eb9df"
  },
  {
    "url": "assets/js/67.8c3940f1.js",
    "revision": "d60f581175091b94788a6b0fc17e8e4c"
  },
  {
    "url": "assets/js/68.4562329a.js",
    "revision": "9e13af8995bce1805737bcf6f12af8a6"
  },
  {
    "url": "assets/js/69.17cfb449.js",
    "revision": "66c05e73f4995178927e45c3b79c6b91"
  },
  {
    "url": "assets/js/7.c219a4e4.js",
    "revision": "645039d77f85b0bdb2da6109a5b9d8c9"
  },
  {
    "url": "assets/js/70.f5ab16ad.js",
    "revision": "ba6371d525bee8ca1a913e244c56befa"
  },
  {
    "url": "assets/js/71.4570f524.js",
    "revision": "7974fb6ec649ddb42890cdae77debf86"
  },
  {
    "url": "assets/js/72.413b428a.js",
    "revision": "f1be4ab1ef99564753c4b04024cd8f74"
  },
  {
    "url": "assets/js/73.157953dd.js",
    "revision": "49c79fd78897195e5c9247e080f7fc14"
  },
  {
    "url": "assets/js/74.f7c354f0.js",
    "revision": "5413796de53b3bf3219fe065d0779994"
  },
  {
    "url": "assets/js/75.73000ad5.js",
    "revision": "3e490ed1af3382ba82a07741c352d073"
  },
  {
    "url": "assets/js/76.53a19718.js",
    "revision": "1065ba24cd803ffa9e7cd2d7a403ac80"
  },
  {
    "url": "assets/js/77.7fca2f5e.js",
    "revision": "7f549266caf2c56995c1faa034c6c610"
  },
  {
    "url": "assets/js/78.9d64c725.js",
    "revision": "2b1e1239b5eac01a7a72d84f479a8350"
  },
  {
    "url": "assets/js/79.72d38ee3.js",
    "revision": "f878cadf2770f97aa3e63964eee2ad81"
  },
  {
    "url": "assets/js/8.906d8982.js",
    "revision": "c2892d55acf6e0a0248cd0c4b4e78040"
  },
  {
    "url": "assets/js/80.f73c4ac0.js",
    "revision": "597740430b0e6849e698f0e3cb3440e8"
  },
  {
    "url": "assets/js/81.b7bae02e.js",
    "revision": "554ffd630cafa39c1119cf7cefd80cda"
  },
  {
    "url": "assets/js/82.ffef9b19.js",
    "revision": "b1b9630c161ecf8f724d13abc1e5ce79"
  },
  {
    "url": "assets/js/83.53d92fdc.js",
    "revision": "4a5f471a51b8b79146ff43c2c1937b4a"
  },
  {
    "url": "assets/js/84.843c4bd6.js",
    "revision": "4247a8c8ca3ffd3bf502677e338ec245"
  },
  {
    "url": "assets/js/85.b50964b7.js",
    "revision": "d99412b0587da6a16bbbfe7d0c3dd020"
  },
  {
    "url": "assets/js/9.ec9d2fe0.js",
    "revision": "0be4c42aa122102bc8c215bb955cbfad"
  },
  {
    "url": "assets/js/app.e35fd012.js",
    "revision": "4f3fed158f361d51a920e9d1518cf061"
  },
  {
    "url": "config/index.html",
    "revision": "9de69c74c877b7fd21bbaffe2901068a"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "9d5b33a532f8406e36de5afcc493941f"
  },
  {
    "url": "guide/assets.html",
    "revision": "b7881d356b8b32beca18dab0fa7a8c69"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "881c866b8b89729164bf36c34464c042"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "a815e710397214c86aad1e490c37456c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d25511a82eaf73373d456a70f409d246"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bcfdff22a4df575ef3f68025365492e2"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c42390da4bd280f18001ccb83d95424b"
  },
  {
    "url": "guide/index.html",
    "revision": "f7ed823d83edd6096e9d4318f66c5203"
  },
  {
    "url": "guide/markdown.html",
    "revision": "06e9995afc83fb2c4f7425403101a330"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1d65652c58fe32ab1e410b7d3de4d824"
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
    "revision": "fd070adbf00132882dda0c678203a0b6"
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
    "revision": "1f583db09dd5fe2c30ff09cb09bd0ab3"
  },
  {
    "url": "nested/bar/bar-header.html",
    "revision": "cd0f9f566c83eededd1de84badf8f611"
  },
  {
    "url": "nested/bar/index.html",
    "revision": "d40a9172a24a523424f297864495ed1e"
  },
  {
    "url": "nested/foo/foo-footer.html",
    "revision": "229505e0d1dc9a140cafd62c57b8fb8f"
  },
  {
    "url": "nested/foo/foo-header.html",
    "revision": "574cd551fd07c145674b057651a0ec11"
  },
  {
    "url": "nested/foo/index.html",
    "revision": "74786b9df5cb79f3930b1749a0fafa9b"
  },
  {
    "url": "nested/index.html",
    "revision": "91aeb77ccf96dd6c36c7df2c6b66ae3f"
  },
  {
    "url": "nested/nested-footer.html",
    "revision": "cdff57058207d3e8287bf5287cfbd5e7"
  },
  {
    "url": "nested/nested-header.html",
    "revision": "0a6cf9eb2f78ee6539b3c666f57ae231"
  },
  {
    "url": "nested1/bar/bar-footer.html",
    "revision": "8eb2206e8d06785051c9ba8ff6a07b6a"
  },
  {
    "url": "nested1/bar/bar-header.html",
    "revision": "b90b7ba284259bfc80dc0c04a9aed0d1"
  },
  {
    "url": "nested1/bar/index.html",
    "revision": "346c7ab51057b6190d78fb46c013dfda"
  },
  {
    "url": "nested1/foo/foo-footer.html",
    "revision": "88da35b41da85a23b48696815c0cf281"
  },
  {
    "url": "nested1/foo/foo-header.html",
    "revision": "fb36d9f229ccd32bda18c66f18ff4050"
  },
  {
    "url": "nested1/foo/index.html",
    "revision": "bf917dd8a9d7199020ef9e465f006613"
  },
  {
    "url": "nested1/index.html",
    "revision": "2cdf15779021fac76b5c1edd2b26230c"
  },
  {
    "url": "nested1/nested-footer.html",
    "revision": "78885cf78f2e81ccc1851562d59600eb"
  },
  {
    "url": "nested1/nested-header.html",
    "revision": "4414e9756ba351e3ff5805eff01d5f9f"
  },
  {
    "url": "nested2/bar/bar-footer.html",
    "revision": "f90726d2b907f7b31658c4c05983d2e3"
  },
  {
    "url": "nested2/bar/bar-header.html",
    "revision": "a3dff4be84100462a1e6975477ee93fe"
  },
  {
    "url": "nested2/bar/index.html",
    "revision": "c4eefa193d936f330f00a52671e8ab81"
  },
  {
    "url": "nested2/foo/foo-footer.html",
    "revision": "31764e5fcfc6ceedaf85e4263cd09080"
  },
  {
    "url": "nested2/foo/foo-header.html",
    "revision": "b2c1159486c9427f58ca23f3645ac547"
  },
  {
    "url": "nested2/foo/index.html",
    "revision": "520e77ff00a87078b80e432d353072e3"
  },
  {
    "url": "nested2/index.html",
    "revision": "caa6a0e3b439f038c29ab71e2e48b4e9"
  },
  {
    "url": "nested2/nested-footer.html",
    "revision": "07b44a1c971c25d68a433e62e31ac91c"
  },
  {
    "url": "nested2/nested-header.html",
    "revision": "5a4d63476acfb54983b4d76122fc2377"
  },
  {
    "url": "zh/config/index.html",
    "revision": "7a20156df0c04937aebf9664ee0ad1cd"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "b8387223745c9e1ff96168f45bf65bc3"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "bf9edcbd5fa45da768ac49ee5eeb4533"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "4ba1570ce09865fe453527f46b3d5fc3"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "8c2c342f654f9858b8b64cf25c971043"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "fb643d05c616a32272eb17e6dfe6756d"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "23498c35d4d14ed9e899fd7c311e9f85"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "9518b82b0c55e31ec71e0bcabea4c1e7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a0f6d850265ddd5812d1a0e5e83f4134"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "ecce7412fe34ed0f2adbe4ad0aa04d60"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "fa7e31a41803a502d24ab9eb2c16c2ac"
  },
  {
    "url": "zh/index.html",
    "revision": "567a3ae06a0cc3db1881f3ba50a45252"
  },
  {
    "url": "zh/nested/bar/bar-footer.html",
    "revision": "247a3a17b4d3972c9611a9bc3c8d92a4"
  },
  {
    "url": "zh/nested/bar/bar-header.html",
    "revision": "a63c658bd5ae6e849e974e720252289e"
  },
  {
    "url": "zh/nested/bar/index.html",
    "revision": "b608e068c377120f77611174fd9de00b"
  },
  {
    "url": "zh/nested/foo/foo-footer.html",
    "revision": "17cd9baf7a093c4db7b315db1132ba6e"
  },
  {
    "url": "zh/nested/foo/foo-header.html",
    "revision": "c0d4d0884028684fd0dbc04cfab07cb4"
  },
  {
    "url": "zh/nested/foo/index.html",
    "revision": "2c35cb13bff5531e6a78f6ece8e9cde1"
  },
  {
    "url": "zh/nested/index.html",
    "revision": "1c47aa3a2aa5b7c913ae186d5b574b7c"
  },
  {
    "url": "zh/nested/nested-footer.html",
    "revision": "3006b59f42d1c8e948b864ea2780d579"
  },
  {
    "url": "zh/nested/nested-header.html",
    "revision": "464d286629cdaa006af39c644a5b11c5"
  },
  {
    "url": "zh/nested1/bar/bar-footer.html",
    "revision": "e17c80d5c5a9f7c46b342b2702567ced"
  },
  {
    "url": "zh/nested1/bar/bar-header.html",
    "revision": "9fe1814f9306e6096e18e9ed18f410ec"
  },
  {
    "url": "zh/nested1/bar/index.html",
    "revision": "3fa40b5442ae4131c3dab3716da37be7"
  },
  {
    "url": "zh/nested1/foo/foo-footer.html",
    "revision": "46174fc6599d57784825d2545d06de15"
  },
  {
    "url": "zh/nested1/foo/foo-header.html",
    "revision": "77ebbb3338659cdeb299fa309ca60fa5"
  },
  {
    "url": "zh/nested1/foo/index.html",
    "revision": "8177fc489cda8fa0cbaf83b3275397c1"
  },
  {
    "url": "zh/nested1/index.html",
    "revision": "9345a856d79508b15357f305d0f5b23a"
  },
  {
    "url": "zh/nested1/nested-footer.html",
    "revision": "61cf90f62c74406594cb5793751a43f6"
  },
  {
    "url": "zh/nested1/nested-header.html",
    "revision": "85e933f06a4a85b9e1881735bc4a69e9"
  },
  {
    "url": "zh/nested2/bar/bar-footer.html",
    "revision": "ee54ffdb7e73c690e401c16dfe4fc4bc"
  },
  {
    "url": "zh/nested2/bar/bar-header.html",
    "revision": "a67ff1fe5727808e9994db4026c8bb22"
  },
  {
    "url": "zh/nested2/bar/index.html",
    "revision": "520722e15c98667cc7960c3cf57e8f0c"
  },
  {
    "url": "zh/nested2/foo/foo-footer.html",
    "revision": "c3457e09e6ba48d76aa2f58a7f8a166e"
  },
  {
    "url": "zh/nested2/foo/foo-header.html",
    "revision": "2e126404ba7ba0ed8f243030c09e3677"
  },
  {
    "url": "zh/nested2/foo/index.html",
    "revision": "5375ba23add48c18a5084b95ad08f404"
  },
  {
    "url": "zh/nested2/index.html",
    "revision": "a8ad101066900555dd99f0d0032a809b"
  },
  {
    "url": "zh/nested2/nested-footer.html",
    "revision": "6b9c29efb49611a250e606839f8bd042"
  },
  {
    "url": "zh/nested2/nested-header.html",
    "revision": "f7cd6db5240068f5f82e1c22c332af79"
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
