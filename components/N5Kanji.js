// https://www.llanai.com/jlpt/n5/vocabulary/complete
export const N5Kanji = [
  {
    Kanji: "会う",
    Furigana: "あう",
    Romaji: "au",
    Meaning: "to meet",
  },
  {
    Kanji: "青い",
    Furigana: "あおい",
    Romaji: "aoi",
    Meaning: "blue",
  },
  {
    Kanji: "北",
    Furigana: "きた",
    Romaji: "kita",
    Meaning: "north",
  },
  {
    Kanji: "南",
    Furigana: "みなみ",
    Romaji: "minami",
    Meaning: "south",
  },
  {
    Kanji: "西",
    Furigana: "にし",
    Romaji: "nishi",
    Meaning: "west",
  },
  {
    Kanji: "東",
    Furigana: "ひがし",
    Romaji: "higashi",
    Meaning: "east",
  },
  {
    Kanji: "秋",
    Furigana: "あき",
    Romaji: "aki",
    Meaning: "autumn, fall",
  },
  {
    Kanji: "春",
    Furigana: "はる",
    Romaji: "haru",
    Meaning: "spring",
  },
  {
    Kanji: "夏",
    Furigana: "なつ",
    Romaji: "natsu",
    Meaning: "summer",
  },
  {
    Kanji: "冬",
    Furigana: "ふゆ",
    Romaji: "fuyu",
    Meaning: "winter",
  },
];

export const singleKanji = (index = 1) =>
  index >= 0 && index < N5Kanji.length ? N5Kanji[index] : null;
