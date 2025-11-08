import React from 'react'
import '../css/page1.css'

export default function page() {
    return (
        <main>
            <header>
                <h1 className='h1_class'>Tyson Fury</h1>
                <div className='header-image'>
                    <img
                        src="/tf/tyson-fury.jpg"
                        className='div_img'
                    />
                </div>
            </header>

            <section className='section'>
                <h2 className='h2_class'>Tyson Luke Fury </h2>
                <p>(born 12 August 1988) is a British professional boxer. He held multiple world heavyweight championships, including unified titles from 2015 to 2016, the Ring magazine title twice between 2015 and 2022, and the World Boxing Council (WBC) title from 2020 to 2024. He also held the International Boxing Organization (IBO) title during his first reign as champion.
                </p>

                <p>
                    At regional level, he held multiple heavyweight championships, including the British title twice between 2011 and 2015; the European title from 2014 to 2015; and the Commonwealth title from 2011 to 2012. As an amateur, he won a bronze medal at the 2006 World Junior Championships; gold at the 2007 EU Junior Championships; silver at the 2007 European Junior Championships; and won the ABA super-heavyweight title in 2008.
                </p>

                <p>
                    In 2015, his victorious fight against Wladimir Klitschko was named Upset of the Year and earned him Fighter of the Year by The Ring. In 2018, his drawn fight against Deontay Wilder was named Round of the Year and earned him Comeback of the Year by The Ring. In 2020, with his defeat of Deontay Wilder, Fury became the third heavyweight, after Floyd Patterson and Muhammad Ali, to hold The Ring magazine title twice, and was widely considered by media outlets to be the lineal heavyweight champion. In 2021, his trilogy fight against Wilder was named Fight of the Year by The Ring.
                </p>

                <p>
                    In February 2025, Sportico ranked Fury at No. 3 among the highest-paid athletes of 2024, with an estimated income of $147 million. In May 2025, Forbes put him at No. 3 in its ranking of the highest-paid athletes in the world, with his earnings being estimated at $146 million. As of August 2025, Fury is ranked as the world's eighth-best active heavyweight by BoxRec and the first by The Ring.
                </p>
            </section>
        </main>
    )
}
