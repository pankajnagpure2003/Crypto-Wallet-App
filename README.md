# Wholet — Crypto Wallet (React Native + Expo + NativeWind)

A frontend-only React Native implementation of the **Wholet** crypto wallet
UI kit, built with **Expo**, **NativeWind (Tailwind CSS)**, and
**React Navigation**. No backend/API calls — all data is mocked in
`src/data/mockData.js` so you can drop in real API/wallet logic later.

## Stack

- Expo SDK 51 / React Native 0.74
- NativeWind v4 (Tailwind classes via `className`)
- React Navigation (native-stack + bottom-tabs + drawer)
- `@expo/vector-icons` (Feather icon set — matches the kit's icon set)
- `react-native-qrcode-svg` for the Deposit QR code
- `react-native-svg` for the balance chart

## Getting started

```bash
npm install
npx expo start
```

Then press `i` (iOS simulator), `a` (Android emulator), or scan the QR
code with the Expo Go app on your phone.

## Project structure

```
App.js                     # Entry point — providers + navigation root
src/
  navigation/               # Auth stack, app stack, tabs, drawer, custom tab bar
  screens/
    Auth/                   # Welcome, Login, Sign Up, Forgot/Reset Password, PIN setup
    Onboarding/             # 3-step onboarding carousel
    KYC/                    # Identity verification intro + document capture
    Wallet/                 # Wallet overview (home), asset detail, all assets/transactions
    Transaction/            # Unified transaction details (all types & statuses)
    Deposit/                # QR + address deposit screen
    Withdraw/                # Amount -> confirm -> success
    Send/                   # Amount -> message -> success
    Exchange/               # Coin-to-coin swap
    Profile/                # Profile, personal info, phone verification
    SideMenu/               # Drawer content (matches "Side Menu" kit screens)
  components/
    ui/                     # Button, Input, PinPad, Toast, ProgressBar, Avatar, StatusPill, Card
    wallet/                 # CoinIcon, AssetListItem, TransactionListItem, WalletActionButton, BalanceChart
    layout/                 # Screen (safe-area/scroll wrapper), Header
  theme/                    # Color tokens + coin metadata (mirrors tailwind.config.js)
  context/                  # AuthContext (mock session state)
  data/                     # mockData.js — swap for real API calls
  utils/                    # formatters
```

## Design system

Colors and type scale are lifted directly from the kit's design-system
sheets and defined as Tailwind tokens in `tailwind.config.js`:

| Token      | Hex       | Usage                  |
|------------|-----------|-------------------------|
| primary    | `#347AF0` | Accents, CTAs, links    |
| success    | `#75BF72` | Positive states         |
| danger     | `#DF5060` | Negative states, errors |
| warning    | `#FDB32A` | Neutral/pending states  |
| midnight   | `#0D1F3C` | Titles, headlines       |
| graydark   | `#3D4C63` | Paragraph text          |
| gray       | `#B5BBC9` | Labels                  |
| grayLight  | `#CFD2D8` | Disabled states         |

Type scale: `h1` 36px / `h2` 32px / `h3` 26px / `sublime` 19px /
`paragraph` 15px / `link` 15px (semibold) / `fineprint` 13px.

## Notes on fidelity

- **Icons** use `@expo/vector-icons`'s Feather set, matching the kit's
  "Icons powered by Feather Icons" component sheet — no bundled icon
  images needed.
- **Coin logos** are rendered as colored initials badges
  (`src/components/wallet/CoinIcon.jsx` / `src/theme/coins.js`) rather
  than bundling third-party cryptocurrency brand artwork.
- **Illustrations** (the onboarding/login character art) were
  intentionally not reproduced pixel-for-pixel, since those are
  original delesign.com illustrations; simple icon-based placeholders
  are used instead so you can drop in licensed artwork of your own.
- Many of the kit's 80 exported screens are **state variants** of the
  same screen (empty / filled / error / pending / rejected, etc.). Those
  are implemented as prop-driven states on one component (see
  `TransactionDetailsScreen`, `StatusPill`, `Toast`) rather than
  duplicated screens, which is the more maintainable pattern for
  production code.

## Wiring up a real backend

Everything reads from `AuthContext` and `src/data/mockData.js`. To go
live:
1. Replace `AuthContext`'s `login`/`signUp`/`logout` with real API calls.
2. Replace the `mockData.js` exports with data-fetching hooks (React
   Query, SWR, etc.).
3. Wire `EnterPinScreen`'s demo PIN check to your real PIN/biometric
   verification.
