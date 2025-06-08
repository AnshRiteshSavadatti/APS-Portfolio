function HomePage() {
  return (
    <div className="p-6 md:p-10 bg-white rounded-2xl shadow-lg space-y-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700">
        📘 Algorithmic Problem Solving
      </h1>

      {/* Course Info Box */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-400 shadow space-y-3">
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">Course Name:</span>{" "}
          Algorithmic Problem Solving
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">Course Code:</span>{" "}
          23ECSE309
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">Name:</span> Ansh R.
          Savadatti
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">SRN:</span>{" "}
          01FE222BCS233
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">
            Course Instructor:
          </span>{" "}
          Prakash Hegade
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">University:</span> KLE
          Technological University, Hubballi-31
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-blue-700">Portfolio Domain:</span>{" "}
          Google
        </p>
      </div>

      {/* Why Google Section */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow space-y-6 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700">🌟 Why Google?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Google is not just a tech company—it's a{" "}
          <span className="font-semibold text-blue-700">
            problem-solving powerhouse
          </span>{" "}
          that leverages cutting-edge algorithms, data structures, and
          large-scale systems to impact billions of lives daily. From search and
          video recommendations to cloud computing and autonomous driving,
          Google builds products that scale with intelligence, speed, and trust.
        </p>

        {/* Point 1 */}
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-400 space-y-2">
          <h3 className="text-xl font-semibold text-blue-700">
            🚀 1. A Playground for Problem Solvers
          </h3>
          <p className="text-gray-700">
            At its core, Google is a company built by engineers who solve tough
            challenges with elegant code. Whether it's ranking web pages,
            optimizing YouTube recommendations, or building distributed systems
            like Bigtable or Spanner, Google relies heavily on:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Advanced algorithms (e.g., PageRank, MapReduce, Paxos)</li>
            <li>
              Optimized data structures (e.g., tries, graphs, bloom filters, LSM
              trees)
            </li>
            <li>
              Scalable architecture (handling petabytes of data in milliseconds)
            </li>
          </ul>
          <p className="text-gray-700">
            For someone trained in Algorithmic Problem Solving, this environment
            is both natural and inspiring.
          </p>
        </div>

        {/* Point 2 */}
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-400 space-y-2">
          <h3 className="text-xl font-semibold text-blue-700">
            🧠 2. Innovation at Unprecedented Scale
          </h3>
          <p className="text-gray-700">
            Google products operate at unimaginable scale:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Over 100,000 Google searches every second</li>
            <li>Billions of hours of YouTube watched daily</li>
            <li>Cloud infrastructure serving millions of businesses</li>
          </ul>
          <p className="text-gray-700">
            Solving problems at this level requires not just understanding
            theory, but translating algorithms into systems that are fast,
            reliable, and intelligent. Working on such systems aligns directly
            with the kind of analytical thinking and design focus that the APS
            course nurtures.
          </p>
        </div>

        {/* Point 3 */}
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-400 space-y-2">
          <h3 className="text-xl font-semibold text-blue-700">
            🔬 3. Research-Driven Engineering
          </h3>
          <p className="text-gray-700">
            Google is one of the few companies that invests deeply in
            research-backed engineering. From:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>AI & ML (Google DeepMind, Gemini, TensorFlow)</li>
            <li>Systems (Spanner, Borg, Colossus)</li>
            <li>HCI (Material Design, Android OS)</li>
          </ul>
          <p className="text-gray-700">
            The company thrives on pushing the frontier of what's possible with
            computer science. As someone who values understanding the "why"
            behind the solution, not just the "what," I find Google’s
            engineering rigor and scientific thinking a perfect fit.
          </p>
        </div>

        {/* Point 4 */}
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-400 space-y-2">
          <h3 className="text-xl font-semibold text-blue-700">
            🌐 4. Impact at Global Scale
          </h3>
          <p className="text-gray-700">
            Every data structure optimized at Google:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Reduces latency for billions of users</li>
            <li>Improves accessibility for people with disabilities</li>
            <li>Powers faster disaster alerts or real-time translations</li>
          </ul>
          <p className="text-gray-700">
            This unique blend of scale and social good makes Google one of the
            best places to apply algorithmic thinking with meaningful impact.
          </p>
        </div>

        {/* Point 5 */}
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-400 space-y-2">
          <h3 className="text-xl font-semibold text-blue-700">
            🌈 5. Culture of Learning, Collaboration, and Growth
          </h3>
          <p className="text-gray-700">
            From legendary code reviews to open design docs and peer learning,
            Google fosters a culture where:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Engineers grow constantly</li>
            <li>Knowledge is shared</li>
            <li>Collaboration trumps ego</li>
          </ul>
          <p className="text-gray-700">
            It aligns perfectly with my values as an aspiring engineer who
            thrives in feedback-driven, innovation-first teams.
          </p>
        </div>

        {/* Final Inference */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-300">
          <p className="text-blue-800 text-lg font-medium leading-relaxed">
            ✅ <span className="font-semibold">Final Note :</span>
            <br />
            As someone deeply trained in algorithmic thinking, problem
            decomposition, and performance optimization, I see Google as the
            ideal convergence point of challenging engineering, intellectual
            rigor, and global impact. Joining Google would not just fulfill a
            dream—it would be a natural continuation of the problem-solving
            mindset I have cultivated through the APS journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
