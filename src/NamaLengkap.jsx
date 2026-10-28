import { useState } from "react"

function NamaLengkap ()
{
    const [namaDepan, setNamaDepan] = useState('')
    const [namaBelakang, setNamaBelakang] = useState('')
    const [alamat, setAlamat] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // untuk mencegah browser refresh

        setIsLoading(true)

        // hit api
        //simulasi api
        setTimeout (function () {
            setIsLoading(false)
            alert(`Halo, ${namaDepan} ${namaBelakang} tinggal di ${alamat}`)
        }, 3000)

        
        // alert('Halo, ' + namaDepan + ' ' + namaBelakang )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Masukkan Nama Depan ..."
                value={namaDepan} 
                onChange={(e) => setNamaDepan(e.target.value) }
            />
            <br />
            <input type="text"
                placeholder="Masukkan Nama Belakang ..."
                value={namaBelakang}
                onChange={(e) => setNamaBelakang(e.target.value) }
            />
            <br />
            <textarea 
                placeholder="Masukkan Alamat ..."
                value={alamat} 
                onChange={(e) => setAlamat(e.target.value)} 
            />
            {isLoading && <p>Loading ...</p>}
            <button type="submit" disabled={isLoading }>Submit</button>
        </form>
    )
}
export default NamaLengkap