function ServicesProvided() {
  const sections = [
    {
      title: "🔍 Search & Information Retrieval",
      items: [
        "Google Search",
        "Google News",
        "Google Scholar",
        "Google Trends",
      ],
    },
    {
      title: "📧 Communication & Productivity",
      items: [
        "Gmail",
        "Google Calendar",
        "Google Meet",
        "Google Chat",
        "Google Docs, Sheets, Slides, Forms",
        "Google Keep",
        "Google Tasks",
      ],
    },
    {
      title: "📱 Mobile & OS",
      items: [
        "Android OS",
        "Google Play Store",
        "Google Messages",
        "Google Phone/Dialer",
      ],
    },
    {
      title: "🌍 Navigation & Maps",
      items: ["Google Maps", "Google Earth", "Waze (owned by Google)"],
    },
    {
      title: "☁️ Cloud & Dev Tools",
      items: [
        "Google Cloud Platform (GCP)",
        "Firebase",
        "BigQuery",
        "Google App Engine",
        "Vertex AI",
        "TensorFlow (developed by Google Brain)",
      ],
    },
    {
      title: "📸 Media & Storage",
      items: [
        "Google Photos",
        "YouTube (subsidiary)",
        "Google Drive",
        "Google One (storage plans)",
      ],
    },
    {
      title: "🛍️ Commerce & Ads",
      items: ["Google Ads", "Google Shopping", "Google Pay", "Google Wallet"],
    },
    {
      title: "💡 AI & Innovation",
      items: [
        "Google Assistant",
        "Google Bard (now part of Gemini)",
        "Gemini AI",
        "Google Lens",
        "DeepMind (Subsidiary)",
      ],
    },
    {
      title: "🧠 Developer & Research Tools",
      items: [
        "Colab (Google Colaboratory)",
        "Google AI",
        "Kaggle (acquired)",
        "Google Domains",
        "Google Tag Manager",
        "Google Analytics",
      ],
    },
    {
      title: "🛡️ Security & Privacy",
      items: [
        "Google Safe Browsing",
        "Google Password Manager",
        "Google Account Security",
        "reCAPTCHA",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 text-center">
        Services Provided
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-blue-600 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesProvided;
