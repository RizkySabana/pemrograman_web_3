function Button(){

    const handleClick = () => {
        alert('Tombol ini di Klik');
    }

    return (
        <button onClick={handleClick}>Klik saya</button>
    )
}
export default Button