import Card from '../components/Card'

function Profile() {

    return (
        <>
            <div className="profile">
                <Card name="Settings" />
                <h1>Analytics</h1>
                <Card name="Wishlist" />
            </div>
        </>
    )
}

export default Profile
