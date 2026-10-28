function LoggedIn ({isLoggedIn, isAdmin}) {


    return (
        <>
        {isLoggedIn ? (
            isAdmin ? <p>Kamu adalah admin</p> : <p>Kamu adalah User</p>
        ) : <p>User Belum Login</p>}
        </>
    )
}

export default LoggedIn