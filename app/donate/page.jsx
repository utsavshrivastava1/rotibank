"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DonationForm from "@/components/donation-form"

export default function DonatePage() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    { id: 1, plates: 50, price: 1999 },
    { id: 2, plates: 101, price: 3999 },
    { id: 3, plates: 151, price: 5999 },
    { id: 4, plates: 201, price: 7999 },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Make a Donation</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your generosity can help us provide nutritious meals to those in need. Choose a donation plan and fill in
            your details.
          </p>

          {!selectedPlan ? (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Select Donation Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all text-center cursor-pointer"
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Donation Option</p>
                    <p className="text-4xl font-bold text-primary mb-6">₹{plan.price.toLocaleString()}</p>
                    <div className="bg-accent/10 rounded-lg p-4 mb-6">
                      <p className="text-2xl font-bold text-foreground">{plan.plates}</p>
                      <p className="text-muted-foreground text-sm">Plates Provided</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-medium">
                      Select Plan
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <button onClick={() => setSelectedPlan(null)} className="mb-6 text-primary hover:underline font-medium">
                ← Back to Plans
              </button>
              <DonationForm plan={selectedPlan} onBack={() => setSelectedPlan(null)} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
