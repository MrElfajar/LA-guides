import { VscTriangleUp } from "react-icons/vsc";
import Image from "next/image";
import { useEffect, useState } from "react";

const effectRibbon = [
  "text-black",
  "text-blue-400",
  "text-indigo-400",
  "text-yellow-500",
];

const Item = ({ ...props }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 50 * props.index);
    return () => clearTimeout(timer);
  }, []);

  const camelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const handleFood = (payload) => {
    if (!props.viewInfos) {
      if (props.viewInfo === payload) {
        props.setViewInfo(null);
      } else {
        props.setViewInfo(payload);
      }
    }
  };

  const handleEffect = (text) => {
    const effSplit = text.split(",");
    if (effSplit.length > 1) {
      const num = Number(effSplit[0]);
      return (
        <>
          <div
            className={`w-5 h-5 ${effectRibbon[num]} flex justify-center items-center`}
          >
            <VscTriangleUp />
          </div>
          {effSplit[1]}
        </>
      );
    }
    return text;
  };

  return (
    <div
      data-name={props.name}
      onClick={() => handleFood(props.index)}
      className={`${
        props.search &&
        ![
          props.name.toLowerCase().indexOf(props.search) !== -1,
          ...props.ingredients.filter(
            (igd) => igd.toLowerCase().indexOf(props.search) !== -1 && true
          ),
          ...props.effects.filter(
            (eff) => eff.toLowerCase().indexOf(props.search) !== -1 && true
          ),
        ].filter((el) => el && true).length > 0 &&
        "hidden"
      } ${props.viewInfos && "flex"} ${
        props.viewInfo === props.index && "flex col-span-4 food-active"
      } bg-gray-200 self-start shadow-sm relative`}
    >
      {!loading && (
        <>
          <div
            className={`${!props.viewImages && "hidden"} ${
              props.viewInfos && "w-20"
            } ${props.viewInfo === props.index && "w-20"} bg-gray-300 relative`}
          >
            <Image
              src={"/img/" + camelCase(props.name) + ".jpg"}
              alt={props.name}
              width="30"
              height="30"
              layout="responsive"
              onLoadingComplete={() => console.log(props.name)}
            />
          </div>
          <div className={`flex flex-col w-full`}>
            <div
              className={`${!props.viewNames && "hidden"} ${
                !props.viewInfos &&
                props.viewImages &&
                props.viewInfo !== props.index &&
                "absolute bottom-0"
              } whitespace-nowrap break-normal overflow-y-auto self-stretch text-black text-center w-full font-bold`}
            >
              <div className="bg-black text-white bg-opacity-40 w-full">
                {props.name}
              </div>
            </div>
            <div
              className={`${
                !props.viewInfos &&
                (props.viewInfo !== props.index ? "hidden" : "")
              } grid my-grid-cols-2`}
            >
              <div>
                <div className="text-center bg-gray-300 border-r border-black">
                  Ingredients
                </div>
                {props.ingredients?.map((ing, index) => (
                  <div
                    key={index}
                    className="pl-1 text-sm border-r border-black"
                  >
                    {ing}
                  </div>
                ))}
              </div>
              <div>
                <div className={`text-center bg-gray-300`}>Effects</div>
                {props.effects.map((eff, idx) => (
                  <div key={idx} className="text-sm flex pl-1">
                    {handleEffect(eff)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
