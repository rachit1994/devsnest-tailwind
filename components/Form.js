const Form = () => (
  <section className="py-20">
    <div className="container">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">
          Form Example
        </h1>
      </div>
      <iframe
        name="dummyframe"
        id="dummyframe"
        style={{ display: "none" }}
      ></iframe>
      <form
        className="grid grid-cols-1 gap-6"
        action="/action_page.php"
        method="post"
        target="dummyframe"
      >
        <label className="block">
          <span className="text-gray-700">Full name</span>
          <input
            type="text"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder=""
            name="full_name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email address</span>
          <input
            type="email"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="john@example.com"
            name="email"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">When is your event?</span>
          <input
            type="date"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            name="event_date"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">What type of event is it?</span>
          <select
            className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            name="type"
          >
            <option>Corporate event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">Additional details</span>
          <textarea
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            rows="3"
            name="details"
          ></textarea>
        </label>
        <div className="block">
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="
                          rounded
                          bg-gray-200
                          border-transparent
                          focus:border-transparent focus:bg-gray-200
                          text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "
                    name="check"
                />
                <span className="ml-2">Email me news and special offers</span>
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase"
        >
          Login
        </button>
      </form>
    </div>
  </section>
);

export default Form;
