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
    "revision": "b1d71efa56390edb7c23b900bf7afcef"
  },
  {
    "url": "assets/css/0.styles.7546d43b.css",
    "revision": "0352050553c0cf02565bcc4793737451"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1365882c.js",
    "revision": "4c5f036dd7710da2df686ba689ef3668"
  },
  {
    "url": "assets/js/10.b6fe65de.js",
    "revision": "836926fcda6c17f1ac9e3f98a5317e58"
  },
  {
    "url": "assets/js/11.9b8d275a.js",
    "revision": "94e603b030a23f29409eb1dc4230a580"
  },
  {
    "url": "assets/js/12.c144738d.js",
    "revision": "b8e42d73297a0635699c72c5ae106d35"
  },
  {
    "url": "assets/js/13.d11b9342.js",
    "revision": "0e618cf9e0228bbaa5ac1acf6aa0fa38"
  },
  {
    "url": "assets/js/14.2825073f.js",
    "revision": "e657b69e1d3cd7ca05ffaf9053ed5917"
  },
  {
    "url": "assets/js/15.f9c375e8.js",
    "revision": "dc99e23bcff56c5e03397d575777c962"
  },
  {
    "url": "assets/js/16.7362d2d4.js",
    "revision": "9b207bb08ceca9a47380b7e099a25ca0"
  },
  {
    "url": "assets/js/17.440f674c.js",
    "revision": "9c8070b3f055f0a377706327ae393528"
  },
  {
    "url": "assets/js/18.2bdf4dd8.js",
    "revision": "6b481f2913e5f2b74bc17a911a00e13f"
  },
  {
    "url": "assets/js/19.f84af861.js",
    "revision": "a12bdf39817bc5272dbcd14dcbd8be1a"
  },
  {
    "url": "assets/js/2.885f73fe.js",
    "revision": "dbd5ebd5939a3eb340728de958a48d67"
  },
  {
    "url": "assets/js/20.19ea277d.js",
    "revision": "9a22daec677caeebe6c8921ee5705d98"
  },
  {
    "url": "assets/js/21.4f011217.js",
    "revision": "8e431189e3ff524040b399b4473e34ab"
  },
  {
    "url": "assets/js/22.4bb81c9e.js",
    "revision": "29a109e715e9813696ce68638147a4f3"
  },
  {
    "url": "assets/js/23.b6fded13.js",
    "revision": "869106d427241ddfe60a7e873315d142"
  },
  {
    "url": "assets/js/24.f3137023.js",
    "revision": "8f43ca3a139c4842739bccc7bacb3213"
  },
  {
    "url": "assets/js/25.226ffc87.js",
    "revision": "a4ced9711954507779f003e781160c16"
  },
  {
    "url": "assets/js/26.cfb15984.js",
    "revision": "28f79f324a3ba54b9690e740e962e62e"
  },
  {
    "url": "assets/js/27.35da3ea9.js",
    "revision": "1607f58da4fa012177a0bd5092f9141d"
  },
  {
    "url": "assets/js/28.5d5ab0c0.js",
    "revision": "8c4e8752656ed6456517f115f4a232de"
  },
  {
    "url": "assets/js/29.0ce445a2.js",
    "revision": "17da28e29aa9d878db5e25d82a7e16ea"
  },
  {
    "url": "assets/js/3.4e97dbd1.js",
    "revision": "93a8fec14d5fed48d30233adfe730ff7"
  },
  {
    "url": "assets/js/30.6057571a.js",
    "revision": "863d2f1a97beb53e954f79bf78aa2c9f"
  },
  {
    "url": "assets/js/31.40d06beb.js",
    "revision": "68b3775ee6de4a3f61847dc0ab307ecd"
  },
  {
    "url": "assets/js/32.8dcd0347.js",
    "revision": "fc31972cc84be2cfcc44b65d04f4bc91"
  },
  {
    "url": "assets/js/33.6dcc6c07.js",
    "revision": "325cca12b411c498efcb75c2a2e9019a"
  },
  {
    "url": "assets/js/34.73d36816.js",
    "revision": "67797f2b29fe7f4b52c1c656315e3137"
  },
  {
    "url": "assets/js/35.a752bac3.js",
    "revision": "ea49b9f282063883e538185669df3707"
  },
  {
    "url": "assets/js/36.0de8c6cd.js",
    "revision": "fc3126444a2069d7d212cba1d0bc5fea"
  },
  {
    "url": "assets/js/37.873a0d92.js",
    "revision": "fd42b45ce3f57f260f3e55e96b666ad7"
  },
  {
    "url": "assets/js/38.3f99a5d4.js",
    "revision": "a9c01f2fe4f4bc85bd896ab30ad31036"
  },
  {
    "url": "assets/js/39.ddf19c7f.js",
    "revision": "645959803157b9d2c3d39b7f86ad4fa4"
  },
  {
    "url": "assets/js/4.c1d70bb0.js",
    "revision": "ce99ef0e965e45d66f0dbc9faf239d0d"
  },
  {
    "url": "assets/js/40.1094a12b.js",
    "revision": "e412d378449c910bb19c3c320df897dc"
  },
  {
    "url": "assets/js/41.29108259.js",
    "revision": "ed4a307313b0ae37b40c972393c19311"
  },
  {
    "url": "assets/js/42.2bcc7122.js",
    "revision": "ac365c541bff8065a948a4c56ebc77e1"
  },
  {
    "url": "assets/js/43.9bff1dab.js",
    "revision": "5d3d093b97378357dfaf0d7eea17247a"
  },
  {
    "url": "assets/js/44.e195dddd.js",
    "revision": "8248c2218c36245843fa7d0f18dd3551"
  },
  {
    "url": "assets/js/45.2b3a0512.js",
    "revision": "bc40941a9cc9d42c40e1315da1ab812a"
  },
  {
    "url": "assets/js/46.c8b649f7.js",
    "revision": "71a887f4e01a645df47a908f21310e59"
  },
  {
    "url": "assets/js/47.cf30bde0.js",
    "revision": "61cbd96855a3b71c2ff140e965264ee6"
  },
  {
    "url": "assets/js/48.836d39c8.js",
    "revision": "f7d76ea90f458abcb60d571495bde81e"
  },
  {
    "url": "assets/js/49.f5d1caf5.js",
    "revision": "68fb111b2d3538cf7e8c5c6b5e9d5aef"
  },
  {
    "url": "assets/js/5.7fdfa4c8.js",
    "revision": "ee2caf00f6a40eb0b544811dd661cb52"
  },
  {
    "url": "assets/js/50.8a2f1ab6.js",
    "revision": "8aadcebbe47982d85ad3ad745db01b5f"
  },
  {
    "url": "assets/js/51.44fb9315.js",
    "revision": "f89049e2f3873d0028493f423eb6c716"
  },
  {
    "url": "assets/js/52.0e90a224.js",
    "revision": "d0596d23ac3bb061b5855c1baae9ef5a"
  },
  {
    "url": "assets/js/53.db4b4062.js",
    "revision": "f749e7d291b9f680dd3078d72657c73c"
  },
  {
    "url": "assets/js/54.5e5c76d2.js",
    "revision": "851f210a3630c2f40c7501b2d57e39c5"
  },
  {
    "url": "assets/js/55.e4f93054.js",
    "revision": "e86fb347b79e8ba9c65e3e81f7076b5e"
  },
  {
    "url": "assets/js/56.5a885ee6.js",
    "revision": "8c43fc50956fe5c66d1ae75895bc19f3"
  },
  {
    "url": "assets/js/57.cc590dca.js",
    "revision": "ce26b42d8cb81ab72912d991206023ed"
  },
  {
    "url": "assets/js/58.3fc75b1d.js",
    "revision": "074cff94046c13fc1eb375fd0a6e8f11"
  },
  {
    "url": "assets/js/59.73edfd86.js",
    "revision": "9b079fcb8b4a2c9bb7c4cd6a67c042f0"
  },
  {
    "url": "assets/js/6.f8ac8783.js",
    "revision": "f10982f9266d570033fb40ef2025ac64"
  },
  {
    "url": "assets/js/60.b079fb31.js",
    "revision": "1d1ea802e36c331615986d247ae9ec7e"
  },
  {
    "url": "assets/js/61.278687b1.js",
    "revision": "d946a91a0008c6c9f6204855f4afe448"
  },
  {
    "url": "assets/js/62.d145ce8c.js",
    "revision": "bf1313d0797071534817a961ee501475"
  },
  {
    "url": "assets/js/63.5981a46b.js",
    "revision": "d9cce26350e8f2d69003ac6f89e30909"
  },
  {
    "url": "assets/js/64.1a906f07.js",
    "revision": "7578d5d75c6c547b455ba3a430911582"
  },
  {
    "url": "assets/js/65.17f1ec0b.js",
    "revision": "4713b77130aec527883f5b3c2e06ac9f"
  },
  {
    "url": "assets/js/66.9d6e124f.js",
    "revision": "562edb6e7f50d257dccf29560d3eb9df"
  },
  {
    "url": "assets/js/67.491501d8.js",
    "revision": "29ef176e4433c5a8a3c2286605b3219b"
  },
  {
    "url": "assets/js/68.ff7082f1.js",
    "revision": "9e13af8995bce1805737bcf6f12af8a6"
  },
  {
    "url": "assets/js/69.229949c8.js",
    "revision": "66c05e73f4995178927e45c3b79c6b91"
  },
  {
    "url": "assets/js/7.533d290f.js",
    "revision": "645039d77f85b0bdb2da6109a5b9d8c9"
  },
  {
    "url": "assets/js/70.28700941.js",
    "revision": "ba6371d525bee8ca1a913e244c56befa"
  },
  {
    "url": "assets/js/71.ebce07f1.js",
    "revision": "7974fb6ec649ddb42890cdae77debf86"
  },
  {
    "url": "assets/js/72.80c23678.js",
    "revision": "f1be4ab1ef99564753c4b04024cd8f74"
  },
  {
    "url": "assets/js/73.55386382.js",
    "revision": "49c79fd78897195e5c9247e080f7fc14"
  },
  {
    "url": "assets/js/74.8c23f966.js",
    "revision": "5413796de53b3bf3219fe065d0779994"
  },
  {
    "url": "assets/js/75.6f3babed.js",
    "revision": "3e490ed1af3382ba82a07741c352d073"
  },
  {
    "url": "assets/js/76.8e9d8ec0.js",
    "revision": "1065ba24cd803ffa9e7cd2d7a403ac80"
  },
  {
    "url": "assets/js/77.a7f05a86.js",
    "revision": "7f549266caf2c56995c1faa034c6c610"
  },
  {
    "url": "assets/js/78.2419b848.js",
    "revision": "2b1e1239b5eac01a7a72d84f479a8350"
  },
  {
    "url": "assets/js/79.7e0b3136.js",
    "revision": "f878cadf2770f97aa3e63964eee2ad81"
  },
  {
    "url": "assets/js/8.e313be96.js",
    "revision": "c2892d55acf6e0a0248cd0c4b4e78040"
  },
  {
    "url": "assets/js/80.6bb03552.js",
    "revision": "597740430b0e6849e698f0e3cb3440e8"
  },
  {
    "url": "assets/js/81.e97981f8.js",
    "revision": "554ffd630cafa39c1119cf7cefd80cda"
  },
  {
    "url": "assets/js/82.0f5f8e50.js",
    "revision": "b1b9630c161ecf8f724d13abc1e5ce79"
  },
  {
    "url": "assets/js/83.b2d70ec1.js",
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
    "url": "assets/js/9.cafee7d2.js",
    "revision": "0be4c42aa122102bc8c215bb955cbfad"
  },
  {
    "url": "assets/js/app.3efaaa74.js",
    "revision": "6b780cb0583d170fb36350bb177e2f61"
  },
  {
    "url": "config/index.html",
    "revision": "2c96825246b210a05196255ae066d9e0"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "94029d26ad63e896541d4331209bc8a7"
  },
  {
    "url": "guide/assets.html",
    "revision": "18f77088cb4fb3587d4deb23e6dbeba8"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a8944778259d73fd18638dfbbaf14797"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "b0d90f7ab85c75d4ecac69d7bf6e4dd2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "0207d710bc840fdf7e788af21a249894"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5c1705ace27d14bd4f27f8319f2a4d64"
  },
  {
    "url": "guide/i18n.html",
    "revision": "f8123fdfd26896831d8b34d68188e327"
  },
  {
    "url": "guide/index.html",
    "revision": "85bcd5732ea491700e2c56eb660e780a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "76c8d998a3f878ea463ca4872e36867f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "2c130696a20dd56f95c082fcc9dc42b1"
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
    "revision": "d9ce30705081f303c1b7160f10c16631"
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
    "revision": "3a357eee6752a66193bef18edd07faa1"
  },
  {
    "url": "nested/bar/bar-header.html",
    "revision": "2a12bf8cbb04f2b735aff72e7285958c"
  },
  {
    "url": "nested/bar/index.html",
    "revision": "38889ab07e3a8c09c37724c6707b9268"
  },
  {
    "url": "nested/foo/foo-footer.html",
    "revision": "af417d9a58f640a5d14e12ea30851b12"
  },
  {
    "url": "nested/foo/foo-header.html",
    "revision": "c1ca25b170973b55533411ae4be5b9dc"
  },
  {
    "url": "nested/foo/index.html",
    "revision": "7aba1a9a086ee4b0e8ea12fb7e2d2abe"
  },
  {
    "url": "nested/index.html",
    "revision": "aec0a44adc5bff8beb341e66b113071d"
  },
  {
    "url": "nested/nested-footer.html",
    "revision": "5e9982a7957a208b7abc5dce10caf8dd"
  },
  {
    "url": "nested/nested-header.html",
    "revision": "551a950bb9541e8933b4985ec4c9eba8"
  },
  {
    "url": "nested1/bar/bar-footer.html",
    "revision": "e833a1dd6b8660319f8cc8a423f0bcd5"
  },
  {
    "url": "nested1/bar/bar-header.html",
    "revision": "2f72ddb829a9ff0351bed0e97777abd6"
  },
  {
    "url": "nested1/bar/index.html",
    "revision": "e8231a2432aa468858ad8ce61f63bf42"
  },
  {
    "url": "nested1/foo/foo-footer.html",
    "revision": "2c8758d9f7b5978bfd4e204adf10f2da"
  },
  {
    "url": "nested1/foo/foo-header.html",
    "revision": "2a62e46b243b075b38bf983d0c873d1b"
  },
  {
    "url": "nested1/foo/index.html",
    "revision": "d4626d2a3cf37a8964eefe52c8ef1c43"
  },
  {
    "url": "nested1/index.html",
    "revision": "1bda46dae8d649426a3a1bc976d1d307"
  },
  {
    "url": "nested1/nested-footer.html",
    "revision": "101104d6c1585c9285654a3649133bef"
  },
  {
    "url": "nested1/nested-header.html",
    "revision": "6e41cbbfd71ac32593efd89ab9dc2713"
  },
  {
    "url": "nested2/bar/bar-footer.html",
    "revision": "ae84400324da4d287b2fe42f3ec6eb40"
  },
  {
    "url": "nested2/bar/bar-header.html",
    "revision": "673e477f5e9c3819f9ca9105dca30a4c"
  },
  {
    "url": "nested2/bar/index.html",
    "revision": "7cd1a651f561d391cea36840958ec3e7"
  },
  {
    "url": "nested2/foo/foo-footer.html",
    "revision": "9e8efd6071a64863c2ee37bce114aabf"
  },
  {
    "url": "nested2/foo/foo-header.html",
    "revision": "cb98d13afc95e7adc6a2aa9c1b37153d"
  },
  {
    "url": "nested2/foo/index.html",
    "revision": "71bd2b4f1215f826dbe70a6835591643"
  },
  {
    "url": "nested2/index.html",
    "revision": "2eb7979556fd31e0ce5ca30bc608f8dd"
  },
  {
    "url": "nested2/nested-footer.html",
    "revision": "7f130f2536ced823bb568c94f8aec8f4"
  },
  {
    "url": "nested2/nested-header.html",
    "revision": "4ba3ce2723a50352af887c7e78d279cb"
  },
  {
    "url": "zh/config/index.html",
    "revision": "f56cbd87f98b0f9b8986ecd4c5a53816"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "f6bffb7d8c659c2e358c639e852c9e48"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "3dc5bbe4ee2e4ad2b2553fb6290e6252"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6fc656c94f8445f0cab554eedc8f8baa"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "18b9f394b7a29180e5bfd55c95ff1554"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "dd8e7e02a5eeb73b8610dd7c8f93252c"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f9807de036c18fe9f386c4c7a7a39660"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "22c876585845b74d00b1a01ac5d46cb6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d3b37e468e3d6710f11598303705d7a1"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "0b0388195b9f46288016336704eb5e2a"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "a52c3e60972b129558e33ab0be35562b"
  },
  {
    "url": "zh/index.html",
    "revision": "2679dd92524b8be559f2b6830f001239"
  },
  {
    "url": "zh/nested/bar/bar-footer.html",
    "revision": "17afd02285597850fdf822d0ba48a03b"
  },
  {
    "url": "zh/nested/bar/bar-header.html",
    "revision": "38e84d2ffa80d3e3c023dd7fa48afef6"
  },
  {
    "url": "zh/nested/bar/index.html",
    "revision": "869c7cebf40686adc4323b00fc540c2e"
  },
  {
    "url": "zh/nested/foo/foo-footer.html",
    "revision": "3da71056d34dbf4ee7c402ca5a64e735"
  },
  {
    "url": "zh/nested/foo/foo-header.html",
    "revision": "cd120973993583ee3bb2b7ea8e086cd5"
  },
  {
    "url": "zh/nested/foo/index.html",
    "revision": "ad10d5f82a7670bcd7cab15f65bb0e07"
  },
  {
    "url": "zh/nested/index.html",
    "revision": "81268c8d2d364f0f36341b5524b0effd"
  },
  {
    "url": "zh/nested/nested-footer.html",
    "revision": "02a4f0ef562b75e47f1232aa7dfcec5a"
  },
  {
    "url": "zh/nested/nested-header.html",
    "revision": "fc4bc92faacff7d411299833d9d157e0"
  },
  {
    "url": "zh/nested1/bar/bar-footer.html",
    "revision": "2dfb101d9dea41b74df500334ca8f9fc"
  },
  {
    "url": "zh/nested1/bar/bar-header.html",
    "revision": "7e1ecf9babe9308efa32f93ec988496d"
  },
  {
    "url": "zh/nested1/bar/index.html",
    "revision": "8d216c8aeff47bbe5591378bd525c3ba"
  },
  {
    "url": "zh/nested1/foo/foo-footer.html",
    "revision": "b59d1a25ea506e55ea2908f1cfc7cfc4"
  },
  {
    "url": "zh/nested1/foo/foo-header.html",
    "revision": "3adf18fb24181de7adba2230f9130866"
  },
  {
    "url": "zh/nested1/foo/index.html",
    "revision": "cea6f2df6a266a7d29e96450da51e99a"
  },
  {
    "url": "zh/nested1/index.html",
    "revision": "93e7b33ec7fe0505e64dc767423bace9"
  },
  {
    "url": "zh/nested1/nested-footer.html",
    "revision": "a894f99d5426bf1ec8aec01e3c8d2585"
  },
  {
    "url": "zh/nested1/nested-header.html",
    "revision": "28ae8c103e08bd4fac86a5b72ff30f7b"
  },
  {
    "url": "zh/nested2/bar/bar-footer.html",
    "revision": "6c9f258ecce686307c83ebaf4b92fce3"
  },
  {
    "url": "zh/nested2/bar/bar-header.html",
    "revision": "42a2aa758a198b472cf476cdaef6f78a"
  },
  {
    "url": "zh/nested2/bar/index.html",
    "revision": "1ce6e6a4adff2700472335058b46ef53"
  },
  {
    "url": "zh/nested2/foo/foo-footer.html",
    "revision": "bf6036b9603e3219c316e1bd420965a7"
  },
  {
    "url": "zh/nested2/foo/foo-header.html",
    "revision": "7d8d808b618d90b929734f88fbae2559"
  },
  {
    "url": "zh/nested2/foo/index.html",
    "revision": "47226b14413343b1b89f2b1e6393caff"
  },
  {
    "url": "zh/nested2/index.html",
    "revision": "b45d625102bbb6a6bb00645d4c21fbd8"
  },
  {
    "url": "zh/nested2/nested-footer.html",
    "revision": "9b1c365f4e6e3c0fca050615c773b6d7"
  },
  {
    "url": "zh/nested2/nested-header.html",
    "revision": "2522dce441ccf9745e9568a219dc1290"
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
