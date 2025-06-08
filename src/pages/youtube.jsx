function YouTube() {
  return (
    <div className="p-6 md:p-10  shadow-lg space-y-10 mx-6 ">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-700">
        🎥 YouTube – Data Structures and Algorithms in Depth
      </h2>

      {/* Section 1 - Graphs */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-400 shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          📌 1. Graphs → Used in Recommendation Systems
        </h3>
        <p className="text-gray-800 mb-4">
          Graphs represent <strong>relationships</strong> between users and
          videos.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>User–Video Graph: likes, comments, subscriptions</li>
          <li>Video–Video Graph: co-watch patterns</li>
        </ul>
        <p className="text-gray-800 font-medium mb-2">
          📦 Data Structure:{" "}
          <span className="font-semibold text-blue-600">Adjacency List</span>
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Nodes = Users/Videos</li>
          <li>Edges are weighted (frequency, similarity score)</li>
        </ul>
        <p className="text-gray-800 font-medium mb-2">🧮 Algorithms:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Personalized PageRank</li>
          <li>Random Walks with restart</li>
          <li>Bipartite Graph Traversal</li>
        </ul>
        {/* Image Placeholder */}
        <div className="mt-4 mb-2  pb-2 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
          <img
            src="http://www.computersciencebytes.com/wp-content/uploads/2017/06/adjacency_list.png"
            alt="Merkel-tree Diagram"
            className="h-full object-container"
          />
        </div>
        <p className="text-blue-700 italic">
          💥 Graph-based models power personalized recommendations on YouTube
          using PageRank and Random Walks.
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Code:{" "}
          <a
            href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/graph.py"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Graphs implementation
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Source:{" "}
          <a
            href="http://www.computersciencebytes.com/array-variables/graphs/representing-graphs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Representing Graphs
          </a>
        </p>
      </div>

      {/* Section 2 - Heaps */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-400 shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          📌 2. Heaps / Priority Queues → For Trending Videos & Leaderboards
        </h3>
        <p className="text-gray-800 mb-4">
          Used to show trending content based on recent engagement.
        </p>
        <p className="text-gray-800 font-medium mb-2">
          📦 Data Structure:{" "}
          <span className="font-semibold text-blue-600">
            Max-Heap / Min-Heap
          </span>
        </p>
        <p className="text-gray-800 mb-4">
          Scores are based on likes, views, shares, comments (time-decayed).
        </p>
        <p className="text-gray-800 font-medium mb-2">🧮 Algorithms:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Heapify</li>
          <li>Sliding Window with Heaps</li>
        </ul>
        {/* Image Placeholder */}
        <div className="mt-4 mb-2  py-2 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*piq5Ggxwz2Ldi26uQz_d5g.png"
            alt="Binaryheap  Diagram"
            className="h-full object-container"
          />
        </div>
        <p className="text-blue-700 italic">
          💥 Heaps maintain top trending videos efficiently in real-time.
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Code:{" "}
          <a
            href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/min_heap"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Heap
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Source:{" "}
          <a
            href="https://medium.com/@mopurisreenath/what-is-binary-heap-25cd0f8bed24"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            What is Binary Heap? - Sreenath
          </a>
        </p>
      </div>

      {/* Section 3 - Tries */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-400 shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          📌 3. Tries → For Search and Suggestions
        </h3>
        <p className="text-gray-800 mb-4">
          Power YouTube’s search autocomplete feature.
        </p>
        <p className="text-gray-800 font-medium mb-2">
          📦 Data Structure:{" "}
          <span className="font-semibold text-blue-600">
            Trie (Prefix Tree)
          </span>
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Each node = character</li>
          <li>DFS from prefix to suggest completions</li>
        </ul>
        {/* Image Placeholder */}
        <div className="mt-4 h-90 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
          {/* Image: Trie Structure  https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aJxRGNYe52CE_bVRt0E1Eg.gif */}
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aJxRGNYe52CE_bVRt0E1Eg.gif"
            alt="Trie Diagram"
            className="h-full object-contain"
          />
        </div>
        <p className="text-blue-700 italic">
          💥 Tries allow fast, ranked prefix-based search suggestions.
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Code:{" "}
          <a
            href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/trie.cpp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Trie
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Source:{" "}
          <a
            href="https://www.geeksforgeeks.org/trie-insert-and-search/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Trie Data Structure
          </a>
        </p>
      </div>

      {/* Section 4 - Hash Maps */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-400 shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          📌 4. Hash Maps → For Metadata Management
        </h3>
        <p className="text-gray-800 mb-4">
          Used for fast metadata and user state lookup.
        </p>
        <p className="text-gray-800 font-medium mb-2">
          📦 Data Structure:{" "}
          <span className="font-semibold text-blue-600">
            HashMap / Dictionary
          </span>
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>VideoID → Metadata</li>
          <li>UserID → Preferences</li>
        </ul>
        {/* Image Placeholder */}
        <div className="mt-4 h-90 py-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
          {/* Image: Trie Structure  https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aJxRGNYe52CE_bVRt0E1Eg.gif */}
          <img
            src="https://www.researchgate.net/publication/355070749/figure/fig1/AS:1076403399327748@1633645977759/llustration-of-a-classical-hash-map-using-separate-chaining-Keys-left-are-put-into_W640.jpg"
            alt="Hashmap Diagram"
            className="h-full object-contain"
          />
        </div>
        <p className="text-blue-700 italic">
          💥 Used for O(1) caching and personalization of content.
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Code:{" "}
          <a
            href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/hash_map.py"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Trie
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Source:{" "}
          <a
            href="https://www.researchgate.net/publication/355070749_ASH_A_Modern_Framework_for_Parallel_Spatial_Hashing_in_3D_Perception"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            ASH: A Modern Framework for Parallel Spatial Hashing in 3D
            Perception
          </a>
        </p>
      </div>

      {/* Section 5 - Time-Series */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-400 shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          📌 5. Segment Tree Data Structures → For Engagement Tracking
        </h3>
        <p className="text-gray-800 mb-4">
          Analyze engagement logs over time for ranking and ads.
          <p>
            A Segment Tree is a data structure that stores information about
            array intervals as a tree. This allows answering range queries over
            an array efficiently, while still being flexible enough to allow
            quick modification of the array. This includes finding the sum of
            consecutive array elements a[l .... r], or finding the minimum
            element in a such a range in O(log n) time. Between answering such
            queries, the Segment Tree allows modifying the array by replacing
            one element, or even changing the elements of a whole subsegment
          </p>
        </p>
        <p className="text-gray-800 font-medium mb-2">
          📦 Data Structure:{" "}
          <span className="font-semibold text-blue-600">
            Time-Series DB (Segment Trees, Logs)
          </span>
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Append-only logs</li>
          <li>Segment trees for aggregation</li>
        </ul>
        {/* Image Placeholder */}
        <div className="mt-4 h-90 py-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 italic">
          {/* Image: Trie Structure  https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aJxRGNYe52CE_bVRt0E1Eg.gif */}
          <img
            src="https://cp-algorithms.com/data_structures/sum-segment-tree.png"
            alt="Segment tree Diagram"
            className="h-full object-contain"
          />
        </div>
        <p className="text-blue-700 italic">
          💥 Enables tracking user trends and video impact over time.
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Code:{" "}
          <a
            href="https://github.com/AnshRiteshSavadatti/-DSA-with-cpp/blob/master/APS/segment_tree.py"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Segment Tree
          </a>
        </p>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Source:{" "}
          <a
            href="https://cp-algorithms.com/data_structures/segment_tree.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Segment Trees - CP Algorithms
          </a>
        </p>
      </div>

      {/* Time and Space Complexity Table */}
      <div className="bg-white p-6 rounded-xl border-t-4 border-blue-400 shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          📊 Time & Space Complexity Summary
        </h3>
        <div className="overflow-auto">
          <table className="w-full table-auto text-left border border-gray-300">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="px-4 py-2">Operation</th>
                <th className="px-4 py-2">Data Structure</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Space</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-4 py-2">Add Edge</td>
                <td className="px-4 py-2">Graph</td>
                <td className="px-4 py-2">O(1)</td>
                <td className="px-4 py-2">O(n + m)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Recommendation</td>
                <td className="px-4 py-2">Graph</td>
                <td className="px-4 py-2">O(k log n)</td>
                <td className="px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Top-K Trending</td>
                <td className="px-4 py-2">Heap</td>
                <td className="px-4 py-2">O(K log N)</td>
                <td className="px-4 py-2">O(N)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Search Suggestion</td>
                <td className="px-4 py-2">Trie</td>
                <td className="px-4 py-2">O(k + K)</td>
                <td className="px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Metadata Lookup</td>
                <td className="px-4 py-2">HashMap</td>
                <td className="px-4 py-2">O(1)</td>
                <td className="px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Engagement Query</td>
                <td className="px-4 py-2">Segment Tree</td>
                <td className="px-4 py-2">O(log n)</td>
                <td className="px-4 py-2">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default YouTube;
