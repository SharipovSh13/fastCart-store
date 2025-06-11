import { Link } from "react-router-dom";

export default function CompanyPhone(){
    return <h1 className="text-shadow-muted font-medium">
        <Link to={"tel:+88015-88888-9999"}>
        +88015-88888-9999
        </Link>
    </h1>
}