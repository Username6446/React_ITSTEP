const citiesData = [
    {
        id: 1,
        country: "Україна",
        name: "Львів",
        description: "Місто з багатою історією, архітектурою та кавовими традиціями.",
        coatOfArms: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Coat_of_arms_of_Lviv.svg/960px-Coat_of_arms_of_Lviv.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        population: 717273,
        area: 192
    },
    {
        id: 2,
        country: "Італія",
        name: "Рим",
        description: "Вічне місто, столиця Італії з тисячолітньою історією.",
        coatOfArms: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8TDFdI__Q4w1-vSNRGhhprPaAKdem9W-HZOOZJQ_bA&s",
        population: 2873000,
        area: 1285
    }
];

function CityCard({ city }) {
    const defaultShield = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCg5Gg-Qw2UndWTFZgyaFaVRNz1szuGZIOwAvGuuzmA&s=10";

    return (
        <div style={{ border: "1px solid #ddd", padding: "15px", width: "300px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            
            <img 
                src={city.coatOfArms ? city.coatOfArms : defaultShield} 
                alt={`Герб міста ${city.name}`}
                style={{ width: "80px", height: "100px", objectFit: "contain", marginBottom: "15px" }}
            />
            
            <h2 style={{ margin: "0 0 5px 0" }}>{city.name}</h2>
            <h4 style={{ margin: "0 0 15px 0", color: "gray" }}>{city.country}</h4>
            
            <p style={{ fontSize: "0.9em", flexGrow: 1 }}>{city.description}</p>
            
            <div style={{ width: "100%", borderTop: "1px solid #eee", paddingTop: "10px", marginTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "0.85em" }}>
                <span><strong>Населення:</strong> {city.population.toLocaleString()}</span>
                <span><strong>Площа:</strong> {city.area} км²</span>
            </div>
        </div>
    );
}

export default function CitiesList() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Міста світу</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {citiesData.map((city) => (
                    <CityCard key={city.id} city={city} />
                ))}
            </div>
        </div>
    );
}