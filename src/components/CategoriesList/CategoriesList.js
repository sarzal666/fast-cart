import './CategoriesList.scss'

export default function CategoriesList({ categories }) {



    return (
        <div className="categories">
            {categories && categories.map(cat => (
                <div className="category" onClick={() => console.log(`clicked ${cat}`)}>
                    <img src="https://picsum.photos/150" alt="category"/>
                    <span>{cat}</span>
                </div>
            ))}
        </div>
    )
}