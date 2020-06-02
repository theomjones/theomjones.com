import React from 'react'
import { root, names, link } from './blm.module.css'

// Ported from https://github.com/trentmwillis/i-stand/blob/master/black-lives.js
export function BlackLivesMatter() {
  return (
    <div className={root}>
      <p className={names} style={{ margin: 0 }}>
        <strong>I stand in solidarity</strong> with George Floyd, Natosha
        McDade, Yassin Mohamed, Finan H. Berhe, Sean Reed, Steven Demarco
        Taylor, Breonna Taylor, Ariane McCree, Terrance Franklin, Miles Hall,
        Darius Tarver, William Green, Samuel David Mallard, Kwame Jones, De’von
        Bailey, Christopher Whitfield, Anthony Hill, De’Von Bailey, Eric Logan,
        Jamarion Robinson, Gregory Hill Jr, JaQuavion Slaton, Ryan Twyman,
        Brandon Webber, Jimmy Atchison, Willie McCoy, Emantic Fitzgerald
        Bradford J, D’ettrick Griffin, Jemel Roberson, DeAndre Ballard, Botham
        Shem Jean, Robert Lawrence White, Anthony Lamar Smith, Ramarley Graham,
        Manuel Loggins Jr, Trayvon Martin, Wendell Allen, Kendrec McDade, Larry
        Jackson Jr, Jonathan Ferrell, Jordan Baker, Victor White III, Dontre
        Hamilton, Eric Garner, John Crawford III, Michael Brown, Ezell Ford,
        Dante Parker, Kajieme Powell, Laquan McDonald, Akai Gurley, Tamir Rice,
        Rumain Brisbon, Jerame Reid, Charly Keunang, Tony Robinson, Walter
        Scott, Freddie Gray, Brendon Glenn, Samuel DuBose, Christian Taylor,
        Jamar Clark, Mario Woods, Quintonio LeGrier, Gregory Gunn, Akiel
        Denkins, Alton Sterling, Philando Castile, Terrence Sterling, Terence
        Crutcher, Keith Lamont Scott, Alfred Olango, Jordan Edwards, Stephon
        Clark, Danny Ray Thomas, DeJuan Guillory, Patrick Harmon, Jonathan Hart,
        Maurice Granton, Julius Johnson, Jamee Johnson, Michael Dean and
        countless others.
      </p>
      <p style={{ margin: 0, marginTop: '1.5rem' }}>
        <strong>
          <a
            className={link}
            href="https://blacklivesmatters.carrd.co/"
          >
            Find out how <em>you</em> can help.
          </a>
        </strong>
      </p>
    </div>
  )
}
