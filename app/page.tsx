"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Menu,
  User,
  ShoppingCart,
  Wine,
  Menu as MenuIcon,
  Flame,
  MapPin,
} from "lucide-react";

const whatsappLink = "https://wa.me/5511345678900";

const destaques = [
  "Pizza Margherita",
  "Pizza Quatro Queijos",
  "Pizza Calabresa Artesanal",
  "Vinho Cabernet Sauvignon",
  "Vinho Malbec Reserva",
  "Tábua de Frios da Villa",
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f5f2] text-[#1f2328]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#5f1620] bg-[#721c24] text-white shadow-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 transition hover:bg-white/10"
            aria-label="Abrir menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>

          <div className="ml-3 mr-auto pl-2 text-left">
            <p className="font-serif text-xl font-semibold tracking-wide sm:text-2xl">
              Santa Fé &amp; Villa
            </p>
          </div>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 transition hover:bg-white/10"
            aria-label="Carrinho"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#c94c4c] px-1 text-xs font-semibold text-white">
              2
            </span>
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-24 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-[#1f2328] px-6 py-12 text-white shadow-lg sm:px-10 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-[#721c24]/60" />
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              A Tradição da Pizza, a Elegância do Vinho
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Sabores artesanais, ingredientes selecionados e uma experiência acolhedora
              para seu delivery ou noite especial na nossa casa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-xl bg-[#c94c4c] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                🍕 Pedir Delivery Agora
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/50 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                🍷 Reservar Mesa
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 inline-flex items-center gap-2 font-serif text-xl font-bold text-[#721c24] sm:text-2xl">
            <Flame className="h-5 w-5" />
            🔥 DESTAQUES DO CARDÁPIO
          </h2>

          <div className="-mx-4 overflow-x-auto px-4 pb-2">
            <div className="flex w-max gap-4">
              {destaques.map((item) => (
                <article
                  key={item}
                  className="w-44 shrink-0 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"
                >
                  <div className="mb-3 h-28 rounded-xl bg-stone-200" />
                  <p className="text-sm font-medium leading-snug text-[#1f2328]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-[#1f2328] px-4 py-10 text-stone-200 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="transition hover:text-white">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-white">
                  Adega
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-white">
                  Reservas
                </Link>
              </li>
              <li>
                <Link href="#" className="transition hover:text-white">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Endereço</h3>
            <p className="mt-4 inline-flex items-start gap-2 text-sm leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Itapecerica da Serra - SP
              <br />
              Pizzaria Santa Fé e Adega da Villa
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Localização</h3>
            <div className="mt-4 h-32 rounded-xl bg-stone-500/40" />
          </div>
        </div>
      </footer>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#2f353d] bg-[#1f2328] p-2 text-stone-200 md:hidden">
        <ul className="grid grid-cols-4 gap-1">
          <li>
            <button type="button" className="flex w-full flex-col items-center gap-1 rounded-lg py-2 text-xs hover:bg-white/10">
              <Home className="h-4 w-4" />
              Início
            </button>
          </li>
          <li>
            <button type="button" className="flex w-full flex-col items-center gap-1 rounded-lg py-2 text-xs hover:bg-white/10">
              <Menu className="h-4 w-4" />
              Menu
            </button>
          </li>
          <li>
            <button type="button" className="flex w-full flex-col items-center gap-1 rounded-lg py-2 text-xs hover:bg-white/10">
              <Wine className="h-4 w-4" />
              Adega
            </button>
          </li>
          <li>
            <button type="button" className="flex w-full flex-col items-center gap-1 rounded-lg py-2 text-xs hover:bg-white/10">
              <User className="h-4 w-4" />
              Perfil
            </button>
          </li>
        </ul>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h4 className="text-lg font-bold text-black">Abrir link externo</h4>
            <p className="mt-2 text-sm text-zinc-700">
              Você está saindo do nosso site para visitar um link externo:
            </p>
            <div className="mt-4 rounded-md bg-zinc-100 p-3 font-mono text-xs text-zinc-800 sm:text-sm">
              {whatsappLink}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-100"
              >
                Cancelar
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Abrir link
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
