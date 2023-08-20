import React from "react";
// PlanetAqualis.svg, PlanetAquaterra.svg, PlanetCrystora.svg, PlanetEarth.svg, PlanetEchelon.svg,
// PlanetGaiaEarth.svg, PlanetLuminage.svg, PlanetPolaris IX.svg, PlanetTitanis.svg,
// PlanetVertiza.svg, PlanetVolantis.svg
import PlanetAqualis from "../../assets/Planets/PlanetAqualis.svg"
import PlanetAquaterra from "../../assets/Planets/PlanetAquaterra.svg"
import PlanetCrystora from "../../assets/Planets/PlanetCrystora.svg"
import PlanetEarth from "../../assets/Planets/PlanetEarth.svg"
import PlanetEchelon from "../../assets/Planets/PlanetEchelon.svg"
import PlanetGaiaEarth from "../../assets/Planets/PlanetGaiaEarth.svg"
import PlanetLuminage from "../../assets/Planets/PlanetLuminage.svg"
import PlanetPolaris from "../../assets/Planets/PlanetPolaris IX.svg"
import PlanetTitanis from "../../assets/Planets/PlanetTitanis.svg"
import PlanetVertiza from "../../assets/Planets/PlanetVertiza.svg"
import PlanetVolantis from "../../assets/Planets/PlanetVolantis.svg"


interface DataItem {
  id: number;
  title: string;
  text: string;
  img_url: string;
  color: string;
}

interface Props {
  dataList: DataItem[];
}

const MyComponent: React.FC<Props> = ({ dataList }) => {
  // Create an object that maps item.img_url values to image URLs
  const planetImages: Record<string, string> = {
    PlanetAqualis,
    PlanetAquaterra,
    PlanetCrystora,
    PlanetEarth,
    PlanetEchelon,
    PlanetGaiaEarth,
    PlanetLuminage,
    'PlanetPolaris IX': PlanetPolaris,
    PlanetTitanis,
    PlanetVertiza,
    PlanetVolantis,
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold">Column 1</h2>
        <ul>
          {dataList.slice(0, Math.ceil(dataList.length / 2)).map((item) => (
            <li key={item.id}>
              <div className={`bg-${item.color}-200 p-4 rounded-lg mb-4`}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.text}</p>
                <img
                  src={planetImages[item.img_url]}
                  alt={item.title}
                  className="mt-2 w-16 h-16"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold">Column 2</h2>
        <ul>
          {dataList
            .slice(Math.ceil(dataList.length / 2), dataList.length)
            .map((item) => (
              <li key={item.id}>
                <div className={`bg-${item.color}-200 p-4 rounded-lg mb-4`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.text}</p>
                  <img
                    src={planetImages[item.img_url]}
                    alt={item.title}
                    className="mt-2 w-16 h-16"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
