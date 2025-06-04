import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function SuccessStories() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl">
              Discover how we've helped businesses achieve their goals through innovative software solutions.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video w-full bg-gray-100 relative">
                    <Image src={`/placeholder-${item}.jpg`} alt="Project thumbnail" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                    <p className="text-gray-600 mb-4">A brief description of this success story and the challenges we solved.</p>
                    <Link href={`/success-stories/story-${item}`} className="text-primary font-medium hover:underline">
                      Read case study →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">Ready to become our next success story?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your business goals with custom software solutions.
          </p>
          <Link
            href="/#discover-us"
            className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}