import { useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from "../constants/baseUrl";

const useApi = ({ cache = false, runOnMount = false, path = '' }) => {
    const [apiState, setApiState] = useState({ loading: false, data: [], error: null })

    const fetchData = async (path, cancelToken = {}) => {
        setApiState({ ...apiState, loading: true })
        try {
            const response = await axios.get(`${BASE_URL}${path}`, {
                cancelToken: cancelToken.token
            })
            setApiState({ ...apiState, loading: false, data: response.data })
        }
        catch (error) {
            if(!axios.isCancel(error))
            setApiState({ ...apiState, loading: false, error })
        }
    }

    useEffect(() => {
        let cancelToken = axios.CancelToken.source()
        if(runOnMount) fetchData(path, cancelToken)
        return () => {
            cancelToken.cancel()
        }
    }, [])

    return [fetchData, apiState]

}

export default useApi