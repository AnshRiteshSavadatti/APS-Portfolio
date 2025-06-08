function GCP() {
  return (
    <div className="bg-white text-gray-800 px-6 py-10 md:px-16 lg:px-24 space-y-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        ☁️ Business Case: Scalable and Consistent Realtime Data Sync in Firebase
        Realtime Database
      </h1>

      {/* 1. Use Case */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
          📌 1. Use Case / Business Problem
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Problem Statement:</strong> Google Firebase needs to{" "}
          <span className="text-blue-600 font-medium">
            synchronize user data across multiple clients
          </span>{" "}
          (e.g., mobile/web) in real time — such as chat apps, collaborative
          editing, or live dashboards — without performance degradation at
          scale.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Hierarchical, nested data (users/rooms/messages)</li>
          <li>Concurrent updates from millions of users</li>
          <li>Real-time push updates to subscribed clients</li>
          <li>Low-latency reads/writes for mobile-friendly performance</li>
        </ul>
      </section>

      {/* 2. Design Techniques & DS */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          🧠 2. Design Techniques & Data Structures
        </h2>

        {/* A. Hierarchical */}
        <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-blue-400 mb-6 shadow">
          <h3 className="text-xl font-semibold text-blue-700">
            📁 A. Hierarchical Data Modeling
          </h3>
          <p className="text-gray-700">
            📦 <strong>Data Structure:</strong>{" "}
            <span className="font-semibold text-blue-600">Trie</span>
          </p>
          <p className="mt-2 text-gray-700 italic">
            Design Advantage: Easy to store and traverse nested keys
            efficiently.
          </p>
          <p className="mt-2 text-gray-700">
            The Trie data structure is a tree-like structure used for storing a
            dynamic set of strings. It allows for efficient retrieval and
            storage of keys, making it highly effective in handling large
            datasets. Trie supports operations such as insertion, search,
            deletion of keys, and prefix searches.
            <p>
              Firebase Realtime Database is a NoSQL hierarchical database where
              data is stored in paths like:{" "}
              <strong>/users/123/messages/456/text</strong>
              This type of hierarchical key system naturally maps to a Trie.
            </p>
            <p>
              Firebase leverages a Trie-like data model to store and traverse
              deeply nested JSON-like data paths. This design enables
              low-latency access, real-time listener notification, and efficient
              memory usage via prefix sharing. Trie’s structure aligns perfectly
              with Firebase’s hierarchical data format and offers significant
              performance benefits in both access and sync.
            </p>
          </p>
          {/* Image: Trie diagram */}
          <div className="mt-4 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
            {/* Image: Trie Structure  https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aJxRGNYe52CE_bVRt0E1Eg.gif */}
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aJxRGNYe52CE_bVRt0E1Eg.gif"
              alt="Trie Diagram"
              className="h-full object-contain"
            />
          </div>
          <p className="flex justify-center  text-gray-700">Trie</p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Code:{" "}
            <a
              href="https://www.geeksforgeeks.org/trie-insert-and-search/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Trie Data Structure
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Source:{" "}
            <a
              href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/trie.cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Trie Implementation
            </a>
          </p>
        </div>

        {/* B. Indexing */}
        <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-blue-400 mb-6 shadow">
          <h3 className="text-xl font-semibold text-blue-700">
            ⚡ B. Efficient Indexing & Range Queries
          </h3>
          <p className="text-gray-700">
            📦 <strong>Data Structures:</strong>{" "}
            <span className="font-semibold text-blue-600">
              LSM Trees / B-Trees
            </span>
            <p>
              This overview focuses on two foundational data structures—B-Trees
              and Log-Structured Merge Trees (LSM Trees)—widely used in modern
              databases and key-value stores.{" "}
            </p>
            <p>
              When evaluating the efficiency of data structures, especially
              those used in storage systems, it’s essential to consider how they
              impact overall performance. Three fundamental metrics write
              amplification, read amplification, and space amplification—provide
              insight into how much overhead a data structure introduces during
              typical operations. These metrics are particularly relevant for
              systems relying on modern flash-based storage, where random I/O
              patterns behave differently compared to traditional hard disk
              drives (HDDs).
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>
                <strong>Write Amplification</strong>: Measures how much actual
                data is written to storage compared to what the application
                intended. High write amplification wears out flash storage
                faster.
              </li>
              <li>
                <strong>Read Amplification</strong>: Measures how many disk
                reads are required to satisfy a query. A lower read
                amplification means faster query performance, especially for
                point and range queries.
              </li>
              <li>
                <strong>Space Amplification</strong>: Indicates how much extra
                storage is used beyond the actual data size. A high value
                implies inefficient space usage.
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600 italic">
              ⚠️ <strong>Trade-off Rule</strong>: Data structures typically
              can't optimize all three metrics simultaneously—improving one
              often worsens the others. For example, B-Trees are better for
              reads, while LSM-Trees reduce writes.
            </p>
            <div class="mt-4 text-gray-700">
              <p>
                <strong>B-Trees</strong> are an advanced form of binary search
                trees where each node can have more than two children.
              </p>

              <p class="mt-2">There are two types of nodes:</p>
              <ul class="list-disc list-inside mt-1">
                <li>
                  <strong>Internal nodes</strong>: These act like branches and
                  can have multiple child nodes.
                </li>
                <li>
                  <strong>Leaf nodes</strong>: These are the end nodes that
                  store the actual data and have no children.
                </li>
              </ul>

              <p class="mt-2">
                Internal nodes can be split or merged as needed to keep the tree
                balanced.
              </p>
            </div>
            <div class="mt-6 text-gray-700 max-w-xl">
              {/* <h2 class="text-xl font-semibold mb-3">
                Level-Based LSM-Tree (Simplified)
              </h2> */}
              <p>
                In a <strong>Level-based LSM-tree</strong>, data is organized
                into different levels, like shelves in a library. Each level
                holds sorted data.
              </p>
              <ul class="list-disc list-inside mt-2 space-y-1">
                <li>
                  New data is first written to <strong>Level 0</strong>.
                </li>
                <li>
                  When Level 0 fills up, it is merged into{" "}
                  <strong>Level 1</strong>.
                </li>
                <li>
                  When Level 1 gets full, it merges into{" "}
                  <strong>Level 2</strong>, and so on.
                </li>
              </ul>
              <p class="mt-3">
                Each level can only grow to a certain size, which is larger than
                the previous level by a factor called the{" "}
                <strong>growth factor (k)</strong>. For example:
              </p>
              <pre class="bg-gray-100 p-3 rounded font-mono text-sm mt-2">
                Level 1 = Level 0 × k Level 2 = Level 1 × k
              </pre>
              <p>
                The total number of levels depends on the size of your data (
                <code>N</code>), the smallest file size (<code>B</code>), and
                the growth factor:
              </p>
              <p class="italic mt-2">
                Number of levels ≈ log base <code>k</code> of (N / B)
              </p>

              <h3 class="mt-6 font-semibold">Visual Analogy: Stacking Boxes</h3>
              <p>Imagine stacking boxes where:</p>
              <ul class="list-disc list-inside mt-2 space-y-1">
                <li>The smallest box is Level 0, holding the newest data.</li>
                <li>
                  When it’s full, you combine it into a bigger box (Level 1).
                </li>
                <li>
                  That bigger box eventually goes into an even bigger box (Level
                  2), and so forth.
                </li>
              </ul>
              <p class="mt-3">
                Each bigger box holds roughly <strong>k times</strong> more data
                than the previous one, making it easier to organize and manage
                large amounts of data efficiently.
              </p>
            </div>
          </p>
          <p className="mt-2 text-gray-700">
            LSM Trees are used in Firestore; B-Trees likely in Bigtable.
          </p>
          {/* Image: LSM Tree vs B-Tree */}
          <div className="mt-4 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
            <img
              src="https://tikv.org/img/deep-dive/b-tree.png"
              alt="B-Tree Diagram"
            />
          </div>
          <p className="flex justify-center  text-gray-700">B-tree</p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Code:{" "}
            <a
              href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/b_tree.py"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              b-tree
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Code:{" "}
            <a
              href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/lsm_tree.py"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              lsm-tree
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Source:{" "}
            <a
              href="https://tikv.org/deep-dive/key-value-engine/b-tree-vs-lsm/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              B-Tree vs LSM-Tree
            </a>
          </p>
        </div>

        {/* C. Merkle Tree */}
        <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-blue-400 mb-6 shadow">
          <h3 className="text-xl font-semibold text-blue-700">
            🔐 C. Consistency & Verification
          </h3>
          <p className="text-gray-700">
            📦 <strong>Data Structure:</strong>{" "}
            <span className="font-semibold text-blue-600">Merkle Trees</span>
          </p>
          <p className="mt-2 text-gray-700">
            <p>
              <div class="mt-4 text-gray-700 ">
                <p>
                  A <strong>Merkle Tree</strong> is like a family tree made of
                  hash values. At the bottom are the actual pieces of data
                  (called <em>leaves</em>). These data pieces get hashed (turned
                  into short, unique codes).
                </p>
                <p class="mt-2">
                  Then, pairs of these hashes are combined and hashed again to
                  make the next level of the tree (called <em>branches</em>).
                  This process continues up the tree until there’s a single hash
                  at the top, called the <strong>Merkle root</strong>.
                </p>
                <p class="mt-2">
                  This root represents a summary of all the data below it.
                </p>
              </div>
            </p>
            <p>
              When building a Merkle tree, you usually pair up data nodes to
              create hashes. But what if you have an odd number of data nodes,
              like 5? You can pair the first four nodes easily (Data1 with
              Data2, Data3 with Data4), but the last one (Data5) doesn’t have a
              partner to pair with.
            </p>
            <p class="mt-2">
              To solve this, some systems—like Bitcoin—just copy the last data’s
              hash and pair it with itself. So Data5’s hash gets duplicated and
              combined with itself to form a pair. This way, the tree stays
              balanced, and all data is included.
            </p>
            <p class="mt-2 italic text-gray-600">
              As we can look at the figure below for a visual illustration.
            </p>
            <br />
            <h2 class="text-xl font-semibold mb-2">
              How Google Uses Merkle Trees
            </h2>
            <p>
              Google’s systems are huge and spread across many data centers
              worldwide. They store and share data across many copies (called
              replicas) to keep everything reliable.
            </p>
            <p class="mt-3">
              To make sure these copies stay the same, Google uses{" "}
              <strong>Merkle Trees</strong> — a smart way to check if data
              matches without examining all of it.
            </p>
            <ul class="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Firebase</strong> breaks its data into smaller parts and
                creates a unique hash for each part using Merkle Trees. Instead
                of comparing all data, it just compares the top hash (the{" "}
                <em>Merkle root</em>). If the roots don’t match, it looks deeper
                only where there are differences.
              </li>
              <li>
                When syncing data between data centers (Asia, US, Europe),
                Google compares the Merkle roots of each replica. If they
                differ, it uses a binary search through the tree to find exactly
                where the mismatch is.
              </li>
            </ul>
            <h3 class="mt-6 font-semibold">Bigtable and Google Photos</h3>
            <ul class="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Google Bigtable</strong> uses Merkle Trees to ensure
                data correctness when merging files called SSTables. This helps
                prevent data loss or corruption.
              </li>
              <li>
                <strong>Google Photos</strong> uses a version of Merkle Trees to
                check if a photo or album is already uploaded, avoiding
                unnecessary uploads by quickly comparing files.
              </li>
            </ul>
            <p className="mt-2 text-gray-700 italic">
              Google uses Merkle Trees to efficiently detect and reconcile data
              inconsistencies across distributed nodes without comparing entire
              datasets. In Firebase, it ensures client-server consistency; in
              Spanner and Bigtable, it guarantees replica correctness during
              replication and merges. This technique drastically reduces data
              transfer and enhances integrity, making it ideal for cloud-scale
              systems.
            </p>
          </p>
          {/* Image: Merkle Tree https://miro.medium.com/v2/resize:fit:750/format:webp/1*wNm1yknGeuiSQyIFYxHrhA.png */}
          <div className="mt-4 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
            <img
              src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*wNm1yknGeuiSQyIFYxHrhA.png"
              alt="Merkel-tree Diagram"
              className="h-full object-container"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Code:{" "}
            <a
              href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/merkle_tree.py"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Merkle Tree
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Source:{" "}
            <a
              href="https://medium.com/coinmonks/merkle-trees-concepts-and-use-cases-5da873702318"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Merkle Trees
            </a>
          </p>
        </div>

        {/* D. Caching */}
        <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-blue-400 mb-6 shadow">
          <h3 className="text-xl font-semibold text-blue-700">
            🚀 D. Caching and Deduplication
          </h3>
          <p className="text-gray-700">
            📦 <strong>Data Structures:</strong>{" "}
            <span className="font-semibold text-blue-600">
              Hash Maps, Bloom Filters
            </span>
          </p>
          <p className="mt-2 text-gray-700">
            Used to reduce latency and redundant I/O via probabilistic caching.
            Bloom filter is a probabilistic data structure. <br /> They are
            similar in nature to HashMaps, but instead of keeping key and value,
            they only store whether this key is seen or not. They are used to
            answer the question — is the element present ? And bloom filter
            answers with a ‘firm NO’ or a ‘probabilistic YES’.
            <br /> It is basically using a bit array and multiple hash
            functions. The bit array holds 1s and 0s to depict whether the item
            is in probably present or not present. The hash functions are used
            to get the hashed value to be marked as ‘1’ for any input that needs
            to be added to bloom filter.
            <br />
            <br />
            Google Bigtable (used internally and in GCP) stores huge volumes of
            data. To improve read performance and avoid unnecessary disk
            lookups, Bloom filters are used to determine whether a row exists in
            an SSTable before reading from disk.
            <p>
              In Google Safe Browsing (e.g., Chrome): When you open a site,
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Chrome first hashes the URL.</li>
                <li>using stored Safe Browsing bloom filters.</li>
                <li>Bloom filter check is made</li>
                <li>If not found, no action needed. </li>
                <li>
                  If possibly found, then a deeper full-list query is made to
                  Google servers.{" "}
                </li>
              </ul>
            </p>
            <br /> Consider the example and lets use two hash functions here —
            Lets add “Mint” to our bloom filter. <br /> HashFunction1(“Mint”) =
            10% 8= 2 <br />
            HashFunction2(“Mint”) = 13 % 8= 5
          </p>
          {/* Image: Bloom Filter */}
          <div className="mt-4 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*9qjYS-YMG04b0RXAZ3QoVQ.png"
              alt="Merkel-tree Diagram"
              className="h-full object-container"
            />
          </div>
          <p className="mt-2 text-gray-700 flex justify-center">
            Bloom filter with the entry (“Mint”)
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Code:{" "}
            <a
              href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/bloom_filter.py"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Bloom Filter
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Source:{" "}
            <a
              href="https://medium.com/@shwetasmemane/bloom-filters-a-fancy-hashmap-c802e00bbced"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Bloom Filters – A Fancy HashMap by Shweta Memane
            </a>
          </p>
        </div>

        {/* E. Graphs */}
      </section>

      {/* 3. Time & Space Complexity Table */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          ⏱️ 3. Time & Space Complexity Analysis
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-blue-100 text-blue-900 font-semibold">
              <tr>
                <th className="p-2 border">Component</th>
                <th className="p-2 border">Operation</th>
                <th className="p-2 border">Data Structure</th>
                <th className="p-2 border">Time</th>
                <th className="p-2 border">Space</th>
                <th className="p-2 border">Notes</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white">
              <tr>
                <td className="p-2 border">Data Storage</td>
                <td className="p-2 border">put(path, value)</td>
                <td className="p-2 border">Trie</td>
                <td className="p-2 border">O(k)</td>
                <td className="p-2 border">O(k)</td>
                <td className="p-2 border">k = path length</td>
              </tr>
              <tr>
                <td className="p-2 border">Query</td>
                <td className="p-2 border">get(path)</td>
                <td className="p-2 border">Trie</td>
                <td className="p-2 border">O(k)</td>
                <td className="p-2 border">O(1)</td>
                <td className="p-2 border">Hierarchical lookup</td>
              </tr>
              <tr>
                <td className="p-2 border">Search</td>
                <td className="p-2 border">Range query</td>
                <td className="p-2 border">B-/LSM Tree</td>
                <td className="p-2 border">O(log n + m)</td>
                <td className="p-2 border">O(n)</td>
                <td className="p-2 border">m = result count</td>
              </tr>
              <tr>
                <td className="p-2 border">Sync Check</td>
                <td className="p-2 border">Subtree compare</td>
                <td className="p-2 border">Merkle Tree</td>
                <td className="p-2 border">O(log n)</td>
                <td className="p-2 border">O(n)</td>
                <td className="p-2 border">Integrity verify</td>
              </tr>
              <tr>
                <td className="p-2 border">Cache Check</td>
                <td className="p-2 border">isPresent(x)</td>
                <td className="p-2 border">HashMap</td>
                <td className="p-2 border">O(1)</td>
                <td className="p-2 border">O(n)</td>
                <td className="p-2 border">Fast access</td>
              </tr>
              <tr>
                <td className="p-2 border">Set Test</td>
                <td className="p-2 border">possiblyPresent(x)</td>
                <td className="p-2 border">Bloom Filter</td>
                <td className="p-2 border">O(k)</td>
                <td className="p-2 border">O(m)</td>
                <td className="p-2 border">k hashes, m bits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Inference */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">
          ✅ Inference
        </h2>
        <p className="text-gray-700 italic border-l-4 border-blue-400 pl-4">
          “To support low-latency, real-time sync across clients, Firebase
          leverages Tries for path traversal, LSM Trees for write-heavy
          workloads, and Merkle Trees for consistency checks. Combined with Hash
          Maps and Bloom Filters for fast caching, the system scales to millions
          of users while ensuring speed and correctness.”
        </p>
      </section>
    </div>
  );
}

export default GCP;
