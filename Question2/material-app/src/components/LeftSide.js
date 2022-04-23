import React from "react";
import Categories from "../components/Categories";

export default function LeftSide({
  items,
  setSelectedItem,
  setItemArray,
  setFlagEdit,
  setFlagDescribtion,
  edit,
  showNavigateBtn,
}) {
  const handleOnItemSelected = (i) => {
    setSelectedItem(i);
    setFlagDescribtion(true);
  };
  function handleDelete(index) {
    setItemArray(items.filter((item) => item.id !== index.id));
    setFlagDescribtion(false);
    setFlagEdit(false);
  }
  function handleEdit() {
    edit();
  }
  return (
    <>
      {showNavigateBtn == "WebDesign" ? (
        <Categories
          title="WebDesign"
          items={items.filter((i) => i.category === "WebDesign")}
          onItemSelect={handleOnItemSelected}
          onEditItem={handleEdit}
          onDeleteItem={handleDelete}
        />
      ) : null}
      {showNavigateBtn == "FrontEnd" ? (
        <Categories
          title="FrontEnd"
          items={items.filter((i) => i.category === "FrontEnd")}
          onItemSelect={handleOnItemSelected}
          onEditItem={handleEdit}
          onDeleteItem={handleDelete}
        />
      ) : null}
      {showNavigateBtn == "BackEnd" ? (
        <Categories
          title="BackEnd"
          items={items.filter((i) => i.category === "BackEnd")}
          onItemSelect={handleOnItemSelected}
          onEditItem={handleEdit}
          onDeleteItem={handleDelete}
        />
      ) : null}
      {showNavigateBtn == "all" ? (
        <>
          <Categories
            title="WebDesign"
            items={items.filter((i) => i.category === "WebDesign")}
            onItemSelect={handleOnItemSelected}
            onEditItem={handleEdit}
            onDeleteItem={handleDelete}
          />
          <Categories
            title="FrontEnd"
            items={items.filter((i) => i.category === "FrontEnd")}
            onItemSelect={handleOnItemSelected}
            onEditItem={handleEdit}
            onDeleteItem={handleDelete}
          />
          <Categories
            title="BackEnd"
            items={items.filter((i) => i.category === "BackEnd")}
            onItemSelect={handleOnItemSelected}
            onEditItem={handleEdit}
            onDeleteItem={handleDelete}
          />
        </>
      ) : null}
    </>
  );
}
