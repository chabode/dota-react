export function setHeroes() {
    return (dispatch) => {
        fetch('https://api.opendota.com/api/heroStats')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({
                type:"SET_HEROES",
                payload: data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}