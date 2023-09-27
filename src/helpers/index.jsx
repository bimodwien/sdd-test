import {useState, useEffect} from 'react'


export function useFetch(params) {
    
    const {url, config = {}, defaultData, dependencyArray = []} = params
    const [result, setResult] = useState(defaultData)

    function fetchData() {
        fetch(url, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setResult(data)
            })
            .catch((error) => {
                console.log('ada error in fetch');
            })
    }

    useEffect(() => {
        fetchData()
    },[url, ...dependencyArray])

    return result;
}

export function addData(params) {
    const {url, payload} = params
    fetch(url, {
        method: "POST",
        body: JSON.stringify({payload}),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // const dataLama = result
            // const dataBaru = dataLama.concat(data)
            // return dataBaru;
            
        })
        .catch((error) => {
            console.log('Ada error saat adding data');
        })
}
