import React from "react"
import Head from "next/head"

export default () =>
  <div>
    <Head>
      <title>Flowdock | Team Chat Review</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Flowdock</h1>
    <p>Is Flowdock suitable for your team?</p>
    <div className="card-container">
      <style jsx>
        {`
          .card-container {
            display: flex;
            flex-flow: row wrap;
            min-height: 50vh;
            justify-content: center;
          }
          .card {
            background-color: #00bcd4;
            margin: 10px;
            padding: 10px;
            min-width: 200px;
            width: 40%;
            border-radius: 5px;
          }
          @media (max-width: 600px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
      <div className="card">
        <h2>Costs</h2>
        <p />
      </div>
      <div className="card">
        <h2>Supported platforms</h2>
        <p />
      </div>
    </div>
    <footer>
      <style jsx>
        {`
          footer {
            margin-top: 30px;
            color: #444;
          }
        `}
      </style>
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by/4.0/88x31.png"
        />
      </a>
      <br />This work is licensed under a &nbsp;
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
      </a>.
    </footer>
  </div>
