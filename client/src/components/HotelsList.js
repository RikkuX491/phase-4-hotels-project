import Hotel from "./Hotel"

function HotelsList({hotels}){
    return <div>
        {hotels.map(hotel => {
            return <Hotel key={hotel.id} hotel={hotel}/>
        })}
    </div>
}

export default HotelsList