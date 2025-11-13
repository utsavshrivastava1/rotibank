"use client"

import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:underline font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">About Roti Bank</h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p>
                  At Roti Bank, our mission is simple yet profound: ensure that no one in our community goes hungry. We
                  believe in the power of compassion and collective action to create lasting, meaningful change. Through
                  our comprehensive initiatives, we provide nutritious meals, vital support, and renewed hope to those
                  in need, fostering a community built on dignity, mutual care, and shared responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p>
                  We envision a world where food security is a fundamental right, not a privilege. A world where every
                  individual, regardless of their circumstances, has access to nutritious meals and the dignity that
                  comes with it. We strive to build a compassionate society where communities come together to support
                  one another, creating sustainable change that uplifts lives and inspires hope for generations to come.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
                <p>
                  Roti Bank operates on multiple fronts to combat hunger and food insecurity. We prepare and distribute
                  nutritious, wholesome meals to vulnerable populations including the homeless, underprivileged
                  children, and elderly individuals. Our work extends beyond providing meals—we also conduct awareness
                  programs about nutrition, health, and the importance of food security. We collaborate with local
                  communities, volunteers, and donors to ensure our reach extends to those who need it most.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Impact</h2>
                <p>
                  Since our inception, Roti Bank has served thousands of nutritious meals to communities across the
                  region. We have built a strong network of dedicated volunteers, compassionate donors, and supportive
                  partners who believe in our cause. Each day, our team works tirelessly to ensure that hunger doesn't
                  stand between anyone and their dreams. The impact we create is not just measured in meals served, but
                  in the smiles we see, the gratitude we receive, and the lives we touch.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Your Support Matters</h2>
                <p>
                  Your donation, no matter the size, makes a tangible difference in someone's life. Every rupee
                  contributes to purchasing quality ingredients, preparing nutritious meals, and reaching more people in
                  need. When you support Roti Bank, you're not just providing a meal—you're offering hope, dignity, and
                  the chance for a better tomorrow. Together, we can create a community where everyone has enough to eat
                  and the opportunity to thrive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Join Us</h2>
                <p>
                  Whether through donations, volunteering your time, or spreading awareness about our cause, you can be
                  part of this meaningful movement. We invite you to join Roti Bank in our mission to end hunger and
                  build a more compassionate society. Contact us to learn more about how you can make a difference
                  today.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Phone:</span> +91 86555 80001
                </p>
                <p>
                  <span className="font-medium text-foreground">Email:</span> rotibanksupaul@gmail.com
                </p>
                <p>
                  <span className="font-medium text-foreground">Address:</span> Koshi Organisation, Ward No. 15, Rajendra Nagar, Supaul, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
