import '../styles/IdentificationCard.css';

function IdentificationCard() {
    return(
        <div className={"idcard-container"}>

            <div >
                <img className={"idcard-img"}
                     alt='stock image'
                     src='https://media.istockphoto.com/photos/passport-picture-of-a-guy-in-a-checked-shirt-picture-id470701814?k=6&m=470701814&s=170667a&w=0&h=Jb3PehxGwA4pvk5nEAGWpchSANUoXhEbQbPFLeO4ejw='
                />
            </div>

            <div className={"idcard-text"}>
                <li>Name: John Smith</li>
                <li>Address: 123 Main St.</li>
                <li>City: San Jose</li>
                <li>State: California</li>
                <li>ID No: 0123456789</li>
            </div>
        </div>
    );
}

export default IdentificationCard;