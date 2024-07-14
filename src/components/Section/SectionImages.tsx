import Image from 'next/image';

export default function SectionImages() {
  const images = [
    {
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56dcbedc-3d9e-4c15-801a-0f74b91af7c6/d4jrgno-94dbc5e9-fa3d-4d5d-8d25-2b6a1461cfdb.jpg/v1/fill/w_900,h_637,q_75,strp/eir_de_lunia_by_netsubou_d4jrgno-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM3IiwicGF0aCI6IlwvZlwvNTZkY2JlZGMtM2Q5ZS00YzE1LTgwMWEtMGY3NGI5MWFmN2M2XC9kNGpyZ25vLTk0ZGJjNWU5LWZhM2QtNGQ1ZC04ZDI1LTJiNmExNDYxY2ZkYi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.eHDJX6oJKh82vMIVQfqywes0N7xMJ4mhwWncpg2SnTE",
      title: "Update Eir",
      subtitle: "Skills"
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzOO_zkJJSu-y8eyi0zzTiDAk-_vaUrc_UnWbdSgPUtNOtHgIuEq2ur9GropjsLr8CrvBN0q7tnaZhq-qfVgP2iun9c2-lMcwn0jHbbDCEVBLRVZDTFR6Rk3bPm1xhsrMPUmrO5uGI2NPH/s1600/4219670597_703258c25f_b.jpg",
      title: "Dark Eir",
      subtitle: "Move Speed"
    },
    {
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4add0546-ec7c-4de8-9d96-7c01c58ead95/d2taz00-6988c84b-505b-4d22-a7ff-6f4afe27cf62.jpg/v1/fill/w_900,h_720,q_75,strp/lunia_wallpaper_dacy_by_chizmo3_d2taz00-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNGFkZDA1NDYtZWM3Yy00ZGU4LTlkOTYtN2MwMWM1OGVhZDk1XC9kMnRhejAwLTY5ODhjODRiLTUwNWItNGQyMi1hN2ZmLTZmNGFmZTI3Y2Y2Mi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ac5NfnozCfZrPOWr2xhw-fR_lqh9EZzgeWZ2tvkPIx8",
      title: "Dacy",
      subtitle: "Damage"
    }
  ];

  return (
    <div className="bg-main-color p-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-300">New Updates</h1>
        <p className="text-xl text-slate-600">
          <span className="text-slate-300">The Latest, </span>
          Take a look at what&apos;s new, right now.
        </p>
      </div>
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full md:w-1/3 h-96 overflow-hidden rounded-lg shadow-lg group mb-4 md:mb-0">
            <Image 
              src={image.src} 
              alt={`Imagem ${index + 1}`} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-2xl font-bold">{image.title}</h2>
              <p className="text-white text-lg">{image.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
