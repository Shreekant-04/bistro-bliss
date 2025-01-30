import mapImg from "../../assets/map-img.png";
const BookTable = () => {
  return (
    <main
      className="mt-[16vh] md:mt-[12vh] lg:mt-[19vh] flex flex-col items-center justify-center text-center py-8 px-4 gap-4"
      style={{
        background: `linear-gradient(180deg, #F9F9F7 50%, rgba(249, 249, 247, 0) 50%),
    url(${mapImg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <div className="flex flex-col justify-between items-center gap-4 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium">
          Book A Table
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 text-[#3d3f38b0]">
          Easily book your table by filling out the reservation form. Select
          your preferred date and time, and we’ll confirm your booking for a
          seamless dining experience.
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl shadow-xl  p-8 bg-white rounded-lg">
        <label className="flex flex-col justify-start items-start col-span-1">
          Date
          <input
            type="date"
            className="border border-gray-300 p-[13px] rounded-xl w-full"
            required
          />
        </label>
        <label className="flex flex-col justify-start items-start col-span-1">
          Time
          <select
            className="border border-gray-300 p-4 rounded-xl w-full"
            required
          >
            <option value="" disabled selected>
              Select Time
            </option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
        </label>
        <label className="flex flex-col justify-start items-start col-span-1 ">
          Name
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-4 rounded-xl w-full"
            required
          />
        </label>
        <label className="flex flex-col justify-start items-start col-span-1 ">
          Phone
          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 p-4 rounded-xl w-full"
            required
          />
        </label>
        <label className="flex flex-col justify-start items-start col-span-1 md:col-span-2 w-full">
          Total Persons
          <select
            className="border border-gray-300 p-4 rounded-xl  w-full"
            required
          >
            <option value="" disabled selected>
              Total Persons
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-[#AD343E] text-white p-4 rounded-xl hover:bg-[#2c2d27] col-span-1 md:col-span-2"
        >
          Book Now
        </button>
      </form>
    </main>
  );
};

export default BookTable;
