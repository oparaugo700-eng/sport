"use client"
import { Button } from "@mui/material";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Slider from "./sliders/Sider";
import Comment from "./comment/Comment";

export default function Home() {
  const players = [
    {
      id: 1,
      name: <Link href="/Cristiano-Ronaldo">Cristiano Ronaldo</Link>,
      img: "/player-profile/player-7902240_640.jpg",
      category: "football",
      tittle: "Cristiano Ronaldo"

    },
    {
      id: 2,
      name: <Link href="/Carlos-Alcaraz">Carlos Alcaraz</Link>,
      img: "/player-profile/Carlos-Alcaraz-2025-French-Open-Martin-Sidorjak-2.jpg",
      category: "tennis",
      tittle: "Carlos Alcaraz"

    },
    {
      id: 3,
      name: <Link href="/Seth-Rollins">Seth Rollins</Link>,
      img: "/player-profile/seth_00.png",
      category: "wrestling",
      tittle: "Seth Rollins"

    },
    {
      id: 4,
      name: <Link href="/The-Undertaker">The Undertaker</Link>,
      img: "/player-profile/HNZLLFEOZKN6DWBGMUAIT5MTAY.jpg",
      category: "wrestling",
      tittle: "The Undertaker"

    },
    {
      id: 5,
      name: <Link href="/Muhammad-Ali">Muhammad Ali</Link>,
      img: "/player-profile/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg",
      category: "boxing",
      tittle: "Muhammad Ali"

    },
    {
      id: 6,
      name: <Link href="/Aryna-Sabalenka">Aryna Sabalenka</Link>,
      img: "/player-profile/lshwittwtipogucbmhap.jpg",
      category: "tennis",
      tittle: "Aryna Sabalenka"

    },
    {
      id: 7,
      name: <Link href="/Floyd-Mayweather">Floyd Mayweather Jr</Link>,
      img: "/player-profile/01jmzyds2bmh7q49vkcw.jpg",
      category: "boxing",
      tittle: "Floyd Mayweather Jr"

    },
    {
      id: 8,
      name: <Link href="/Serena-Williams">Serena Williams</Link>,
      img: "/player-profile/Serena-Williams-womens-single-trophy-Australian-Open-Januray-28-2017.jpg",
      category: "tennis",
      tittle: "Serena Williams"

    },
    {
      id: 9,
      name: <Link href="/Lionel-Messi">Lional Messi</Link>,
      img: "/player-profile/will-lionel-messi-play-major-league-soccers-all-star-game-sportstiger-1721720770695-large (1).webp",
      category: "football",
      tittle: "Lional Messi"

    },
    {
      id: 10,
      name: <Link href="/Kylian-Mbappe">Kylian Mbappé</Link>,
      img: "/player-profile/6cb71.jpg",
      category: "football",
      tittle: "Kylian Mbappé"

    },
    {
      id: 11,
      name: <Link href="/LeBron-James">LeBron James</Link>,
      img: "/player-profile/LeBron James.jpg (1).webp",
      category: "basketball",
      tittle: "LeBron James"

    },
    {
      id: 12,
      name: <Link href="/Anthony-Davis">Anthony Davis</Link>,
      img: "/player-profile/skysports-anthony-davis-los-angeles-lakers_5117746.jpg",
      category: "basketball",
      tittle: "Anthony Davis"

    },
    {
      id: 13,
      name: <Link href="/Mike-Tyson">Mike Tyson</Link>,
      img: "/player-profile/GettyImages-1762174831.jpg",
      category: "boxing",
      tittle: "Mike Tyson"

    },
    {
      id: 14,
      name: <Link href="/Mohamed-Salah">Mohamed Salah</Link>,
      img: "/player-profile/2025-08-31-207-Liverpool_Arsenal-600x400.jpg",
      category: "football",
      tittle: "Mohamed Salah"

    },
    {
      id: 15,
      name: <Link href="/Tyson-Fury">Tyson Fury</Link>,
      img: "/player-profile/Tyson-Fury-768x432.jpg",
      category: "boxing",
      tittle: "Tyson Fury"

    },
    {
      id: 16,
      name: <Link href='./James-Harden'>James Harden</Link>,
      img: "/player-profile/01jq38zvsgf37zzw1pts.jpg",
      category: "basketball",
      tittle: "James Harden"
    },
    {
      id: 17,
      name: <Link href="/Manny-Pacquiao">Manny Pacquiao</Link>,
      img: "/player-profile/0x0 (2).jpg",
      category: "boxing",
      tittle: "Manny Pacquiao"

    },
    {
      id: 18,
      name: <Link href="/Robert-Lewandowski">Robert Lewandowski</Link>,
      img: "/player-profile/13-01-1-8506.jpg",
      category: "football",
      tittle: "Robert Lewandowski"

    },
    {
      id: 19,
      name: <Link href="/Stephen-Curry">Stephen Curry</Link>,
      img: "/player-profile/201939.png",
      category: "basketball",
      tittle: "Stephen Curry"

    },
    {
      id: 20,
      name: <Link href="/Dwayne-Johnson">Dwayne Johnson</Link>,
      img: "/player-profile/the-rock.png",
      category: "wrestling",
      tittle: "Dwayne Johnson"

    },
    {
      id: 21,
      name: <Link href="/Novak-Djokovic">Novak Djokovic</Link>,
      img: "/player-profile/Novak-Djokovic-Serbia-US-Open-2023 (1).jpg",
      category: "tennis",
      tittle: "Novak Djokovic"

    },
    {
      id: 22,
      name: <Link href="/Roger-Federer">Roger Federer</Link>,
      img: "/player-profile/0x0 (3).jpg",
      category: "tennis",
      tittle: "Roger Federer"
    },
    {

      id: 23,
      name: <Link href="/John-Cena">John Cena</Link>,
      img: "/player-profile/concerning-john-cena-news-comes-out-before-retirement-match.webp",
      category: "wrestling",
      tittle: "John Cena"
    },
    {
      id: 24,
      name: <Link href="/Roman-Reigns">Roman Reigns</Link>,
      img: "/player-profile/2211076197_large_image_0.jpg",
      category: "wrestling",
      tittle: "Roman Reigns"
    },
    {
      id: 25,
      name: <Link href="/Giannis-Antetokounmpo">Giannis Antetokounmpo</Link>,
      img: "/player-profile/0x0.jpg",
      category: "basketball",
      tittle: "Giannis Antetokounmpo"

    },
  ]
  const [render, setRender] = useState(players)
  const [searchName, setSearchName] = useState("")


  const searches = () => {
    if (searchName === "") {
      return setRender(players)
    }
    const nam = players.filter(p => {
      return p.tittle.toLowerCase().includes(searchName.toLowerCase().trim())

    })
    setRender(nam)

    if (nam.length === 0) {
      return setSearchName("No Match")
    }
  }

  const all = () => {
    const foots = players.map(f => f)
    setRender(foots)
  }
  const footballer = () => {
    const foots = players.filter(f => f.category === "football")
    setRender(foots)
  }
  const basketballer = () => {
    const foots = players.filter(f => f.category === "basketball")
    setRender(foots)
  }
  const tennisPlayer = () => {
    const foots = players.filter(f => f.category === "tennis")
    setRender(foots)
  }
  const boxer = () => {
    const foots = players.filter(f => f.category === "boxing")
    setRender(foots)
  }
  const wrestler = () => {
    const foots = players.filter(f => f.category === "wrestling")
    setRender(foots)
  }



  const renders = render.map(player => {
    return (
      <div key={player.id} className={styles.return_div}>
        <figure className={styles.figure}>
          <img
            src={player.img}
            alt={player.name}
            className={styles.figure_img}
          />
          <figcaption>
            {player.name}
          </figcaption>
        </figure>
      </div>
    )
  })

  return (
    <main className={styles.page}>

      <section className={styles.section1}>
        <input value={searchName} onChange={(e) => setSearchName(e.target.value)} className={styles.input1} />
        <Button variant="contained" onClick={searches} >Search</Button>


        <div className={styles.input1_button}>
          <Button onClick={all}>All</Button>
          <Button onClick={footballer}>Football</Button>
          <Button onClick={basketballer}>Basketball</Button>
          <Button onClick={wrestler}>Wrestling</Button>
          <Button onClick={tennisPlayer}>Tennis</Button>
          <Button onClick={boxer}>Boxing</Button>
        </div>
      </section>

      <div>
        <Slider />
      </div>

      <section className={styles.section}>
        {renders}
      </section>

      <section>
        <Comment />
      </section>
    </main>
  );
}
