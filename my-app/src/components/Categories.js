import React, { useEffect } from "react";
import { fetchData } from "../actions/categoryActions";
import { useSelector, useDispatch } from "react-redux";

function Categories(props) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // create categories through swagger
  return (
    <div className="Categories">
      <section>
        <div className="title">Blog categories</div>
        <ul>
          {category.map((el, ind, arr) => (
            <li key={el.id}>
              <a href={el.name} value={el.name}>
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Categories;
