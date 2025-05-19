import React from 'react';
import { PaintBucket, Clock, CheckCircle, Shield, Award, Users, Trash2, Calculator, Calendar, Star } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedElement from '../components/AnimatedElement';
import SectionTitle from '../components/SectionTitle';

const Home: React.FC = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-500 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent-500"></div>
        </div>
        
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 z-10">
              <AnimatedElement animation="fade-up">
                <div className="flex items-center space-x-2 mb-6">
                  <PaintBucket className="w-8 h-8 text-accent-500" />
                  <span className="text-lg font-medium text-accent-400">Chennai Painters You Can Trust</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Want a Beautifully Painted Space by Professional Chennai Painters?
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
                  We provide high-quality painting services as the leading painting contractor in Chennai—zero stress, no surprises. Get your dream space painted without the hassle.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-accent-500" />
                    <span>No Stress, Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-accent-500" />
                    <span>Professional-Quality Results</span>
                  </div>
                </div>
                
                <Button variant="secondary" size="lg">
                  Get Free Consultation
                </Button>
              </AnimatedElement>
            </div>
            
            <div className="w-full md:w-5/12 mt-12 md:mt-0">
              <AnimatedElement animation="fade-in" delay={300}>
                <div className="relative">
                  <div className="absolute inset-0 bg-terracotta-500 rounded-lg transform rotate-3"></div>
                  <img 
                    src="https://images.pexels.com/photos/8134647/pexels-photo-8134647.jpeg" 
                    alt="Professional painters at work" 
                    className="relative rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-up">
              <SectionTitle
                title="Is Your Property Suffering from Poor Paint Quality?"
                centered={true}
              />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Are you tired of dealing with painters who arrive late, leave a mess, and deliver poor-quality results? The stress of hiring unreliable painting contractors in Chennai can turn a simple painting project into a nightmare.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Poor workmanship, hidden costs, and project delays can lead to a frustrating experience. You deserve better.
                </p>
                
                <p className="text-gray-900 font-semibold">
                  Chennai Painter is here to provide a reliable painting solution in Chennai—seamlessly and stress-free. We believe every property deserves to be beautifully painted by professionals without stress or uncertainty.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Chennai Painters That Help Homeowners and Businesses Transform Their Spaces with Ease"
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  We understand the frustration of dealing with unreliable Chennai painters and poor-quality work. You deserve a seamless painting experience that turns your vision into reality.
                </p>
                
                <p className="text-gray-600">
                  With over 10 years of experience, Chennai Painter is a trusted painting contractor in Chennai dedicated to exceptional quality. Our experienced team ensures that your project is completed on time, within budget, and to your highest satisfaction. We handle everything from start to finish, so you can sit back and enjoy the transformation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Clock className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10+ Years</h3>
                  <p className="text-gray-600">Of Excellence</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Award className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-gray-600">Satisfaction</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Users className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Shield className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
                  <p className="text-gray-600">Guaranteed</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Transform Your Space with These Amazing Benefits from Professional Chennai Painters"
              centered={true}
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Trash2 className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Clean-Up</h3>
                <p className="text-gray-600">
                  No mess left behind means you can enjoy your freshly painted space without any post-project hassle.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Calculator className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden costs or surprises means you can plan your budget confidently, knowing exactly what you're paying for.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Calendar className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Painting done at your convenience means minimal disruption to your daily life, ensuring a hassle-free experience.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedElement animation="fade-up">
            <div className="bg-primary-50 rounded-xl p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Worried About Hiring the Wrong Painters in Chennai? Let Us Prove You Wrong!
                </h2>
                
                <p className="text-lg text-gray-600 mb-12">
                  We understand that hiring a painting contractor in Chennai can feel risky. Will they show up on time? Will the work be of high quality? With Chennai Painter, you can put those worries to rest.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Star className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Over 300 completed projects across Chennai and countless happy clients.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Calculator className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Quotes</h3>
                    <p className="text-gray-600">
                      No surprises, no hidden fees—just honest pricing.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                    <p className="text-gray-600">
                      We aren't happy until you are. Your satisfaction is our top priority.
                    </p>
                  </div>
                </div>
                
                <Button variant="primary" size="lg">
                  Take the First Step Today
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </Container>
      </section>
    </main>
  );
};

export default Home;