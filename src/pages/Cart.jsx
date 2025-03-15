import Card from "../components/Card"

import { SessionAuth } from "supertokens-auth-react/recipe/session"

function Cart() {

    return (
        <SessionAuth>
            <div className="cart">
                <Card name="CartComponent" />
            </div>
        </SessionAuth>
    )
}

export default Cart
