
import { useState } from "react";
import Card from "./Card";

const Filter = ({ tjeneste, search, empty }) => {

  /* Koden under fikk vi med mye hjelp fra Marius veiledning */

  const filtrertData = tjeneste?.filter((newData) => newData.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="filter">
      {filtrertData?.length > 0 ? filtrertData.map((item)=>{

    const { id, title, preAmble, slug, box, _id } = item;

    return <Card key={!id? _id : id} box={box} id={id} title={title} slug={slug} preAmble={preAmble}/>
    
      }) : <p data-testid="empty">Ingen tjenester</p>}
    </div>
  )

}

export default Filter;