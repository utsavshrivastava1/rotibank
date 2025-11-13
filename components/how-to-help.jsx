export default function HowToHelp() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-border p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Roti Bank, our mission is to ensure no one in our community goes hungry. We believe in the power of
            compassion and collective action to create lasting change. Through our initiatives, we provide nutritious
            meals, support, and hope to those in need, fostering a community built on dignity and mutual care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Your Donation</h3>
              <p className="text-sm text-muted-foreground">Every contribution, big or small, makes an impact</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Distribution</h3>
              <p className="text-sm text-muted-foreground">We prepare and distribute nutritious meals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Change</h3>
              <p className="text-sm text-muted-foreground">Together we inspire hope and create change</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
