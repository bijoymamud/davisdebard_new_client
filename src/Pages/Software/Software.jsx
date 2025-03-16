import React from "react";
import softImg from "../../assets/SoftwareImg.png"

const Software = () => {
  return (
    <section className="bg-[#FDFBF5] py-10 px-3 md:px-20">
     <div className="border-2 border-yellow-200 max-w-6xl mx-auto md:p-10 p-5 bg-white">
         {/* Header Section */}
      <div className=" mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Benefits</h2>
        <p className="text-[#0093A9] font-medium mb-6">
          <a href="/" className="underline">
            AiTAiN.Ai Achieve Dreams™
          </a>{" "}
          software is a thrilling new way of getting answers on the internet.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          One Search Engine Is Not Enough
        </h3>
        <p className="text-gray-700 mb-4">
          Have you ever asked Chat GPT a question, but were not satisfied with
          the answer? If you answered “No, never”, you haven’t been using it
          very long.
        </p>
        <p className="text-gray-700">
          What do you do next? Ask the same question in Google? Or some other
          major generative AI site, like Claude? One search engine is not
          enough.
        </p>
      </div>

      {/* Problems Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          The Problems With Re-Typing
        </h3>
        <p className="text-gray-700 mb-6">
          When you go to an alternative search source, you have to start over
          again. This presents a variety of issues:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-white cursor-pointer">
            <h4 className="font-semibold mb-2">Re-Typing</h4>
            <p className="text-gray-600 text-sm">
              You must retype what you just finished typing, or at least cut and
              paste.
            </p>
          </div>

          {/* Box 2 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-white cursor-pointer">
            <h4 className="font-semibold mb-2">Rebuild A Chat</h4>
            <p className="text-gray-600 text-sm">
              If you had built up a conversation, known as a “chat”, to get
              similar responses, you must rebuild this same chat in another
              place.
            </p>
          </div>

          {/* Box 3 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-white md:col-span-2 cursor-pointer">
            <h4 className="font-semibold mb-2">Find Your Questions</h4>
            <p className="text-gray-600 text-sm">
              Since tools like Chat GPT operate on a continuous scroll, you will
              have to locate each of your previous questions. It is easy to miss
              them, which will make your chat inconsistent.
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <p className="text-gray-700">
          <strong>AiTAiN.Ai</strong> Achieve Dreams™ Software solves these
          issues. Just click a button to move to a different search engine, and
          your entire chat will be redirected there.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-6">
        <img
          src={softImg}
          alt="AI Memory"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Sweet Memories</h3>
          <p className="text-gray-700 mb-4">
            Some search engines remember and categorize your entries, but ours
            does so across multiple search engines.
          </p>
          <ul className="text-gray-700 space-y-2 cursor-pointer">
            <li>✅ Remembers all your chats.</li>
            <li>✅ You can pick up where you left off.</li>
            <li>✅ You can redirect to a different search tool, anytime.</li>
            <li>✅ You can search your previous chats for any keywords you like.</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            There are space limitations on this by the type of plan you choose,
            but you are unlikely to run into space concerns for any reasonably
            short term, like weeks.
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Summary</h3>
        <p className="text-gray-700">
          <span className="text-[#FFD700] font-bold">AiTAiN.Ai</span> is about
          using the very best AI tools all at once, not one at a time. In the
          future, we will enlarge our offerings, so you can get your favorite AI
          tools working together for you in one place. Our interface will grow to
          give you increased advantages over working with AI tools separately.
        </p>
        <p className=" text-gray-700 mt-4">
          Artificial Intelligence is leverage. <span className="text-gray-800 font-semibold">AiTAiN.Ai</span> takes leverage on
          leverage.
        </p>
      </div>

     </div>
     
 <div className=" ">
 <div className="space-y-5 pt-20 max-w-6xl mx-auto">
  {/* Section: A Look Inside */}
  <div className="border border-yellow-300 bg-yellow-50 p-10 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">A Look Inside</h3>
    <p className="text-gray-700">
      This panel defines a new software category called "AI Unifier". It unifies four of the leading artificial 
      intelligence tools into a single session. Here’s what you get: a blend of the top AI engines with almost 
      zero effort. It’s the future!
    </p>
  </div>

  {/* Section: Pick Up Where You Left Off */}
  <div className="border border-blue-300 bg-blue-50 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Pick Up Where You Left Off</h3>
    <p className="text-gray-700">
      Another major advantage of AI Unifier is that it remembers your input with no effort on your part. 
      You can search your past usage across multiple AI platforms in one place.
    </p>
  </div>

  {/* Section: Try It Today */}
  <div className="text-center mt-20 ">
    <h3 className="text-3xl font-bold text-gray-800 mt-20">Try It Today</h3>
  </div>

  {/* Section: Get Started For Free */}
  <div className="border border-yellow-400 bg-yellow-100 p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-3">
      <img src="https://i.ibb.co.com/4nXxLQZd/Group.png" alt="Limited Offer" className="h-20" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Started For Free</h3>
    <p className="text-gray-700 mb-4">
      Experience the power of AI with our no-obligation 7-day trial.
    </p>
    <button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
      Start Free 7-Day Trial
    </button>
    <p className="text-sm text-gray-600 mt-2">No credit card required. Cancel anytime.</p>
  </div>
</div>

 </div>
    </section>
  );
};

export default Software;
