const Landing = () => {
  return (
    <div>
      <form action="" class="form bg-white p-6 my-10 relative">
        <div class="flex space-x-5 mt-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            class="border p-2  w-1/2"
          ></input>
          <input
            type="tel"
            name=""
            id=""
            placeholder="Your Number"
            class="border p-2 w-1/2"
          ></input>
        </div>
        <input
          type="email"
          name=""
          id=""
          placeholder="Your Email"
          class="border p-2 w-full mt-3"
        ></input>
        <textarea
          name=""
          id=""
          cols="10"
          rows="3"
          placeholder="Tell us about desired property"
          class="border p-2 mt-3 w-full"
        ></textarea>
        <p class="font-bold text-sm mt-3">GDPR Agreement *</p>
        <div class="flex items-baseline space-x-2 mt-2">
          <input type="checkbox" name="" id="" class="inline-block"></input>
          <p class="text-gray-600 text-sm">
            I consent to having this website store my submitted information so
            they can respond to my inquiry.
          </p>
        </div>
        <input
          type="submit"
          value="Submit"
          class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
        ></input>
      </form>
    </div>
  );
};

export default Landing;
