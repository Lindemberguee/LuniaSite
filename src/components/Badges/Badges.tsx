export default function BadgeLinks() {
  const badgeItemsRow1 = [
    "Leaderboard",
    "Dynamic Stats",
    "Agent Select Overlay",
    "Loading Screen Overlay",
    "Post Match Insights Overlay",
  ];

  const badgeItemsRow2 = [
    "Agent Statistics",
    "Weapon Statistics",
    "Map Statistics",
    "Lineup Guide",
    "Weapon Guide",
  ];

  return (
    <div className="bg-main-color p-12 space-y-6 flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center space-x-2 space-y-2">
        {badgeItemsRow1.map((item, index) => (
          <p
            key={index}
            className="border border-slate-500 p-3 rounded-full text-slate-300 hover:text-white hover:border-white transition duration-300 ease-in-out flex items-center"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2">
        {badgeItemsRow2.map((item, index) => (
          <p
            key={index}
            className="border border-slate-500 p-3 rounded-full text-slate-300 hover:text-white hover:border-white transition duration-300 ease-in-out flex items-center"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
