import { Link } from 'react-router-dom'

const headingSerifClasses = "font-['Cormorant_Garamond',serif]"
const buttonClasses =
  'inline-flex items-center justify-center rounded-full border border-[#c58c73] bg-[#c58c73] px-[2.2rem] py-[0.85rem] text-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white no-underline transition-[all_0.5s_cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#ab755d] hover:bg-[#ab755d] hover:shadow-[0_30px_60px_rgba(197,140,115,0.08)]'

function About() {
  return (
    <section id="about" className="bg-[#f2ede9] px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative order-first grid grid-cols-[1.2fr_1fr] gap-4 md:gap-8">
          <div className="aspect-[4/5] overflow-hidden rounded-[20px] border border-[#ebe3dd] shadow-[0_20px_40px_rgba(42,36,33,0.04)]">
            <img
              src="https://placehold.co/800x1000/E4D3C9/2A2421?text=Detail+One"
              alt="Makeup Detail"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-12 aspect-[4/5] overflow-hidden rounded-[20px] border border-[#ebe3dd] shadow-[0_20px_40px_rgba(42,36,33,0.04)]">
            <img
              src="https://placehold.co/800x1000/F2EDE9/C58C73?text=Detail+Two"
              alt="Cosmetic Products"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div>
          <h2
            className={`${headingSerifClasses} mb-6 text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.15]`}
          >
            სილამაზე იქმნება დეტალებში
          </h2>
          <p className="mb-8 text-[1.05rem] font-light text-[#736762]">
            ინგას კოსმეტიკსი სრულად არის კონცენტრირებული მაკიაჟის უმაღლესი
            ხარისხის მომსახურებაზე. ჩვენ ვიყენებთ მხოლოდ წამყვანი მსოფლიო
            ბრენდების პრემიუმ კლასის კოსმეტიკას.
          </p>
          <div className="my-12 grid grid-cols-1 gap-6 border-y border-[#ebe3dd] py-8 md:grid-cols-2 md:gap-8">
            <div>
              <h3
                className={`${headingSerifClasses} mb-2 text-[1.35rem] font-medium`}
              >
                100% მდგრადი
              </h3>
              <p className="text-[0.9rem] text-[#736762]">
                ფორმულები მთელი დღის კომფორტისთვის
              </p>
            </div>
            <div>
              <h3
                className={`${headingSerifClasses} mb-2 text-[1.35rem] font-medium`}
              >
                ინდივიდუალური
              </h3>
              <p className="text-[0.9rem] text-[#736762]">
                მორგებული თქვენს ფენოტიპზე
              </p>
            </div>
          </div>
          <Link to="/contact" className={buttonClasses}>
            გაიგე მეტი
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
