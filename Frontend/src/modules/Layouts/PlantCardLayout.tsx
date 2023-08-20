import React from "react";
import df from "../../assets/Planets/PlanetAqualis.svg"
// PlanetAquaterra.svg, PlanetCrystora.svg, PlanetEarth.svg, PlanetEchelon.svg,
// PlanetGaiaEarth.svg, PlanetLuminage.svg, PlanetPolaris IX.svg, PlanetTitanis.svg,
// PlanetVertiza.svg, PlanetVolantis.svg

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
                  src={df}
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
                    src={item.img_url}
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
