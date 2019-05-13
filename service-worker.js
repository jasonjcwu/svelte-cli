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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6bb7a34071d09740bd2ec918d3d4e65"
  },
  {
    "url": "assets/css/0.styles.acec9555.css",
    "revision": "89fb8cb311711e49ddd0fc534af82303"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10f5b0c0.js",
    "revision": "5cdd0f0a25c3e364ca6d6ff34e77cbbc"
  },
  {
    "url": "assets/js/11.0cd47a9e.js",
    "revision": "ee8a649324cce341a782abc6153ed7bb"
  },
  {
    "url": "assets/js/12.e50ad489.js",
    "revision": "be927649ea29fcb91b6523d509bc61c4"
  },
  {
    "url": "assets/js/13.0ee3e7ab.js",
    "revision": "8f180880b846a41f9a8454ddf44afe3c"
  },
  {
    "url": "assets/js/14.736dc70a.js",
    "revision": "f9c7a6bd01377148a1cfa92997c40f79"
  },
  {
    "url": "assets/js/15.1eeeeda4.js",
    "revision": "f77ad0ebfcfb23e4186a442cbc02d34f"
  },
  {
    "url": "assets/js/16.60152263.js",
    "revision": "fae768b4fa265375d47e99eb3e24504e"
  },
  {
    "url": "assets/js/17.3dde80d7.js",
    "revision": "00740520fe0ade2bb7c15cd4b3aff3df"
  },
  {
    "url": "assets/js/18.543fc42d.js",
    "revision": "417411adbb3040e681fabc54950ccaf2"
  },
  {
    "url": "assets/js/19.766a8e76.js",
    "revision": "4c1b05b76489f807dec19aa3d707c97e"
  },
  {
    "url": "assets/js/20.f2f8181b.js",
    "revision": "63b1edfe4dbd970189b03f2b18e7e3e3"
  },
  {
    "url": "assets/js/21.4aa8498c.js",
    "revision": "f068dad38e5ffb395049c8a25a53cfb7"
  },
  {
    "url": "assets/js/22.f264c92d.js",
    "revision": "675211ddc0cb946bd6c2884ea10cf337"
  },
  {
    "url": "assets/js/23.2c6fce1a.js",
    "revision": "6969a5034e07d7d43b3c64a7c7118c08"
  },
  {
    "url": "assets/js/24.754b77e1.js",
    "revision": "7c88e95162a219ee4594a57c65f7a917"
  },
  {
    "url": "assets/js/25.1861e88d.js",
    "revision": "f657553f3ac832ed82d6d32693612489"
  },
  {
    "url": "assets/js/26.46502199.js",
    "revision": "3419556cc7518ffcd41bb235fc1bc6c9"
  },
  {
    "url": "assets/js/27.43face08.js",
    "revision": "fb3439b7c13496f79b3e14e3f08fc8e7"
  },
  {
    "url": "assets/js/28.fb34d8f2.js",
    "revision": "58c56f27c214c59af20e6b00474370b2"
  },
  {
    "url": "assets/js/29.f2e4c0b7.js",
    "revision": "45a39e064de50997abdd9f14b39196c8"
  },
  {
    "url": "assets/js/3.febbcf18.js",
    "revision": "ac89c06b764fa5902a02b09a73ee72ab"
  },
  {
    "url": "assets/js/30.fcc7dd29.js",
    "revision": "d557c2ccf6074c03bda0dffe88ecf892"
  },
  {
    "url": "assets/js/31.4d13995e.js",
    "revision": "ffc48315186f99a0af45a032f0eb0097"
  },
  {
    "url": "assets/js/32.71619862.js",
    "revision": "418369d012930b9803d79d31a678122d"
  },
  {
    "url": "assets/js/33.030f89b9.js",
    "revision": "042a3aebcb0cae7153dacbd84d02a439"
  },
  {
    "url": "assets/js/34.fae8e1dd.js",
    "revision": "aeb9712ef4023094448988df1dcd25cd"
  },
  {
    "url": "assets/js/35.de359ef2.js",
    "revision": "5bafcd99f1a070f5fa7f14f087c66a59"
  },
  {
    "url": "assets/js/36.ad88f148.js",
    "revision": "e253072e6d7f494b54b6f243b99e5f5c"
  },
  {
    "url": "assets/js/37.28e70e72.js",
    "revision": "66a7e441c94028b99526f582dfa1504b"
  },
  {
    "url": "assets/js/38.56222659.js",
    "revision": "e92659f69b39b8b9b6e7400bc7619889"
  },
  {
    "url": "assets/js/39.05967e7b.js",
    "revision": "f25cc23b5636c60d17b42513b8289273"
  },
  {
    "url": "assets/js/4.bc95e296.js",
    "revision": "59f667a89c92d2087598225e07b70996"
  },
  {
    "url": "assets/js/40.71f67bf4.js",
    "revision": "3ad55cf64b17ad5b79c354586a7ba58d"
  },
  {
    "url": "assets/js/41.b53c1b0a.js",
    "revision": "606db7c892531c5ad6f1d330e330bc92"
  },
  {
    "url": "assets/js/42.7cfcc805.js",
    "revision": "b3add924081eda55facf47aa048d9c98"
  },
  {
    "url": "assets/js/43.56b83d66.js",
    "revision": "852da66141d0af1b32b878f2536be51b"
  },
  {
    "url": "assets/js/44.3cfc4a36.js",
    "revision": "8cd441c812663c8af6a36635cbac9846"
  },
  {
    "url": "assets/js/45.464359d1.js",
    "revision": "abd11f9d9650beda0b64990bc067ef0f"
  },
  {
    "url": "assets/js/46.03c56670.js",
    "revision": "3d32d8b933344ab8b56b3a7221df3eea"
  },
  {
    "url": "assets/js/47.7303ad62.js",
    "revision": "73449c08689c0434bcca2d162e2e75ae"
  },
  {
    "url": "assets/js/48.40a76ca1.js",
    "revision": "749fc9439826c529519650bf13dbf568"
  },
  {
    "url": "assets/js/49.9d903fb2.js",
    "revision": "ad5680c184ed6dfb454775ce87a243a3"
  },
  {
    "url": "assets/js/5.6892a16c.js",
    "revision": "3202f16ea28f008f64e5174082009ff8"
  },
  {
    "url": "assets/js/50.bef1671c.js",
    "revision": "f313daa238f25df9d9cd61edc82863d0"
  },
  {
    "url": "assets/js/51.5512bef2.js",
    "revision": "d83564661af00cc079f5ea9cc5efd83f"
  },
  {
    "url": "assets/js/52.ef83eeab.js",
    "revision": "0dde22f9d893cbc324117fde14c82592"
  },
  {
    "url": "assets/js/53.d339b4ad.js",
    "revision": "0c51388d57ebc4a5f8d4f739c180bdbc"
  },
  {
    "url": "assets/js/54.10d0899b.js",
    "revision": "d7a4a705506e5b07accd21405129888d"
  },
  {
    "url": "assets/js/55.853cbb02.js",
    "revision": "3aa409c325f57bbc1709b312935408f7"
  },
  {
    "url": "assets/js/56.f49d17e7.js",
    "revision": "3c73c0e3756ca4d71aacd7595d37e4fa"
  },
  {
    "url": "assets/js/57.08c9ceda.js",
    "revision": "352de8e79bb62cc42206e1c3a8c19899"
  },
  {
    "url": "assets/js/58.aa32c6b7.js",
    "revision": "3eef9ffffd849209969272bd3a797baa"
  },
  {
    "url": "assets/js/59.a1abcada.js",
    "revision": "d658708200552220f13553d4a2e33deb"
  },
  {
    "url": "assets/js/6.46d26e69.js",
    "revision": "afc4ddbcbfdb3e46e84725b432ff9fef"
  },
  {
    "url": "assets/js/60.0c334121.js",
    "revision": "d48f4b22335507bcbd5150537666920d"
  },
  {
    "url": "assets/js/61.75a1961a.js",
    "revision": "ee7d6085a71d14b8051fd11320922594"
  },
  {
    "url": "assets/js/62.441741be.js",
    "revision": "29be25207481a237c4139f17b49e1345"
  },
  {
    "url": "assets/js/63.84811afc.js",
    "revision": "4c134197bb5831a29eb8821aa7bc7370"
  },
  {
    "url": "assets/js/64.d07951ea.js",
    "revision": "a1be181563eca7c0dc6edaa7b68820b3"
  },
  {
    "url": "assets/js/65.ad3641f5.js",
    "revision": "b681286f3ad62ae8608560082e1445bc"
  },
  {
    "url": "assets/js/66.8ed574e9.js",
    "revision": "1e4b791cf5e3eb3a9b32747a286f5252"
  },
  {
    "url": "assets/js/67.f2e4c7b4.js",
    "revision": "d08624230b4746ab1a82aa027baf5836"
  },
  {
    "url": "assets/js/68.58a9b4dd.js",
    "revision": "a3624db597db600ab56a53175271b27a"
  },
  {
    "url": "assets/js/7.70a01ba5.js",
    "revision": "c984046ee1c8c4d8dd2023b578dbe15a"
  },
  {
    "url": "assets/js/8.952b5796.js",
    "revision": "94ef887f4c8cec26af5cb77fe373b4ea"
  },
  {
    "url": "assets/js/9.0af3a38f.js",
    "revision": "fdd5b96c11de4baf0439051b08bb7ca8"
  },
  {
    "url": "assets/js/app.426bd268.js",
    "revision": "8c2952d1c2da724f05f70e52a2ff0fee"
  },
  {
    "url": "assets/js/vendors~docsearch.f3e2d908.js",
    "revision": "c192747a72b398ee0a4609465caaba93"
  },
  {
    "url": "bit-wide.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "cli-new-project.png",
    "revision": "92eba99ef4ce3133242f6f3b1b7fae3c"
  },
  {
    "url": "cli-select-features.png",
    "revision": "b3a275b99d5505ee4622395a05c9b52a"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "31994afb4247581725e54cf365f9e6ef"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "adf8dc62467bbd09946a6566304ce57b"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "640db0fe33765844f79d6ce1802bd2b8"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "75718f9f43be8940cc871920de393c74"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "cef10b5ef6e5f86556c37d3b6604cf39"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "9f6f5e1fd6f90c099e1799a57ba26b5c"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "d19dc28be59a96d515af28a3e209af5d"
  },
  {
    "url": "favicon.png",
    "revision": "46f931a2c6aa9cfeb39a28bb7d493a14"
  },
  {
    "url": "generator-template.png",
    "revision": "48e1da57cb9739a5ed48a4631889a951"
  },
  {
    "url": "guide/browser-compatibility.html",
    "revision": "2d9f63e35965c31d6890be611cf401f2"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "f07e02c6ed5cca55fd6e6f1b40d17a01"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "4efa2068bd1c7f3e2423f7b7239e4547"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "0811ba9c58a8b0374f54d3ed9c5240ce"
  },
  {
    "url": "guide/css.html",
    "revision": "7176813e86767e6b9fcc09276bca1786"
  },
  {
    "url": "guide/deployment.html",
    "revision": "1b7bc6109a0e9651e0c6bdc673a81278"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "97afb11fae9aa1f94a95f87e58ffb048"
  },
  {
    "url": "guide/index.html",
    "revision": "6f4b49473b585301bdb4b0d579c3e4c8"
  },
  {
    "url": "guide/installation.html",
    "revision": "524610ed1ad174e858c1b024260dd34c"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "30b8c92a1a97e6ef2e5960016c06f1de"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "ca3943ed605842bedeb6c9a14d067995"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "ab839b19e8ae05bfa96ebfc715682f5c"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "b51c83aad876ad91cc526a8ac0bdd6ac"
  },
  {
    "url": "guide/webpack.html",
    "revision": "3f9ded14d486c62e9b1f10ee0d27919d"
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
    "revision": "12efbc0de538c6a1dec0649d045e71f6"
  },
  {
    "url": "index.html",
    "revision": "dbb97d48e04a774d68f0de2ecaacd883"
  },
  {
    "url": "plugin-search-item.png",
    "revision": "6f65b4e8ae9bd1afa8f0c9cfe64f769c"
  },
  {
    "url": "plugins.png",
    "revision": "ce8ce5bfc34d3ef709895d66fff8396a"
  },
  {
    "url": "prompts-example.png",
    "revision": "66d10e746046951dec06a6db3e2c816e"
  },
  {
    "url": "ru/config/index.html",
    "revision": "d11f1749d4aedb17fdd4a0a62e9cf9ff"
  },
  {
    "url": "ru/dev-guide/plugin-dev.html",
    "revision": "6054eebea844e20526097854aa9e5076"
  },
  {
    "url": "ru/dev-guide/ui-api.html",
    "revision": "e1f7770f847d4ff1afd20bd4f028cd97"
  },
  {
    "url": "ru/dev-guide/ui-info.html",
    "revision": "577e45dad5844d2ec790576227832570"
  },
  {
    "url": "ru/dev-guide/ui-localization.html",
    "revision": "3685abb2726fd6cffc4421020f7e309e"
  },
  {
    "url": "ru/guide/browser-compatibility.html",
    "revision": "a382edf3d69381a8edfb6eba6922ba78"
  },
  {
    "url": "ru/guide/build-targets.html",
    "revision": "167ffb40f2dcb3d79220dcf07a8f6aca"
  },
  {
    "url": "ru/guide/cli-service.html",
    "revision": "6d6d4bc3f2936ef4c50501b9bd7cdd7a"
  },
  {
    "url": "ru/guide/creating-a-project.html",
    "revision": "c1e46d1961ebc75e93bd66e7f38cd444"
  },
  {
    "url": "ru/guide/css.html",
    "revision": "f86c38a4ecc48b79ef5f1d0ca7c6830d"
  },
  {
    "url": "ru/guide/deployment.html",
    "revision": "1e364dacd45b3e6d944eaa3b11d8a6c5"
  },
  {
    "url": "ru/guide/html-and-static-assets.html",
    "revision": "3cdb3cf4835e99aeda92b85e914a5c93"
  },
  {
    "url": "ru/guide/index.html",
    "revision": "c04ba7a547e4ceca887947af1d4f0f75"
  },
  {
    "url": "ru/guide/installation.html",
    "revision": "61a6c8daed917c11a4813bf8b0c25e07"
  },
  {
    "url": "ru/guide/mode-and-env.html",
    "revision": "82a4c659957fc08b6a18df48f22b6d3f"
  },
  {
    "url": "ru/guide/plugins-and-presets.html",
    "revision": "ae2a8c6b485a75bc33c7a20a756c2dce"
  },
  {
    "url": "ru/guide/prototyping.html",
    "revision": "0b9d4a0e25b1a2b15af517f423261375"
  },
  {
    "url": "ru/guide/webpack.html",
    "revision": "bbba1fffc8596ab0a7ac3e67f8acf063"
  },
  {
    "url": "ru/index.html",
    "revision": "7f42074e082138fc05d1d49162666e5b"
  },
  {
    "url": "ru/vue-cli-ui-schema.png",
    "revision": "75b8cf9e1c37eabf2718cb75e62dfe51"
  },
  {
    "url": "screenshot.png",
    "revision": "b09e5bcd945dadfff7e8116d1c46a44d"
  },
  {
    "url": "suggestion.png",
    "revision": "dbac5be64fdb516e564fde02974eb833"
  },
  {
    "url": "task-view.png",
    "revision": "3efc61b1c61f79381daec24ec060b3e3"
  },
  {
    "url": "tasks-ui.png",
    "revision": "4b271c3a1df05f3ba9cec18829ab3fd9"
  },
  {
    "url": "ui-analyzer.png",
    "revision": "89f829eb201f268fc8ef5698ef2f5d9a"
  },
  {
    "url": "ui-browse-local-plugin.png",
    "revision": "3358f71b0bc6ae733cb5beb10a35f686"
  },
  {
    "url": "ui-config-start.png",
    "revision": "9bdac28bae9920012076bbc823252386"
  },
  {
    "url": "ui-configuration-default.png",
    "revision": "90b1cc05688b6c230d2e4e7ce5fa0e8c"
  },
  {
    "url": "ui-configuration.png",
    "revision": "7198b603bebca0fea84b51f1745f48ef"
  },
  {
    "url": "ui-greet-task.png",
    "revision": "97dded6e9f515a18827bbe4caacf6210"
  },
  {
    "url": "ui-new-project.png",
    "revision": "b445678f1a79c36cb74b54971e2959f9"
  },
  {
    "url": "ui-plugin-refresh.png",
    "revision": "6ae0e6a9a0e86562dd234e743724f0f0"
  },
  {
    "url": "ui-project-manager.png",
    "revision": "71cfde004266603a0998a90342977fa8"
  },
  {
    "url": "ui-prompts.png",
    "revision": "9442e88075c4fbc30cfa91dd2bbf0075"
  },
  {
    "url": "ui-select-plugin.png",
    "revision": "65e7155d35a866b94ecc09f978e93c87"
  },
  {
    "url": "vue-cli-ui-schema.png",
    "revision": "08266803bd50c4ba141a52c81f8e1b0c"
  },
  {
    "url": "zh/config/index.html",
    "revision": "0462404725ea3029fcd42a1c37112a25"
  },
  {
    "url": "zh/dev-guide/plugin-dev.html",
    "revision": "36f06784a3820be1f5d5cf1bcd42f31b"
  },
  {
    "url": "zh/dev-guide/ui-api.html",
    "revision": "2cd5b4dae4f4a5f79a3f65cb39a1a8b0"
  },
  {
    "url": "zh/dev-guide/ui-info.html",
    "revision": "fa273dbee12c44812b23ce8fa37ee3ce"
  },
  {
    "url": "zh/dev-guide/ui-localization.html",
    "revision": "badff4ab5784cdf1b910e262564c1244"
  },
  {
    "url": "zh/guide/browser-compatibility.html",
    "revision": "4206b1442e5b2f0dd95b95aefbd55d1f"
  },
  {
    "url": "zh/guide/build-targets.html",
    "revision": "04e489d75d95888e4b13600ab27a395b"
  },
  {
    "url": "zh/guide/cli-service.html",
    "revision": "38cc2854227f70f0e48b40aa59afb9b1"
  },
  {
    "url": "zh/guide/creating-a-project.html",
    "revision": "3fa9fe79ff3e0a96235864e1cab17fed"
  },
  {
    "url": "zh/guide/css.html",
    "revision": "76845ba325646e88ea5e9c8ce242f3be"
  },
  {
    "url": "zh/guide/deployment.html",
    "revision": "813f5442069a596d9451dce3be0c32da"
  },
  {
    "url": "zh/guide/html-and-static-assets.html",
    "revision": "acc89ace3acbe24f6dad626df8113cb7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a9aabe9423ad842d8f47e59df0f29974"
  },
  {
    "url": "zh/guide/installation.html",
    "revision": "55b670602b71d00eefdb260d518cda74"
  },
  {
    "url": "zh/guide/mode-and-env.html",
    "revision": "ba4fe020f0fb75fff18856d5fdba9192"
  },
  {
    "url": "zh/guide/plugins-and-presets.html",
    "revision": "d31baeb20e4d6096f33aa7fb055b7f1b"
  },
  {
    "url": "zh/guide/prototyping.html",
    "revision": "d6f90d2b92eacde2615f95ec6bd15d6a"
  },
  {
    "url": "zh/guide/webpack.html",
    "revision": "ec078a141864f27ac8772a8ae6d77b50"
  },
  {
    "url": "zh/index.html",
    "revision": "08036734e0b939b546cc366f6216b248"
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
