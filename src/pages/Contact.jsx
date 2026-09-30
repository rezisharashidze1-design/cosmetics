const headingSerifClasses = "font-['Cormorant_Garamond',serif]"
const buttonClasses =
  'inline-flex items-center justify-center rounded-full border border-[#c58c73] bg-[#c58c73] px-[2.2rem] py-[0.85rem] text-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white no-underline transition-[all_0.5s_cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#ab755d] hover:bg-[#ab755d] hover:shadow-[0_30px_60px_rgba(197,140,115,0.08)]'
const outlineButtonClasses =
  'border-[#ebe3dd] bg-transparent text-[#2a2421] hover:border-[#2a2421] hover:bg-[#2a2421] hover:text-white'

function Contact() {
  return (
    <section
      id="hours"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-40"
    >
      <div className="grid gap-12 rounded-3xl border border-[#ebe3dd] bg-white p-6 shadow-[0_20px_40px_rgba(42,36,33,0.04)] md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:p-24">
        <div>
          <h2
            className={`${headingSerifClasses} mb-4 text-[2.5rem] font-normal`}
          >
            სამუშაო საათები
          </h2>
          <p className="mb-12 font-light text-[#736762]">
            გვესტუმრეთ წინასწარი ჩაწერით სასურველ დროს. ჩვენ მზად ვართ შეგიქმნათ
            საუკეთესო განწყობა.
          </p>
          <ul className="list-none">
            <li className="flex justify-between gap-4 border-b border-[#ebe3dd] py-6 text-[0.9rem] md:text-[1.05rem]">
              <span>ორშაბათი - პარასკევი</span>
              <span
                className={`${headingSerifClasses} text-[1.1rem] font-medium text-[#c58c73] md:text-xl`}
              >
                10:00 - 22:00
              </span>
            </li>
            <li className="flex justify-between gap-4 py-6 text-[0.9rem] md:text-[1.05rem]">
              <span>შაბათი - კვირა</span>
              <span
                className={`${headingSerifClasses} text-[1.1rem] font-medium text-[#c58c73] md:text-xl`}
              >
                12:00 - 19:00
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2
            className={`${headingSerifClasses} mb-4 text-[2.5rem] font-normal`}
          >
            დაგვიკავშირდით
          </h2>
          <p className="mb-12 font-light text-[#736762]">
            ვიზიტისთვის აუცილებელია წინასწარი ჩაწერა ტელეფონით ან სოციალური
            ქსელით.
          </p>
          <div className="mb-12 flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#c58c73]">
                მდებარეობა
              </span>
              <span
                className={`${headingSerifClasses} text-[1.2rem] text-[#2a2421]`}
              >
                თბილისი, საქართველო
              </span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#c58c73]">
                ტელეფონი
              </span>
              <span
                className={`${headingSerifClasses} text-[1.2rem] text-[#2a2421]`}
              >
                +995 (555) 00-00-00
              </span>
            </div>
          </div>
          <a
            href="#"
            className={`${buttonClasses} ${outlineButtonClasses} w-full`}
          >
            მოგვწერეთ ინსტაგრამზე
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
