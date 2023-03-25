# Accumulator Frontend

## Setup

Run the usual npm commands as follows, then setup the env file.

## Addresses on Mainnet

```
ACCU:
0x9cb949e8c256C3EA5395bbe883E6Ee6a20Db6045

Staking:
0xc4e864940C34cDF5086202c34Dff07365f5042Ab

Buy Receiver:
0x90F55A5B52b4955aC2800531d9e5a6869a1d90c5

Sell Receiver:
0x7F5436D24a95978A23f2A475813483bb298B4634

Emission Recipient:
0xA1c29E35EbB1033A42056Fc99f3623C1Adb5B96a
```

### Environment Variables (.env file)

Setup your environment variables (rename .env.example to .env) and fill in some of the settings as follows:

- Get the `REACT_APP_PUBLIC_WALLET_CONNECT_ID` API key from: https://cloud.walletconnect.com.
- Set `REACT_APP_IS_BSC_MAINNET` true for the BSC Mainnet, false for the BSC Testnet.
- `REACT_APP_MAINNET_CONTRACT_ADDRESS` sets the Accumulator Contract Address from the BSC Mainnet. Used when `REACT_APP_IS_BSC_MAINNET` is true.
- `REACT_APP_TESTNET_CONTRACT_ADDRESS` sets the Accumulator Contract Address from the BSC Testnet. Used when `REACT_APP_IS_BSC_MAINNET` is false.
- `REACT_APP_MAIN_TOKEN_TRADING_PAIR_ADDRESS` sets the trading pair contract address, which will then allow the API from https://api.dexscreener.com to look at the proper Accumulator / BNB pair (or the main trading pairs) we want to look at. Mainly used to follow the price, which then sets the price variable in our code. Used when `REACT_APP_IS_BSC_MAINNET` is true. There is no version of this if `REACT_APP_IS_BSC_MAINNET` is set to false.
- `REACT_APP_MAINNET_STAKING_ADDRESS` sets the Accumulator Rebase (or staking) Address from the BSC Mainnet. Used when `REACT_APP_IS_BSC_MAINNET` is true.
- `REACT_APP_MAINNET_EMISSION_RECIPIENT_ADDRESS` sets the Accumulator Emission Recipient Address from the BSC Mainnet. Used when `REACT_APP_IS_BSC_MAINNET` is true. This is what sets the interest rates and the amount to distribute.

```
GENERATE_SOURCEMAP=false
REACT_APP_PUBLIC_WALLET_CONNECT_ID=""
REACT_APP_IS_BSC_MAINNET=false
REACT_APP_MAINNET_CONTRACT_ADDRESS="0x9cb949e8c256C3EA5395bbe883E6Ee6a20Db6045"
REACT_APP_MAINNET_STAKING_ADDRESS="0xc4e864940C34cDF5086202c34Dff07365f5042Ab"
REACT_APP_MAINNET_EMISSION_RECIPIENT_ADDRESS="0xA1c29E35EbB1033A42056Fc99f3623C1Adb5B96a"
REACT_APP_MAIN_TOKEN_TRADING_PAIR_ADDRESS="0x5866a67681a2d86a5e9a5e6e35c39457feb8441e"
REACT_APP_TESTNET_CONTRACT_ADDRESS=""
```

### Config/config.json

- The `config.json` file only contains the Token Symbol, which ic "ACCU" at the time of writing. If you change this, it will change the Token Symbol throughout the webapp.

```json
{
  "TOKEN_SYMBOL": "ACCU"
}
```

## Update the the live/production website

### How to update Accumulator.one (Vercel)

- I had to use Gitlab due to the fact that Vercel wanted to charge us if we use a GitHub organization. On the day I had to deploy this, Vercel was performing maintenance with their connection to GitHub account to Vercel, but GitLab worked, which is why we use GitLab.
- When you push changes, make sure you are pushing the changes to the Accumulator GitLab Private Repo: https://gitlab.com/AccumulatorProject/Accumulator-Frontend.git
  - Once you push the changes to the Gitlab repo, the changes will automatically be pushed to Vercel. The CI/CD pipelines from GitLab -> Vercel take ~5 minutes to run, probably less.
- Personally, I push the changes to both the TruthSeekers Organization repo and the Accumulator Gitlab repo.

I did this so I can deploy to Vercel and push code to both repos

### Set Multiple Git Remote URLs

How do I set two git remote urls to push to both of those repos?

You can set multiple remote URLs for a single local repository by using the `git remote` command.
To set the first remote URL:

```bash
git remote add origin https://gitlab.com/AccumulatorProject/Accumulator-Frontend.git
```

To set the second remote URL:

```bash
git remote set-url --add --push origin https://github.com/Truth-Seekers-KYC/Accumulator-Frontend.git
```

You can check that the remote urls are set correctly by running:

```bash
git remote -v
```

This will show you the remote URLs that are set for your local repository, and you should see both URLs listed as "origin"
Once you have set the multiple remotes, you can push to both of them using the command

```
git push --all
```

It is important to note that this will push to all of the remotes that are set and will push all the branches that are currently in your local repository.

Note: You can also just use:

```powershell
git push
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This application deploys to Vercel automatically.
