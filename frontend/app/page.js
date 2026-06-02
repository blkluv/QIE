"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { connectWallet } from "../utils/qie";

export default function OnboardingPage() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState("");
  const [storeName, setStoreName] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [connecting, setConnecting] = useState(false);

  const addQIENetwork = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask first');
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${parseInt(process.env.NEXT_PUBLIC_QIE_CHAIN_ID).toString(16)}`,
          chainName: 'QIE Network',
          nativeCurrency: {
            name: 'QIE',
            symbol: 'QIE',
            decimals: 18
          },
          rpcUrls: [process.env.NEXT_PUBLIC_QIE_RPC_URL],
          blockExplorerUrls: ['https://explorer.qie.digital']
        }]
      });
    } catch (error) {
      console.error('Failed to add QIE Network:', error);
    }
  };

  useEffect(() => {
    // If the merchant already onboarded, keep the register one tap away.
    const existingSession = localStorage.getItem("qieMerchantSession");
    if (existingSession) {
      router.replace("/pos");
    }
  }, [router]);

  async function handleConnectWallet() {
    try {
      setConnecting(true);
      setError("");
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (walletError) {
      setError(walletError.message);
    } finally {
      setConnecting(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!walletAddress) {
      setError("Connect a QIE wallet before opening the register.");
      return;
    }
    if (!storeName.trim()) {
      setError("Enter your merchant store name.");
      return;
    }

    localStorage.setItem(
      "qieMerchantSession",
      JSON.stringify({
        walletAddress,
        storeName: storeName.trim(),
        currency,
        createdAt: new Date().toISOString(),
      }),
    );
    router.push("/pos");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-5 py-8">
      <section className="rounded-[2rem] border border-white/10 bg-panel/80 p-6 shadow-glow backdrop-blur">
        <div className="mb-8">
          <p className="mb-3 inline-flex rounded-full border border-qie/30 bg-qie/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-qie">
            QIE Pay
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white">Run your whole business in one space.</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            A wallet identity, instant QR checkout. Find your 3 word address at{" "}
            <a href="https://rwatok.land" className="text-white/80 hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">rwatok.land</a>
            ,{" "}
            <button type="button" onClick={addQIENetwork} className="text-white/80 hover:text-white underline transition-colors bg-transparent border-none cursor-pointer text-sm">add QIE Network to MetaMask</button>
            , and every proof of biz paid with QIE is documented in one place.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            onClick={handleConnectWallet}
            disabled={connecting}
            className="w-full rounded-2xl bg-qie px-5 py-4 font-bold text-ink transition hover:bg-qie/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {walletAddress ? "Wallet Connected" : connecting ? "Connecting…" : "Connect QIE Wallet"}
          </button>

          {walletAddress && (
            <p className="break-all rounded-2xl border border-qie/20 bg-qie/10 p-3 text-xs text-qie">{walletAddress}</p>
          )}

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/70">Merchant store name or 3 Word Addy</span>
            <input
              value={storeName}
              onChange={(event) => setStoreName(event.target.value)}
              placeholder="Hahz Coffee Bar or ///keep.it.simple"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-qie/70"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/70">Settlement currency</span>
            <select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition focus:border-qie/70"
            >
              <option className="bg-ink" value="USD">USD</option>
              <option className="bg-ink" value="EUR">EUR</option>
            </select>
          </label>

          {error && <p className="rounded-2xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">{error}</p>}

          <button type="submit" className="w-full rounded-2xl border border-qie/40 px-5 py-4 font-bold text-qie transition hover:bg-qie/10">
            Open POS
          </button>
        </form>
      </section>
    </main>
  );
}
