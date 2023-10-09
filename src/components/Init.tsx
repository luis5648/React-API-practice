import { useEffect, useState } from "react";
import { getInfo } from "../api/ghibli_api";
import React from "react";
export function DataPlaced() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [AllInfo, setInfo] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      const res = await getInfo();
      setInfo(res.data);
    }
    loadInfo();
  }, []);

  return (
    <div>
      {AllInfo.map(info =>(
      <ul key={info.id}>
          <li>{info.title} <p>{info.description}</p></li>
      </ul>
        ))}
    </div>
  );
}
