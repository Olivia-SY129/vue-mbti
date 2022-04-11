<template>
  <div>
    <main>
      <h1>Result</h1>
      <img :src="resultDesc[mbti].img" :alt="resultDesc[mbti].title" />
      <h1>{{ resultDesc[mbti].title }}</h1>
      <p v-html="resultDesc[mbti].description"></p>
      <Button text="Restart" :clickEvent="reset" />
    </main>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      mbti: null,
      resultDesc: {
        intj: {
          img: "/intj.png",
          title: "Stephen Strange 'Doctor Strange'",
          description: `Stephen Vincent Strange M.D., Ph.D is a powerful sorcerer and Master of the Mystic Arts. Originally a brilliant, although arrogant, neurosurgeon, Strange got into a car accident which resulted with his hands becoming crippled. When all Western medicine failed him, Strange embarked on a journey that led him into Kamar-Taj where Strange had made the discovery of magic and alternate dimensions, being trained by the Ancient One.`,
        },
        intp: {
          img: "/intp.png",
          title: "Bruce Banner 'Hulk'",
          description: `Bruce Banner is a character portrayed in the Marvel Cinematic Universe (MCU) film franchise first by Edward Norton and currently by Mark Ruffalo, based on the Marvel Comics character of the same name and known commonly by his alter ego, Hulk. In the films, Dr. Banner, is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.`,
        },
        entj: {
          img: "/entj.png",
          title: "Nick Fury",
          description: `Nick Fury is the head of the meta-human regulation organization known as S.H.I.E.L.D. in Marvel and often a go between for the Avengers. He also has a brother who is his exact opposite named Jake who is a villain named Scorpio. While Fury has his superiors, S.H.I.E.L.D.`,
        },
        entp: {
          img: "/entp.png",
          title: "Tony Stark “Iron Man”",
          description: `Tony Stark is a character portrayed by #RobertDowneyJr. in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name and known commonly by his alter ego, Iron Man. In the films, Stark is an industrialist, genius inventor, hero and former playboy who is the CEO of Stark Industries.`,
        },
        infj: {
          img: "/infj.png",
          title: "Loki Laufeyson",
          description: `Loki was born on Jotunheim as the son of the Frost Giant King, Laufey. Small and weak for a Frost Giant, Loki was abandoned by his father in a temple, being left to die. In 965 A.D., not long after the war between the Giants and the Asgardians, Loki was found by King Odin. Adopting Loki and using sorcery to alter his appearance to make him appear to be an Asgardian, Odin raised Loki and his biological son, Thor, with his wife Frigga.`,
        },
        infp: {
          img: "/infp.png",
          title: "Wanda Maximoff 'Scarlet Witch'",
          description: `Wanda Maximoff (February 10th, 1989), also known as The Scarlet Witch, is a native of Sokovia who grew up with her fraternal twin brother, Pietro. In an effort to help purge their country of strife, the twins joined HYDRA and agreed to undergo experiments with the Scepter under the supervision of Wolfgang von Strucker. While her brother developed super-speed, Wanda attained various psionic abilities. When HYDRA fell, the twins joined Ultron to get their revenge on Tony Stark over his weapons killing their family in a bombing, but eventually abandoned him when they discovered Ultron's true intentions to destroy Earth. Wanda and Pietro fought with the Avengers during the Battle of Sokovia to stop Ultron; Pietro was killed during the battle but Wanda survived, and shortly after Ultron's destruction, became a member of the Avengers.`,
        },
        enfj: {
          img: "/enfj.png",
          title: "Frigga",
          description: `Frigga was the Queen of Asgard and wife of Odin, mother of Thor, and adoptive mother of Loki. She attempted to keep the peace between the family even when Loki discovered he was the true son of Laufey and became vengeful towards her and her husband.`,
        },
        enfp: {
          img: "/enfp.png",
          title: "Peter Parker 'Spider-Man'",
          description: `The fictional character Spider-Man, has currently appeared in ten live-action films since his inception, not including fan made shorts and guest appearances in other Marvel Cinematic Universe (MCU) films. Spider-Man is the alter-ego of Peter Parker, a talented young freelance photographer and aspiring scientist imbued with superhuman abilities after being bitten by a radioactive/genetically-altered spider.The first live-action film based on Spider-Man was the unauthorized short Spider-Man by Donald F. Glut in 1969.`,
        },
        istj: {
          img: "/istj.png",
          title: "Gamora",
          description: `Gamora Zen Whoberi Ben Titan was a former Zehoberei assassin and a former member of the Guardians of the Galaxy. She became the adopted daughter of Thanos and adopted sister of Nebula after he killed half of her race.`,
        },
        isfj: {
          img: "/isfj.png",
          title: "Steve Rogers 'Captain America'",
          description: `Steve Rogers (Captain America) is a fictional character portrayed by Chris Evans in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name. In the films, Steve Rogers is a World War II-era U.S. Army soldier who was given enhanced physical and mental capabilities with a "super soldier" serum developed by the military, and who was later frozen in ice for 70 years. As of 2019, the character is one of the central figures of the Marvel Cinematic Universe, having played a major role in seven films of the series, and having a brief cameo in three.`,
        },
        estj: {
          img: "/estj.png",
          title: "Xu Wenwu 'Mandarin'",
          description: `Wenwu (portrayed by #TonyLeung), also known as the Mandarin, is the legendary and nearly mythical leader of the criminal/terrorist organization the Ten Rings. He is also the father of Shang-Chi and Xialing.`,
        },
        esfj: {
          img: "/esfj.png",
          title: "May Parker",
          description: `Maybelle "May" Parker was the aunt of Peter Parker and the widow of the late Ben Parker. She took on the responsibility of raising Peter alone, as she stood by him during Tony Stark's mentorship, while unaware of how he became an intern at Stark Industries.`,
        },
        istp: {
          img: "/istp.png",
          title: "Natasha Romanoff 'Black Widow'",
          description: `Natalia Alianovna "Natasha" Romanoff (Russian: Наталья Альяновна "Наташа" Романов) was one of the most talented spies and assassins in the entire world and a founding member of the Avengers. As a child, she was indoctrinated into the Red Room by General Dreykov, and briefly lived as the surrogate daughter of Alexei Shostakov and Melina Vostokoff while they were undercover in the United States of America. After the Destruction of the North Institute, she underwent extensive psychological conditioning, before graduating from the Red Room as a Widow. Working as an operative for the KGB, she was targeted by S.H.I.E.L.D., before given the chance to ultimately defect to the organization by Clint Barton by assassinating Dreykov. Romanoff succeeded, although having to use his daughter Antonia Dreykov's life as collateral damage would haunt her for the rest of her life.`,
        },
        isfp: {
          img: "/isfp.png",
          title: "Xu Shang-Chi",
          description: `Shang-Chi (Chinese: 尚氣) is the son of Wenwu, the leader of the Ten Rings. Having been trained by the organization since childhood, he has become a master martial artist with skills that are unsurpassed by many.`,
        },
        estp: {
          img: "/estp.png",
          title: "Rocket Raccoon",
          description: `89P13, mainly known as Rocket, is a genetically enhanced creature and a member of the Guardians of the Galaxy. Alongside his friend and partner Groot, Rocket traveled the galaxy, committing crimes and picking up bounties until they met Star-Lord, who convinced them to assist him in selling the Orb for a massive profit. However, as it was discovered that the Orb being sought by Ronan the Accuser was one of the Infinity Stones, Rocket was convinced to risk everything to stop Ronan's plans to destroy Xandar. During the ensuing conflict, Rocket managed to assist his friends in destroying Ronan, despite Groot being killed. Rocket then became a member of the Guardians of the Galaxy alongside the newly planted baby Groot.`,
        },
        esfp: {
          img: "/esfp.png",
          title: "Peter Quill “Star-Lord”",
          description: `Peter Jason Quill is a Celestial-Human hybrid who was abducted from Earth in 1988 by the Yondu Ravager Clan and afterward began building a reputation as the notorious intergalactic outlaw Star-Lord. In 2014, he decided to leave the Ravagers and operate individually, unintentionally becoming a key player in the quest for a precious artifact known as the Orb after stealing it from Morag. Following his arrest, he forged an uneasy alliance with fellow inmates Gamora, Drax the Destroyer, Rocket Raccoon, and Groot, who together formed the Guardians of the Galaxy. They first rallied as a team by stopping Ronan the Accuser from destroying Xandar with the Power Stone.`,
        },
      },
    };
  },
  created() {
    this.mbti = this.$route.params.mbti;

    // todo 예외 처리
    if (!this.resultDesc[this.$route.params.mbti]) {
      this.reset();
      this.$router.push({
        name: "index",
      });
    }
  },
  computed: {
    ...mapState(["result"]),
    ...mapActions(["clickReset"]),
  },
  methods: {
    reset() {
      this.clickReset;
      this.$router.push({
        name: "index",
      });
    },
  },
};
</script>
<style>
img {
  width: 300px;
}

p {
  margin-bottom: 60px;
  text-align: left;
  width: 400px;
}
</style>
