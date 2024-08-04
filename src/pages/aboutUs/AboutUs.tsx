import Header from "../../components/homeComponent/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="break-words ">
        <h1 className="text-6xl font-extrabold text-center antialiased mb-4">
          History
        </h1>
        <article className="break-words min-w-full justify-center text-wrap font-sans text-2xl italic m-auto p-[1.5em]">
          Founded in 2010, CoreMuscles began as a small local shop dedicated to
          providing high-quality fitness equipment and apparel. Over the years,
          we have grown into a trusted online retailer, serving fitness
          enthusiasts across the globe. Our commitment to excellence and passion
          for fitness drives us to continually expand our product range and
          enhance our customer experience.
        </article>
      </div>
      <div className="mt-12">
        <div className="bg-base-200 collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-[#b3b3b3] text-[#055364] peer-checked:bg-[#1f8498] peer-checked:text-[#ffffff] text-6xl">
            Watch our feature about Fitness here...
          </div>
          <div className="collapse-content text-primary-content peer-checked:bg-[#cde4e8] peer-checked:text-[#01181c]">
            <section className="mb-8">
              <h2 className="text-5xl font-semibold mb-4">
                Our Fitness Philosophy
              </h2>
              <p className="min-w-full w-1/2 break-words text-ellipsis font-sans text-3xl list-disc">
                Our core values are health, wellness, community, and
                results-oriented progress
              </p>
              <p className="min-w-full w-1/2 break-words text-ellipsis font-sans text-3xl list-disc">
                Our mission is to empower individuals to achieve their optimal
                health and fitness goals through personalized guidance,
                supportive community, and innovative training methods.
              </p>
              <p className="min-w-full w-1/2 break-words text-ellipsis font-sans text-3xl list-disc">
                What sets us apart is our unwavering commitment to creating a
                transformative fitness experience that goes beyond physical
                results. We focus on holistic well-being, fostering a positive
                mindset, and building long-lasting relationships with our
                clients.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

// ?suggestion about Aboutpage
/**
 ** Fitness Features to Highlight on Your About Page
The "About Us" page is crucial for building trust and connection with your audience. It's where you showcase your fitness business's personality, values, and expertise. Here are some key features to consider highlighting:

Your Fitness Philosophy
Core values: What principles guide your business? Health, wellness, community, results-oriented?
Mission statement: Clearly articulate your purpose and goals.
Unique selling proposition (USP): What sets you apart from competitors?
Your Team
Bios of key personnel: Highlight trainers, nutritionists, or other experts.
Team photos: Show the friendly faces behind your business.
Certifications and qualifications: Demonstrate your team's expertise.
Your Approach to Fitness
Specialties: Are you focused on weight loss, strength training, yoga, or something else?
Training methods: Explain your unique approach to fitness.
Client testimonials: Share success stories to build credibility.
Your Commitment to Clients
Customer service focus: Emphasize your dedication to client satisfaction.
Personalized plans: Highlight your ability to tailor workouts to individual needs.
Supportive community: Showcase your commitment to fostering a positive environment.
Your Business Story
How it started: Share your journey and passion for fitness.
Milestones and achievements: Celebrate your successes.
Future goals: Outline your vision for the business.
Additional Tips
Use high-quality images: Visuals can enhance your message.
Keep it concise and engaging: Avoid overwhelming readers with too much information.
Optimize for SEO: Include relevant keywords to improve search visibility.
Call to action: Encourage visitors to take the next step, such as booking a consultation or signing up for a class.
By effectively communicating these features, you can create an About page that resonates with your target audience and inspires them to choose your fitness business.

Would you like to brainstorm specific content based on your fitness business?
 */
