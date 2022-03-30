import './CategoriesList.scss'
import { useNavigate } from "react-router-dom";
export default function CategoriesList({ categories }) {

    const navigate = useNavigate();

    const handleCategoryChange = category => {
        navigate(`./${category}`)
    }

    return (
        <div className="categories">
            {categories && categories.map(cat => (
                <div className="category" onClick={() => handleCategoryChange(cat)}>
                    <img src="https://picsum.photos/150" alt="category"/>
                    <span>{cat}</span>
                </div>
            ))}
        </div>
    )
}