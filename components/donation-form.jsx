"use client"

import { useState } from "react"

export default function DonationForm({ plan, onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone) {
      setLoading(true)
      try {
        // Format message for WhatsApp
        const message = `
🙏 *Donation Received* 🙏

*Donor Details:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

*Donation Details:*
💰 Amount: ₹${plan.price.toLocaleString()}
🍛 Plates: ${plan.plates}

Thank you for your generosity! 🙏
`.trim()

        // Encode message for WhatsApp
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/919204931716?text=${encodedMessage}`

        // Open WhatsApp
        window.open(whatsappUrl, "_blank")

        // Show success message
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", email: "", phone: "" })
          onBack()
        }, 2000)
      } catch (error) {
        console.error("[v0] Error sending donation:", error)
      } finally {
        setLoading(false)
      }
    }
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            Your donation of ₹{plan.price.toLocaleString()} has been received. Check WhatsApp for confirmation!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <div className="mb-6 pb-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">Donation Details</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="text-2xl font-bold text-primary">₹{plan.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Plates</p>
            <p className="text-2xl font-bold text-foreground">{plan.plates}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Impact</p>
            <p className="text-2xl font-bold text-foreground">{plan.plates} Meals</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Amount to Donate:</span> ₹{plan.price.toLocaleString()}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50"
          >
            {loading ? "Processing..." : `Donate ₹${plan.price.toLocaleString()}`}
          </button>
        </div>
      </form>
    </div>
  )
}
