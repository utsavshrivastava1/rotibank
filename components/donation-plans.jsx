export default function DonationPlans() {
  const plans = [
    { plates: 50, price: 1999 },
    { plates: 101, price: 3999 },
    { plates: 151, price: 5999 },
    { plates: 201, price: 7999 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How You Can Help to Donate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your financial contributions are the most effective way to create change. Every donation, no matter how
            small, helps us provide healthy meals to those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow text-center"
            >
              <div className="mb-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Donation Option</p>
                <p className="text-4xl font-bold text-primary mb-2">₹{plan.price.toLocaleString()}</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-4 mb-6">
                <p className="text-2xl font-bold text-foreground">{plan.plates}</p>
                <p className="text-muted-foreground text-sm">Plates Provided</p>
              </div>
              <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Select Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            For continuous support, you can also set up a recurring gift or make a one-time payment.
          </p>
          <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium">
            Know More
          </button>
        </div>
      </div>
    </section>
  )
}
