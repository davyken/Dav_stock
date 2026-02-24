"use client"
import { useUser } from "@clerk/nextjs";
import Wrapper from "./components/Wrapper";
import ProductOverview from "./components/ProductOverview";
import CategoryChart from "./components/CategoryChart";
import RecentTransactions from "./components/RecentTransactions";
import StockSummaryTable from "./components/StockSummaryTable";
import Link from "next/link";
import { PackagePlus, Users, BarChart3, ArrowRight, Check, Warehouse, ListTree, HandHeart, Receipt, ShoppingBasket } from "lucide-react";

export default function Home() {
  const { user, isLoaded } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
        {/* Navbar for Landing Page */}
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2 px-4">
              <PackagePlus className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">AssoStock</span>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="flex gap-2 px-4">
              <Link href="/sign-in" className="btn btn-outline btn-sm">Connexion</Link>
              <Link href="/sign-up" className="btn btn-primary btn-sm">Inscription</Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero min-h-[60vh] bg-base-100">
          <div className="hero-content text-center flex-col">
            <div className="max-w-4xl">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-primary/10 rounded-full">
                  <PackagePlus className="w-20 h-20 text-primary" />
                </div>
              </div>
              <h1 className="text-6xl font-bold text-base-content mb-6">AssoStock</h1>
              <p className="text-2xl text-base-content/70 mb-10 max-w-2xl mx-auto">
                La solution complète pour gérer le stock de votre association. Simple, efficace et gratuite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up" className="btn btn-primary btn-lg gap-2">
                  <Users className="w-6 h-6" />
                  Commencer gratuitement
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/sign-in" className="btn btn-outline btn-lg">Se connecter</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div><div className="text-4xl font-bold text-primary">100%</div><div className="text-base-content/60">Gratuit</div></div>
              <div><div className="text-4xl font-bold text-primary">∞</div><div className="text-base-content/60">Produits</div></div>
              <div><div className="text-4xl font-bold text-primary">24/7</div><div className="text-base-content/60">Accessible</div></div>
              <div><div className="text-4xl font-bold text-primary">✓</div><div className="text-base-content/60">Sécurisé</div></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Fonctionnalités</h2>
            <p className="text-xl text-base-content/60 text-center mb-16 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour gérer votre stock efficacement
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mb-4"><ShoppingBasket className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-xl mb-2">Gestion des produits</h3>
                  <p className="text-base-content/60">Ajoutez, modifiez et supprimez vos produits en quelques clics.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Stock illimité</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Images produit</span></li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mb-4"><BarChart3 className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-xl mb-2">Tableaux de bord</h3>
                  <p className="text-base-content/60">Visualisez vos statistiques en temps réel.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Graphiques interactifs</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Statistiques en temps réel</span></li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mb-4"><Warehouse className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-xl mb-2">Gestion du stock</h3>
                  <p className="text-base-content/60">Alimentez et réduisez votre stock facilement.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Alimentation rapide</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Historique complet</span></li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mb-4"><ListTree className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-xl mb-2">Catégories</h3>
                  <p className="text-base-content/60">Organisez vos produits par catégories.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Catégories illimitées</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Filtres avancés</span></li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mb-4"><Receipt className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-xl mb-2">Transactions</h3>
                  <p className="text-base-content/60">Suivez toutes vos entrées et sorties.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Historique complet</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Export PDF</span></li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl border border-base-200">
                <div className="card-body">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mb-4"><HandHeart className="w-10 h-10 text-primary" /></div>
                  <h3 className="font-bold text-xl mb-2">Dons</h3>
                  <p className="text-base-content/60">Enregistrez facilement les dons reçus.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Suivi des donateurs</span></li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /><span>Historique des dons</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-20 px-4 bg-base-200/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Comment ça marche?</h2>
            <p className="text-xl text-base-content/60 text-center mb-16">Commencez en 3 étapes simples</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Créez un compte</h3>
                <p className="text-base-content/60">Inscrivez-vous en quelques secondes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Ajoutez vos produits</h3>
                <p className="text-base-content/60">Créez des catégories et votre inventaire</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Gérez facilement</h3>
                <p className="text-base-content/60">Suivez votre stock en temps réel</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 bg-primary text-primary-content">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Prêt à commencer?</h2>
            <p className="text-xl mb-8 opacity-90">Rejoignez des centaines d'associations</p>
            <Link href="/sign-up" className="btn btn-secondary btn-lg gap-2">
              <Users className="w-6 h-6" />
              Créer mon compte gratuit
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">À propos</h2>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="text-lg text-base-content/70">
                  <strong>AssoStock</strong> est une application de gestion de stock conçue spécialement pour les associations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-20 px-4 bg-base-200/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
            <p className="text-xl text-base-content/60 text-center mb-8">Une question? N'hésitez pas à nous contacter</p>
            <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
              <div className="card-body">
                <p className="text-base-content/70">Pour toute question, contactez-nous:</p>
                <a href="mailto:contact@assostock.com" className="btn btn-primary mt-4">contact@assostock.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer footer-center p-8 bg-base-100 text-base-content border-t border-base-200">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PackagePlus className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">AssoStock</span>
            </div>
            <p className="text-base-content/60 max-w-md">
              La solution de gestion de stock pour les associations.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#features">Fonctionnalités</a>
              <a href="#about">À propos</a>
              <a href="#contact">Contact</a>
            </div>
            <p className="text-base-content/40 mt-4">© 2024 AssoStock. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <ProductOverview email={email} />
          <CategoryChart email={email} />
          <RecentTransactions email={email} />
        </div>
        <div className="md:ml-4 md:mt-0 mt-4 md:w-1/3">
          <StockSummaryTable email={email} />
        </div>
      </div>
    </Wrapper>
  );
}
