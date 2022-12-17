import { useEffect, useState } from "react";
import { CategorieType } from "../../../shared/models/categories.model";
import { getCategories } from "../../../shared/services/categoriesServices";
import Button from "../../../ui/Button";
import Container from "../../../ui/Container";

type CategoriesProps = {
  onClick: (category: string) => void;
};

const Categories: React.FC<CategoriesProps> = (props) => {
  const { onClick } = props;

  const [categories, setCategories] = useState<Array<CategorieType>>([]);

  useEffect(() => {
    const data = getCategories();
    data.then((data) => {
      setCategories(data.data.categories);
    });
  }, []);

  return (
    <Container
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      padding="0 24px"
      gap="10px"
      overFlowX="auto"
    >
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <Button
              width="150px"
              title={category.strCategory}
              onClick={() => onClick(category.strCategory)}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default Categories;
