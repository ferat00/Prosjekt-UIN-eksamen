const IceCream = ({css}) => {
    return ( 
        <div className="ice-cream" data-testid="ice-cream">
          <div className="stick" />
          <div className="vanilla" />
          <div
            data-testid="ice-cream-flavour"
            className="flavour"
            data-css={css}
          />
        </div>
     );
}
 
export default IceCream;
