// Libraries.

import { useEffect, useState } from "react";
import axios from "axios";

// Private.

const makeApiCall = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error("There was an error fetching the data: ", err);
        return [];
    }
};

// Public.

/**
 * @function useProjectData
 * @description Custom data hook to get project data from API.
 * @returns {Object} Kickstarter projects data.
 */
const useProjectData = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeApiCall(
                'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
            );
            setProjectData(response);
        }
        fetchData();
    }, []);

    return[projectData];
};

export default useProjectData;
