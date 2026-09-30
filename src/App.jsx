import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const services = [
  {
    title: 'სადღესასწაულო მაკიაჟი',
    description:
      'იდეალური და მდგრადი მაკიაჟი თქვენი მნიშვნელოვანი ღონისძიებებისა და იუბილეებისთვის.',
    price: '₾ 120-დან',
  },
  {
    title: 'საქორწილო მაკიაჟი',
    description:
      'განსაკუთრებული და დახვეწილი ლუქი პატარძლებისთვის, რომელიც მთელი დღის განმავლობაში უნაკლოდ ძლებს.',
    price: '₾ 180-დან',
  },
  {
    title: 'ყოველდღიური & Nude',
    description:
      'მსუბუქი, ბუნებრივი მაკიაჟი ყოველდღიური თავდაჯერებულობისა და სუფთა ვიზუალისთვის.',
    price: '₾ 90-დან',
  },
]

const buttonClasses =
  'inline-flex items-center justify-center rounded-full border border-[#c58c73] bg-[#c58c73] px-[2.2rem] py-[0.85rem] text-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white no-underline transition-[all_0.5s_cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#ab755d] hover:bg-[#ab755d] hover:shadow-[0_30px_60px_rgba(197,140,115,0.08)]'
const outlineButtonClasses =
  'border-[#ebe3dd] bg-transparent text-[#2a2421] hover:border-[#2a2421] hover:bg-[#2a2421] hover:text-white'
const headingSerifClasses = "font-['Cormorant_Garamond',serif]"

function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center bg-[radial-gradient(circle_at_80%_20%,rgba(228,211,201,0.4)_0%,transparent_50%),radial-gradient(circle_at_10%_80%,rgba(197,140,115,0.08)_0%,transparent_40%)] px-6 pb-16 pt-32 md:px-12 md:pb-20">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-8 inline-flex items-center rounded-full border border-[#ebe3dd] bg-[#f2ede9] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#c58c73]">
              მინიმალისტური ლუქს სტუდია
            </span>
            <h1
              className={`${headingSerifClasses} mb-7 text-[clamp(3rem,5vw,5rem)] font-normal leading-[1.1] tracking-[-0.01em]`}
            >
              პროფესიონალური{' '}
              <span className="text-[#c58c73] italic">მაკიაჟი</span> თქვენი
              განსაკუთრებული დღისთვის
            </h1>
            <p className="mb-12 max-w-[500px] text-[1.05rem] font-light text-[#736762]">
              ხელოვნება, რომელიც ხაზს უსვამს თქვენს ბუნებრივ სილამაზეს. პრემიუმ
              კლასის პროდუქტები და ინდივიდუალური მიდგომა თითოეული კლიენტისთვის.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className={buttonClasses}>
                Book Now &rarr;
              </Link>
              <Link
                to="/#services"
                className={`${buttonClasses} ${outlineButtonClasses}`}
              >
                სერვისები
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-[#ebe3dd] bg-[#f2ede9] shadow-[0_20px_40px_rgba(42,36,33,0.04)]">
              <img
                src="https://placehold.co/1600x1000/F2EDE9/C58C73?text=Professional+Makeup+Studio+8K"
                alt="Inga's Cosmetics Makeup Studio"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-4 rounded-2xl border border-[#ebe3dd] bg-[rgba(255,255,255,0.9)] px-6 py-5 shadow-[0_20px_40px_rgba(42,36,33,0.04)] backdrop-blur-xl lg:-bottom-6 lg:-left-8">
              <div className="h-[10px] w-[10px] rounded-full bg-[#4a8c5d] shadow-[0_0_10px_rgba(74,140,93,0.4)]" />
              <div>
                <span className="block text-[0.75rem] uppercase tracking-[0.1em] text-[#736762]">
                  სტუდიის სტატუსი
                </span>
                <strong className="text-[0.95rem] font-semibold text-[#2a2421]">
                  მიიღება ჯავშნები
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-40"
      >
        <div className="mx-auto mb-16 max-w-[650px] text-center md:mb-24">
          <p className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-[#c58c73]">
            ექსკლუზიური შემოთავაზება
          </p>
          <h2
            className={`${headingSerifClasses} text-[clamp(2.5rem,4vw,3.5rem)] font-normal`}
          >
            ჩვენი სერვისები
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#ebe3dd] bg-white p-8 shadow-[0_20px_40px_rgba(42,36,33,0.04)] transition-[all_0.5s_cubic-bezier(0.16,1,0.3,1)] before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-[#c58c73] before:transition-transform hover:-translate-y-1.5 hover:border-[#c58c73] hover:shadow-[0_30px_60px_rgba(197,140,115,0.08)] hover:before:scale-x-100 md:p-14"
              key={service.title}
            >
              <div>
                <h3
                  className={`${headingSerifClasses} mb-4 text-[2rem] font-normal`}
                >
                  {service.title}
                </h3>
                <p className="mb-12 font-light text-[#736762]">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-[#ebe3dd] pt-8">
                <div
                  className={`${headingSerifClasses} text-[1.6rem] font-medium text-[#c58c73]`}
                >
                  {service.price}
                </div>
                <Link
                  to="/contact"
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#2a2421] no-underline transition-colors hover:text-[#c58c73]"
                >
                  არჩევა &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf9f7] font-['Plus_Jakarta_Sans',sans-serif] leading-[1.8] text-[#2a2421] antialiased">
      <header className="fixed left-0 top-0 z-[1000] w-full border-b border-[#ebe3dd] bg-[rgba(251,249,247,0.8)] backdrop-blur-2xl transition-all duration-500">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
          <Link
            to="/"
            className={`${headingSerifClasses} text-[1.75rem] font-semibold tracking-[0.05em] text-[#2a2421] no-underline`}
          >
            INGA&apos;S <span className="text-[#c58c73] italic">COSMETICS</span>
          </Link>
          <nav aria-label="მთავარი ნავიგაცია">
            <ul className="hidden list-none gap-12 md:flex">
              <li>
                <Link
                  to="/#services"
                  className="text-[0.8rem] font-medium uppercase tracking-[0.2em] text-[#736762] no-underline transition-colors hover:text-[#c58c73]"
                >
                  სერვისები
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[0.8rem] font-medium uppercase tracking-[0.2em] text-[#736762] no-underline transition-colors hover:text-[#c58c73]"
                >
                  ჩვენ შესახებ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[0.8rem] font-medium uppercase tracking-[0.2em] text-[#736762] no-underline transition-colors hover:text-[#c58c73]"
                >
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/contact" className={`${buttonClasses} hidden md:inline-flex`}>
            დაჯავშნე ვიზიტი
          </Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="border-t border-[#ebe3dd] bg-[#f2ede9] px-6 py-12 text-center md:px-12 md:py-16">
        <p className="text-[0.8rem] uppercase tracking-[0.15em] text-[#736762]">
          &copy; 2024 Inga&apos;s Cosmetics. ყველა უფლება დაცულია.
        </p>
      </footer>
    </div>
  )
}

export default App
