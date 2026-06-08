import styles from "./contact.module.css";

export default function Contact() {
  const issueOptions = [
    "Order not delivered",
    "Late delivery",
    "Wrong item received",
    "Missing items",
    "Payment failed",
    "Amount deducted but order not placed",
    "Refund issue",
    "Unable to apply coupon",
    "Restaurant unavailable",
    "Food quality issue",
    "App crashing or not working",
    "Unable to log in",
    "Address/location issue",
    "Order cancellation issue",
    "Need invoice or receipt",
    "Account issue",
    "Delivery partner issue",
    "Technical issue",
    "Suggestion or feedback",
    "Other",
  ];

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>

      <form action="#" className="flex flex-col items-center">
        <div className={styles.formItems}>
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className={styles.formInput}
          />
        </div>

        <div className={styles.formItems}>
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className={styles.formInput}
          />
        </div>

        <div className={styles.formItems}>
          <label htmlFor="issue" className="text-xl">
            Issue
          </label>
          <select name="" id="issue" className="border px-1.5 h-8">
            <option value="">Select an Issue</option>

            {issueOptions.map((issue, index) => (
              <option key={index} value={issue}>
                {issue}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-black text-white w-full py-1.5 text-lg rounded-lg mt-5 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
