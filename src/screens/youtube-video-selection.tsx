import { View, Text, StyleSheet } from "@bacons/react-views";
import { Input, Button } from "@rneui/themed";

// link https://www.youtube.com/watch?v=Vy_RPd0rblI
const YoutubeVideoSelection = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          flex: 1,
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Input
          containerStyle={styles.inputContainer}
          // inputContainerStyle={{ borderWidth: 1, padding: 0, margin: 0 }}
          style={styles.input}
          // inputStyle={{ padding: 0, margin: 0 }}
          placeholder="Youtube video url"
        />
        <Button title="Find video"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    // borderWidth: 1,
  },
  input: {
    padding: 0,
    margin: 0,
  },
});

export default YoutubeVideoSelection;

/*

Example response from video
{
  "kind": "youtube#videoListResponse",
  "etag": "Op_57ciCTweUZvVfv8L5JgRMABY",
  "items": [
    {
      "kind": "youtube#video",
      "etag": "s__0UhczZUVhkx591Erqt-lJ8MY",
      "id": "Vy_RPd0rblI",
      "snippet": {
        "publishedAt": "2023-11-21T14:14:30Z",
        "channelId": "UCZvxw99l3xDC6BIHb8nJKGg",
        "title": "Mars in 4K: The Ultimate Edition",
        "description": "Mars in 4K - The Ultimate Edition. The best images of Mars in stunning 4k 60fps. \n\n\"Mars in 4K: The Ultimate Edition\" presents an unprecedented visual exploration of Mars, enriched by the groundbreaking missions of NASA's Mars rovers. This video, with its stunning 4K resolution, offers a journey across the Martian landscape, revealing the planet's beauty and scientific wonders.\n\n-------------------------------------------------------------------------------\n\nA few years ago I threw together some Mars images and rendered them in 4k. Back then, I had little editing knowledge. The video went on to get over 60 Million views. It was something that hadn't been done before, and was a case of the right place at the right time. I'm not expecting this video to come close to the view count of the original, but I just wanted to do it justice and give you all something nice to watch. Thank you all so much for your support over the years, and thanks to our patrons for your contributions to the channel. - ElderFox\n\n--------------------------------------------------------------------------------\n\n\n\nThe footage, captured directly by NASA's Mars rovers - Spirit, Opportunity, Curiosity, and Perseverance - unveils the red planet's intricate details. These rovers, acting as robotic geologists, have traversed varied terrains, from ancient lake beds to towering mountains, uncovering Mars' complex geological history.\n\nAs viewers enjoy these images, they will notice informal place names assigned by NASA's team, providing context to the Martian features observed. Each rover's unique journey is highlighted, showcasing their contributions to Martian exploration.\n\nSpirit and Opportunity, the trailblazers, revealed the first conclusive evidence of water on Mars, forever changing our understanding of the planet. The Curiosity rover, a mobile laboratory, has been climbing Mount Sharp for over a decade, unveiling layers of Martian history and providing insights into the planet's climatic changes.\n\nPerseverance, the latest rover, accompanied by the Ingenuity helicopter, explores Jezero Crater, an ancient lakebed. This duo represents the pinnacle of Mars exploration technology, with Ingenuity serving as the first aircraft to fly on another planet, scouting and capturing breathtaking aerial images.\n\nThe video also delves into the scientific achievements of these missions. Discoveries of past water systems on Mars lead to the tantalizing question of past life on the planet. Each rover's journey, such as Opportunity's 28-mile trek, is a testament to human ingenuity and the relentless pursuit of knowledge.\n\nAs viewers immerse themselves in this Martian experience, they are reminded of the significance of these moments in cosmic history. The video encourages viewers to appreciate the monumental strides made in understanding our celestial neighbor and to share this awe-inspiring journey with others.\n\nFinally, the video invites viewers to delve deeper into the ongoing saga of the Perseverance rover and Ingenuity helicopter, encouraging exploration of the full journey these incredible machines have embarked upon on the Martian surface.\n\n-------------------------------------------------------------------------------------------------\n\nJoin our patreon community here:\npatreon.com/elderfoxdocumentaries\n\nYour contributions are appreciated so much and allow us to keep making videos about Mars. \n\nFacebook\nhttps://www.facebook.com/elderfoxdocs\n \nMars Playlist:\nhttps://www.youtube.com/playlist?list=PLsaDLkF8wiRsL1Kke7FlYOS04xHGdyV9t\n\nSpace Playlist:\nhttps://www.youtube.com/playlist?list=PLsaDLkF8wiRuBEpvNFmnBpZUjY6lj86Nt\n\nTwitter:\nhttps://twitter.com/Elderfoxdocume1\n\nCredit: NASA/JPL-Caltech/MSSS/Cornell Univ./Arizona State Univ./SSI/JFK/Rice University\n\nMusic and sounds: \nTrack 1 - Joseph Beg - Primordial (Epidemic Sound)\nTrack 2 - Megan Wofford - Sparkling Sunset (Epidemic sound)\nTrack 3 - Erik Satie - Gymnopedie no 1 (His career is really going to take off if he keeps releasing music that good!)\nTrack 4 - Autonomic Sensations - Trillion (Epidemic sound)\nTrack 5: (Choir sounds when 'Tribute to Opportunity' is shown) \n\nAgnus Dei X - Bitter Suite by Kevin MacLeod is licensed under a Creative Commons Attribution 4.0 license. https://creativecommons.org/licenses/by/4.0/\n\nSource: http://www.amazon.com/Agnus-Dei-X/dp/B00QGC7W3Y\n\nArtist: http://incompetech.com/\n\nTrack 6: Joseph Beg - Deity (Epidemic Sound)\nTrack 7: ELFL - The Flux Beneath It All (Epidemic Sound)\nOther tracks: \n- JFK speeches from Rice University and his inaugural address\nhttps://www.youtube.com/watch?v=QXqlziZV63k\n- All sound effects from Epidemic Sound\n\n\nPlease note: We are not affiliated with NASA in any way, we just want more people to be inspired by their great work!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Vy_RPd0rblI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Vy_RPd0rblI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Vy_RPd0rblI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Vy_RPd0rblI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Vy_RPd0rblI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "ElderFox Documentaries",
        "tags": [
          "elderfox",
          "elder fox",
          "elderfox documentaries",
          "Mars",
          "Mars in 4k",
          "NASA mars rovers",
          "mars in 4k new",
          "mars in 4k ultimate edition",
          "mars in 4k 2023",
          "mars in 4k 2024"
        ],
        "categoryId": "27",
        "liveBroadcastContent": "none",
        "defaultLanguage": "en",
        "localized": {
          "title": "Mars in 4K: The Ultimate Edition",
          "description": "Mars in 4K - The Ultimate Edition. The best images of Mars in stunning 4k 60fps. \n\n\"Mars in 4K: The Ultimate Edition\" presents an unprecedented visual exploration of Mars, enriched by the groundbreaking missions of NASA's Mars rovers. This video, with its stunning 4K resolution, offers a journey across the Martian landscape, revealing the planet's beauty and scientific wonders.\n\n-------------------------------------------------------------------------------\n\nA few years ago I threw together some Mars images and rendered them in 4k. Back then, I had little editing knowledge. The video went on to get over 60 Million views. It was something that hadn't been done before, and was a case of the right place at the right time. I'm not expecting this video to come close to the view count of the original, but I just wanted to do it justice and give you all something nice to watch. Thank you all so much for your support over the years, and thanks to our patrons for your contributions to the channel. - ElderFox\n\n--------------------------------------------------------------------------------\n\n\n\nThe footage, captured directly by NASA's Mars rovers - Spirit, Opportunity, Curiosity, and Perseverance - unveils the red planet's intricate details. These rovers, acting as robotic geologists, have traversed varied terrains, from ancient lake beds to towering mountains, uncovering Mars' complex geological history.\n\nAs viewers enjoy these images, they will notice informal place names assigned by NASA's team, providing context to the Martian features observed. Each rover's unique journey is highlighted, showcasing their contributions to Martian exploration.\n\nSpirit and Opportunity, the trailblazers, revealed the first conclusive evidence of water on Mars, forever changing our understanding of the planet. The Curiosity rover, a mobile laboratory, has been climbing Mount Sharp for over a decade, unveiling layers of Martian history and providing insights into the planet's climatic changes.\n\nPerseverance, the latest rover, accompanied by the Ingenuity helicopter, explores Jezero Crater, an ancient lakebed. This duo represents the pinnacle of Mars exploration technology, with Ingenuity serving as the first aircraft to fly on another planet, scouting and capturing breathtaking aerial images.\n\nThe video also delves into the scientific achievements of these missions. Discoveries of past water systems on Mars lead to the tantalizing question of past life on the planet. Each rover's journey, such as Opportunity's 28-mile trek, is a testament to human ingenuity and the relentless pursuit of knowledge.\n\nAs viewers immerse themselves in this Martian experience, they are reminded of the significance of these moments in cosmic history. The video encourages viewers to appreciate the monumental strides made in understanding our celestial neighbor and to share this awe-inspiring journey with others.\n\nFinally, the video invites viewers to delve deeper into the ongoing saga of the Perseverance rover and Ingenuity helicopter, encouraging exploration of the full journey these incredible machines have embarked upon on the Martian surface.\n\n-------------------------------------------------------------------------------------------------\n\nJoin our patreon community here:\npatreon.com/elderfoxdocumentaries\n\nYour contributions are appreciated so much and allow us to keep making videos about Mars. \n\nFacebook\nhttps://www.facebook.com/elderfoxdocs\n \nMars Playlist:\nhttps://www.youtube.com/playlist?list=PLsaDLkF8wiRsL1Kke7FlYOS04xHGdyV9t\n\nSpace Playlist:\nhttps://www.youtube.com/playlist?list=PLsaDLkF8wiRuBEpvNFmnBpZUjY6lj86Nt\n\nTwitter:\nhttps://twitter.com/Elderfoxdocume1\n\nCredit: NASA/JPL-Caltech/MSSS/Cornell Univ./Arizona State Univ./SSI/JFK/Rice University\n\nMusic and sounds: \nTrack 1 - Joseph Beg - Primordial (Epidemic Sound)\nTrack 2 - Megan Wofford - Sparkling Sunset (Epidemic sound)\nTrack 3 - Erik Satie - Gymnopedie no 1 (His career is really going to take off if he keeps releasing music that good!)\nTrack 4 - Autonomic Sensations - Trillion (Epidemic sound)\nTrack 5: (Choir sounds when 'Tribute to Opportunity' is shown) \n\nAgnus Dei X - Bitter Suite by Kevin MacLeod is licensed under a Creative Commons Attribution 4.0 license. https://creativecommons.org/licenses/by/4.0/\n\nSource: http://www.amazon.com/Agnus-Dei-X/dp/B00QGC7W3Y\n\nArtist: http://incompetech.com/\n\nTrack 6: Joseph Beg - Deity (Epidemic Sound)\nTrack 7: ELFL - The Flux Beneath It All (Epidemic Sound)\nOther tracks: \n- JFK speeches from Rice University and his inaugural address\nhttps://www.youtube.com/watch?v=QXqlziZV63k\n- All sound effects from Epidemic Sound\n\n\nPlease note: We are not affiliated with NASA in any way, we just want more people to be inspired by their great work!"
        },
        "defaultAudioLanguage": "en-US"
      },
      "contentDetails": {
        "duration": "PT9M27S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "true",
        "licensedContent": true,
        "contentRating": {},
        "projection": "rectangular"
      },
      "status": {
        "uploadStatus": "processed",
        "privacyStatus": "public",
        "license": "youtube",
        "embeddable": true,
        "publicStatsViewable": true,
        "madeForKids": false
      },
      "topicDetails": {
        "topicCategories": [
          "https://en.wikipedia.org/wiki/Lifestyle_(sociology)"
        ]
      }
    }
  ],
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 1
  }
}


*/

/*
example response from channel
{
  "kind": "youtube#channelListResponse",
  "etag": "C6jQt84oFpxKF8ta1vd4ndm6wVw",
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#channel",
      "etag": "DwhEgorPWmi78hnWDvXM8mdxNZ0",
      "id": "UCZvxw99l3xDC6BIHb8nJKGg",
      "snippet": {
        "title": "ElderFox Documentaries",
        "description": "Me (Elderfox) and my narrator Alan are trying our hardest to make the best content on Mars. I don't have an upload schedule and will generally work in massive bursts throughout the year. New videos are always on the way!\n\nIf you'd like to support us in continuing to document the Mars rovers, please consider joining our Patreon. It really helps us and you'll get your name featured in these historic videos. Join here from as little as $1:\npatreon.com/elderfoxdocumentaries\n\nPlease note: We are not affiliated with NASA in any way, we just want more people to be inspired by their great work.",
        "customUrl": "@elderfoxdocumentaries",
        "publishedAt": "2008-10-19T12:51:12Z",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/ytc/AIf8zZQYMs9XE_hPn_FWTuBr29RL4IcRL2QfmtfPif2YdA=s88-c-k-c0x00ffffff-no-rj",
            "width": 88,
            "height": 88
          },
          "medium": {
            "url": "https://yt3.ggpht.com/ytc/AIf8zZQYMs9XE_hPn_FWTuBr29RL4IcRL2QfmtfPif2YdA=s240-c-k-c0x00ffffff-no-rj",
            "width": 240,
            "height": 240
          },
          "high": {
            "url": "https://yt3.ggpht.com/ytc/AIf8zZQYMs9XE_hPn_FWTuBr29RL4IcRL2QfmtfPif2YdA=s800-c-k-c0x00ffffff-no-rj",
            "width": 800,
            "height": 800
          }
        },
        "localized": {
          "title": "ElderFox Documentaries",
          "description": "Me (Elderfox) and my narrator Alan are trying our hardest to make the best content on Mars. I don't have an upload schedule and will generally work in massive bursts throughout the year. New videos are always on the way!\n\nIf you'd like to support us in continuing to document the Mars rovers, please consider joining our Patreon. It really helps us and you'll get your name featured in these historic videos. Join here from as little as $1:\npatreon.com/elderfoxdocumentaries\n\nPlease note: We are not affiliated with NASA in any way, we just want more people to be inspired by their great work."
        },
        "country": "GB"
      },
      "contentDetails": {
        "relatedPlaylists": {
          "likes": "",
          "uploads": "UUZvxw99l3xDC6BIHb8nJKGg"
        }
      },
      "topicDetails": {
        "topicIds": [
          "/m/01k8wb",
          "/m/019_rr"
        ],
        "topicCategories": [
          "https://en.wikipedia.org/wiki/Knowledge",
          "https://en.wikipedia.org/wiki/Lifestyle_(sociology)"
        ]
      },
      "status": {
        "privacyStatus": "public",
        "isLinked": true,
        "longUploadsStatus": "longUploadsUnspecified",
        "madeForKids": false
      }
    }
  ]
}


*/
