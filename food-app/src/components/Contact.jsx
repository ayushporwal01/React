export default function Contact() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-center">Contact Us</h1>

      <form action="#">
        <div className="mt-8 space-x-3">
          <label htmlFor="fullName" className="text-xl">
            Full Name
          </label>
          <input type="text" id="fullName" className="border h-8" />
        </div>
        <div className="mt-8 space-x-3">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input type="text" id="email" className="border h-8" />
        </div>
      </form>
    </div>
  );
}
