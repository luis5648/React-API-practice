import { useEffect, useState } from "react";
import { getInfo } from "../api/ghibli_api";

export function DataPlaced() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function loadInfo() {
      const res = await getInfo();
      <div>res</div>;
      console.log(res);
    }
    loadInfo();
  }, []);

  return (
    <div>
      <ul>
        <li>i</li>
        <li>i</li>
        <li>i</li>
      </ul>
    </div>
  );
}
