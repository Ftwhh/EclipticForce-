const rosters = [
  {
    game: "Apex Legends",
    team: [
      {
        name: "TANNER TREBB",
        nickname: "ROGUE",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1590626867669-P7TT1AMNP03C532OSS90/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/rogue.png?format=750w",
        twitter_url: "twitter.com/TTrebb",
        twitch_url: "twitch.tv/rogue/",
      },
      {
        name: "JOSEPH SANCHEZ",
        nickname: "FREXS",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1578333106568-AQOY36G0QE8SS4BB4YOJ/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/frexs.png?format=750w",
        twitter_url: "twitter.com/Frexs",
        twitch_url: "twitch.tv/Frexs",
      },
      {
        name: "NATHAN NGUYEN",
        nickname: "NAFEN",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1588130825585-JR4OS6866SGNNU6KCL5O/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/naffen.png?format=750w",
        twitter_url: "twitter.com/nafengg",
        twitch_url: "twitch.tv/nafengg",
      },
      {
        name: "LULULUVELY",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577346671130-2KW1YVEMDODY8IUHABFT/ke17ZwdGBToddI8pDm48kHkfpf7kzKU9TnVsKgvKav1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyVmPUcXorpXAf1FhFCCHgNYguj4a2KgNISmdrzMWB9Wf9uPoKUw230rprvni1TbnA/lulu.png?format=750w",
        twitter_url: "twitter.com/LuluLuvely",
        twitch_url: "twitch.tv/lululuvely",
      },
      {
        name: "MARSHALL MOHR",
        nickname: "MOHR",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1563299228470-WIY0BFXP1XSLFSE8XCIZ/ke17ZwdGBToddI8pDm48kLDWzosXH5e3V2Ct7E8vAShZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx-cqR4Glfe3tu0X0XuR4yRSTcDQjxjys604dFfooSlURJIix0QohHV61gk9MTq4So/mohr.png?format=750w",
        twitter_url: "twitter.com/ItsMohr",
        twitch_url: "twitch.tv/mohr",
      },
      {
        name: "AIDAN GRODIN",
        nickname: "ROCKER",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1590627627825-1DTH6PZ96C78RLI2HLUR/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/place-holder.png?format=750w",
        twitter_url: "twitter.com/rockerapex",
        twitch_url: "twitch.tv/rockerapex",
      },
    ],
    game_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBC17_MnvxeH700TlL9PATOjh5QBOEtmIHHA&usqp=CAU",
  },
  {
    game: "Call of Duty",
    team: [
      {
        name: "Seth Abner",
        nickname: "Scump",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572982383107-5TT6C7MR6CK12H4V17CO/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/Raiku.png?format=500w",
        twitter_url: "twitter.com/scump",
        twitch_url: "twitch.tv/scump",
        youtube_url: "youtube.com/Scumperjumper",
      },
      {
        name: "Matthew Piper",
        nickname: "FormaL",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572982686408-VF7NTO24BUPE2NOO7499/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/Formal.png?format=500w",
        twitter_url: "twitter.com/FormaL",
        twitch_url: "twitch.tv/formal",
        youtube_url: "youtube.com/user/FormaLCoD",
      },
      {
        name: "Brandon Otell",
        nickname: "Dashy",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1600709202210-X6Y6BHQMSIF8WX0ZIM4X/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/dshy-web.png?format=500w",
        twitter_url: "twitter.com/DashySZN",
        twitch_url: "twitch.tv/Dashy",
        youtube_url: "youtube.com/dashy",
      },
      {
        name: "Dylan Hannon",
        nickname: "Envoy",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572982805346-0E3ULB5HBTRQT6FBA8W2/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/envoy.png?format=500w",
        twitter_url: "twitter.com/DylanEnvoy",
        twitch_url: "twitch.tv/DylanEnvoy",
        youtube_url: "",
      },
      {
        name: "Nick Kershner",
        nickname: "MaNiaC",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1600709364984-EC549K16402XXCI1RRI0/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/image-asset.png?format=500w",
        twitter_url: "twitter.com/OpTicMaNiaC",
        twitch_url: "",
        youtube_url: "youtube.com/ManiacYT",
      },
      {
        name: "Jordon General",
        nickname: "General",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577385892031-SBJAV04E69O3OIJXCYSH/ke17ZwdGBToddI8pDm48kHkfpf7kzKU9TnVsKgvKav1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyVmPUcXorpXAf1FhFCCHgNYguj4a2KgNISmdrzMWB9Wf9uPoKUw230rprvni1TbnA/general.png?format=500w",
        twitter_url: "twitter.com/JordonGeneral",
        twitch_url: "twitch.tv/JordonGeneral",
        youtube_url: "youtube.com/JordonHollywood1",
      },
      {
        name: "Troy Michaels",
        nickname: "Sender",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577385905791-UUSZIY8P5R5YG7DE58W7/ke17ZwdGBToddI8pDm48kHkfpf7kzKU9TnVsKgvKav1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyVmPUcXorpXAf1FhFCCHgNYguj4a2KgNISmdrzMWB9Wf9uPoKUw230rprvni1TbnA/sender.png?format=500w",
        twitter_url: "twitter.com/Sender_FN",
        twitch_url: "twitch.tv/Sender",
        youtube_url: "youtube.com/MLGSender",
      },
      {
        name: "Marcus Blanks",
        nickname: "MBoZe",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577385870053-TY00XOHJ2N6ZSWQ4HSO0/ke17ZwdGBToddI8pDm48kHkfpf7kzKU9TnVsKgvKav1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyVmPUcXorpXAf1FhFCCHgNYguj4a2KgNISmdrzMWB9Wf9uPoKUw230rprvni1TbnA/mboze.png?format=500w",
        twitter_url: "twitter.com/BoZe",
        twitch_url: "twitch.tv/mboze",
        youtube_url: "youtube.com/MBoZeYT",
      },
      {
        name: "Will Johnson",
        nickname: "BigTymeR",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1600709320634-CBTNWLLLC32U8JAQPLTM/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/obt-web.png?format=500w",
        twitter_url: "twitter.com/OpTic_BigTymeR",
        twitch_url: "twitch.tv/BigTymeR",
        youtube_url: "youtube.com/OpTicBigTymeR",
      },
      {
        name: "Jordan Thomas",
        nickname: "HusKerrs",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1600880800207-4YRKB68CK8R883Z20HKU/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/huskerrs.png?format=500w",
        twitter_url: "twitter.com/HusKerrs",
        twitch_url: "twitch.tv/huskerrs",
        youtube_url: "youtube.com/HusKerrs",
      },
    ],
    game_img:
      "https://images.dexerto.fr/uploads/thumbnails/_thumbnailLarge/665633/visuels-reseaux-sociaux-call-of-duty-change.jpg",
  },
  {
    game: "Fortnite",
    team: [
      {
        name: "BENJYFISHY",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1564593644964-ALCBTZXASW57SGLUEOWH/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/benjyfishy.png?format=750w",
        twitter_url: "twitter.com/benjyfishy",
        twitch_url: "twitch.tv/benjyfishy",
        youtube_url: "",
      },
      {
        name: "CLIX",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1595890831518-NUURN6KUDCLSPXI1S49V/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/clix.png?format=750w",
        twitter_url: "twitter.com/ClixHimself",
        twitch_url: "twitch.tv/Clix",
        youtube_url: "",
      },
      {
        name: "RONALDO",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1596650949039-P14SRZVFAEL7LNKY1Q4A/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/photoshop-god.png?format=750w",
        twitter_url: "twitter.com/StableRonaldo",
        twitch_url: "twitch.tv/stableronaldo_",
        youtube_url: "",
      },
      {
        name: "EPIKWHALE",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1564593700100-3WH5LA2ZVG8GYH19TRKO/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/epikwhale.png?format=750w",
        twitter_url: "twitter.com/EpikWhale",
        twitch_url: "twitch.tv/epikwhale",
        youtube_url: "",
      },
      {
        name: "UNKNOWN",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1587785736902-SLNUC2HORR9CP6GYDLTD/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/unknown-army.png?format=750w",
        twitter_url: "twitter.com/UnknownxArmy",
        twitch_url: "twitch.tv/unknownxarmy/",
        youtube_url: "",
      },
      {
        name: "ZAYT",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1564593665135-5IFAYKQTDTW4MV5LVT3U/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/zayt.png?format=750w",
        twitter_url: "twitter.com/Zayt",
        twitch_url: "twitch.tv/zayt",
        youtube_url: "",
      },
      {
        name: "EDGEY",
        nickname: "",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1573089259592-7I08AULPWZF9MAND04TO/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/image-asset.png?format=750w",
        twitter_url: "twitter.com/Edgeyy",
        twitch_url: "twitch.tv/edgeyy",
        youtube_url: "",
      },
    ],
    game_img:
      "https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2020/06/fortnite-logo.jpg?offset-y=0",
  },
  {
    game: "Rocket League",
    team: [
      {
        name: "Garrett Gordon",
        nickname: "GarrettG",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572905061818-B4ZZ3OGAFD50Z8ULL4H3/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/garrettgweb.png?format=750w",
        twitter_url: "twitter.com/GarrettG",
        twitch_url: "twitch.tv/garrettg",
        youtube_url: "youtube.com/c/GarrettG",
      },
      {
        name: "Justin Morales",
        nickname: "jstn.",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572905095490-1N7XRKOZWT4AIJS96D1A/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/jstn-web.png?format=750w",
        twitter_url: "twitter.com/Its_JSTN",
        twitch_url: "twitch.tv/ItsJSTN",
        youtube_url: "",
      },
      {
        name: "Mariano Arruda",
        nickname: "SquishyMuffinz",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1591980010401-5QG97DK7TSUYSPUT5NRD/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/website.png?format=750w",
        twitter_url: "twitter.com/SquishyMuffinz",
        twitch_url: "twitch.tv/squishymuffinz",
        youtube_url: "youtube.com/SquishyMuffinz",
      },
      {
        name: "Emiliano Benny",
        nickname: "Sizz",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572905282377-00X3XWYXMLJJIFNNUT3I/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/sizzweb.png?format=750w",
        twitter_url: "https://twitter.com/Sizz",
        twitch_url: "twitch.tv/Sizz",
        youtube_url: "",
      },
      {
        name: "Wyatt MUSTY",
        nickname: "amustycow",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1600710015566-XW8AVE5TNHV4X8F4VHYT/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/musty-web.png?format=750w",
        twitter_url: "twitter.com/amustycow",
        twitch_url: "twitch.tv/amustycow",
        youtube_url: "youtube.com/amustycow",
      },
      {
        name: "Joni Humaloja",
        nickname: "JZR",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1600709979220-U2TLSKB8O735XQ1462LF/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/jzr.png?format=750w",
        twitter_url: "twitter.com/nrg_jzr",
        twitch_url: "twitch.tv/nrg_jzr",
        youtube_url: "youtube.com/user/JHZER",
      },
    ],
    game_img:
      "https://hyperpix.net/wp-content/uploads/2019/08/rocket-league-logo-font-download-1200x679.jpg",
  },
  {
    game: "Valorant",
    team: [
      {
        name: "DAMIAN STEELE",
        nickname: "DAPS",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1602000452138-OT3D2XEUYAZOFG1K1GY7/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/daps-web.png?format=750w",
        twitter_url: "twitter.com/daps",
        twitch_url: "twitch.tv/daps",
        youtube_url: "",
      },
      {
        name: "SAM OH",
        nickname: "S0M",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1602107278132-2RS67I62P3U69CNIXJTJ/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/som-web.png?format=750w",
        twitter_url: "twitter.com/s0mcs",
        twitch_url: "twitch.tv/s0mcs",
        youtube_url: "",
      },
      {
        name: "YANNICK BLANCHETTE",
        nickname: "KOLER",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1602711806668-D1PECNFX2OTSZIF3YPEC/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/koler+for+websitev2.png?format=750w",
        twitter_url: "twitter.com/koler1337",
        twitch_url: "twitch.tv/KOLER1337",
        youtube_url: "",
      },
      {
        name: "BRANDON WINN",
        nickname: "ACEE",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1590627789456-9EUOZWVV7LPTIZOBKHU2/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyAhFv1RfhzuUYoGC7EkiDoY7GdGPgs-TKA-LAZrvnPxUQzHeBE-Bs_YwPCKfdfZjA/ace.jpg?format=750w",
        twitter_url: "twitter.com/acesu",
        twitch_url: "twitch.tv/aceu",
        youtube_url: "",
      },
      {
        name: "CHET SINGH",
        nickname: "CHET",
        img_url:
          "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1602000468367-D7BNT6OE00U1BCQF2J74/ke17ZwdGBToddI8pDm48kGfhHLw2oG44-AUCeJ2RsvBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzb8zVI41Lo9T_x3N-vHdzUCk08Vv-QGfiRl0gw_BRDqkR4gsJohN-76uFAfL9IKoI/chet-web.png?format=750w",
        twitter_url: "twitter.com/chetsingh",
        twitch_url: "",
        youtube_url: "",
      },
    ],
    game_img:
      "https://cdn.dribbble.com/users/2348/screenshots/10696082/valorant_1_4x.png",
  },
];

export default rosters;
