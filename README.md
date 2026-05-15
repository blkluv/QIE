# QIE MerchantPay 🛒⚡

> Bridging everyday commerce and Web3 — one payment at a time.

**QIE MerchantPay** is a mobile-first point-of-sale application that lets any merchant accept QIE cryptocurrency payments in under 60 seconds — no technical setup required.

Built on the QIE blockchain, MerchantPay integrates **QIE Pass** for compliant merchant onboarding, accepts payments in **QIE and QUSDC**, and generates real-time QR codes for instant customer checkout. Transactions settle in ~3 seconds with near-zero fees directly on QIE mainnet.

---

## 🏆 QIE Blockchain Hackathon 2026

Competing in two categories:
- **Real-World Payments** — enabling merchants and commerce with real crypto usage
- **QIE Ecosystem Champion** — deep integration across QIE Pass, QIE Wallet, and QUSDC

---

## ✨ Features

- **QIE Pass Authentication** — KYC-verified merchant onboarding in one click. One verified identity, zero friction.
- **Live Fiat Conversion** — Merchant enters a price in USD or EUR; app converts to QIE/QUSDC in real time.
- **QR Code Checkout** — Generates a scannable payment QR code for the customer. No wallet address copy-pasting.
- **Real-Time Confirmation** — Payment status updates live on-chain (~3 second finality). Green checkmark when funds arrive.
- **Transaction Dashboard** — Full payment history with timestamps, amounts, and fiat equivalents.
- **CSV Export** — One-click export for merchant accounting and bookkeeping.
- **Mainnet Deployed** — Live on QIE mainnet. Real payments, real settlement.

---

## 🖥️ App Flow

```
Merchant onboards with QIE Pass (KYC login)
        ↓
Sets store name + preferred display currency (USD / EUR)
        ↓
Enters sale amount at point of sale
        ↓
App converts to QIE/QUSDC → generates QR code
        ↓
Customer scans QR with QIE Wallet and pays
        ↓
On-chain confirmation in ~3 seconds ✅
        ↓
Transaction logged to merchant dashboard
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (React), Tailwind CSS |
| Blockchain | QIE Mainnet via RPC + ethers.js |
| Identity | QIE Pass SDK |
| Payments | QUSDC + native QIE |
| Backend | Python / FastAPI |
| Price Feed | Live fiat-to-QIE conversion API |
| QR Generation | qrcode.js |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- A QIE Wallet with mainnet funds
- QIE Pass account (for merchant KYC)

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/qie-merchantpay.git
cd qie-merchantpay

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file in both `/frontend` and `/backend`:

**frontend/.env**
```
NEXT_PUBLIC_QIE_RPC_URL=https://mainnet.qie.digital
NEXT_PUBLIC_QIE_PASS_CLIENT_ID=your_qie_pass_client_id
NEXT_PUBLIC_QUSDC_CONTRACT=your_qusdc_contract_address
```

**backend/.env**
```
QIE_RPC_URL=https://mainnet.qie.digital
PRICE_API_KEY=your_price_feed_api_key
```

### Run Locally

```bash
# Start backend
cd backend
uvicorn main:app --reload

# Start frontend (new terminal)
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
qie-merchantpay/
├── frontend/
│   ├── pages/
│   │   ├── index.js          # Merchant onboarding / QIE Pass login
│   │   ├── pos.js            # Point-of-sale screen
│   │   └── dashboard.js      # Transaction history
│   ├── components/
│   │   ├── QRPayment.js      # QR code generation + payment listener
│   │   ├── PriceConverter.js # Fiat-to-QIE conversion display
│   │   └── TxHistory.js      # Transaction dashboard table
│   └── utils/
│       └── qie.js            # ethers.js wallet + contract helpers
├── backend/
│   ├── main.py               # FastAPI entry point
│   ├── price.py              # Fiat conversion endpoint
│   └── webhook.py            # On-chain tx confirmation listener
└── README.md
```

---

## 🔗 QIE Ecosystem Integrations

| Component | Usage |
|---|---|
| [QIE Pass](https://qiepass.qie.digital) | Merchant KYC & authentication |
| [QIE Wallet](https://qiewallet.me) | Customer payment wallet |
| [QUSDC](https://docs.stable.qie.digital) | Stable settlement currency |
| [QIE Mainnet](https://mainnet.qie.digital) | On-chain transaction settlement |
| [QIE Bridge](https://bridge.qie.digital) | Cross-chain asset support |

---

## 🌍 The Problem We're Solving

Crypto adoption in merchant payments has stalled because:
- Most payment tools require technical setup merchants don't have
- No KYC layer means regulatory risk for businesses
- Volatility makes merchants reluctant to hold crypto

**QIE MerchantPay solves all three:**
- Onboard in 60 seconds with QIE Pass
- KYC-compliant by default — regulators happy, merchants protected
- QUSDC option gives merchants stable settlement with zero volatility risk

---

## 📽️ Demo

[▶ Watch the demo video](#) <!-- Add your demo video link here -->

Live app: [merchantpay.qie.digital](#) <!-- Add your deployed URL here -->

---

## 🗺️ Roadmap

- [ ] Multi-currency support (more fiat display options)
- [ ] Tipping / custom payment note field
- [ ] Webhook notifications (email/SMS on payment received)
- [ ] Merchant analytics (daily/weekly revenue charts)
- [ ] Customer loyalty points via QIE tokens
- [ ] Hardware QR display integration (dedicated merchant device)

---

## 👤 Author

Built solo for the **QIE Blockchain Hackathon 2026**.

- GitHub: [@teethaking](https://github.com/teethaking)
- QIE Developer Telegram: [t.me/+PyP385qw3qNkOTE1](https://t.me/+PyP385qw3qNkOTE1)

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

*Built with ⚡ on [QIE Blockchain](https://qie.digital)*
