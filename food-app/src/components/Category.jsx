import { useState } from "react";
import styles from "./category.module.css";
import { ChevronUp, ChevronDown } from "react-feather";

export default function Category({
  section,
  index,
  openCategoryIndex,
  setOpenCategoryIndex,
}) {
  const { title, itemCards, categories } = section?.card?.card;

  const hasSubCategories = categories && categories.length > 0;

  const [OpenSubIndex, setOpenSubIndex] = useState(null);

  const isOpen = openCategoryIndex === index;

  const handleCategoryClick = () => {
    setOpenCategoryIndex(isOpen ? null : index);
  };

  const toggleSub = (index) => {
    setOpenSubIndex(OpenSubIndex == index ? null : index);
  };

  const totalItems = hasSubCategories
    ? categories.reduce((sum, sub) => sum + (sub?.itemCards?.length || 0), 0)
    : itemCards?.length || 0;

  return (
    <div
      className={styles.itemContainer}
      style={{
        paddingBottom: "12px",
        borderBottom:
          hasSubCategories && !isOpen ? "15px solid #f2f2f3" : "none",
      }}
    >
      <h4
        className={styles.itemCategory}
        onClick={!hasSubCategories ? handleCategoryClick : undefined}
        style={{
          cursor: !hasSubCategories ? "pointer" : "auto",
          borderBottom:
            !hasSubCategories && !isOpen ? "15px solid #f2f2f3" : "none",
        }}
      >
        {hasSubCategories ? title : `${title} (${totalItems})`}
        {!hasSubCategories && (
          <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
        )}
      </h4>

      <div className={styles.items}>
        {/* Direct Items */}
        {!hasSubCategories &&
          isOpen &&
          itemCards?.map((item) => {
            return (
              <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
            );
          })}

        {hasSubCategories &&
          categories.map((subCat, subIndex) => (
            <div
              key={subIndex}
              className={styles.subCategory}
              className={`${styles.subCategory} ${OpenSubIndex === subIndex ? styles.open : ""}`}
            >
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
