import { useEffect, useMemo } from "react";
import { useState } from "react";


export default function FilterableList () {

    const [searchInput, setSearchInput] = useState("");
    const [items, setItems] = useState([]);

    useEffect( () =>{
        const fetchData = async () =>{
            try {
                await new Promise(resolve => setTimeout(resolve, 2000))

                const data = [
                    {
                        name: "Sergio",
                        lastname: "Ramírez",
                        id: 1
                    },
                    {
                        name: "Ricardo",
                        lastname: "Ramírez",
                        id: 2
                    },
                    {
                        name: "Aurora",
                        lastname: "Escamilla",
                        id: 3
                    },
                    {
                        name: "Antonio",
                        lastname: "vivaldi",
                        id: 4
                    },
                ]

                setItems(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => console.log("Desmontando componente");
        
    }, [])

    const filteredItems = useMemo( () =>{
        return items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.lastname.toLowerCase().includes(searchInput.toLowerCase()))
    }, [items, searchInput])
    
    return (
        <div>
           <h1>Lista Filtrable de nombres</h1>
           <input 
                type="text"
                placeholder="Busca un nombre"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />

            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>
                        <p>{item.name} {item.lastname}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}