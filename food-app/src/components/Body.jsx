import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import SearchBar from "./SearchBar";
import ItemFilter from "./ItemFilter";
import { useState } from "react";

export default function Body() {
  const processedList = resList.map((res) => ({
    ...res,
    price: parseInt(res.info.costForTwo.replace(/\D/g, "")),
  }));

  const [list, setList] = useState(processedList);

  return (
    <div className={styles.body}>
      <SearchBar />

      <ItemFilter list={list} setList={setList} processedList={processedList} />

      <div className={styles.resContainer}>
        {list.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
}
