import 'regenerator-runtime/runtime'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import './assets/css/global.css'

import { login, logout, get_greeting, set_greeting, get_caller_id, get_account, get_account_id } from './assets/js/near/utils'
import getConfig from './assets/js/near/config'

import Navbar from './components/Navbar'
import Logo1 from "./assets/img/logo-black.svg";

// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstraps imports
import { Nav, Container, Row, Card, Alert } from "react-bootstrap";

// Custom Components
import MintingTool from "./components/MintingTool";
import InfoBubble from "./components/InfoBubble";

import getConfig from "./assets/js/near/config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {

    // use React Hooks to store greeting in component state
    const [greeting, setGreeting] = React.useState()

    // when the user has not yet interacted with the form, disable the button
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    // after submitting the form, we want to show Notification
    const [showNotification, setShowNotification] = React.useState(false)

    const [userHasNFT, setuserHasNFT] = React.useState(false)

    // The useEffect hook can be used to fire side-effects during render
    // Learn more: https://reactjs.org/docs/hooks-intro.html
    React.useEffect(
        () => { const receivedNFT = async () => { 
            console.log (
                await window.Contract.nft_token({
                    id:`${window.accountId}-NFT-Example-Contract`,
                })
            )

            if (window.accountId !== "") {
                console.log(
                  await window.Contract.nft_token({
                    id: `${window.accountId}-NFT-Example-Contract`,
                  })
                );
        
                setuserHasNFT(
                  await window.Contract.nft_token({
                    id: `${window.accountId}-NFT-Example-Contract`,
                  })
                );
              }
        };
        receivedNFT();
        },

        // The second argument to useEffect tells React when to re-run the effect
        // Use an empty array to specify "only run on first render"
        // This works because signing into NEAR Wallet reloads the page
        []
    )

    // if not signed in, return early with sign-in prompt
    if (!window.walletConnection.isSignedIn()) {
        return (
            <main>
                <h1>
                    <label
                        htmlFor="greeting"
                        style={{
                            color: 'var(--secondary)',
                            borderBottom: '2px solid var(--secondary)'
                        }}
                    >
                        {greeting}
                    </label>!
                    Welcome to NEAR!
                </h1>
                <p>
                    This is an NFT minting Frontend! Once logged-in to the Near network, you will be prompted to mint an NFT!
                    First begin by clicking show caller id and confirm that it is your wallet address showing. This is the
                    address that the nft will be minted to! Then customize, click mint, and fire away!
                </p>
                <p>
                    Do not worry, this app runs in the test network ("testnet"). It works
                    just like the main network ("mainnet"), but using NEAR Tokens that are
                    only for testing!
                </p>
                <p style={{ textAlign: 'center', marginTop: '.5em' }}>
                    <button onClick={login}>Sign in</button>
                </p>
            </main>
        )

    }

    return (
      //IF SIGN IN WAS SUCCESSFULL THEN ALL APP CODE GOES BELOW
<React.Fragment>
        <button className="link" style={{ float: "right" }} onClick={logout}>
          Sign out
        </button>

        <Router>
          <Navbar style={{ float: "left", fontSize: 12.5 }} />
        </Router>

        <p
          style={{
            textAlign: "center",
            marginTop: ".5em",
            fontSize: 32,
            fontWeight: "bold",
            position: "sticky",
          }}
        >
          Welcome to Axelofwar's mint page - SIGN IN SUCCESS
        </p>

        <div className="App">
          <p style={{ textAlign: "center", marginTop: ".5em" }}>
            Proceed to Confirm wallet address below
          </p>

          <p style={{ textAlign: "center", marginTop: ".5em", color: "black" }}>
            <button className="link" onClick={get_caller_id}>
              Show Caller ID
            </button>

            <button className="link" onClick={get_account}>
              Show Account
            </button>

            <button className="link" onClick={get_account_id}>
              Show Account ID
            </button>
          </p>
        </div>


          {/* <Container style={{ marginTop: "3vh" }}>

          </Container> */}
        </React.Fragment>

    );
}