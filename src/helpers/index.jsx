import {useEffect} from 'react'


export function useFetch(params, onSuccess, dependencyArray = []) {
    
    const {url, config = {}, fetchWhen = () => true} = params
    function fetchData() {
        fetch(url, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                onSuccess(data)
            })
            .catch((error) => {
                console.log('ada error in fetch');
            })
    }

    useEffect(() => {
        if (!fetchWhen()) {
            return
        }
        fetchData()
    },dependencyArray)
}

export function addTodo(params) {
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
}

export function deletingData(params, onSuccess) {
    const {url, id} = params
    fetch(url, {
        method: "DELETE"
    })
    .then((response) => {
        return response.json()
    })
    .then(() => {
        onSuccess(id)
    })
}

export function editData(params) {
    const {url, payload} = params
    return fetch(url, {
        method: "PUT",
        body: JSON.stringify({payload}),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
        .then((response) => {
            return response.json()
        })
}

