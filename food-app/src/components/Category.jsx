import { useState } from "react";
import styles from "./category.module.css";
import { ChevronUp, ChevronDown } from "react-feather";

export default function Category({ section, index }) {
  const { title, itemCards, categories } = section?.card?.card;

  const hasSubCategories = categories && categories.length > 0;
  const [OpenCategory, setOpenCategory] = useState(false);
  const [OpenSubIndex, setOpenSubIndex] = useState(null);

  const toggleSub = (index) => {
    setOpenSubIndex(OpenSubIndex == index ? null : index);
  };

  const totalItems = hasSubCategories
    ? categories.reduce((sum, sub) => sum + (sub?.itemCards?.length || 0), 0)
    : itemCards?.length || 0;

  return (
    <div className="itemContainer">
      <h4
        className="itemCategory"
        onClick={
          !hasSubCategories ? () => setOpenCategory(!OpenCategory) : undefined
        }
        style={{ cursor: !hasSubCategories ? "pointer" : "default" }}
      >
        {hasSubCategories ? title : `${title} (${totalItems})`}
      </h4>

      <div className={styles.items}>
        {/* Direct Items */}
        {!hasSubCategories &&
          OpenCategory &&
          itemCards?.map((item) => {
            return (
              <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
            );
          })}

        {hasSubCategories &&
          categories.map((subCat, subIndex) => (
            <div key={subIndex} className={styles.subCategory}>
              {/* SubCategory Title with its itemCount */}
              <h5
                className={styles.subCategoryTitle}
                onClick={() => toggleSub(subIndex)}
                style={{ cursor: "pointer" }}
              >
                {subCat?.title}({subCat?.itemCards?.length || 0})
                <span>
                  {OpenSubIndex === subIndex ? <ChevronUp /> : <ChevronDown />}
                </span>
              </h5>

              {OpenSubIndex == subIndex &&
                subCat?.itemCards?.map((item) => {
                  return (
                    <div
                      className={styles.subCategoryItems}
                      key={item?.card?.info?.id}
                    >
                      {item?.card?.info?.name}
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
}
