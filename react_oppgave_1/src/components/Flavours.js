//select list
const selectOptions = [
    {id: "1", value: "strawberry", text: 'Jordbær'},
    {id: "2", value: "banana", text: 'Banan'},
    {id: "3", value: "lime", text: 'Lime'},
    {id: "4", value: "blueberry", text: 'Blåbær'},
    {id: "5", value: "chocolate", text: 'Sjokolade'},
];

const Flavours = ({setFlavour, setCss}) => {
  const handleFlavourChange = (event) => {
    const { value } = event.target
    // TODO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select
    setFlavour(value)

    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`)
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`)
    document.documentElement.style.setProperty('--flavour', `${cssFlavour}`)
    document.documentElement.style.setProperty('--bg', `${cssBackground}`)
    setCss(value)
    // #### DO NOT CHANGE END
  }
  return (
    <div className="option" data-testid="flavours" id="flavours">
      <label htmlFor="flavour">
        <select defaultValue="chocolate" id="flavour" data-testid="flavour" onChange={handleFlavourChange}>
          {/* TODO: Lag statisk liste med verdiene under. Bruk .map og key. Alle verdiene i option må være med */}
          {selectOptions.map((option)=>{
              const {id, value, text} = option;
              return <option key={id} data-testid="option" value={value}>{text}</option>
          })}
        </select>
      </label>
    </div>
  )
}

export default Flavours
