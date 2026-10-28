
import LoggedIn from "./LoggedIn.jsx";
import UserProfile from "./UserProfile.jsx";
import Counter from "./Counter.jsx";

function Halaman() {
    const nama = "Budi";
    const isLoggedIn = true;
    const isAdmin = true;

    const karyawan = {
        nama: "Budi",
        jabatan: "Manager",
        divisi: "IT"
    };

    return (
        <>
            <p style={{ marginTop: "100px" }}>
                Hello {nama}
            </p>

            <p>Total: {10 + 5}</p>

            <LoggedIn
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
            />

            <hr />

            <UserProfile
                nama={karyawan.nama}
                jabatan={karyawan.jabatan}
                divisi={karyawan.divisi}
            />

            <hr />

            <Counter />
        </>
    );
}

export default Halaman;
